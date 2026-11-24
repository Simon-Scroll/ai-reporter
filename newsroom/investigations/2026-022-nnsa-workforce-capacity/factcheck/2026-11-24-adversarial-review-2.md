# Adversarial review 2: draft-part-2 (FY2025 enacted restatement), 2026-11-24

Reviewer: fresh subagent, GPT-5.6 Sol. It had no part in drafting. No further subagent was spawned because this review itself was assigned to a fresh subagent.

I read the skeptic skill, the draft, all three 2026-11-24 evidence files, and the first adversarial review. I independently re-fetched both load-bearing DOE books:

- FY2026 FSE request: sha256 `4b8797f3f10ce7aa936631bbd68b24ccf929e972d091d0e05ee1fb3d46f3ee88`, 9 pages.
- FY2027 FSE justification: sha256 `615454687a9ddea08b365eb047b365d0ed976ac62fb4773f9670d4334b979783`, 13 pages.

The checks below are against those newly retrieved text layers, not the evidence notes.

## Recommendation: PUBLISH

The revised finding survives. It no longer subtracts an FY2026 request from an FY2026 enacted level. Both load-bearing columns are expressly labeled `FY 2025 Enacted`, both are for NNSA's Federal Salaries and Expenses account, and both exclude the Secure Transportation Asset and Naval Reactors program-direction accounts. The later book changes the total and the same nine organizational rows without explaining why.

This is a measured same-object discrepancy, not a record-gap piece and not a recap. `finding_type: discrepancy` is correct.

## Reconciliation search

Neither PDF contains a sentence identifying its FY2025 enacted FTE column as actual usage, an actual workforce count, a later true-up, or a reclassification. Neither explains the 28-FTE difference or the office-row changes.

The potentially confusing passages do not reconcile the finding:

- The FY2026 book explains transfers and changes associated with the **FY2026 request**, including Savannah River FTEs previously funded through Defense Environmental Cleanup. It does not explain why the later book restates the FY2025 enacted Savannah River row from 44 to 52, much less the complete FY2025 rewrite.
- The FY2026 book says FY2025 unobligated carryover was used to maintain the federal staff level. That explains the prior-year-balance offset, not the conflicting FTE rows.
- The FY2027 book's explanation-of-changes section compares **FY2026 enacted** with the **FY2027 request**. It does not discuss the FY2025 column.
- Generic uses of “revisions,” “utilization,” “transfer,” and “adjustments” concern appropriation language, training, support-service responsibility, the later request, or WCF dollars. None concerns the FY2025 FTE restatement.

No reconciling explanation exists in either PDF.

## Number audit

Every challenged number passes character for character.

| Item | FY2026 book, FY2025 enacted | FY2027 book, FY2025 enacted | Result |
|---|---:|---:|---|
| FSE-paid FTEs | 1,974 | 1,946 | pass |
| WCF-paid FTEs | 21 | 21 | pass |
| Total FTEs | 1,995 | 1,967 | pass; difference −28 |
| Headquarters | 1,431 | 1,375 | pass; difference −56 |
| Livermore | 69 | 71 | pass; +2 |
| Los Alamos | 76 | 85 | pass; +9 |
| Sandia | 81 | 88 | pass; +7 |
| Nevada | 78 | 73 | pass; −5 |
| Pantex | 71 | 74 | pass; +3 |
| Y-12 | 79 | 83 | pass; +4 |
| Kansas City | 45 | 45 | pass; 0 |
| Savannah River | 44 | 52 | pass; +8 |

The eight earlier field rows sum to 543; the eight later field rows sum to 571. The field offices therefore net `+28`. Headquarters is `−56`; `−56 + 28 = −28`. Adding headquarters to the field rows reproduces the FSE-paid totals, 1,974 and 1,946. Adding the unchanged 21 WCF FTEs reproduces 1,995 and 1,967.

The dollar figures also pass:

- Both net totals are `$500,000,000`.
- The displayed pre-offset lines are `$527,169,000` and `$521,410,000`.
- Prior-year-balance offsets are `$27,169,000` and `$21,410,000`.
- Both differences are `$5,759,000`, so each pre-offset line still nets to `$500,000,000`.
- `56 / 1,431 = 3.9133...%`, correctly rounded to `3.9%`.

No number failed.

## Same-object test

The objects match on all material dimensions:

- account: NNSA Federal Salaries and Expenses;
- period and stage: FY2025 enacted;
- measure: federal FTEs, split between FSE-paid and WCF-paid;
- organizational population: headquarters plus the same eight field offices;
- exclusions: Secure Transportation Asset and Naval Reactors staff paid through separate program-direction accounts.

The books do not call either FY2025 column actual usage. They present funded FTE levels, not employee headcount. The draft preserves that distinction in “What this does not prove.”

## Claims that survive

- C1 through C5 survive exactly, including every office row and both dollar constructions.
- C6 survives: no explanation of the FY2025 restatement appears, and the exclusions match.
- The headline, dek, finding, and stakes all describe the FY2025 same-stage discrepancy. The disallowed FY2026 request-versus-enacted subtraction appears only in the limitations section as an explicit non-finding.
- The headquarters figure is not too thin to state as a public stake. A 56-FTE, 3.9% restatement at headquarters is twice the net account change because field rows rise by 28. For the federal staff overseeing the nuclear-security enterprise, that distributional rewrite is material enough for a concise discrepancy article.
- `finding_type: discrepancy` is correct.

## Claims that die

None.

## Intent, employment events, and overclaiming

The draft does not allege firings, vacancies, separations, fraud, or intent. It expressly says the funded FTE columns do not identify a person hired, separated, or a post left empty. It also says the 56-FTE headquarters difference is not a 56-FTE account reduction. Those limits are necessary and correctly placed.

The View's statement that readers should stop quoting 1,995 is an argued judgment, not a claim that 1,967 is an actual headcount. The final sentence appropriately warns that a later justification could revise 1,967 again.

## Remaining gaps

- The cause of the restatement remains unknown: the books do not distinguish among correction, methodological change, reallocation, or another cause.
- The documents do not establish actual workforce movement or employee headcount.
- The gross funding line and prior-year-balance offset also changed while the net total stayed fixed, but neither book links those dollar changes to the FTE restatement.

These are disclosed limits, not reasons to kill the finding.

## Verdict

- Publish: **yes**.
- Draft: no fatal revision required.
- Kill: no. The books do not reconcile the discrepancy, and the finding cannot be obtained as a stated conclusion from either book alone.
- The draft was not edited.
