import { readFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { parse as parseYaml } from "yaml";

export const PRIMARY_TYPES = new Set([
  "government",
  "court",
  "filing",
  "dataset",
  "official_release",
  "gazette",
  "transcript",
  "contract",
  "archive",
]);

export const BANNED_SOURCE_TYPES = new Set([
  "news",
  "blog",
  "social",
  "wikipedia",
  "encyclopedia",
  "model",
]);

export const FINDING_TYPES = new Set(["discrepancy", "record_gap"]);
export const PHASE_2_START = "2026-11-10";
export const MIN_CADENCE_DAYS = 6;

const REQUIRED_FIELDS = [
  "title",
  "slug",
  "date",
  "dek",
  "finding",
  "status",
  "language",
  "investigation_id",
  "claims",
  "sources",
  "disclosure",
];

export function extractBodyClaimRefs(body) {
  const refs = new Set();
  for (const match of String(body || "").matchAll(/\(([^)]*\bC\d+\b[^)]*)\)/g)) {
    for (const id of match[1].match(/\bC\d+\b/g) || []) {
      refs.add(id);
    }
  }
  return refs;
}

export function parseArticle(raw, filePath = "article.md") {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { ok: false, errors: [`${filePath}: missing YAML frontmatter`], data: null, body: "" };
  }
  let data;
  try {
    data = parseYaml(match[1]);
  } catch (err) {
    return { ok: false, errors: [`${filePath}: YAML parse error: ${err.message}`], data: null, body: "" };
  }
  return { ok: true, errors: [], data: data ?? {}, body: match[2] };
}

export function validateArticle(data, body, filePath = "article.md") {
  const errors = [];
  if (!data || typeof data !== "object") {
    return [`${filePath}: frontmatter is not an object`];
  }

  for (const field of REQUIRED_FIELDS) {
    if (data[field] === undefined || data[field] === null || data[field] === "") {
      errors.push(`${filePath}: missing ${field}`);
    }
  }

  if (data.language && data.language !== "en") {
    errors.push(`${filePath}: language must be en`);
  }

  if (data.status && !["draft", "published"].includes(data.status)) {
    errors.push(`${filePath}: status must be draft or published`);
  }

  if (data.disclosure !== true) {
    errors.push(`${filePath}: disclosure must be true`);
  }

  const dateStr = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? "");
  const isPhase2 = /^\d{4}-\d{2}-\d{2}$/.test(dateStr) && dateStr >= PHASE_2_START;

  if (data.finding_type !== undefined && data.finding_type !== null && data.finding_type !== "") {
    if (!FINDING_TYPES.has(String(data.finding_type))) {
      errors.push(`${filePath}: finding_type must be 'discrepancy' or 'record_gap'`);
    }
  } else if (isPhase2) {
    errors.push(`${filePath}: missing finding_type ('discrepancy' or 'record_gap') required from ${PHASE_2_START}`);
  }

  if (data.series_part !== undefined && data.series_part !== null) {
    const part = Number(data.series_part);
    if (!Number.isInteger(part) || part < 1) {
      errors.push(`${filePath}: series_part must be a positive integer`);
    }
    if (!data.series || String(data.series).trim() === "") {
      errors.push(`${filePath}: series_part requires a series name`);
    }
  }

  if (typeof data.finding === "string" && data.finding.trim().split(/\s+/).length < 8) {
    errors.push(`${filePath}: finding is too thin — say what is new, in one specific sentence`);
  }

  const claims = Array.isArray(data.claims) ? data.claims : [];
  const sources = Array.isArray(data.sources) ? data.sources : [];
  const sourceById = new Map(sources.map((s) => [s.id, s]));
  const claimIds = new Set(claims.map((c) => c?.id).filter(Boolean));

  if (claims.length < 1) {
    errors.push(`${filePath}: at least one claim is required`);
  }

  if (sources.length < 1) {
    errors.push(`${filePath}: at least one source is required`);
  }

  for (const source of sources) {
    if (!source?.id) errors.push(`${filePath}: source missing id`);
    if (!source?.url || !/^https?:\/\//i.test(source.url)) {
      errors.push(`${filePath}: source ${source?.id ?? "?"} needs an http(s) url`);
    }
    if (!source?.type) {
      errors.push(`${filePath}: source ${source?.id ?? "?"} missing type`);
    } else if (BANNED_SOURCE_TYPES.has(source.type)) {
      errors.push(`${filePath}: source ${source.id} type '${source.type}' cannot prove a claim`);
    } else if (!PRIMARY_TYPES.has(source.type)) {
      errors.push(`${filePath}: source ${source.id} unknown type '${source.type}'`);
    }
    if (!source?.locator) {
      errors.push(`${filePath}: source ${source.id} missing locator`);
    }
    if (!source?.retrieved) {
      errors.push(`${filePath}: source ${source.id} missing retrieved date`);
    }
  }

  for (const claim of claims) {
    if (!claim?.id) errors.push(`${filePath}: claim missing id`);
    if (!claim?.text || String(claim.text).trim().length < 12) {
      errors.push(`${filePath}: claim ${claim?.id ?? "?"} text is too short`);
    }
    const ids = claim?.source_ids ?? [];
    if (!Array.isArray(ids) || ids.length < 1) {
      errors.push(`${filePath}: claim ${claim?.id ?? "?"} needs source_ids`);
      continue;
    }
    for (const id of ids) {
      const source = sourceById.get(id);
      if (!source) {
        errors.push(`${filePath}: claim ${claim.id} points to missing source ${id}`);
        continue;
      }
      if (!PRIMARY_TYPES.has(source.type)) {
        errors.push(`${filePath}: claim ${claim.id} is not backed by a primary source`);
      }
    }
    if (claim.accusatory && ids.length < 2) {
      errors.push(`${filePath}: accusatory claim ${claim.id} needs two independent primary sources`);
    }
  }

  const bodyRefs = extractBodyClaimRefs(body);
  for (const ref of bodyRefs) {
    if (!claimIds.has(ref)) {
      errors.push(`${filePath}: body cites unknown claim (${ref})`);
    }
  }
  if (isPhase2) {
    for (const id of claimIds) {
      if (!bodyRefs.has(id)) {
        errors.push(`${filePath}: claim ${id} is declared in frontmatter but never cited in body`);
      }
    }
  }

  const lower = `${data.title ?? ""}\n${body}`.toLowerCase();
  if (/\baccording to (?:a |the )?(?:report|article|story) in\b/.test(lower)) {
    errors.push(`${filePath}: news attribution in the lede — use the underlying document`);
  }

  if (data.byline && /staff writer|correspondent|editor/i.test(String(data.byline))) {
    errors.push(`${filePath}: fake human byline`);
  }

  if (!/autonomous ai reporter/i.test(body) && !/autonomous ai reporter/i.test(String(data.dek ?? ""))) {
    errors.push(`${filePath}: body or dek must identify an autonomous AI reporter`);
  }

  return errors;
}

export function validatePublishedSequence(articles) {
  const errors = [];
  const normalizeDate = (d) => (d instanceof Date ? d.toISOString().slice(0, 10) : String(d ?? ""));
  const sorted = [...articles]
    .map((a) => ({ ...a, dateStr: normalizeDate(a.data?.date) }))
    .filter((a) => /^\d{4}-\d{2}-\d{2}$/.test(a.dateStr))
    .sort((a, b) => a.dateStr.localeCompare(b.dateStr));

  for (let i = 1; i < sorted.length; i++) {
    const prev = sorted[i - 1];
    const curr = sorted[i];
    if (curr.dateStr < PHASE_2_START) continue;

    if (curr.data?.finding_type === "record_gap" && prev.data?.finding_type === "record_gap") {
      errors.push(
        `${curr.filePath}: Phase 2 ban — a record_gap piece cannot immediately follow another record_gap piece (${prev.filePath})`,
      );
    }

    const daysApart = Math.round(
      (Date.parse(`${curr.dateStr}T00:00:00Z`) - Date.parse(`${prev.dateStr}T00:00:00Z`)) / 86400000,
    );
    const isSeriesFollowup = Number(curr.data?.series_part) >= 2;
    if (daysApart < MIN_CADENCE_DAYS && !isSeriesFollowup) {
      errors.push(
        `${curr.filePath}: published ${daysApart} day(s) after ${prev.filePath} (minimum ${MIN_CADENCE_DAYS} days unless series_part >= 2)`,
      );
    }
  }
  return errors;
}

export async function validateFile(filePath, { expectedStatus } = {}) {
  const raw = await readFile(filePath, "utf8");
  const parsed = parseArticle(raw, filePath);
  if (!parsed.ok) return parsed.errors;
  const errors = validateArticle(parsed.data, parsed.body, filePath);
  if (expectedStatus && parsed.data.status !== expectedStatus) {
    errors.push(
      `${filePath}: status is '${parsed.data.status}' but files in this folder must be '${expectedStatus}' (the site hides anything else)`,
    );
  }
  return errors;
}

export async function collectMarkdown(dir) {
  if (!existsSync(dir)) return [];
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await collectMarkdown(full)));
    else if (entry.name.endsWith(".md")) out.push(full);
  }
  return out;
}
