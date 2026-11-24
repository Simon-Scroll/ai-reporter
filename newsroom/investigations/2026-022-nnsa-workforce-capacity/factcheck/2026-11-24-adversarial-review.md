# Adversarial review: draft-part-2 (FY2026 request vs enacted FTEs), 2026-11-24

Reviewer: fresh subagent, model claude-sonnet. It had no part in drafting. It read the skeptic skill, the draft, the P2C1-P2C4 ledger entries and the three evidence files. It then re-fetched all three sources itself:

- `npm run fetch-doc` on the FY2026 request PDF (sha 4b8797f3..., 9 pages).
- `npm run fetch-doc` on the FY2027 justification (sha 61545468..., 13 pages).
- `curl` on the USAspending snapshot for account 5800.

Every number below was checked against the retrieved text layers, not against the evidence notes.

## Recommendation: DRAFT (do not publish as written)

Every number checks out. The framing does not. The headline subtracts a request from an enacted figure, and those are two different objects by design. The piece's one real same-object discrepancy is FY2025, and the draft buries it. It also never discloses that the same books restate FY2025 office rows in both directions. That restatement undercuts the "headquarters dropped 115" sentence.

## Numbers checked (all pass)

| Draft number | Source text | Result |
|---|---|---|
| $555,000,000; 2,003 FTEs; 1,979 FSE + 24 WCF | FY26 PDF p.1, verbatim | pass |
| Request offices: HQ 1,398; LLNL 69; LANL 76; SNL 81; NV 78; PX 71; Y-12 79; KC 45; SR 82 | FY26 pp.4-6 | pass; sum 1,979 |
| SR 44 to 82, +38; text "38 additional FTEs" | FY26 p.6 and p.3 | pass |
| $525,000,000; 1,846; 1,822 + 24 | FY27 p.2, p.5, p.10 | pass |
| Enacted offices: HQ 1,283; LLNL 64; LANL 73; SNL 82; NV 62; PX 71; Y-12 74; KC 46; SR 67 | FY27 pp.4-5 | pass; sum 1,822 |
| WCF 24 on the FY26 request and on the FY26 enacted column | FY26 p.6 (24); FY27 p.5 (24) | pass |
| 157 (1,979-1,822 and 2,003-1,846); 115 HQ; 73.2% (73.25%) | arithmetic | pass |
| Office deltas in the table (-16, -15, -5, -5, -3, +1, +1, 0) | arithmetic | pass; they sum to -157 with HQ |
| $30,000,000 | 555 minus 525 | pass |
| USAspending: appropriations 525000000.0; balance_brought_forward 24384119.79; budget_authority 549384119.79; name | live JSON | pass, character for character |
| $549,384,119.79 minus $555,000,000 = -$5,615,880.21 | arithmetic | pass |
| FY2025 totals 1,995 (FY26 p.6) vs 1,967 (FY27 p.2 and p.5) | text | pass |
| FY27 explanation: +136, 1,822 to 1,958, total 1,992 | FY27 p.10, p.2 | pass |
| STA and Naval Reactors excluded | FY26 p.2; FY27 p.2 | pass, but see the locator defect below |

No number failed.

## Claims that survive

- C1, C3 and C4 are verbatim. C5's arithmetic is exact.
- C6 survives as USAspending data. Its three figures reconcile with each other.
- C7 survives: the same labeled year has a 28-FTE restatement.
- C8 survives: neither book names a vacancy, separation or failed task.
- The WCF = 24 on both sides point survives. Within this account the whole 157 is in FSE-paid FTEs.

## Claims that die or must be rewritten

1. **Headline and finding: "157 below its request" is not a discrepancy.**
   - A request is a proposal made in June 2025 at $555M. The enacted column is the level at the $525M actually appropriated. They are two stages of the budget process, not two statements about one object.
   - A request 5.4% above the appropriation, with FTEs 7.8% lower, is the ordinary result of appropriating less than requested. The FY27 book's first-page table already prints 1,846 FTEs and $525M for FY2026 enacted.
   - A reader could write this finding from the first page of each book. That fails the skeptic's "careful reader" test and the Phase 2 discrepancy test.
   - `finding_type: discrepancy` is mislabeled. Nothing in either document contradicts the other.

2. **"Headquarters is where 115 of the 157 dropped away."** This fails the same-object test at row level.
   - The later book restates FY2025 by office. Those FY2025 FSE-paid rows sum to 1,974 in the FY26 book and 1,946 in the FY27 book. The restatement moves in both directions:

     | Office | FY26 book, FY2025 | FY27 book, FY2025 |
     |---|---:|---:|
     | HQ | 1,431 | 1,375 |
     | LLNL | 69 | 71 |
     | LANL | 76 | 85 |
     | SNL | 81 | 88 |
     | NV | 78 | 73 |
     | PX | 71 | 74 |
     | Y-12 | 79 | 83 |
     | KC | 45 | 45 |
     | SR | 44 | 52 |

   - HQ is down 56 and the field offices are up 28 net, for the same labeled year. The office rows are therefore not a stable definition across books. Some of the 115 may be re-basing, not change.
   - The draft says the books "use the same nine organizational rows" and never discloses this. Disclosing it is mandatory, or the HQ claim must go.
   - Savannah River: the request itself says "the number of FTEs dedicated to the Savannah River Field Office ... will be based on NNSA mission priorities", so 82 is hedged. The later book restates SR FY2025 as 52, not 44. The -15 is not like-for-like with the request's +38.

3. **"The request says that [82] figure includes 38 additional FTEs."**
   - The text says the request includes funding for 38 additional FTEs at the Savannah River "Operations Office". The table shows +38.
   - Tying 82 to 38 is the reporter's reading. It is probably right, but it is stated as the request's own words. Mark it as inference, or quote both passages.

4. **The $555M / $549.4M budget-authority passage and View paragraph.**
   - The draft does separate appropriation from budget authority, which is correct.
   - But the closing View ("an appropriation line that overstates how far total resources fell", staffing down 157 "beside" nearly flat resources) implies resources stayed whole while staff were cut. That is unsupported:
     - The same snapshot shows obligated $512,307,587.15 and unobligated $37,076,532.64. The draft omits these. Obligations were below the $525M appropriation.
     - The snapshot is a fiscal-year-end API pull of unknown finality. Nothing shows the $24.4M carry-in was available to pay FY2026 salaries, as opposed to FY2025 balances committed to other obligations.
   - The request's $555M is an appropriation and the carry-in is not. Comparing BA to the request is a mixed comparison. The draft labels the numbers but still uses them to editorialize.
   - Cut the View's dollar paragraph, or add obligated and unobligated and say the snapshot's status.

5. **"Positions" and "dropped away."**
   - FTEs are funded full-time-equivalent levels, not posts or headcount. The dek, stakes and View use "positions" and "dropped away", which reads as vacancies or cuts.
   - The enacted column is a budget estimate. The draft's "What this does not prove" disclaims this, but the headline and View contradict that disclaimer. Use "FTEs" and "funded level" throughout.
   - The piece does not actually allege vacancies, firings or mission failure, and that is correct. Wording must stay clear of implying it. GAO separately reports a measured headcount decline (236, to 1,755). The draft's "157 fewer positions" could be read as echoing that, which is the wrong overlap.

6. **Locator defect (C8, C1).**
   - The FY26 locator cites PDF pp. 1, 3, 4, 5 and 6. The STA and Naval Reactors exclusion is on p.2, which is not cited.
   - The "FY2025 enacted 1,995" figure is on p.6 and, as a funding-table line, on p.2. That is fine.
   - `source_ids` for the C3 enacted-appropriation match may need the FY27 p.2 table.

7. **Frontmatter.** The draft has `status: published` and `finding_type: discrepancy`, and the review above says that is wrong. In `drafts/` it should read `status: draft`.

## October-article overlap

- The draft does not mention GAO's 1,755 or the 2,003-vs-1,755 gap, and it does not republish it as the finding. That is correct.
- Coincidence to note, not to publish: the FY2026 enacted rows excluding Savannah River sum to 1,755 (1,283+64+73+82+62+71+74+46). That equals GAO's employee count. It is not an established link. A reporter could pursue it, but this draft must not assert it, and it would be a different piece.
- The October piece was a `record_gap`. This draft claims `discrepancy`, but on the evidence it is an ordinary request-vs-enacted delta.

## Remaining gaps

- Why FY2025 was restated (HQ -56, field +28; total -28). Is it a definitional change, an actuals-vs-estimate true-up, or a transfer? No primary explains it. An NNSA or DOE CFO FTE-methodology note or an FY2026 appropriations explanatory statement might.
- Whether the FY2026 "enacted" 1,846 is an estimate, a plan, or an actual count. The FY27 book does not label it.
- The FY2026 appropriations act or explanatory statement. Neither is in the evidence. Nothing shows how Congress treated the FTE level or the Savannah River transfer.
- The snapshot's finality, and the status of the carry-in (which year's funds, available for what).
- The relation to GAO's 1,755 (see above).

## What a salvage would look like

The only same-object discrepancy here is FY2025. The same account, the same labeled year and the same agency show 1,995 in the June 2025 book and 1,967 in the April 2026 book. HQ is 1,431 vs 1,375, and field rows move both ways. That is a short, measured, defensible piece if the cause is found. It is stronger than the request-vs-enacted piece. The request-vs-enacted table belongs in it as context only, not as the finding.

## Verdict

- Publish: no.
- Draft: yes. Keep the draft in `drafts/`. Fix the finding type and framing, and cite the FY2025 restatement as the lead if the reconciling record is found. Otherwise hold as a short note.
- Kill: no. The numbers are all correct and the FY2025 restatement is a real lead.
- The draft file was not edited.
