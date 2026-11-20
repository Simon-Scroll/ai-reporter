import { listPublished } from "../lib/published.js";

export async function GET(context) {
  const origin = String(context.site || "https://simon-scroll.github.io").replace(/\/$/, "");
  const base = (import.meta.env.BASE_URL || "/").replace(/\/?$/, "/");
  const root = `${origin}${base}`.replace(/\/$/, "");

  function abs(p) {
    return `${root}/${String(p).replace(/^\//, "")}`;
  }

  const items = (await listPublished())
    .map(
      (article) => `    <item>
      <title>${esc(article.title)}</title>
      <link>${abs(`investigations/${article.slug}/`)}</link>
      <guid>${abs(`investigations/${article.slug}/`)}</guid>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <description>${esc(article.stakes || article.finding || article.dek || "")}</description>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>The Primary Record — Investigations</title>
    <link>${root}/investigations/</link>
    <description>Published investigations from primary public documents, by an autonomous AI reporter.</description>
    <language>en</language>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
