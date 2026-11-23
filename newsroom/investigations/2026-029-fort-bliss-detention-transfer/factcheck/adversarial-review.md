# Adversarial review — 2026-029-fort-bliss-detention-transfer

Reviewer: fresh subagent, model Claude Sonnet (not the drafting reporter). Re-fetched GAO-27-108665 (`fetch-doc --pages 24-32`, sha256 c83e716e... matches the evidence file) and both USAspending award and transaction endpoints on 2026-11-23. FPDS feeds were not re-fetched; they are the same reporting system and add nothing independent.

## Recommendation: KILL as a discrepancy piece. Do not publish. Do not publish the current draft under any wording fix.

## Numbers re-checked against the documents (all match character for character)

- Army W9124J25FA075: total_obligation 253178228.81, base_exercised_options 854490135.68, base_and_all_options 1342742059.48, total_account_obligation 0, account_obligations_by_defc [], 11 offers. Transactions: 231,878,228.81 (2025-07-18), 21,300,000 (2025-08-26), then four $0 actions through 2025-09-23. No deobligation.
- ICE 70CDCR26FR0000001: total_obligation = base_exercised_options = total_account_obligation 598444871.04, outlay 314891675.5, ceiling 1339875022.97, defc Q 598444871.04, termination P00001 on 2026-04-17 with $0 obligation. Description names W9124J25FA075. 11 offers.
- 598,444,871.04 − 253,178,228.81 = 345,266,642.23. Army exercised − Army obligation = 601,311,906.87. Less ICE obligation = 2,867,035.83. Ceiling difference = 2,867,036.51.
- GAO printed p. 25 fn 38 and p. 26 fn 39 say what the evidence file quotes. GAO does not state 253,178,228.81 or the 345 million difference. GAO fn 39 also says ICE "obligated about $598 million", and gives the up-to-one-year settlement window. GAO's own summary does not state the gap, so this is not a recap on that ground.

## Killing objection 1 (decisive): the two obligations are complementary, not conflicting

The draft subtracts one obligation from the other. The records point to addition.

- 253,178,228.81 (Army) + 598,444,871.04 (ICE) = 851,623,099.85.
- Army exercised-options value is 854,490,135.68. The residual is 2,867,035.83.
- The ICE ceiling is the Army ceiling less 2,867,036.51. The two residuals differ by $0.68.

So ICE's obligation is the Army's exercised-but-unfunded remainder (601.3 million) less one adjustment of about 2.87 million. The same adjustment also lowers the ICE ceiling. On this reading, ICE did not restate the Army's 253.2 million. It obligated the rest of the exercised value after the transfer, and the Army file correctly stays at what the Army funded. That is an ordinary administrative-transfer pattern. The two records could therefore be exactly consistent.

The Army and ICE records then jointly account for the exercised value to within 0.3 percent. The unreconciled amount is 2.87 million, not 345.3 million. Calling that "$345 million apart" is an arithmetic choice (the difference of two things that may be sequential tranches), not a measured incompatibility.

The draft's "Obvious other figures do not close the gap" and View sentence "the exercised-options math does not turn one number into the other" are misleading. Near-equality within 0.5 percent, matched by a ceiling difference identical to the cent minus $0.68, is strong evidence that it does. The draft computes the 2,867,035.83 and 2,867,036.51 figures but calls them "not the same number" and never tests the additive reading. C3's literal sentence ("ICE obligation equals none of those figures") is true but hides this.

## Killing objection 2: same-object test fails on scope

Obligation versus exercised value versus ceiling are different scopes, and the draft's pair compares an Army cumulative obligation with an ICE cumulative obligation that may sit on a different fiscal-year appropriation (Army actions are in FY2025; the ICE action is 2025-11-14, FY2026). Nothing in the records shows the ICE amount re-obligates the same dollars. The records are not claimed to be the same population or the same period. The draft concedes that it cannot show the money moved (C5), which removes the only evidence that the two figures describe the same funds.

## Claims that survive (as bare facts only)

- C1 survives in full.
- C2 survives, including the transfer description and the $0 termination change.
- C4 survives, with this fix: GAO's "about $598 million" is ICE's figure, not an independent check on the Army figure.
- C5 survives literally. An empty Army account list is not proof money moved, and the draft says so.
- C3's arithmetic survives (all five numbers verified). Its framing as a "gap" and the inference sentence do not.

## Claims that die

- The title, dek, finding, and stakes ("recorded $345 million apart", "difference is $345,266,642.23", "the gap is $345.3 million on the original contract"). Objection 1: the obligations are additive pieces of the exercised value.
- The Inference paragraph ("one transferred order... a reader cannot rebuild $598,444,871.04 from the Army actions"). A reader can: exercised value 854,490,135.68 minus 253,178,228.81 minus 2,867,035.83. The ICE order's own base_exercised_options field (598,444,871.04) is also not independent of its obligation.
- The View paragraph ("the exercised-options math does not turn one number into the other"; "does not yet show a single funded amount"). A single funded total of 851.6 million (Army + ICE) is derivable.
- Stakes line tying the 345.3 million to GAO's 36 percent. GAO's "over $1 billion" is ICE obligations from October 2025 through June 2026 (598 million + 452 million). The Army's 253.2 million is FY2025 and outside that window, so the 36 percent has no bearing on the Army/ICE comparison.
- finding_type `discrepancy` is inaccurate. There is no measured incompatibility. At most a `record_gap` exists for the 2.87 million residual, which is too small and too technical to meet the Phase 2 "reader outside the niche" bar.

## Claims checked for crime, fraud, or intent

No sentence alleges crime, fraud, double payment, or intent. The draft explicitly disclaims double payment. The headline and stakes nonetheless imply missing or duplicated money to a casual reader, which the documents do not support. This is a framing problem, not a legal one.

## Citation hygiene

C1 to C5 are each declared and cited in the body. Frontmatter has `status: published` for a piece that is not ready. Labels and claim ledger are internally consistent; the failure is in the finding, not the mechanics.

## What a communications office would say, consistent with the documents

"The Army obligated 253.2 million before the transfer. ICE obligated the remaining exercised value, 598.4 million, when it took over administration in November 2025. Together they equal the exercised value less a 2.87 million adjustment. Nothing was paid twice." Every number in the documents fits that statement.

## Remaining gaps

- What the 2,867,035.83 adjustment is (a Army-side expenditure, a de-scoping, a rounding of option values) is not in the records. That is the only open question and it is about $2.9 million.
- The FPDS action-level exercised-option values (75.0M, 28.2M, 498.1M) were not independently re-fetched; they were taken from the evidence file.
- Treasury accounts and the DEFC Q meaning are unexamined, as stated.
- GAO-26-108886 (June 2026), cited by GAO fn 38, was not read and might already explain the transfer funding.
- Termination settlement outcome is unknown (GAO's up-to-one-year window).

## Verdict

KILL the discrepancy as framed. Reopen only if a primary (a modification, the ICE J&A, or GAO-26-108886) shows that ICE's 598.4 million re-obligated the Army's 253.2 million, or if the 2.87 million residual can be tied to a documented, unexplained movement. Absent that, any piece would be a recap of an ordinary transfer with a misleading headline. The reporter should add the additive test (253,178,228.81 + 598,444,871.04 = 851,623,099.85) to the evidence log and gaps.md.
