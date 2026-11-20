import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";
import { marked } from "marked";

const publishedDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../../newsroom/published",
);

function splitFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  return { data: parseYaml(match[1]) ?? {}, body: match[2] };
}

function normalizeDate(value) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "");
}

export function findingTypeLabel(type) {
  if (type === "discrepancy") return "Measured discrepancy";
  if (type === "record_gap") return "Record gap";
  return "";
}

function linkClaimRefs(html, claimIds) {
  if (!claimIds.size) return html;

  const canonical = new Map();
  for (const id of claimIds) canonical.set(String(id).toLowerCase(), String(id));

  const claimPattern = /\(([cC]\d+(?:\s*[,;]\s*[cC]\d+)*)\)/g;
  const skipTags = new Set(["a", "code", "pre"]);
  const depth = { a: 0, code: 0, pre: 0 };
  let out = "";
  let i = 0;

  while (i < html.length) {
    if (html[i] === "<") {
      const end = html.indexOf(">", i);
      if (end === -1) {
        out += html.slice(i);
        break;
      }
      const tag = html.slice(i, end + 1);
      out += tag;
      const parsed = tag.match(/^<\s*(\/)?\s*([A-Za-z][\w:-]*)/);
      if (parsed) {
        const closing = Boolean(parsed[1]);
        const name = parsed[2].toLowerCase();
        const selfClosing = /\/\s*>$/.test(tag);
        if (skipTags.has(name) && !selfClosing) {
          if (!closing) depth[name] += 1;
          else if (depth[name] > 0) depth[name] -= 1;
        }
      }
      i = end + 1;
      continue;
    }

    const next = html.indexOf("<", i);
    const end = next === -1 ? html.length : next;
    const text = html.slice(i, end);
    const skipped = depth.a || depth.code || depth.pre;
    out += skipped ? text : rewriteClaimRefs(text, canonical, claimPattern);
    i = end;
  }

  return out;
}

function rewriteClaimRefs(text, canonical, claimPattern) {
  claimPattern.lastIndex = 0;
  return text.replace(claimPattern, (full, inner) => {
    const tokens = inner.split(/(\s*[,;]\s*)/);
    let linked = 0;
    const parts = tokens.map((token) => {
      if (/^\s*[,;]\s*$/.test(token)) return token;
      const exact = canonical.get(token.toLowerCase());
      if (!exact) return token;
      linked += 1;
      return `<a class="claim-ref" href="#claim-${exact}" title="Jump to claim ${exact}">${exact}</a>`;
    });
    if (!linked) return full;
    return `<span class="claim-group">(${parts.join("")})</span>`;
  });
}

function wrapTables(html) {
  return html.replace(
    /<table([\s\S]*?)<\/table>/g,
    '<div class="table-wrap" tabindex="0" role="region" aria-label="Data table"><table$1</table></div>',
  );
}

export async function listPublished() {
  if (!existsSync(publishedDir)) return [];
  const names = (await readdir(publishedDir)).filter((n) => n.endsWith(".md"));
  const articles = [];
  for (const name of names) {
    const raw = await readFile(path.join(publishedDir, name), "utf8");
    const { data, body } = splitFrontmatter(raw);
    if (data.status && data.status !== "published") continue;
    const claimIds = new Set((Array.isArray(data.claims) ? data.claims : []).map((c) => c?.id).filter(Boolean));
    const parsedHtml = marked.parse(body, { async: false });
    const html = wrapTables(linkClaimRefs(parsedHtml, claimIds));
    articles.push({
      ...data,
      date: normalizeDate(data.date),
      findingTypeLabel: findingTypeLabel(data.finding_type),
      slug: data.slug || name.replace(/\.md$/, ""),
      body,
      html,
      filename: name,
    });
  }
  return articles.sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

export async function getPublished(slug) {
  const all = await listPublished();
  return all.find((a) => a.slug === slug) ?? null;
}

export async function listSeriesPeers(seriesName) {
  if (!seriesName) return [];
  const all = await listPublished();
  return all
    .filter((a) => a.series === seriesName)
    .sort((a, b) => (Number(a.series_part) || 0) - (Number(b.series_part) || 0) || a.date.localeCompare(b.date));
}
