import { fetchJson } from "../../lib/http.mjs";

// openFDA Enforcement Reports (Class I & Class II recalls across drugs, food, and devices).
// Primary public safety & consumer stakes with firm names, recall numbers, dates, and volumes.

const ENDPOINTS = [
  {
    category: "drug",
    url: 'https://api.fda.gov/drug/enforcement.json?search=classification:"Class+I"+OR+classification:"Class+II"&sort=report_date:desc&limit=8',
  },
  {
    category: "device",
    url: 'https://api.fda.gov/device/enforcement.json?search=classification:"Class+I"+OR+classification:"Class+II"&sort=report_date:desc&limit=8',
  },
  {
    category: "food",
    url: 'https://api.fda.gov/food/enforcement.json?search=classification:"Class+I"&sort=report_date:desc&limit=6',
  },
];

function formatDate(yyyymmdd) {
  if (!yyyymmdd || !/^\d{8}$/.test(yyyymmdd)) return yyyymmdd || "";
  return `${yyyymmdd.slice(0, 4)}-${yyyymmdd.slice(4, 6)}-${yyyymmdd.slice(6, 8)}`;
}

export async function ingest({ userAgent }) {
  const items = [];
  const errors = [];

  for (const ep of ENDPOINTS) {
    try {
      const data = await fetchJson(ep.url, { userAgent, timeoutMs: 20000 });
      for (const rec of data.results ?? []) {
        const recallNum = rec.recall_number || rec.event_id;
        if (!recallNum) continue;
        const firm = (rec.recalling_firm || "Unknown firm").trim();
        const cls = rec.classification || "";
        const url = `https://api.fda.gov/${ep.category}/enforcement.json?search=recall_number:"${encodeURIComponent(recallNum)}"`;
        items.push({
          source: "fda-enforcement",
          type: "dataset",
          title: `[${ep.category.toUpperCase()} ${cls}] ${firm} — ${recallNum}`,
          url,
          published: formatDate(rec.report_date),
          summary: [
            rec.reason_for_recall,
            rec.product_quantity ? `Quantity: ${rec.product_quantity}` : "",
            rec.distribution_pattern ? `Distribution: ${rec.distribution_pattern}` : "",
          ]
            .filter(Boolean)
            .join(" | ")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, 500),
          recall_number: recallNum,
          classification: cls,
          category: ep.category,
        });
      }
    } catch (err) {
      errors.push(`${ep.category}: ${err.message}`);
    }
  }

  if (!items.length && errors.length) {
    throw new Error(errors.join("; "));
  }

  const seen = new Set();
  return items
    .filter((it) => {
      if (seen.has(it.url)) return false;
      seen.add(it.url);
      return true;
    })
    .sort((a, b) => String(b.published).localeCompare(String(a.published)));
}
