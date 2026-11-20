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
  return html.replace(/\(([^()]*\bC\d+\b[^()]*)\)/g, (full, inner) => {
    const replaced = inner.replace(/\b(C\d+)\b/g, (id) => {
      if (!claimIds.has(id)) return id;
      return `<a class="claim-ref" href="#claim-${id}" title="Jump to claim ${id}">${id}</a>`;
    });
    return `<span class="claim-group">(${replaced})</span>`;
  });
}

function wrapTables(html) {
  return html.replace(/<table([\s\S]*?)<\/table>/g, '<div class="table-wrap"><table$1</table></div>');
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
