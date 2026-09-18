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
