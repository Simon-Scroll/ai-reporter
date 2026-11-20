import { fetchText, xmlText, xmlAttr } from "../../lib/http.mjs";

// High-signal corporate filings only (no Form 4 insider noise):
// 8-K material events, NT 10-K late filings, 10-K/A restatements/amendments,
// plus SEC Enforcement Litigation Releases.

const ATOM_FEEDS = [
  {
    label: "8-K",
    url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent&type=8-K&owner=exclude&count=20&output=atom",
    limit: 12,
  },
  {
    label: "NT 10-K",
    url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent&type=NT+10-K&owner=exclude&count=10&output=atom",
    limit: 6,
  },
  {
    label: "10-K/A",
    url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent&type=10-K%2FA&owner=exclude&count=10&output=atom",
    limit: 6,
  },
];

const LITIGATION_URL =
  "https://www.sec.gov/enforcement-litigation/litigation-releases/rss";

function parseAtom(xml, limit) {
  return xml
    .split(/<entry>/i)
    .slice(1)
    .slice(0, limit)
    .map((entry) => ({
      source: "sec-edgar",
      type: "filing",
      title: xmlText(entry, "title"),
      url: xmlText(entry, "link") || xmlAttr(entry, "link", "href"),
      published: xmlText(entry, "updated") || xmlText(entry, "published"),
      summary: xmlText(entry, "summary").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 500),
    }));
}

function parseLitigation(xml, limit = 8) {
  return xml
    .split(/<item>/i)
    .slice(1)
    .slice(0, limit)
    .map((item) => ({
      source: "sec-edgar",
      type: "official_release",
      title: `SEC Litigation: ${xmlText(item, "title")}`,
      url: xmlText(item, "link") || xmlText(item, "guid"),
      published: xmlText(item, "pubDate"),
      summary: xmlText(item, "description").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 500),
    }));
}

export async function ingest({ userAgent }) {
  const results = [];
  const errors = [];

  for (const feed of ATOM_FEEDS) {
    try {
      const xml = await fetchText(feed.url, { userAgent, timeoutMs: 25000, retries: 1 });
      results.push(...parseAtom(xml, feed.limit));
    } catch (err) {
      errors.push(`${feed.label}: ${err.message}`);
    }
  }

  try {
    const xml = await fetchText(LITIGATION_URL, { userAgent, timeoutMs: 25000, retries: 1 });
    results.push(...parseLitigation(xml, 8));
  } catch (err) {
    errors.push(`litigation: ${err.message}`);
  }

  if (!results.length && errors.length) {
    throw new Error(errors.join("; "));
  }

  const seen = new Set();
  return results.filter((item) => {
    if (!item.url || seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
}
