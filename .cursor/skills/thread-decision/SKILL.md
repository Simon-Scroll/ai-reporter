---
name: thread-decision
description: Decides whether to continue, park, or kill each open investigation. Use at the start of every desk run before doing more document fetches, and whenever a thread looks blocked or repetitive.
---

# Thread decision

Spend the run on work that can move — toward an original public finding, or an honest park or kill. Repeating yesterday’s query is a failure. Abandoning a corpse is a success. Parking a thread that passes the constitution’s same-object test, only because a third file is missing, is a miss.

For **each** open investigation, write `continue` | `park` | `kill` in that run’s journal **before** fetching more of the same URLs. Prefer reopening a parked thread that can move today over starting a new one whose deciding record is not public. A parked thread that already has two primaries in tension is in play, even if its reopen condition still names a missing file.

## Continue when it is the best use of today

Favor continue if:

- there is a **new** public primary to open, **or** a comparison between already-captured primaries that has not been written
- the next action is not a copy of yesterday’s `next_action`
- public interest still justifies the work
- the missing piece is plausibly public, **or** the same-object test already passes and the piece has not been written

Do not continue only to wait for an operator portal.

## Park — blocked, not disproven

Park when the thread cannot move and the public record does not yet support a labeled finding:

- two consecutive days would do the same fetch (same docket, same API, same search)
- three consecutive `CONTINUE` days add no new primary excerpt and no new comparison
- the missing document is incorporated-by-reference, operator-only, or otherwise not public **and** the same-object test fails
- a better lead is sitting in `leads/inbox/` and this thread cannot move without a future filing
- a GAO (or similar) HTML product page returns 403 **and** the official PDF candidates were tried the same day and still failed, or the PDF is only the report’s own summary

If the same-object test passes and the reconciling file is still missing after that retrieval, the decision is **WRITE**, not park. Label the gap. Do not treat a proposal as an enacted change.

Write why in `gaps.md`. Set `status: parked`. Remove the id from `state.open_investigations`; add it to `state.parked_investigations`. A parked thread may be reopened if a new primary appears.

If `parked_investigations` is already at 10, **kill** the weakest parked investigation first, then park. Do not refuse the park because the parked list is full.

## Kill — the hypothesis is spent

Kill when:

- the finding is the source’s own summary
- identity cannot be joined from public primaries
- legal risk exceeds public interest
- the desk is generating hypotheses without documents
- the parked list is at cap and this parked thread is the weakest (no remaining public path, reopen condition unmet, or lower public interest than the thread that needs the slot)
- a parked thread has no remaining public reopen path — even below the cap. Do not keep dead files to fill the ten slots.

Write why in `gaps.md`. Set `status: killed`. Remove the id from both `open_investigations` and `parked_investigations`. Keep the folder. Do not reopen without a new hypothesis and a new first document.

Killing to make room is authorized. Prefer killing the parked thread with the least remaining public path, not the newest or the one you remember last.

## Capacity

- **Active** (`open_investigations`): max 3. This is the only cap that blocks starting a new investigation.
- **Parked** (`parked_investigations`): max 10. Does not block starting a new investigation.
- An inbox lead may become an investigation while other threads are parked, if an active slot is free.
- Work **at most two** threads in one run, and work them. Do not work a third the same day. Do not let one stuck thread consume the whole run.

## Parallelism

Typical split:

1. Decide every open thread (cheap). Review parked threads if one might reopen, need a kill for space, or already has a publishable comparison sitting unused.
2. Push the most promising one with real reading — several documents, not one fetch.
3. Spend remaining budget on a second open thread. Start **one** new investigation only when no open thread can advance or be written today.
