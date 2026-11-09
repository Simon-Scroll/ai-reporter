import { fetchText, xmlText } from "../../lib/http.mjs";

// The RSS feed lists 100 recent packages but titles are only report numbers;
// MODS metadata supplies the subject and committee.

const URL = "https://www.govinfo.gov/rss/crpt.xml";
const LIMIT = 20;

function clean(value) {
  return value.replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
}

async function describe(packageId, userAgent) {
  try {
    const mods = await fetchText(`https://www.govinfo.gov/metadata/pkg/${packageId}/mods.xml`, {
      userAgent,
      timeoutMs: 15000,
    });
    const title = mods.match(/<title>([\s\S]*?)<\/title>/i);
    const committee = mods.match(/<congCommittee[\s\S]*?<name[^>]*>([\s\S]*?)<\/name>/i);
    return {
      title: title ? clean(title[1]) : "",
      committee: committee ? clean(committee[1]) : "",
      issued: xmlText(mods, "dateIssued"),
    };
  } catch {
    return { title: "", committee: "", issued: "" };
  }
}

export async function ingest({ userAgent }) {
  const xml = await fetchText(URL, { userAgent });
  const items = xml
    .split(/<item>/i)
    .slice(1)
    .map((item) => ({
      packageId: xmlText(item, "guid"),
      number: clean(xmlText(item, "title")),
      url: xmlText(item, "link"),
      published: xmlText(item, "pubDate"),
    }))
    .filter((item) => item.packageId && item.url)
    .sort((a, b) => Date.parse(b.published || 0) - Date.parse(a.published || 0))
    .slice(0, LIMIT);

  const details = await Promise.all(items.map((item) => describe(item.packageId, userAgent)));

  return items
    .map((item, i) => {
      const meta = details[i];
      return {
        source: "govinfo-crpt",
        type: "government",
        title: meta.title ? `${item.number} — ${meta.title}` : item.number,
        url: item.url,
        pdf_url: `https://www.govinfo.gov/content/pkg/${item.packageId}/pdf/${item.packageId}.pdf`,
        published: meta.issued || item.published,
        summary: meta.committee,
        package_id: item.packageId,
      };
    })
    .sort((a, b) => Date.parse(b.published || 0) - Date.parse(a.published || 0));
}
