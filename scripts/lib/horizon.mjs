import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

export const DEFAULT_RETENTION_DAYS = 14;
const MAX_SEEN_PER_SOURCE = 600;

export function utcStamp(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

export function horizonIsFresh(latest, today = utcStamp()) {
  if (!latest || typeof latest !== "object") return false;
  return latest.date === today;
}

export function cutoffDate(today = utcStamp(), keepDays = DEFAULT_RETENTION_DAYS) {
  const ms = Date.parse(`${today}T00:00:00Z`);
  if (!Number.isFinite(ms)) return today;
  return new Date(ms - (keepDays - 1) * 86400000).toISOString().slice(0, 10);
}

export async function pruneOldHorizons(
  horizonDir,
  { today = utcStamp(), keepDays = DEFAULT_RETENTION_DAYS } = {},
) {
  if (!existsSync(horizonDir)) return [];
  const cutoff = cutoffDate(today, keepDays);
  const entries = await readdir(horizonDir, { withFileTypes: true });
  const removed = [];
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(entry.name)) continue;
    if (entry.name < cutoff) {
      await rm(path.join(horizonDir, entry.name), { recursive: true, force: true });
      removed.push(entry.name);
    }
  }
  return removed.sort();
}

export async function loadSeenUrls(seenPath) {
  if (!existsSync(seenPath)) return {};
  try {
    const parsed = JSON.parse(await readFile(seenPath, "utf8"));
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function mergeSeenUrls(existing = [], fresh = [], max = MAX_SEEN_PER_SOURCE) {
  const seen = new Set();
  const out = [];
  for (const url of [...fresh, ...existing]) {
    if (!url || seen.has(url)) continue;
    seen.add(url);
    out.push(url);
    if (out.length >= max) break;
  }
  return out;
}

export async function saveSeenUrls(seenPath, map) {
  await writeFile(seenPath, `${JSON.stringify(map, null, 2)}\n`);
}
