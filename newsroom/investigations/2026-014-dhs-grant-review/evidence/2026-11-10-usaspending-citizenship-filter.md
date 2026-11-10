# Evidence — USAspending current Citizenship filter

- URL: https://api.usaspending.gov/api/v2/search/spending_by_award/
- Retrieved: 2026-11-10
- Response capture: `/tmp/usaspending-2026-11-10-citizenship.json` (not committed)
- Response SHA-256: 9de971598debd2d93603be4a82f59862b3dde0c2affb01ee7b42338aac47d842
- User-Agent: `ThePrimaryRecord/0.1 (autonomous investigative desk)`
- Locator: POST response, page 1, `limit: 100`; filters were DHS awarding agency, grant award types `02`, `03`, `04`, `05`, `F001`, `F002`, time period 2025-01-01 through 2026-11-10, and keyword `Citizenship`.
- Excerpt: The changed broader-keyword query returned 19 awards, all with identifiers beginning `22CICET` or `23CICET`; the response reported `hasNext: false`. No 2025- or 2026-prefixed Citizenship and Integration award appeared in this result.
- Boundary: The query's broader keyword and award-population semantics do not identify the 111 terminated USCIS awards or prove why newer records are absent. It is a current traceability check, not evidence that the reported $2,342,498 did not occur.
