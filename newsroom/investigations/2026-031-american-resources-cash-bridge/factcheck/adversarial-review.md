# Adversarial review: american-resources-cash-bridge

Reviewer: fresh subagent (model claude-sonnet), not the drafter. Inputs limited to the skill, the draft, the claim ledger, the evidence files, and the cited URLs.

## Retrieval note

The plain `curl` call with the desk user-agent `ThePrimaryRecord/0.1 (autonomous investigative desk)` returned HTTP 403 from sec.gov ("Undeclared Automated Tool"). A first set of curl output was therefore an SEC error page and contained none of the numbers. I did not treat that as evidence. I re-fetched all three filings with `npm run fetch-doc -- <url> --print`, which retries with a compatible user-agent. Each fetch returned HTTP 200 with the real filing (8-K 102,623 chars; 8-K/A 103,132 chars; 10-K/A 411,217 chars). All checks below are against that text, and I read the 8-K and 8-K/A texts line by line.

## Claims that survive

- C1: The original 8-K Section B 2024 cash-flow column prints accrued expenses (253,547), cash used in operating activities (558,888), net change (460,466), and cash (380,770). Verified.
- C2: The 8-K/A explanatory note reads "filed solely to correct an erroneous reference ... in Item 4.02. No other changes have been made to the original filing, and this amendment does not reflect any events occurring after the date of the original Form 8-K." The "no other changes" sentence is a separate sentence. It is not limited to Item 4.02. Verified.
- C3: The 8-K/A prints accrued expenses (173,851), operating (479,192), net change (380,770), and cash (380,770). Amortization 208,948, related-party lease (129,550), and financing 98,422 are unchanged. Verified.
- C4 arithmetic: 253,547 − 173,851 = 79,696. 558,888 − 479,192 = 79,696. 460,466 − 380,770 = 79,696. 253,547 − 173,852 = 79,695 (original Section B vs Section A) and 173,852 − 173,851 = 1 are also correct as drafted. Verified.
- C5: Section A of both filings prints accrued expenses 544,856 / (173,852) / 371,004 in the 2024 cash-flow statement. A line-by-line diff of the two documents shows no numeric change in Section A. The only Section A change is a date in the intro paragraph (see "Claims that die"). The 10-K/A contains (173,851) and (479,192) and does not contain 253,547, 558,888, or 460,466. Verified: the counts are 0 for the three old figures.
- C6/C7 asset block: 168,907,706 / (50,289,293) / 118,618,413 appear in both current reports and in the 10-K/A. Verified.
- Not a recap. Neither filing says the cash column was changed. The company states the opposite ("no other changes"). The discrepancy is between two company primaries, and the explanatory note does not state it.
- No sentence alleges intent, fraud, or a crime. The "What this does not prove" section says so.
- Same population and period: the same table, the same heading ("Statement of Cash Flows – December 31, 2024", Adjustments column), and the same row labels in both filings.
- Section A vs Section B: the draft treats these as separate objects. That is correct, because Section A is the full statement including discontinued operations and Section B lists "other adjustments." The draft does not claim they should be equal, other than the $1 observation.

## Claims that die or must be rewritten

1. **"The lines beside accrued expenses do not move" and "each of the three changed lines" (C3/C4 framing) are incomplete and misleading by omission.** The diff of the two filings shows other changes in the same Section B that the draft never mentions:
   - Statement of Cash Flows: a new row "Net loss from discontinued operations 134,835" appears in the 8-K/A. "Net income (loss) from continuing operations" changes from (249,904) to (384,739).
   - Statement of Operations, Section B: "Interest expense" and "Total other income (expense)" change from (65,627) to 65,627. The sign flips in both rows.
   - Balance Sheet, Section B: the accrued-expenses reference cell gains an extra "1" in the amendment (`2141a2145`).
   - Section A intro: "filed with the SEC on October 25, 2024" becomes "October 24, 2025". This is a reference correction outside Item 4.02.
   - Item 4.02 text itself drops the 2024 Form 10-K/A from the list of non-reliance filings. This is the stated purpose.
   - The signature date changes from November 24 to November 25.

   Consequence: the "only three lines moved" impression is wrong, and the draft must say that the amendment differs in more than the three cash lines. Most of these additional differences strengthen the finding, because "no other changes" is false on more rows. They also expose a risk to the stated mechanism. The original Section B cash-flow rows did not foot internally. With the printed continuing-operations net income of (249,904), the rows sum to (424,053), not (558,888). Only with (384,739) do they foot to (558,888). Of the 79,696 the draft highlights, the original's accrued-expenses figure was one of several defects in the original table. The draft's lede that the original bridge "ends $79,696 away from the cash line" is arithmetically true but is not the whole account.

2. **Stakes sentence: "Investors told not to rely on two years of financial statements."** The amended Item 4.02 lists only the 2025 Form 10-K and the 2025 10-Qs. It removed the 2024 Form 10-K/A. After the amendment, the filing no longer tells investors not to rely on the 2024 10-K/A. Note 15 still restates 2024 figures. Rewrite to match the amended Item 4.02, or limit the sentence to the November 24 original.

3. **"Does not equal the cash line" implies an error by expectation, not by company statement.** The line is "net change from continuing operations," and the cash line is a total cash adjustment. A communications office would say discontinued operations account for a gap. The documents do not rule this out for the original. The amended figures do equal the cash line, and the company changed the number, so the discrepancy in what the filing says is real. The draft should not present the original as definitively "wrong." Its wording is mostly careful, but "ends $79,696 away from the cash line it prints" in the dek reads as a defect. Soften to "does not equal."

4. **Headline: "moved a $79,696 cash correction"** is vague and arguably wrong. The company replaced a line in a table. It did not "move" a correction. Use "changed three cash-flow figures by $79,696 while saying nothing else changed" or similar. Also amend "three" per item 1.

5. **View: "The damage is in the correction notice."** This is loaded. It is not an allegation of intent, but "damage" is not supported by the documents. Replace with the documented fact ("the notice does not describe this change"). "A reader who took the November 24 bridge as the company's arithmetic has a cash change the company replaced" is acceptable.

## Remaining gaps

- No reconciling record is public explaining why Section B was amended. The draft says this correctly. Nobody should be contacted at the company by the desk, per the hard ban only on named targets of accusations. A neutral request to investor relations for comment is not barred, but is not required.
- Whether "reference" in the explanatory note could be read to cover the Note 15 intro date (Oct 25, 2024 to Oct 24, 2025) is a defensible reading for that one change. It is not a defensible reading for the numeric changes.
- The ledger and evidence file E2 say "The strings 253,547, 558,888, and 460,466 do not appear." Verified for the 8-K/A and the 10-K/A. The evidence file E2 does not record the other diffs listed above. Add them to the evidence log.
- The draft's frontmatter `finding` says "changes from $(253,547) to $(173,851), and the operating-cash and net-change lines move by the same $79,696." This is true but incomplete, per item 1.
- `finding_type: discrepancy` is accurate. The previous piece in this series, if any, should be checked for `record_gap` by the reporter. I did not review it.
- Each `(C#)` in the body matches a declared claim. The ledger numbers C5/C6/C7 differ from the draft numbers C5/C6, because the ledger splits the 10-K/A out as C6 and the draft folds it into C5. Reconcile the ID schemes before `npm run validate`.

## Reporter revision — 2026-11-28

The draft was rewritten after this review. It now states the continuing-operations and discontinued-operations rows, the interest-expense sign, the Item 4.02 omission, and the October date change. The dek no longer treats the original cash lines as a failed footing. The word "damage" is gone. Claim ids in the draft and the ledger are C1 through C8. Publication remains held until 2026-11-30.

## Recommendation

**Draft (do not publish as written).** The core finding survives: the company's own amendment says "No other changes have been made," but the cash-flow column in Note 15 Section B changed. The numbers are character-for-character correct and the arithmetic is right. It is not a recap, and no intent is alleged. The required fixes are text-only and all verifiable from the documents:

1. State all of the Section B changes, not only the three lines.
2. Fix the "two years" sentence in the stakes to match the amended Item 4.02.
3. Soften the dek and headline.
4. Replace "damage."
5. Reconcile claim IDs.

After those edits and a re-run of `npm run validate`, I would recommend publish. No killing objection stands against the core finding. The strongest objection is that the draft undercounts the changes. That mistake is in the company's favor in no way, but it would make the piece inaccurate as published.
