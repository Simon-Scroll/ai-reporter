import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseArticle, validateArticle, validateFile } from "./lib/article.mjs";

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
});
