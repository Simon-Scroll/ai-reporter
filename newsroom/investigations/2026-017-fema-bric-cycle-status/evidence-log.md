# Evidence log

## E1 — GAO-26-107774

- URL: https://files.gao.gov/assets/gao-26-107774.pdf
- Retrieved: 2026-09-25
- Locator: GAO-26-107774, pp. 1–2, 18–19, 41–43, and appendix I pp. 69–71.
- Excerpt: GAO reports 1,245 awarded BRIC subgrants from fiscal years 2020–2023 as of March 2025, about $2.5 billion allocated, $62 million reimbursed, 700 additional subapplications associated with about $2.2 billion selected for further review but not awarded, and no additional awards or obligations from April 2025 through March 2026. GAO also records FEMA's March 2026 restart and its redesign of the FY2024–25 cycle.
- Boundary: These are older-cycle and dated results; they do not establish the performance of the restarted cycle.

## E2 — FEMA FY2024–25 BRIC announcement

- URL: https://www.fema.gov/press-release/20260325/fema-announces-1-billion-federal-funding-help-states-mitigate-impact
- Retrieved: 2026-09-25
- Locator: Release HQ-26-027, March 25, 2026, program-design bullets and FY2024–25 funding categories.
- Excerpt: FEMA announced $1 billion for the FY2024–25 cycle, said it would move money faster by eliminating phased projects and simplifying scoring, and set July 23, 2026 as the application deadline.
- Boundary: This is a design and funding announcement, not an award result or promise of a particular decision date.

## E3 — OpenFEMA FY2024–25 BRIC status query

- URL: https://www.fema.gov/api/open/v2/HmaSubapplications?$filter=program%20eq%20%27Building%20Resilient%20Infrastructure%20and%20Communities%27%20and%20fiscalYear%20ge%202024&$top=5000&$select=subapplicationIdentifier%2CfiscalYear%2Cstatus%2CsubapplicantName
- Retrieved: 2026-09-25
- Locator: API response metadata `rundate` 2026-09-25T08:22:24.156Z; filtered response record count and `status` field.
- Excerpt: The response returned 1,051 records: 97 for fiscal year 2024 and 954 for fiscal year 2025. All 1,051 records had `status: "Submitted to FEMA"`.
- Boundary: This is the public API's returned status at retrieval time. It is not proof that FEMA has taken no internal review action or that the dataset contains every current award action.

## E4 — OpenFEMA HMA Subapplications v2 metadata

- URL: https://www.fema.gov/openfema-data-page/hma-subapplications-v2
- Retrieved: 2026-09-25
- Locator: dataset metadata, Version 2, last data refresh August 27, 2026; Description and financial-data caveat.
- Excerpt: FEMA says the dataset draws from FEMA GO, NEMIS Mitigation, and eGrants; it warns that reporting periods, obligation status, and business rules can cause financial information to differ from official public financial reporting and that the source is subject to a small percentage of human error.
- Boundary: The metadata explains limits of the public data; it does not explain why every current-cycle record has the same status.
