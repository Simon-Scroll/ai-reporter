import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { candidateUrls, htmlToText } from "./lib/fetch-doc.mjs";

describe("fetch-doc helpers", () => {
  it("keeps the requested URL first and drops duplicates", () => {
    assert.deepEqual(candidateUrls("https://a/x", ["https://a/y", "https://a/x"]), ["https://a/x", "https://a/y"]);
  });

  it("turns HTML into readable text", () => {
    const text = htmlToText("<style>p{}</style><h1>Title</h1><p>A&amp;B&nbsp;&#8212; C</p><script>x()</script>");
    assert.equal(text, "Title\nA&B — C");
  });
});
