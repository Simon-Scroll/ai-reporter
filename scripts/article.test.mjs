import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  parseArticle,
  validateArticle,
  validateFile,
  validatePublishedSequence,
} from "./lib/article.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));

describe("article gates", () => {
  it("accepts a primary-source fixture", async () => {
    const raw = await readFile(path.join(here, "fixtures/valid.md"), "utf8");
    const parsed = parseArticle(raw, "valid.md");
    assert.equal(parsed.ok, true);
    assert.deepEqual(validateArticle(parsed.data, parsed.body, "valid.md"), []);
  });

  it("rejects a news rewrite", async () => {
    const raw = await readFile(path.join(here, "fixtures/invalid.md"), "utf8");
    const parsed = parseArticle(raw, "invalid.md");
    const errors = validateArticle(parsed.data, parsed.body, "invalid.md");
    assert.ok(errors.some((e) => /disclosure/.test(e)));
    assert.ok(errors.some((e) => /news/.test(e)));
    assert.ok(errors.some((e) => /byline/.test(e)));
    assert.ok(errors.some((e) => /news attribution/.test(e)));
    assert.ok(errors.some((e) => /two independent/.test(e)));
  });

  it("rejects a status that does not match the folder", async () => {
    const file = path.join(here, "fixtures/valid.md");
    const parsed = parseArticle(await readFile(file, "utf8"), "valid.md");
    const other = parsed.data.status === "published" ? "draft" : "published";
    const errors = await validateFile(file, { expectedStatus: other });
    assert.ok(errors.some((e) => /must be/.test(e)));
    assert.deepEqual(await validateFile(file, { expectedStatus: parsed.data.status }), []);
  });

  it("enforces finding_type and claim citations in Phase 2 articles", async () => {
    const raw = await readFile(path.join(here, "fixtures/valid.md"), "utf8");
    const parsed = parseArticle(raw, "phase2.md");
    const data = {
      ...parsed.data,
      date: "2026-11-21",
      claims: [{ id: "C1", text: "Official agency table reports $100M in FY2026.", source_ids: ["s1"] }],
    };
    const errs = validateArticle(data, "An autonomous AI reporter checked the file. (C2)", "phase2.md");
    assert.ok(errs.some((e) => /missing finding_type/.test(e)));
    assert.ok(errs.some((e) => /unknown claim \(C2\)/.test(e)));
    assert.ok(errs.some((e) => /claim C1 is declared/.test(e)));

    const okData = { ...data, finding_type: "discrepancy" };
    assert.deepEqual(
      validateArticle(okData, "An autonomous AI reporter checked the file. (C1)", "phase2.md"),
      [],
    );
  });

  it("blocks consecutive Phase 2 record_gap pieces and cadence violations", () => {
    const seqErrors = validatePublishedSequence([
      { filePath: "a.md", data: { date: "2026-11-12", finding_type: "record_gap" } },
      { filePath: "b.md", data: { date: "2026-11-15", finding_type: "record_gap" } },
    ]);
    assert.ok(seqErrors.some((e) => /Phase 2 ban/.test(e)));
    assert.ok(seqErrors.some((e) => /minimum 6 days/.test(e)));

    const seriesOk = validatePublishedSequence([
      { filePath: "a.md", data: { date: "2026-11-12", finding_type: "discrepancy" } },
      { filePath: "b.md", data: { date: "2026-11-14", finding_type: "discrepancy", series: "coal", series_part: 2 } },
    ]);
    assert.deepEqual(seriesOk, []);
  });
});
