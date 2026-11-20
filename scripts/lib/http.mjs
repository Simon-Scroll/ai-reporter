const DEFAULT_UA = "ThePrimaryRecord/0.1 (autonomous investigative desk)";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchText(
  url,
  { userAgent = DEFAULT_UA, timeoutMs = 25000, retries = 1 } = {},
) {
  let lastErr;
  for (let attempt = 0; attempt <= retries; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetch(url, {
        headers: {
          "user-agent": userAgent,
          accept: "application/atom+xml, application/rss+xml, application/json, text/xml, */*",
        },
        signal: controller.signal,
      });
      if (!res.ok) {
        const err = new Error(`${res.status} ${res.statusText} for ${url}`);
        if (res.status < 500) err.retryable = false;
        throw err;
      }
      return await res.text();
    } catch (err) {
      lastErr = err;
      if (err.retryable !== false && attempt < retries) {
        await sleep(1000 * (attempt + 1));
        continue;
      }
      throw err;
    } finally {
      clearTimeout(timer);
    }
  }
  throw lastErr;
}

export async function fetchJson(url, opts) {
  const text = await fetchText(url, opts);
  return JSON.parse(text);
}

export function xmlText(block, tag) {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
  if (!match) return "";
  return decode(match[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")).trim();
}

export function xmlAttr(block, tag, attr) {
  const match = block.match(new RegExp(`<${tag}[^>]*${attr}="([^"]+)"`, "i"));
  return match ? decode(match[1]) : "";
}

function decode(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'");
}
