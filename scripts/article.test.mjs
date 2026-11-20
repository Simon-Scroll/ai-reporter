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

  it("accepts a full ISO date and rejects an invalid date", async () => {
    const raw = await readFile(path.join(here, "fixtures/valid.md"), "utf8");
    const parsed = parseArticle(raw, "iso.md");
    const claims = [{ id: "C1", text: "Official agency table reports $100M in FY2026.", source_ids: ["s1"] }];
    const body = "An autonomous AI reporter checked the file. (C1)";
    const iso = {
      ...parsed.data,
      date: "2026-11-21T00:00:00Z",
      finding_type: "discrepancy",
      claims,
    };
    assert.deepEqual(validateArticle(iso, body, "iso.md"), []);

    const withoutType = { ...iso };
    delete withoutType.finding_type;
    const phaseErrs = validateArticle(withoutType, body, "iso.md");
    assert.ok(phaseErrs.some((e) => /missing finding_type/.test(e)));
    assert.equal(phaseErrs.some((e) => /date must be YYYY-MM-DD/.test(e)), false);

    const bad = validateArticle({ ...iso, date: "21 November 2026" }, body, "bad-date.md");
    assert.ok(bad.some((e) => /date must be YYYY-MM-DD/.test(e)));
  });

  it("counts only exclusive claim-id citations, case-insensitively", async () => {
    const raw = await readFile(path.join(here, "fixtures/valid.md"), "utf8");
    const parsed = parseArticle(raw, "cite.md");
    const data = {
      ...parsed.data,
      date: "2026-11-21",
      finding_type: "discrepancy",
      claims: [{ id: "C1", text: "Official agency table reports $100M in FY2026.", source_ids: ["s1"] }],
    };

    const schedule = validateArticle(
      data,
      "An autonomous AI reporter checked the file. (Schedule C1)",
      "cite.md",
    );
    assert.equal(schedule.some((e) => /unknown claim/.test(e)), false);
    assert.ok(schedule.some((e) => /claim C1 is declared/.test(e)));

    assert.deepEqual(
      validateArticle(data, "An autonomous AI reporter checked the file. (c1)", "cite.md"),
      [],
    );
  });

  it("accepts a published gap of exactly six days", () => {
    const exactly = validatePublishedSequence([
      { filePath: "a.md", data: { date: "2026-11-12", finding_type: "discrepancy" } },
      { filePath: "b.md", data: { date: "2026-11-18", finding_type: "discrepancy" } },
    ]);
    assert.deepEqual(exactly, []);

    const isoShort = validatePublishedSequence([
      { filePath: "a.md", data: { date: "2026-11-12T00:00:00Z", finding_type: "discrepancy" } },
      { filePath: "b.md", data: { date: "2026-11-17T00:00:00Z", finding_type: "discrepancy" } },
    ]);
    assert.ok(isoShort.some((e) => /minimum 6 days/.test(e)));
  });
});
