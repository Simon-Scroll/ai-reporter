#!/usr/bin/env node
import { readFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";
import { lastRunBody } from "./lib/journal.mjs";
import { canStartInvestigation, slotCounts, slotLimits, slotViolations } from "./lib/slots.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function print(title, body) {
  console.log(`\n## ${title}\n`);
  console.log(body.trimEnd());
}

function oneLine(text, max = 160) {
  const compact = String(text || "").replace(/\s+/g, " ").trim();
  if (!compact) return "";
  if (compact.length <= max) return compact;
  return `${compact.slice(0, max - 1).trimEnd()}…`;
}

async function parkedBoard(ids) {
  if (!ids.length) return "(none)";
  const lines = [];
  for (const id of ids) {
    const statusPath = path.join(root, "newsroom/investigations", id, "status.yml");
    if (!existsSync(statusPath)) {
      lines.push(`- ${id} — status.yml missing`);
      continue;
    }
    const status = parseYaml(await readFile(statusPath, "utf8")) ?? {};
    const updated = status.updated || status.opened || "?";
    const decision = status.last_decision || status.status || "parked";
    const gist = oneLine(status.hypothesis || status.next_action);
    lines.push(`- ${id} (${updated}, ${decision})${gist ? ` — ${gist}` : ""}`);
  }
  return lines.join("\n");
}

const WATCH_DAYS = 7;

async function publishedWatch(today) {
  const slugs = new Map();
  const publishedDir = path.join(root, "newsroom/published");
  if (existsSync(publishedDir)) {
    for (const name of await readdir(publishedDir)) {
      if (!name.endsWith(".md")) continue;
      const raw = await readFile(path.join(publishedDir, name), "utf8");
      const id = raw.match(/^investigation_id:\s*(\S+)/m)?.[1];
      const date = raw.match(/^date:\s*(\S+)/m)?.[1];
      if (id) slugs.set(id, { slug: name.replace(/\.md$/, ""), date });
    }
  }

  const rows = [];
  const investigationsDir = path.join(root, "newsroom/investigations");
  for (const id of await readdir(investigationsDir)) {
    const statusPath = path.join(investigationsDir, id, "status.yml");
    if (!existsSync(statusPath)) continue;
    const status = parseYaml(await readFile(statusPath, "utf8")) ?? {};
    if (status.status !== "published") continue;
    const checked = String(status.updated || status.opened || "");
    const age = Math.floor((Date.parse(today) - Date.parse(checked)) / 86400000);
    rows.push({ id, checked, age, next: status.next_action, article: slugs.get(id) });
  }
  if (!rows.length) return "(none)";

  rows.sort((a, b) => b.age - a.age);
  const lines = rows.map((r) => {
    const due = Number.isFinite(r.age) && r.age >= WATCH_DAYS ? "DUE · " : "";
    const article = r.article ? `${r.article.slug} (${r.article.date})` : "no file in published/";
    return `- ${due}${r.id} → ${article}; last checked ${r.checked} (${r.age} days)\n  watch: ${oneLine(r.next, 220)}`;
  });
  lines.push(
    "",
    `Once a week, run the watch check for the top DUE line with a real retrieval. If a new primary moves the number, write the next part as a series. If nothing changed, set that status.yml \`updated\` to today and say so in the journal.`,
  );
  return lines.join("\n");
}

async function main() {
  const statePath = path.join(root, "newsroom/state.json");
  const state = JSON.parse(await readFile(statePath, "utf8"));

  const limits = slotLimits(state);
  const counts = slotCounts(state);
  const openList = (state.open_investigations || []).join(", ") || "(none)";
  const parkedList = (state.parked_investigations || []).join(", ") || "(none)";

  console.log("# Desk status — previous run\n");
  console.log(`last_run: ${state.last_run ?? "(none)"}`);
  console.log(`last_mode: ${state.last_mode ?? "(none)"}`);
  console.log(`last_horizon: ${state.last_horizon ?? "(none)"}`);
  console.log(`last_published_at: ${state.last_published_at ?? "(none)"}`);
  console.log(`open_investigations: ${openList} (${counts.open}/${limits.maxOpen} active)`);
  console.log(`parked_investigations: ${parkedList} (${counts.parked}/${limits.maxParked} parked)`);
  console.log(`max_active_workstreams_per_run: ${state.max_active_workstreams_per_run ?? 2}`);
  console.log(`next_action: ${state.next_action ?? "(none)"}`);
  if (state.handoff) print("Handoff", state.handoff);
  print(
    "Parked board",
    `${await parkedBoard(state.parked_investigations || [])}\n\nLook back before choosing work (about three days of journal; further if the plot is unclear).`,
  );

  print("Published watch (follow-ups)", await publishedWatch(new Date().toISOString().slice(0, 10)));

  const violations = slotViolations(state);
  if (violations.length) {
    print("Slot violations", violations.map((v) => `- ${v}`).join("\n"));
  }

  const latestJournal = path.join(root, "newsroom/journal/latest.md");
  const datedJournal = state.last_journal
    ? path.join(root, state.last_journal)
    : null;
  const journalPath = existsSync(latestJournal)
    ? latestJournal
    : datedJournal && existsSync(datedJournal)
      ? datedJournal
      : null;
  if (journalPath) {
    print(`Last journal run (${path.relative(root, journalPath)})`, lastRunBody(await readFile(journalPath, "utf8")));
  } else {
    print("Journal", "No previous journal found. This is the first run, or continuity was not written.");
  }

  for (const id of state.open_investigations || []) {
    const statusPath = path.join(root, "newsroom/investigations", id, "status.yml");
    const gapsPath = path.join(root, "newsroom/investigations", id, "gaps.md");
    const hypothesisPath = path.join(root, "newsroom/investigations", id, "hypothesis.md");
    if (!existsSync(statusPath)) {
      print(`Investigation ${id}`, "status.yml missing — treat as unknown, do not invent progress.");
      continue;
    }
    const status = parseYaml(await readFile(statusPath, "utf8"));
    const parts = [
      `status: ${status.status}`,
      `mode: ${status.mode}`,
      `next_action: ${status.next_action}`,
      `consecutive_continue_without_new_primary: ${status.consecutive_continue_without_new_primary ?? 0}`,
      `last_decision: ${status.last_decision ?? "(none)"}`,
    ];
    if (existsSync(hypothesisPath)) {
      parts.push("", await readFile(hypothesisPath, "utf8"));
    }
    if (existsSync(gapsPath)) {
      parts.push("", await readFile(gapsPath, "utf8"));
    }
    print(`Investigation ${id}`, parts.join("\n"));
  }

  if ((state.open_investigations || []).length) {
    console.log("\n## Decision required\n");
    console.log("For each open investigation: continue, park, or kill in writing before repeating yesterday's fetch. Work at most two threads. Do not treat an open id as a life sentence.");
  } else if (canStartInvestigation(state)) {
    console.log("\n## Capacity\n");
    console.log("No active investigations. Parked files do not occupy the three active slots. Read the parked board before opening a new lead: a parked thread may already be closer to a labeled piece. If parked is at cap, kill the weakest parked before parking another.");
  }

  if (violations.length) {
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
