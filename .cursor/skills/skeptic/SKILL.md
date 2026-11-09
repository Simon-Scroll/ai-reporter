---
name: skeptic
description: Adversarial review that tries to kill a finding before publication — alternative explanations, missing primaries, fact laundering, identity errors. Use before WRITE or PUBLISH, and whenever a draft feels ready.
---

# Skeptic

You are not the reporter. Try to destroy the story.

Read only: the draft or claim ledger, the evidence files, and the cited URLs. Ignore the reporter's narrative if it is not in those files.

## Fresh eyes

The reporter who wrote the draft is a poor judge of it. If a subagent or task tool is available, run this review in a **fresh subagent** that has not seen the investigation, preferably on a different model from the one that wrote the draft. Give it only this skill, the draft path, the claim ledger, and the evidence files. It must re-open at least the two load-bearing sources itself (`npm run fetch-doc -- <url>`) and check the numbers against the text, not against the draft. If no subagent is available, say so in the review file and do the pass yourself after re-reading the sources, not your notes.

Also check, before recommending publish:

- the GAO, IG, or agency report does not already state the limitation the piece presents as its finding (Phase 2: that is a recap);
- if the piece is a record-gap piece, the previous published piece was not one;
- the frontmatter says `status: published` if the file is going to `published/`.

## Attack list

- Is every number in the cited locator, character for character?
- Does the cited URL host the primary document, or a recap of it?
- Are two “independent” sources actually the same filing republished?
- Could the pattern be seasonal, statutory, or already disclosed?
- Is a named person or firm uniquely identified?
- Does any sentence allege intent, crime, or fraud? If yes, demand two primaries or rewrite to the documented fact.
- What would a communications office say that is consistent with the documents?
- Could a careful reader write this finding from the source document’s own summary or first pages? If yes, recommend **kill** or **continue**, never publish.
- If the finding is a labeled gap between two official primaries whose reconciling record is not public after a real retrieval, that is not an automatic kill. Attack whether the incompatibility is real (same population, same period, same definition) and whether either source’s own summary already states it.
- Is analysis labeled as inference or view, or smuggled in as fact?

## Output

Write `newsroom/investigations/<id>/factcheck/adversarial-review.md`:

- claims that survive
- claims that die, with the killing objection
- remaining gaps
- publish / draft / kill recommendation
- who reviewed: fresh subagent (and its model) or the reporter itself

If you recommended publish, the reporter still must pass `npm run validate`.
