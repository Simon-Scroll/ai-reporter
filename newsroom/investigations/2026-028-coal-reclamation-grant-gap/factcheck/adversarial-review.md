# Adversarial review — second pass

## Recommendation

**Recommendation after correction: PUBLISH, subject to validation.**

The central difference and the 57.7% share survive. The reporter corrected the six-year gross totals from $215,748,017/$175,332,122 to $254,748,017/$214,332,122, replaced “received” with “final distribution designations,” and made the fixed-panel and excluded-grant caveats explicit. The narrow original contribution remains the desk's state-level aggregation across six OSMRE tables and its comparison of that aggregate with GAO's permit count; GAO's permit concentration and national trend are not presented as new findings.

## Source check

I reopened all eight cited official PDFs on 2026-11-14 with `npm run fetch-doc -- <url>`. Their SHA-256 hashes matched the evidence records. The load-bearing locators checked directly were:

- GAO-27-107499, pp. 14–15 and Appendix II, Table 5, pp. 39–40: 5,247 permits nationwide; Kentucky 1,565, Pennsylvania 935, and West Virginia 1,758; GAO itself says those states collectively manage more than 80% (4,258) of all permits.
- GAO-27-107499, pp. 24–25: GAO itself says the national recommendation-to-distribution gap increased from $4.2 million in FY2021 to $16.7 million in FY2026 and reports that most programs received less than 80% of the recommended amount in FY2026.
- Each FY2021–FY2026 OSMRE one-page table: the three selected state rows, totals row, and footnotes.
- OSMRE Federal Assistance Manual, printed p. H-2, §5-100-40(A)–(D): a distribution designates funds but does not award or provide them; when funds do not cover total needs, OSMRE distributes available funds as equitably as possible; an eventual award still depends on an application and review.

## Claims that survive

### Permit count and share

GAO's locators support 1,565 Kentucky permits, 935 Pennsylvania permits, and 1,758 West Virginia permits. These sum to 4,258. Against GAO's national 5,247 total, the desk calculation is 81.15%, correctly rounded to 81.2%. C1 has a primary locator.

This is not itself a new finding. GAO states in its main text that the same three states collectively manage over 80% (4,258) of the national total. The draft does not conceal that fact, but the title's first half is GAO's headline, not desk reporting.

### Annual three-state figures

The six annual rows in the draft reproduce the selected state rows correctly:

| FY | Recommendation | Final distribution | Difference |
|---|---:|---:|---:|
| 2021 | $40,015,563 | $37,540,156 | $2,475,407 |
| 2022 | $39,258,634 | $36,454,528 | $2,804,106 |
| 2023 | $42,801,862 | $36,534,536 | $6,267,326 |
| 2024 | $45,441,007 | $35,114,270 | $10,326,737 |
| 2025 | $43,430,020 | $35,141,444 | $8,288,576 |
| 2026 | $43,800,931 | $33,547,188 | $10,253,743 |

The annual differences sum to $40,415,895. That difference survives even though the draft's two gross six-year totals do not.

### National denominator and 57.7% share

The six printed table totals sum to $457,163,311 recommended and $387,090,000 distributed, a $70,073,311 difference. Dividing the surviving three-state difference of $40,415,895 by $70,073,311 gives 57.68%, correctly rounded to 57.7%.

This is genuinely additional analysis in the limited sense that GAO does not state this six-year, three-state share. It is not a new discovery that these three states dominate the permit count, that federal distributions fell, or that the recommendation-to-distribution gap widened; GAO states all of those propositions. The publishable contribution, if retained, is the reproducible cross-document aggregation.

### FY2026 coverage

The FY2026 state rows support 77.6% for Kentucky, 75.8% for Pennsylvania, and 76.1% for West Virginia. The stated dollar differences of $3,840,276, $3,778,176, and $2,635,291 are also exact. C4 has a primary locator.

### Manual caveat

The manual locator is exact: printed p. H-2, §5-100-40(A)–(D). It supports both the distinction between a distribution designation and an award and the equitable-distribution language. C5 has a primary locator.

### No causal-harm claim

The body expressly says the comparison is geographic, not causal; identifies other grants, state funds, fees, and later awards as possible reconciling sources; and disclaims any established inspection, reclamation, environmental, or operational harm. It does not allege intent, misuse, crime, fraud, or a proven harmful outcome.

## Claims that die

### C2's gross six-year totals are false

The draft says the selected-state recommendations total **$215,748,017** and final distributions total **$175,332,122**. Direct addition of the six annual rows gives:

- recommendations: **$254,748,017**
- final distributions: **$214,332,122**
- difference: **$40,415,895**

Both published gross totals are understated by exactly $39,000,000. The difference happens to remain correct because the same error was applied to both sides. C2 cannot survive as written, and the matching sentence in the frontmatter claim list also dies.

**Correction check.** The draft and evidence record now state the corrected gross totals, and the claim ledger maps C2 to the six state-row locators.

### “Received $40.4 million less” overstates what the records show

The dek says the three states “received $40.4 million less than their regional recommendations.” The manual says a distribution does not actually award or provide funds. The tables establish that final **distribution designations** were $40.416 million below regional recommendations when annual differences are summed; they do not establish award receipts or usable-funds shortfalls. The body later supplies this caveat, but that does not cure the unsupported verb in the dek.

## Objections that remain

### The denominator is arithmetically valid but not a fixed six-year population

The $70.073 million denominator is the sum of the totals printed in six annual tables, not a stable cohort of identical programs:

- Oklahoma has a recommendation and distribution in FY2021.
- FY2022 says Oklahoma submitted no estimate and separately excludes regulatory or development grants that might be made to entities regulating Indian lands.
- FY2023–FY2026 identify Oklahoma as ineligible for development or regulatory grants and print dashes or zeros.
- FY2022 separately says its distribution does not include Tennessee's program-development grant.

The draft notes Oklahoma and Tennessee, which is an improvement, but “those changes affect the national six-table comparison” is too compressed. The caveat should make clear that the denominator mixes annual program populations and excludes separately treated grants; it is a sum of each table's published universe, not six observations of one constant universe. The Tennessee grant must not be suggested to be part of the same primary state regulatory-grant series.

### “Six-year grant gap” can still sound like accumulated debt

The body explicitly says the figure is “not an accumulated debt or money lost,” which is accurate and necessary. The headline and dek appear before that qualification. “Six-year grant gap” and especially “received ... less” can still invite a debt or deprivation reading. The defensible description is “the sum of six annual recommendation-to-distribution-designation differences.” No record reviewed establishes a continuing obligation to make up prior annual differences.

### The novelty is narrow

A careful reader can get the following directly from GAO's main text: the same three states manage over 80% of permits; federal regulatory distributions declined from FY2021 to FY2026; the national recommendation-to-distribution gap rose from $4.2 million to $16.7 million; and most programs received less than 80% of recommended amounts in FY2026. Those are recap, not findings.

The article survives the recap objection only because GAO does not publish the $40.416 million six-year selected-state sum or its 57.7% share of the six-table difference. The draft must consistently present that calculation—not GAO's permit concentration or endpoint trend—as the finding.

### Juxtaposition is not causation

Putting an 81.2% permit share beside a 57.7% share of annual distribution differences may suggest that permit count is the relevant measure of regulatory need or that the difference caused deficient oversight. GAO expressly cautions that permit counts do not correlate with acreage or coal production, and OSMRE recommendations derive from submitted program budgets. The draft's causal disclaimers prevent an affirmative false claim, but the comparison remains descriptive; it does not establish proportional underfunding, adequacy, or harm.

### C6 is a review-scope conclusion, not a source-stated fact

The negative conclusion that the reviewed records do not establish a particular failure is reasonable and important, but no single cited locator can prove the absence of every causal record. It should remain framed as the limit of the records reviewed, not as a freestanding positive fact attributed to GAO or OSMRE.

## Primary-locator audit

- C1: survives; GAO pp. 14–15 and Table 5, pp. 39–40.
- C2: all six annual row locators are primary and sufficient, but the gross totals calculated from them are wrong.
- C3: survives arithmetically; each table's totals row is the primary locator. Its “not debt or money lost” language is a limitation, not a source quotation.
- C4: survives; FY2026 state rows.
- C5: survives; annual footnotes plus manual p. H-2, §5-100-40(A)–(D).
- C6: acceptable only as a bounded statement about the reviewed record; the broad source list is not a locator for universal non-causation.

## Remaining gaps before publication

1. Correct both false selected-state gross totals everywhere they appear.
2. Replace “received” with language about final distribution designations and keep the no-debt qualification prominent.
3. Explain that the denominator sums each year's printed universe rather than a fixed panel; distinguish the Tennessee development grant from the primary regulatory-grant distribution and state Oklahoma's eligibility change.
4. Keep the originality claim narrow: the 57.7% six-year state-level aggregation is the desk finding; GAO already supplied the permit concentration and national trend.
5. Preserve the no-causation language and avoid implying that permit count measures need, underfunding, or harm.

## Reviewer

Fresh subagent: **GPT-5.6 Sol**. This reviewer had not participated in drafting and used only the skeptic skill, the updated draft, claim ledger, evidence log, every investigation evidence file, and the cited official source documents.
