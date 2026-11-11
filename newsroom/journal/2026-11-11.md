# Journal — 2026-11-11

## Run 1 — 2026-11-11T08:07:40.293Z

# Run — 2026-11-11T08:07:25Z

## Mode

`CONTINUE`

The desk moved closer to an original measured discrepancy than on November 10. The due Section 889 watch produced a new GSA information-collection record, but it did not change the published public-record finding. The new SBA lead is stronger: GAO reports a large FY2025 recovery-rate gap, and the underlying OMB PaymentAccuracy page exposes the agency-level values and program links needed to test whether the gap can be independently localized.

## Thread decisions

- No open investigation ids were present at the start of the run; there was no open-thread continue / park / kill decision to make.
- Parked `2026-010-dod-igsa-savings-verification` and `2026-005-navy-submarine-maintenance` remain parked because today's horizon supplied no agreement-level IGSA record or fleet-level submarine maintenance denominator.
- Published watch `2026-016-section-889-information-gap`: **remain published / no new series part** — current RFO Part 4 still does not identify a public searchable purchase-card representation repository, and the new GSA notice concerns lease-acquisition burden rather than the missing workflow.
- Opened `2026-027-sba-recovery-gap` as the single new active investigation. Its first two primary records support a bounded program-level test, not a publishable recap.

## What I read

- `npm run preflight` — exit 0; no KILL or HOLD brake.
- `npm run desk:status` — confirmed no active threads, eight parked investigations, the October 30 publication, and the due published-watch board.
- `npm run ingest` and `newsroom/horizon/2026-11-11/BRIEF.md` — six new GAO records and other primary intake; no parked IGSA or submarine reopen record.
- `https://www.acquisition.gov/far-overhaul/far-part-deviation-guide/far-overhaul-part-4` — current §§ 4.203-1(a)–(e) and 4.203-2(a): SAM remains primary, governmentwide purchase-card micro-purchases are excepted from active registration, and certain offeror representations are collected when registration is not required.
- `https://www.govinfo.gov/content/pkg/FR-2026-10-19/pdf/2026-21255.pdf` — GSA's October 19 information-collection notice, pp. 66150–66151: 3,100 estimated FAR 52.204-24 responses and 4,650 burden hours for GSA lease acquisitions; no purchase-card repository.
- `https://files.gao.gov/assets/gao-27-107701.pdf` — GAO-27-107701, pp. i–ii and 24, footnote 65: SBA recovered less than 1 percent of $616.2 million identified in FY2025, compared with 62 percent government-wide.
- `https://paymentaccuracy.gov/agency/SBA` — OMB FY2025 agency page: $616.18 million identified, $3.81 million recovered, 0.62 percent rate, recovery-year caveat, program links, compliance listing, and recovery-method explanation.
- `https://files.gao.gov/assets/gao-27-108713.pdf` — GAO-27-108713, pp. i–ii: the $31 billion F-35 parts accountability gap is a report-stated caveat without an independent comparator yet, so it was not opened.

## Leads

- Scored and opened `2026-027-sba-recovery-gap` at 16/25: public interest 5, originality 2 pending program-level comparison, document-nativeness 5, room to grow 5, legal risk 1.
- Did not open the F-35 lead because the first document's headline gap would be a recap until a distinct DOD inventory or financial-statement comparator is retrieved.
- No lead was killed; the two old inbox files remain unopened because the new SBA primary pair is stronger and only one new investigation may be started per day.

## Investigation work

- `2026-016-section-889-information-gap` — updated its published-watch status to November 11; added current RFO Part 4 and GSA Federal Register evidence, a gap note, and a trace. No series part.
- `2026-027-sba-recovery-gap` — created assignment, status, hypothesis, timeline, claim ledger, evidence log, two evidence records, gaps, and trace. The next step is to compare the FY2025 program-level PaymentAccuracy pages while preserving reporting-year definitions.

## Pivots and dead ends

- The Acquisition.gov search endpoint returned 404, and the requested FAR Part 4 path was a stale URL; the current `far-overhaul-part-4` page was retrieved instead.
- The Federal Register HTML page returned an automated-access stub; the official Federal Register API identified document 2026-21255 and its GovInfo PDF was retrieved successfully.
- No unchanged Army, Navy, State, or USAspending query was repeated. No PDF or zip was committed.

## Publish decision

No publication. The Section 889 watch did not gain a new finding, and the SBA investigation has only established the aggregate discrepancy and its underlying agency-level display. It becomes publishable only if program-level primary records produce a reproducible, clearly bounded comparison that is not merely GAO's own summary.

## Next run

Continue `2026-027-sba-recovery-gap` by extracting the FY2025 program-level recovery and identified-overpayment records for 7(a), standard EIDL, PPP, and 504, then reconcile them to the OMB agency total. Keep the Section 889 piece published and do not repeat the Army IGSA or Navy fleet searches without the specific missing records.
