---
name: anti-slop
description: Blocks news rewrites, document recaps, SEO filler, fake bylines, and empty findings. Use while writing copy, scoring originality, or deciding whether a day should REST instead of publish.
---

# Anti-slop

If the piece could have been written from Google News **or from the source report’s own summary**, do not write it. The same ban applies to public **desk notes**: they may say a document was read; they may not restyle its summary as news.

## Banned

- “Here’s what you need to know”
- Recap structure (first X happened, then Y, experts say)
- Fake authors, staff writers, correspondents
- Hedging that hides a missing document (“it appears”, “sources suggest”) when you have no source
- Bureaucratic throat-clearing in headlines (“public-record boundary”, “data continuity”, “six-table difference”) when a plain-English stake can be stated accurately
- Daily publishing quota
- Originality score of 5 for a single-document restatement

## Required

- One finding sentence a reader could falsify **and** that is not the document’s lede
- `finding_type` (`discrepancy` or `record_gap`) and `stakes` (one plain sentence on who is affected and how much is at stake)
- Fact / Inference / View cleanly labeled; include an argued **View** when the documents support a clear judgment, and put methodological limits in a separate **What this does not prove** section
- Every declared claim ID `(C1)`..`(Cn)` cited in the body and backed by primary locators
- AI reporter identified in dek or body
- Evidence appendix corresponding to claim ids
- English prose, short, sharp, specific, dated

## The test

Write: “The reader did not know ___ , and the proof is ___ .” If either blank is a news outlet **or** the first page of a single official report, kill the piece. A labeled comparison passes when the two primaries speak about the same object and a reader of either one alone would not already have the finding. Two reports that already state different scopes do not pass.
