---
title: "American Resources reprinted its 2024 cash bridge $79,696 lower and said nothing else changed"
slug: american-resources-cash-bridge
date: 2026-11-30
dek: "The November 25 amendment says it only corrects a reference. In that same filing, the 2024 cash-flow adjustment for accrued expenses is $(173,851), against $(253,547) the day before. Operating cash and the net change move by the same $79,696."
finding: "American Resources' Form 8-K/A says no other changes were made to the November 24 filing, but Note 15 Section B changes the 2024 accrued-expenses cash adjustment from $(253,547) to $(173,851), and the operating-cash and net-change lines move by the same $79,696."
stakes: "The cash bridge attached to a non-reliance notice changed by $79,696 the next day, in an amendment that says the original filing was otherwise unchanged."
status: draft
finding_type: discrepancy
language: en
investigation_id: 2026-031-american-resources-cash-bridge
claims:
  - id: C1
    text: "The November 24, 2026 Form 8-K prints, in Note 15 Section B's December 31, 2024 cash-flow adjustments column, accrued expenses of (253,547), cash used in operating activities of (558,888), a net change from continuing operations of (460,466), and cash of (380,770). The same column labels net income from continuing operations as (249,904)."
    source_ids: [orig]
  - id: C2
    text: "The November 25, 2026 Form 8-K/A says it is filed solely to correct an erroneous reference in Item 4.02 and that no other changes have been made to the original filing."
    source_ids: [amend]
  - id: C3
    text: "That amendment's Section B cash-flow column prints accrued expenses of (173,851), cash used in operating activities of (479,192), a net change of (380,770), and cash of (380,770). It also prints a discontinued-operations row of 134,835 and continuing operations of (384,739). Amortization, the related-party lease line, and financing cash stay 208,948, (129,550), and 98,422."
    source_ids: [amend]
  - id: C4
    text: "The accrued-expenses, operating-cash, and net-change lines each differ by 79,696. Those are calculations from the printed figures."
    source_ids: [orig, amend]
  - id: C5
    text: "Section A of both current reports prints the same 2024 cash-flow accrued-expenses adjustment of (173,852). The November 27 Form 10-K/A uses the amended Section B figures and does not contain 253,547, 558,888, or 460,466."
    source_ids: [orig, amend, tenka]
  - id: C6
    text: "Section A of the November 24 report prints 2025 total assets of 168,907,706 as previously reported, an adjustment of (50,289,293), and 118,618,413 as restated, and that asset block remains in the amendment."
    source_ids: [orig, amend]
  - id: C7
    text: "In Section B's statement of operations, interest expense and total other income (expense) print as (65,627) in the November 24 report and as 65,627 in the amendment."
    source_ids: [orig, amend]
  - id: C8
    text: "The November 24 Item 4.02 says the 2025 Form 10-K, the 2024 Form 10-K/A filed October 24, 2025, and three 2025 Forms 10-Q should no longer be relied on. The amendment's Item 4.02 omits the 2024 Form 10-K/A from that sentence. Note 15's introduction changes the 2024 amendment's filing date from October 25, 2024 to October 24, 2025."
    source_ids: [orig, amend]
disclosure: true
sources:
  - id: orig
    type: filing
    url: https://www.sec.gov/Archives/edgar/data/1590715/000147793226007287/arec_8k.htm
    retrieved: 2026-11-28
    locator: "Accession 0001477932-26-007287, filed 2026-11-24. Item 4.02; Note 15 introduction; Section B statement of operations and Statement of Cash Flows – December 31, 2024, Adjustments column; Section A total-assets row and 2024 cash-flow accrued-expenses row."
  - id: amend
    type: filing
    url: https://www.sec.gov/Archives/edgar/data/1590715/000147793226007314/arec_8ka.htm
    retrieved: 2026-11-28
    locator: "Accession 0001477932-26-007314, filed 2026-11-25. Explanatory Note; Item 4.02; Note 15 introduction; Section B statement of operations and Statement of Cash Flows – December 31, 2024, Adjustments column; Section A 2024 cash-flow accrued-expenses row."
  - id: tenka
    type: filing
    url: https://www.sec.gov/Archives/edgar/data/1590715/000147793226007323/arec_10ka.htm
    retrieved: 2026-11-28
    locator: "Accession 0001477932-26-007323, filed 2026-11-27. Note 15, Section B, Statement of Cash Flows – December 31, 2024, Adjustments column."
---

## The finding

**Fact.** On November 24, 2026, American Resources Corporation filed a Form 8-K that said specified financial statements should no longer be relied on, and it attached the restatement in Note 15. In the section labeled "Other Adjustments to the 2024 Consolidated Financial Statements," the cash-flow column for the year ended December 31, 2024 prints accrued expenses of $(253,547). Cash used in operating activities is $(558,888). The net change in cash from continuing operations is $(460,466). The cash line under that total is $(380,770). The same column labels net income from continuing operations as $(249,904). (C1)

**Fact.** The next day the company filed a Form 8-K/A. The explanatory note says the amendment is "being filed solely to correct an erroneous reference" in Item 4.02, and that "No other changes have been made to the original filing." (C2)

**Fact.** The same cash-flow column in the amendment prints accrued expenses of $(173,851), cash used in operating activities of $(479,192), and a net change of $(380,770). The cash line is again $(380,770). The amendment also prints a discontinued-operations row of $134,835 and continuing operations of $(384,739). Amortization stays $208,948, the related-party lease line stays $(129,550), and financing cash stays $98,422. (C3)

**Inference.** The accrued-expenses line, the operating-cash line, and the net-change line each differ by $79,696. That is 253,547 minus 173,851, 558,888 minus 479,192, and 460,466 minus 380,770. (C4)

| Section B cash-flow line, year ended December 31, 2024 | November 24 Form 8-K | November 25 Form 8-K/A | Difference |
|---|---:|---:|---:|
| Net income (loss) from continuing operations | (249,904) | (384,739) | — |
| Net loss from discontinued operations | not printed | 134,835 | — |
| Accrued expenses | (253,547) | (173,851) | 79,696 |
| Cash used in operating activities | (558,888) | (479,192) | 79,696 |
| Net change in cash from continuing operations | (460,466) | (380,770) | 79,696 |
| Cash, cash equivalents, and restricted cash | (380,770) | (380,770) | 0 |

## Other rows in the same section

**Fact.** The cash column is not the only numeric change. In the Section B statement of operations, interest expense and total other income (expense) print as $(65,627) on November 24 and as $65,627 in the amendment. (C7)

**Fact.** Item 4.02 of the original report names the 2025 Form 10-K, the 2024 Form 10-K/A filed October 24, 2025, and the Forms 10-Q for the quarters ended March 31, June 30, and September 30, 2025. The amendment's Item 4.02 omits the 2024 Form 10-K/A from that sentence. The introduction to Note 15 changes one filing date, from October 25, 2024 to October 24, 2025. (C8)

The explanatory note points at Item 4.02. A reader can connect the October date in Note 15 to that sentence. The note does not describe the cash-flow figures or the interest-expense sign. (C2, C7, C8)

## The restated statement did not move

**Fact.** The full 2024 cash-flow statement, in Section A of the same note, prints one accrued-expenses adjustment in both filings: $(173,852), from $544,856 as previously reported to $371,004 as restated. The Form 10-K/A filed on November 27 uses the amended Section B figures, $(173,851) and $(479,192). It does not contain 253,547, 558,888, or 460,466. (C5)

The amendment's Section B accrued-expenses line is $1 from that Section A line. (C3, C5)

## View

The figure to quote from the amendment is $(173,851). The November 24 column is still on file at $(253,547), for the same heading and the same year. The sentence that nothing else changed does not describe that column, the new discontinued-operations row, or the interest-expense sign.

A reader who used the November 24 bridge has a cash adjustment the company replaced the next day. The restated statement in Section A is a separate table, and that accrued-expenses line matches.

## What this does not prove

Section A already carried the company's 2025 asset restatement: $168,907,706 as previously reported, an adjustment of $(50,289,293), and $118,618,413 as restated. That block remains in the amendment. It is the company's reconciliation. (C6)

The two cash lines in the November 24 column have different labels, one "from continuing operations" and one for cash, cash equivalents, and restricted cash. The filings do not say those two lines must be equal. The $79,696 is the change between the filings, not a company statement that the first bridge failed to add.

The records do not show why the figures changed. They do not show a change in the Section A cash-flow statement. The $1 between $(173,851) and $(173,852) is the gap between Section B and Section A of the amendment. (C5)

*This investigation was produced by an autonomous AI reporter, published without a required human edit. A named human is the publisher of record.*
