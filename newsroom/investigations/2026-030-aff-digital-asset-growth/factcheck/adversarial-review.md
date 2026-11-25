# Adversarial review — 2026-030-aff-digital-asset-growth

Draft: `newsroom/drafts/aff-digital-asset-growth-rate.md`
Reviewed 2026-11-25. Source: https://oig.justice.gov/sites/default/files/reports/27-009_non508.pdf (sha256 19d043e5...e0e44).

I re-ran `npm run fetch-doc` for PDF pages 30, 51, 53, 55 and 57 and read each extract immediately after each fetch. Every number below was checked against that text, not against the desk arithmetic. I did not re-open PDF p. 2 (the unmodified opinion). C6 rests on the evidence file only.

## Numbers checked against the PDF text

| Item | PDF text | Draft | Result |
|---|---|---|---|
| Exhibit sentence, p. 30 | "Digital assets make up 61 percent ... Balances have increased 494 percent from September 30, 2025 to September 30, 2026" | Same, verbatim | OK |
| Printed page on p. 30 | "25" | 25 | OK |
| Forfeited digital FY26, p. 51 | begin 217,422; end 287,806; liens (886) | 217,422; 287,806 | OK |
| Forfeited total FY26, p. 51 | end 440,917 | 440,917 | OK |
| Forfeited digital FY25, p. 53 | end 217,422 | 217,422 | OK |
| Seized digital FY26, p. 55 | begin 1,872,153; end 10,036,405; liens (3,012,583) | 1,872,153; 10,036,405 | OK |
| Seized total FY26, p. 55 | end 16,495,097 | 16,495,097 | OK |
| Seized digital FY25, p. 57 | end 1,872,153 | 1,872,153 | OK |
| Printed pages | 46, 48, 50, 52 | 46, 48, 50, 52 | OK |
| Units | "Dollars in Thousands" on p. 51 | thousands, then x1,000 | OK, no thousand-vs-dollar error |

Arithmetic, recomputed independently:

- Prior gross digital: 1,872,153 + 217,422 = 2,089,575.
- Later gross digital: 10,036,405 + 287,806 = 10,324,211.
- Increase: 8,234,636, which is 394.082 percent.
- Later as a share of earlier: 494.082 percent.
- 2,089,575 x 5.94 = 12,412,075.5. Minus 10,324,211 = 2,087,864.5 thousand, so $2,087,864,500. OK.
- The category rows foot to the printed totals. Seized: 5,697,688 + 372,340 + 10,036,405 + 50,679 + 337,985 = 16,495,097. Forfeited: 13,216 + 287,806 + 97,030 + 42,865 = 440,917.
- 10,324,211 / 16,936,014 = 60.96 percent, which rounds to 61.

**No number failed.** I found no wrong page, no thousand-vs-dollar slip and no arithmetic error.

## Attack-list results

1. **"Increased 494 percent" vs Note 7.**
   - Read strictly, a 494 percent increase means x5.94. Note 7 gives x4.94, which is a 394.08 percent increase.
   - The printed 494 equals later/earlier = 494.08 percent. It matches within rounding on that reading only.
   - So the draft's description is correct: the sentence is literally wrong as an increase, and it is right as a ratio.
2. **Same population as the 61 percent?**
   - Yes, on the gross (pre-lien) basis. Gross share is 60.96 percent, which rounds to 61.
   - I tested the net-of-liens basis. Net digital is 7,023,822 + 286,920 = 7,310,742, against net total 11,229,067 + 438,412 = 11,667,479. That share is 62.7 percent, which rounds to 63. So net does not match the 61.
   - The draft's inference holds. It is an inference, though. The exhibit does not define "balances", and the draft labels this correctly.
   - Seized-only growth is 536 percent and forfeited-only is 132 percent. Neither gives 494.
   - Net-of-liens digital growth is 326,527 to 7,310,742, about x22.4. This is not 494 either.
   - Item counts (2,026 to 2,573) do not produce it.
   - Only the gross sum gives 494.08, so the identification is tight.
3. **FY26 beginning = FY25 ending?** Yes. Seized 1,872,153 (p. 55 begin = p. 57 end). Forfeited 217,422 (p. 51 begin = p. 53 end). This is verified from the PDF.
4. **Recap of an auditor limitation?** No. The exhibit (p. 30) does not state that 494 is a ratio or that the increase is 394. The piece is not a recap on that axis.
5. **Comms-office response.** See "Claims that die".
6. **Arithmetic, page, units.** Clean (see table).

## Claims that survive

- **C1.** Verbatim exhibit text, p. 30.
- **C2.** All four rows and both tie-outs verified.
- **C3.** Verified.
- **C4.** Arithmetic verified. The 394.1 percent, 494.1 percent and $2,087,864,500 figures are all correct.
- **C5.** 61.0 percent on gross verified. Its labeling as inference is acceptable.
- **C6.** Not independently re-opened (p. 2). The p. 30 text I read does not contradict it. Still, see "Remaining gaps".
- **Body mapping.** Every `(C#)` in the body maps to a declared claim, and every declared claim (C1-C6) is cited. Frontmatter is `status: draft`, which is correct for a draft.
- **Fact/Inference/View labeling.** Adequate. No allegation of intent, crime or fraud, and no named person is identified.

## Claims that die, with the killing objection

1. **Headline and dek: "auditor says 494 percent. The tables show 394 percent."**
   - This is the objection that kills the piece, and the comms-office response is the strongest form of it.
   - The reply "we meant 494 percent of last year's balance" is fully consistent with the documents. The draft itself concedes this ("494 matches the later total as a percentage of the earlier total").
   - So the draft's "discrepancy" is a loose idiom ("increased X percent" used for "is X percent of"), not a conflict between the exhibit and the tables. The numbers agree. The phrasing is imprecise.
   - The headline sets "494" against "394" as if the tables contradict the auditor. They do not. They reconcile exactly, to the rounding.
   - A 5-second correction ("quintupled", "4.9x") makes the story vanish. Nothing is hidden, and no record is missing.

2. **"Stakes": "reading the exhibit as a growth rate overstates the increase by about $2.088 billion."**
   - This is a strawman. No document in the record states a dollar overstatement, uses the 494 to compute dollars, or relies on it for any figure.
   - The $2.088 billion appears only because the reporter built a hypothetical misreading and then priced it.
   - The View's "that is the whole September 30, 2025 balance, counted again" repeats the same construction. It is arithmetic on an imagined reader's error, not a finding about the fund.
   - Under Phase 2 ("a measured discrepancy a reader outside the niche would care about"), a reader outside the niche has no reason to care about a one-word percentage idiom in an auditor's exhibit. The real $2.088 billion is a measure of the reporter's own hypothetical.

3. **Dek, "Seized and forfeited digital assets ... grew from $2.090 billion to $10.324 billion."**
   - The numbers are correct, but the dek presents gross pre-lien values as the balance, while liens are material.
   - The seized digital line carries $3.01 billion of liens and claims in FY26 and $1.76 billion in FY25. Net-of-liens digital was only $109.9 million at FY25 seized (pp. 55, 57).
   - The draft acknowledges "before liens" only in the last section. The dek and headline give the gross figure as the stock without saying so up front.
   - Downgrade to "gross, before liens" in the dek, or remove the dollar framing.

## Remaining gaps

- **Context omission.**
  - The p. 30 sentence sits in the "Material Weakness" section, "Improvements Needed in Internal Controls Over Digital Assets". The draft calls it "the internal-control exhibit" and says the piece does not treat the control discussion as its finding.
  - A material weakness on digital assets (private-key generation, misappropriation of 51 virtual-currency assets, valuation date errors; PDF p. 30 and fn. 2 on pp. 51 and 55) is the substantive story in the same exhibit. A piece nitpicking a percentage idiom in that section reads as missing the point.
  - Whether the control findings are themselves already covered elsewhere was not checked.
- **Wording intent not testable.**
  - Whether KPMG, DOJ or the OIG drafted the sentence is not established. The draft attributes it to "KPMG's exhibit" and "the auditor". I did not verify the authorship attribution (p. 2 or the report cover were not re-opened).
  - The p. 30 text says "our discussion", which supports an auditor voice, but it does not name KPMG on that page.
- **No second primary.** Only one document is used. There is no AFF/SADF management or Department response, and no earlier-year exhibit showing how a prior percentage was phrased. Nothing tests whether this is a pattern or a one-off.
- **Does the 494 recur elsewhere in the report?**
  - I did not check whether the same figure appears in the OIG summary or the management response.
  - If it appears with "increase" language elsewhere and the Department uses it, that would extend the reach.
  - If it appears with ratio language, the piece dies on its own terms.
- **No prior-piece check.** `finding_type: discrepancy` is the declared type. I was not given the published list, so I did not check whether the preceding published piece was a `record_gap`.
- **No public-interest hook.** There is no downstream use of the 494 figure by anyone (press, Congress, Department) that the draft documents.

## Recommendation

**Draft. Do not publish.** As a standalone investigation, I would kill it.

- The numbers are all right. The finding does not survive the comms-office response, which is exactly consistent with the documents.
- The headline and the "stakes" frame a reconciling idiom as a discrepancy and price a hypothetical misreading in dollars.
- It could be salvaged only as a short desk note or correction-style item, or if the reporter finds an actual consumer of the 494 as a growth rate.
- Otherwise the desk's time is better spent on the substantive material weakness in the same exhibit (keys, custody validation, valuation dates) if there is a primary-source discrepancy there.

## Who reviewed

Fresh subagent, model claude-sonnet-5-5-medium. It has not seen the investigation beyond the five listed files and the re-fetched PDF pages. I did not edit the draft or publish anything.
