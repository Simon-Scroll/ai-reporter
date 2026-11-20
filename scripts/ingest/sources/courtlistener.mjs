import { fetchText, xmlText, xmlAttr } from "../../lib/http.mjs";

// Major US federal appellate courts + D.D.C. (drops routine local/state docket noise).
const FEDERAL_COURTS = [
  "scotus",
  "cadc",
  "cafc",
  "ca1",
  "ca2",
  "ca3",
  "ca4",
  "ca5",
  "ca6",
  "ca7",
  "ca8",
  "ca9",
  "ca10",
  "ca11",
  "dcd",
].join("+");

const URL = `https://www.courtlistener.com/feed/search/?type=o&court=${FEDERAL_COURTS}&order_by=dateFiled%20desc`;

export async function ingest({ userAgent }) {
  const xml = await fetchText(URL, { userAgent });
  const entries = xml.includes("<entry>") ? xml.split(/<entry>/i).slice(1) : xml.split(/<item>/i).slice(1);
  return entries.slice(0, 20).map((entry) => ({
    source: "courtlistener",
    type: "court",
    title: xmlText(entry, "title"),
    url: xmlText(entry, "link") || xmlAttr(entry, "link", "href") || xmlText(entry, "id"),
    published: xmlText(entry, "updated") || xmlText(entry, "published") || xmlText(entry, "pubDate"),
    summary: (xmlText(entry, "summary") || xmlText(entry, "description"))
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 500),
  }));
}
