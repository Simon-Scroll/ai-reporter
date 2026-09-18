# Evidence log

## E1 — GAO-26-109097

- URL: https://www.gao.gov/products/gao-26-109097
- PDF: https://files.gao.gov/assets/gao-26-109097.pdf
- Retrieved: 2026-09-18
- Locator: report pages 2–3, 13–14, and 22–23; Table 3 and footnote d.
- Excerpt: GAO reports 362 terminated DHS grant awards and $1,001,776,785 in total deobligations after termination. Table 3 attributes 111 terminated awards to USCIS and lists $2,342,498 in deobligations; footnote d says GAO's USAspending review showed USCIS deobligated $0 while DHS officials reported $2,342,498. GAO also says FEMA created a January 2026 rolling process under which recommended grants would terminate after five days unless the Secretary intervened.
- Boundary: This source establishes the reported discrepancy and the agency's described process; it does not independently resolve the discrepancy.

## E2 — USAspending award-search API

- URL: https://api.usaspending.gov/api/v2/search/spending_by_award/
- Retrieved: 2026-09-18
- Request locator: POST filters `keywords=["Citizenship and Integration"]`; awarding agency `Department of Homeland Security`; award types `02`, `03`, `04`, `05`, `F001`, `F002`; time period `2025-01-01` through `2026-03-31`; page 1, limit 100.
- Response hash: `fc757405485bafe627208795a5010df673f1db91aef27d86e0699fc9879b142a`
- Excerpt: The API returned `results: []` and `hasNext: false` for the query.
- Boundary: A zero search result is a data-interface observation, not proof that no awards existed. The next step is to search by award identifiers, recipients, component, and alternate date windows.

## E3 — USAspending date-window comparison

- URL: https://api.usaspending.gov/api/v2/search/spending_by_award/
- Retrieved: 2026-09-18T18:27:56Z
- Request locator: POST filters for DHS awarding agency; award types `02`, `03`, `04`, `05`, `F001`, `F002`; keyword `Citizenship and Integration`; page 1, limit 100; response capture SHA-256 `2e0de18f56093358e58500855fd32308d3f57bebae3c9d1cd8e9f5dcfa246cbc`.
- Excerpt: The query returned 12 records for 2024-01-01 through 2026-09-18, six records for 2024-10-01 through 2026-09-18, and no records for either 2025-01-01 through 2026-03-31 or 2025-01-01 through 2026-09-18. The 12 award IDs were `24CICET00384`, `24CICET00383`, `24CICET00371`, `24CICET00365`, `24CICET00362`, `24CICET00360`, `24CICET00351`, `24CICET00348`, `22CICET00215`, `21CICET00203`, `21CICET00200`, and `21CICET00199`.
- Boundary: This establishes a reproducible public-record boundary, not that the terminated awards were never issued or that deobligations did not occur. The endpoint may use period-of-performance, indexing, award-status, or other filters that do not match GAO's termination population.

## E4 — FEMA FY2025 grant notice

- URL: https://www.federalregister.gov/documents/2026/09/10/2026-18419/assistance-to-firefighters-grant-program-fire-prevention-and-safety-grants
- Retrieved: 2026-09-18
- Locator: Federal Register vol. 91, no. 174, pp. 57629–57637; FR Doc. 2026-18419.
- Excerpt: FEMA describes FY2025 AFG and FP&S application and review processes, reports 8,426 AFG applications and approximately 1,800 expected awards plus 758 FP&S applications and approximately 100 expected awards (p. 57629), and says FY2025 funds were available for award through September 30, 2026 (pp. 57629–57630).
- Boundary: The notice concerns AFG and FP&S, not USCIS Citizenship and Integration grants; it is contextual evidence of a current public FEMA process record, not a reconciliation of GAO's USCIS discrepancy.
