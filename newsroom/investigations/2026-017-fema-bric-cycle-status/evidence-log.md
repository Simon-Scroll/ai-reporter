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

## E5 — FY2024–25 BRIC NOFO

- URL: https://files.simpler.grants.gov/opportunities/bccd8cb3-af60-4773-a5e5-f5a228991289/attachments/fad43c8a-84c5-4baf-9841-cc3aef48c0ed/FY_2024__2025_BRIC_NOFO_FINAL_1.pdf
- Retrieved: 2026-09-26
- Locator: NOFO p. 7, sections K–L; pp. 34–35, sections G and 8.E.
- Excerpt: The application window is March 25 through July 23, 2026, but the anticipated funding-selection and award dates “will vary by award.” After review FEMA assigns one of three statuses, and unsuccessful applicants are notified through FEMA GO and posted on FEMA’s website.
- Boundary: The NOFO provides a process and status framework, not a common award deadline.

## E6 — Grants.gov opportunity listing

- URL: https://simpler.grants.gov/opportunity/bccd8cb3-af60-4773-a5e5-f5a228991289
- Retrieved: 2026-09-26
- Locator: Opportunity listing fields for funding opportunity number, posted date, archive date, and documents.
- Excerpt: The listing identifies DHS-25-MT-047-00-98 and $1 billion in program funding, and shows a March 25 posting date and August 22 archive date. It does not display a current-cycle selection or award result.
- Boundary: The absence of a result on the public listing is not proof that no action occurred inside FEMA GO.

## E7 — FEMA BRIC program page

- URL: https://www.fema.gov/grants/mitigation/learn/building-resilient-infrastructure-communities
- Retrieved: 2026-09-26
- Locator: “Fiscal Years 2024/2025 Funding Opportunity” section in FEMA’s indexed official result.
- Excerpt: FEMA’s page describes the published FY2024–25 opportunity, the July 23, 2026 deadline, and the instruction that prior January 2025 subapplications would not be reviewed. The indexed page does not show a current-cycle selection or award announcement.
- Boundary: The direct page returned HTTP 403 on this run; the indexed official result was used for discovery and corroboration, not as proof that no internal action exists.
