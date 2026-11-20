import { fetchText, xmlText, xmlAttr } from "../../lib/http.mjs";

// Department of Justice Office of the Inspector General (audits, evaluations,
// detention/BOP, FBI, DEA, USMS, grants & contracts).
const URL = "https://oig.justice.gov/rss.xml";

export async function ingest({ userAgent }) {
  const xml = await fetchText(URL, { userAgent });
  const items = xml.split(/<item>/i).slice(1);
  return items.slice(0, 20).map((item) => {
    const url = xmlText(item, "link") || xmlAttr(item, "guid", "isPermaLink") || xmlText(item, "guid");
    return {
      source: "doj-oig",
      type: "government",
      title: xmlText(item, "title"),
      url,
      published: xmlText(item, "pubDate"),
      summary: xmlText(item, "description")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 500),
    };
  });
}
