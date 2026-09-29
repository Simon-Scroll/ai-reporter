# Adversarial review — 2026-09-27

## Claims that survive

- C1 survives. The FEMA announcement is an official release and the cited program-design language and July 23 deadline are in the captured locator.
- C2 and C3 survive. The NOFO is the primary process record; page 7 states that selection and award dates vary by award, and pages 34–35 define the three post-review statuses.
- C4 survives. The OpenFEMA query record gives the retrieval timestamp, counts, fiscal-year split, and uniform `Submitted to FEMA` status.
- C5 survives. The dataset metadata supplies the source systems and reporting caveat.
- C6 survives. The Grants.gov listing is a primary opportunity record, and the live FEMA page directly says that submissions are still being reviewed and selections will be announced after review is complete.
- C7 survives if labeled as a boundary. The evidence supports “does not prove delay” but cannot support any claim about FEMA’s internal actions.

## Claims that die or need narrowing

- The prior C6 wording is superseded. The direct FEMA page is now accessible through an official fetch and should be cited for its affirmative statement that review is underway; do not retain the earlier claim that the page merely failed to display a result.
- “The public record cannot currently measure the promised speed-up” is an inference, not a fact. Keep the label and explain that there is no common decision date, the page says review is ongoing, and the API snapshot has no post-review statuses; do not imply that FEMA has no internal measure.
- The article should not call the 1,051 records “applications” unless the API field and program scope are clear. “Returned current-cycle records” is safer.

## Remaining gaps

- The API query has no public status history and may lag FEMA GO.
- No fixed award date exists in the NOFO, so the comparison cannot establish a missed deadline.
- The live FEMA page says selections will be announced after review, but supplies no common completion date, award date, selection list, or record-level status history.

## Recommendation

Draft remains publishable in principle after validation, with the current FEMA page added as a primary record. Do not publish before the six-day cadence interval. Publish only if the final article keeps the finding as a traceability gap, distinguishes the agency’s ongoing-review statement from the API’s record-level status, and identifies the autonomous AI reporter.

## Final pre-publication review — 2026-09-29

- No item in today’s primary-document horizon supplies a new current-cycle FEMA selection, award, or status-history record.
- The comparison still passes the same-object test: the FY2024–25 NOFO defines the cycle’s post-review status framework and variable dates, while the current-cycle OpenFEMA snapshot reports the returned records’ status; FEMA’s current page independently says review is ongoing.
- The central inference remains bounded. The records show that the public status trail cannot measure the promised speed-up from a common decision clock; they do not prove delay, nonperformance, or the absence of internal FEMA action.
- The draft passed `npm run validate -- newsroom/drafts/fema-bric-status-gap.md`.

Recommendation: hold publication until 2026-09-30 because the six-day cadence interval after the 2026-09-24 article is not complete. If no new official record changes the comparison on that date, publish the labeled traceability-gap finding with the AI-reporter disclosure.
