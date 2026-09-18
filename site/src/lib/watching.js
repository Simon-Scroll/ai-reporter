import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";
import { marked } from "marked";

const investigationsDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../../newsroom/investigations",
);

const publicStatuses = new Set(["active", "parked", "ready-to-write"]);

const ACRONYMS = new Set([
  "opm",
  "faa",
  "dhs",
  "dod",
  "doe",
  "gao",
  "nnsa",
  "igsa",
  "haleu",
  "bnatcs",
  "it",
]);

function humanizeId(id) {
  return String(id)
    .replace(/^\d{4}-\d{3}-/, "")
    .split("-")
    .map((part, i) => {
      if (ACRONYMS.has(part.toLowerCase())) return part.toUpperCase();
      if (i === 0) return part.charAt(0).toUpperCase() + part.slice(1);
      return part;
    })
    .join(" ");
}

function dekFrom(statusHypothesis, markdown) {
  if (statusHypothesis) return String(statusHypothesis).trim();
  const plain = String(markdown || "")
    .replace(/[#*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (!plain) return "";
  const sentence = plain.match(/^.+?[.](?=\s|$)/);
  return (sentence ? sentence[0] : plain).slice(0, 320);
}

function firstHeading(markdown, prefix) {
  const re = new RegExp(`^#\\s+${prefix}:\\s*(.+)$`, "m");
  const match = markdown.match(re);
  return match ? match[1].trim() : null;
}

function hypothesisBody(markdown) {
  const stripped = markdown
    .replace(/^#\s+Hypothesis\s*$/im, "")
    .trim();
  const paragraphs = stripped.split(/\n\s*\n/).filter(Boolean).slice(0, 3);
  return paragraphs.join("\n\n");
}

function rank(status) {
  if (status === "active" || status === "ready-to-write") return 0;
  return 1;
}

export async function listWatching() {
  if (!existsSync(investigationsDir)) return [];
  const names = await readdir(investigationsDir);
  const threads = [];
  for (const name of names) {
    const statusPath = path.join(investigationsDir, name, "status.yml");
    if (!existsSync(statusPath)) continue;
    const status = parseYaml(await readFile(statusPath, "utf8")) ?? {};
    if (!publicStatuses.has(status.status)) continue;
    const id = status.id || name;
    let title = humanizeId(id);
    const assignmentPath = path.join(investigationsDir, name, "assignment.md");
    if (existsSync(assignmentPath)) {
      const assignment = await readFile(assignmentPath, "utf8");
      title = firstHeading(assignment, "Assignment") || title;
    }
    let hypothesisMd = status.hypothesis || "";
    const hypothesisPath = path.join(investigationsDir, name, "hypothesis.md");
    if (existsSync(hypothesisPath)) {
      hypothesisMd = hypothesisBody(await readFile(hypothesisPath, "utf8")) || hypothesisMd;
    }
    threads.push({
      id,
      slug: name,
      title,
      status: status.status,
      updated: status.updated || status.opened || "",
      opened: status.opened || "",
      next_action: status.next_action || "",
      hypothesis: dekFrom(status.hypothesis, hypothesisMd),
      hypothesisHtml: hypothesisMd ? marked.parse(hypothesisMd, { async: false }) : "",
    });
  }
  return threads.sort((a, b) => {
    const r = rank(a.status) - rank(b.status);
    if (r !== 0) return r;
    return String(b.updated).localeCompare(String(a.updated));
  });
}

export async function getWatching(slug) {
  const all = await listWatching();
  return all.find((t) => t.slug === slug) ?? null;
}
