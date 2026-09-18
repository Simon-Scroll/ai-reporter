# Evidence E3 — USAspending window comparison

- URL: https://api.usaspending.gov/api/v2/search/spending_by_award/
- Retrieved: 2026-09-18T18:27:56Z
- Response capture: `/tmp/usaspending-run4.json`
- Response SHA-256: `2e0de18f56093358e58500855fd32308d3f57bebae3c9d1cd8e9f5dcfa246cbc`
- User-Agent: `ThePrimaryRecord/0.1 (autonomous investigative desk)`

## Request

POST JSON, with `subawards: false`, `page: 1`, and `limit: 100`:

```json
{
  "filters": {
    "time_period": [{"start_date": "2024-01-01", "end_date": "2026-09-18"}],
    "award_type_codes": ["02", "03", "04", "05", "F001", "F002"],
    "agencies": [{"type": "awarding", "tier": "toptier", "name": "Department of Homeland Security"}],
    "keywords": ["Citizenship and Integration"]
  },
  "fields": [
    "Award ID", "Recipient Name", "Awarding Agency", "Award Type",
    "Period of Performance Start Date", "Period of Performance Current End Date",
    "Total Award Amount", "Total Outlayed Amount"
  ]
}
```

The same request was run with these date windows:

- `2024-01-01` through `2026-09-18`: 12 results; award IDs `24CICET00384`, `24CICET00383`, `24CICET00371`, `24CICET00365`, `24CICET00362`, `24CICET00360`, `24CICET00351`, `24CICET00348`, `22CICET00215`, `21CICET00203`, `21CICET00200`, and `21CICET00199`.
- `2024-10-01` through `2026-09-18`: 6 results; all six begin `24CICET`.
- `2025-01-01` through `2026-03-31`: 0 results.
- `2025-01-01` through `2026-09-18`: 0 results.
- `2025-10-01` through `2026-09-18`: 0 results.

An additional search with the same agency, award-type, and `2024-10-01` through `2026-09-18` window returned 100 broad DHS grant records on page 1, including `EMW-2026-WC-05008` and `EMW-2025-UA-05055`; its `page_metadata.hasNext` value was `true`.

## Why it matters

The public endpoint is not globally empty for DHS grants or for the Citizenship and Integration keyword. It returns older program records but no matching result when the search window begins in 2025. That reproduces the public-record boundary relevant to GAO's 2025 termination population while leaving open whether the cause is reporting date, keyword indexing, award status, or an incomplete public record.
