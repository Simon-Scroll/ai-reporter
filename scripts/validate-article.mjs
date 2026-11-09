#!/usr/bin/env node
import path from "node:path";
import { fileURLToPath } from "node:url";
import { readFile } from "node:fs/promises";
import { parse as parseYaml } from "yaml";
import { collectMarkdown, validateFile } from "./lib/article.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);

async function main() {
  const publishedDir = path.join(root, "newsroom/published");
  const draftsDir = path.join(root, "newsroom/drafts");
  const targets = [];
  if (args.includes("--all")) {
    targets.push(...(await collectMarkdown(publishedDir)), ...(await collectMarkdown(draftsDir)));
  } else {
    const files = args.filter((a) => !a.startsWith("--"));
    if (files.length === 0) {
      console.error("Usage: node scripts/validate-article.mjs <file.md> | --all");
      process.exit(2);
    }
    targets.push(...files.map((f) => path.resolve(f)));
  }

  const expectedStatusFor = (file) => {
    if (file.startsWith(publishedDir + path.sep)) return "published";
    if (file.startsWith(draftsDir + path.sep)) return "draft";
    return undefined;
  };

  if (targets.length === 0) {
    console.log("No articles to validate.");
    return;
  }

  const masthead = parseYaml(await readFile(path.join(root, "newsroom/masthead.yml"), "utf8")) ?? {};
  const disclosure = String(masthead.ai_disclosure ?? "").replace(/\s+/g, " ").trim();

  let failed = 0;
  const publishedNames = new Set(
    targets.filter((f) => expectedStatusFor(f) === "published").map((f) => path.basename(f)),
  );
  for (const file of targets) {
    const errors = await validateFile(file, { expectedStatus: expectedStatusFor(file) });
    if (expectedStatusFor(file) === "draft" && publishedNames.has(path.basename(file))) {
      errors.push(`${file}: same article exists in published/ and drafts/`);
    }
    if (disclosure && expectedStatusFor(file) === "published") {
      const body = (await readFile(file, "utf8")).replace(/\s+/g, " ");
      if (!body.includes(disclosure)) {
        errors.push(`${file}: missing the masthead ai_disclosure sentence: "${disclosure}"`);
      }
    }
    if (errors.length) {
      failed += 1;
      console.error(`FAIL ${path.relative(root, file)}`);
      for (const err of errors) console.error(`  - ${err}`);
    } else {
      console.log(`OK   ${path.relative(root, file)}`);
    }
  }

  if (failed) {
    console.error(`\n${failed} article(s) failed validation.`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
