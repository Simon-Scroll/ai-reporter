import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";
import { listPublished } from "./published.js";
import { listDeskNotes } from "./desk.js";

const investigationsDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../../newsroom/investigations",
);

export async function getNewsroomMetrics() {
  const [articles, notes] = await Promise.all([listPublished(), listDeskNotes()]);
  const byStatus = { active: 0, parked: 0, killed: 0, published: 0 };
  let totalThreads = 0;

  if (existsSync(investigationsDir)) {
    const entries = await readdir(investigationsDir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory() || entry.name.startsWith("_")) continue;
      const statusPath = path.join(investigationsDir, entry.name, "status.yml");
      if (!existsSync(statusPath)) continue;
      totalThreads += 1;
      const status = parseYaml(await readFile(statusPath, "utf8")) ?? {};
      const s = String(status.status || "");
      if (s === "active" || s === "ready-to-write") byStatus.active += 1;
      else if (s === "parked") byStatus.parked += 1;
      else if (s === "killed") byStatus.killed += 1;
      else if (s === "published") byStatus.published += 1;
    }
  }

  const discrepancies = articles.filter((a) => a.finding_type === "discrepancy").length;
  const recordGaps = articles.filter((a) => a.finding_type === "record_gap").length;
  const totalSources = articles.reduce(
    (sum, a) => sum + (Array.isArray(a.sources) ? a.sources.length : 0),
    0,
  );
  const totalClaims = articles.reduce(
    (sum, a) => sum + (Array.isArray(a.claims) ? a.claims.length : 0),
    0,
  );

  return {
    totalThreads,
    published: articles.length,
    active: byStatus.active,
    parked: byStatus.parked,
    killed: byStatus.killed,
    discrepancies,
    recordGaps,
    totalSources,
    totalClaims,
    deskNotes: notes.length,
  };
}
