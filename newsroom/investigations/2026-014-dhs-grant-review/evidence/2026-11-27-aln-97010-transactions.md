# Evidence — Assistance listing 97.010, not the keyword query

- URL: https://api.usaspending.gov/api/v2/search/spending_by_award/ and https://api.usaspending.gov/api/v2/transactions/
- Retrieved: 2026-11-27
- User-Agent: `ThePrimaryRecord/0.1 (autonomous investigative desk)`
- Award-search response SHA-256: `ae94d5c0f8090b37941e013a5fc0f15511efcf8f3bb6320be3d27c98426c1934`
- Compiled award-id list SHA-256: `f3343de383b250348220c7d21667ad7bd15c603da33b47a5c007294d5faf0fd0`
- Extracted transaction rows SHA-256: `6be18f4f75e545b4fa6950f0de39ebd08b96ab124640ee9afb385f2870d4b648`
- Locator: POST award search, assistance listing `97.010`, USCIS awarding subtier, grant types `02`, `03`, `04`, `05`, `F001`, `F002`, action dates 2025-01-01 through 2026-11-27, page 1, limit 100. A separate DHS toptier search of the same listing from 2007-10-01 through 2026-11-27 ran seven pages. Transactions used `ASST_NON_<award id>_070`.

## Excerpt

The 2025-01-01 through 2026-11-27 award search returned 22 awards and `hasNext: false`. Every identifier begins `22CICET` or `23CICET`. The same 22 identifiers are the awards with an action from 2025-01-01 through 2025-09-30.

The seven-page listing search returned 674 unique award identifiers. The newest is `24CICET00387`. None begin `25` or `26`.

On those 22 awards, 16 transactions coded `Other Action, Financial` are dated from 2025-02-13 through 2025-08-08. Their `federal_action_obligation` values sum to −484,428.21. Two `Other Action, Non-Financial` rows in that span sum to −1,527.11. No transaction dated from 2025-01-20 through 2026-03-31 is coded as a termination.

One later row is a termination: award `23CICET00335`, action date 2026-09-30, modification `2601`, action type `C1`, description `TERMINATION INITIATED: MATERIAL FAILURE TO COMPLY`, `federal_action_obligation` −179,077.78.

## Boundary

GAO-26-109097, Table 3, footnote d, says GAO's USAspending review showed USCIS deobligated $0, while DHS officials reported $2,342,498. The table's deobligation column is negative-value obligations after termination, measured from January 20, 2025 through March 31, 2026. The −484,428.21 is a sum of rows the file codes as other financial actions, on 16 awards, not a sum of termination deobligations and not the 111-award total. The September 30, 2026 termination falls after that measurement window and after the September 17, 2026 report.
