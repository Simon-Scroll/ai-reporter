#!/usr/bin/env node
import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { gaoPdfCandidates, gaoProductId } from "./lib/gao.mjs";
import { candidateUrls, htmlToText } from "./lib/fetch-doc.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cacheDir = path.join(root, ".cache/docs");

const DESK_UA = "ThePrimaryRecord/0.1 (autonomous investigative desk)";
const COMPAT_UA = "Mozilla/5.0 (compatible; ThePrimaryRecord/0.1; autonomous investigative desk)";
const RETRYABLE = new Set([403, 406, 429, 500, 502, 503, 504]);

function usage() {
  console.error("Usage: npm run fetch-doc -- <url> [--print] [--pages 3-7]");
  process.exit(2);
}

function parsePages(spec) {
  if (!spec) return null;
  const [from, to] = spec.split("-").map((n) => Number.parseInt(n, 10));
  if (!Number.isFinite(from)) usage();
  return { from, to: Number.isFinite(to) ? to : from };
}

async function attempt(url, userAgent) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 45000);
  try {
    const res = await fetch(url, {
      headers: {
        "user-agent": userAgent,
        accept: "application/pdf, text/html, application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.8",
      },
      redirect: "follow",
      signal: controller.signal,
    });
    const bytes = Buffer.from(await res.arrayBuffer());
    return { url: res.url || url, status: res.status, type: res.headers.get("content-type") || "", bytes };
  } catch (err) {
    return { url, status: 0, type: "", bytes: Buffer.alloc(0), error: err.message };
  } finally {
    clearTimeout(timer);
  }
}

async function retrieve(urls) {
  const tried = [];
  for (const url of urls) {
    for (const ua of [DESK_UA, COMPAT_UA]) {
      const res = await attempt(url, ua);
      tried.push(`${res.status || "ERR"} ${url}${ua === COMPAT_UA ? " (compat UA)" : ""}${res.error ? ` — ${res.error}` : ""}`);
      if (res.status >= 200 && res.status < 300 && res.bytes.length) return { res, tried };
      if (res.status && !RETRYABLE.has(res.status)) break;
      if (res.status === 429) await new Promise((r) => setTimeout(r, 5000));
    }
  }
  return { res: null, tried };
}

async function pdfToText(bytes, pages) {
  const { getDocument } = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const doc = await getDocument({
    data: new Uint8Array(bytes),
    useSystemFonts: true,
    disableFontFace: true,
    isEvalSupported: false,
    verbosity: 0,
  }).promise;
  const from = Math.max(1, pages?.from ?? 1);
  const to = Math.min(doc.numPages, pages?.to ?? doc.numPages);
  const out = [];
  for (let n = from; n <= to; n += 1) {
    const page = await doc.getPage(n);
    const content = await page.getTextContent();
    const text = content.items.map((item) => `${item.str}${item.hasEOL ? "\n" : ""}`).join("");
    out.push(`=== pdf page ${n} of ${doc.numPages} (printed page numbers may differ) ===\n${text.trim()}`);
  }
  return { text: out.join("\n\n"), numPages: doc.numPages };
}

async function main() {
  const args = process.argv.slice(2);
  const url = args.find((a) => /^https?:\/\//i.test(a));
  if (!url) usage();
  const pagesIdx = args.indexOf("--pages");
  const pages = parsePages(pagesIdx >= 0 ? args[pagesIdx + 1] : null);

  const urls = candidateUrls(url, gaoProductId(url) ? gaoPdfCandidates(url) : []);
  const { res, tried } = await retrieve(urls);
  if (!res) {
    console.error("Retrieval failed on every channel:");
    for (const line of tried) console.error(`  ${line}`);
    console.error("Try a second official channel (agency asset path, govinfo.gov, congress.gov, USAspending API) before giving up.");
    process.exit(1);
  }

  const isPdf = /pdf/i.test(res.type) || res.bytes.subarray(0, 5).toString() === "%PDF-";
  let text;
  let numPages = null;
  if (isPdf) {
    ({ text, numPages } = await pdfToText(res.bytes, pages));
  } else if (/html/i.test(res.type)) {
    text = htmlToText(res.bytes.toString("utf8"));
  } else {
    text = res.bytes.toString("utf8");
  }

  const sha256 = createHash("sha256").update(res.bytes).digest("hex");
  await mkdir(cacheDir, { recursive: true });
  const outPath = path.join(cacheDir, `${sha256.slice(0, 16)}.txt`);
  await writeFile(outPath, text);

  console.log(
    JSON.stringify(
      {
        requested: url,
        retrieved_from: res.url,
        retrieved: new Date().toISOString().slice(0, 10),
        content_type: res.type,
        pages: numPages,
        chars: text.length,
        sha256,
        text_file: path.relative(root, outPath),
        tried,
      },
      null,
      2,
    ),
  );
  if (args.includes("--print")) console.log(`\n${text}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
