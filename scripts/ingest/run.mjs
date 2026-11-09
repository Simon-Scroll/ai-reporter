#!/usr/bin/env node
import { mkdir, writeFile, readFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";
import { horizonIsFresh, utcStamp } from "../lib/horizon.mjs";
import { ingest as secEdgar } from "./sources/sec-edgar.mjs";
import { ingest as federalRegister } from "./sources/federal-register.mjs";
import { ingest as gao } from "./sources/gao.mjs";
import { ingest as courtlistener } from "./sources/courtlistener.mjs";
import { ingest as ukLegislation } from "./sources/uk-legislation.mjs";
import { ingest as govinfoCrpt } from "./sources/govinfo-crpt.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const SOURCES = [
  ["sec-edgar", secEdgar],
  ["federal-register", federalRegister],
  ["gao", gao],
  ["govinfo-crpt", govinfoCrpt],
  ["courtlistener", courtlistener],
  ["uk-legislation", ukLegislation],
];

async function userAgent() {
  const raw = await readFile(path.join(root, "newsroom/masthead.yml"), "utf8");
  const masthead = parseYaml(raw);
  return masthead.user_agent || "ThePrimaryRecord/0.1 (autonomous investigative desk)";
}

function stamp() {
  return utcStamp();
}

const EMAIL = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;

function redact(item) {
  return item.summary ? { ...item, summary: item.summary.replace(EMAIL, "[email removed]") } : item;
}

async function previousUrls(name, day) {
  const horizonDir = path.join(root, "newsroom/horizon");
  const days = (await readdir(horizonDir))
    .filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d) && d < day)
    .sort()
    .reverse();
  for (const d of days) {
    const file = path.join(horizonDir, d, `${name}.json`);
    if (!existsSync(file)) continue;
    try {
      const items = JSON.parse(await readFile(file, "utf8"));
      return { since: d, urls: new Set(items.map((i) => i.url)) };
    } catch {
      continue;
    }
  }
  return { since: null, urls: new Set() };
}

function toBrief(bundles) {
  const lines = [
    `# Horizon brief — ${stamp()}`,
    "",
    "Primary-source intake only. News articles are not listed here. Pick leads from documents, not coverage.",
    "Items marked NEW were not in the previous brief for that source; the rest were already seen.",
    "",
  ];
  for (const { name, items, error, since } of bundles) {
    lines.push(`## ${name}`);
    if (error) {
      lines.push(`Ingest failed: ${error}`);
      lines.push("");
      continue;
    }
    if (!items.length) {
      lines.push("No items.");
      lines.push("");
      continue;
    }
    const fresh = items.filter((i) => i.is_new).length;
    lines.push(`${fresh} new of ${items.length}${since ? ` since ${since}` : ""}.`);
    lines.push("");
    const ordered = [...items.filter((i) => i.is_new), ...items.filter((i) => !i.is_new)];
    for (const item of ordered.slice(0, 12)) {
      lines.push(`- ${item.is_new ? "NEW · " : ""}**${item.title || "(untitled)"}**`);
      if (item.published) lines.push(`  - when: ${item.published}`);
      if (item.url) lines.push(`  - url: ${item.url}`);
      if (item.pdf_url) lines.push(`  - pdf: ${item.pdf_url}`);
      if (item.summary) lines.push(`  - ${item.summary.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()}`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

async function main() {
  if (existsSync(path.join(root, "newsroom/KILL"))) {
    console.error("KILL file present. Skipping ingest.");
    process.exit(10);
  }

  const force = process.argv.includes("--force");
  const day = stamp();
  const latestPath = path.join(root, "newsroom/horizon/latest.json");
  if (!force && existsSync(latestPath)) {
    try {
      const latest = JSON.parse(await readFile(latestPath, "utf8"));
      if (horizonIsFresh(latest, day)) {
        console.log(`Horizon already ${day}. Skip ingest (pass --force to refresh).`);
        return;
      }
    } catch {
      // stale or unreadable latest.json — ingest
    }
  }

  const ua = await userAgent();
  const outDir = path.join(root, "newsroom/horizon", day);
  await mkdir(outDir, { recursive: true });

  const bundles = [];
  for (const [name, fn] of SOURCES) {
    try {
      const prev = await previousUrls(name, day);
      const items = (await fn({ userAgent: ua }))
        .filter((item) => item.title && item.url)
        .map((item) => ({ ...redact(item), is_new: !prev.urls.has(item.url) }));
      bundles.push({ name, items, since: prev.since });
      await writeFile(path.join(outDir, `${name}.json`), JSON.stringify(items, null, 2));
      console.log(`${name}: ${items.length} items`);
    } catch (err) {
      bundles.push({ name, items: [], error: err.message });
      console.error(`${name}: FAILED ${err.message}`);
    }
  }

  const brief = toBrief(bundles);
  await writeFile(path.join(outDir, "BRIEF.md"), brief);
  await writeFile(path.join(root, "newsroom/horizon/latest.md"), brief);

  const summary = {
    date: day,
    generated_at: new Date().toISOString(),
    sources: bundles.map((b) => ({
      name: b.name,
      count: b.items.length,
      new: b.items.filter((i) => i.is_new).length,
      error: b.error ?? null,
    })),
  };
  await writeFile(path.join(outDir, "summary.json"), JSON.stringify(summary, null, 2));
  await writeFile(
    path.join(root, "newsroom/horizon/latest.json"),
    JSON.stringify(summary, null, 2),
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
