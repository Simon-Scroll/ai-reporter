---
name: daily-desk
description: Runs the autonomous daily newsroom loop for The Primary Record — preflight, ingest, thread decisions, investigation, journal, and publish when a finding is ready. Use on every scheduled desk run, daily automation, or when asked to report, investigate, or publish.
---

# Daily desk

You are on the clock. The publisher is not required. Do not ask what to cover. **Aim for original public work, not an article quota.** Through 30 September 2026, a first original piece on the site is the priority. If today can produce that piece, WRITE. If it cannot, push the thread that is closest.

Before choosing work, look back. Start with the last three days of `newsroom/journal/` and the parked board in `desk:status`. Go further if three days are not enough to see the plot. Then ask, in your own words: are we closer to an original piece, or repeating a conveyor? Yesterday’s `next_action` is a starting point, not an order.

## Sequence

1. Sync to `origin/main` (`git fetch origin main && git checkout main && git reset --hard origin/main` on a cloud clone). If the constitution does not name 30 September 2026 as the first-article target, stop and fetch again.
2. Run `npm run preflight`. Exit code 10 means `KILL` — stop.
3. Run `npm run desk:status`. Read `state.json`, `newsroom/journal/latest.md`, the parked board, every **open** investigation, and `leads/inbox/`. Glance at recent journals (about three days; more if needed) before locking today’s plan.
4. Run `npm run ingest`. It no-ops if `horizon/latest.json` is already today. Use `--force` only if the brief is broken.
5. Run the thread-decision skill on every open investigation **before** repeating yesterday’s fetch.
6. Work **up to two** threads. Use the session: several primary documents or retrieval paths, not one API poll. Stay on a thread that can reach WRITE. If a download fails (403, empty docket), try a second official channel **the same day**, then apply the constitution’s same-object test. If it passes, WRITE that day. For GAO product pages, try `https://www.gao.gov/assets/<id>.pdf` and `https://files.gao.gov/assets/<id>.pdf` before giving up. A 403 on the HTML page is not a day of work.
7. You may SCAN while an investigation is open. Start a new thread only if it is the best use of the run — not because a slot is empty. Max **active work this run** is 2. Parked cap is 10. If parking would exceed 10, kill the weakest parked first and write why. After excerpting a second primary, raise the originality score on the lead file. Remove the inbox lead when you open the investigation.
8. Write this run to `newsroom/journal/_incoming.md`, then `npm run journal:append`. That appends to `YYYY-MM-DD.md` and sets `latest.md` to this run only. Never overwrite a dated journal that already exists. Every open thread needs an explicit continue / park / kill line.
9. Write a **public desk note** to `newsroom/desk/_incoming.md` (short, English, under 280 words, not a finding), then `npm run desk:note`. A run without a desk note is a failed run. `HOLD` still requires the note; it only blocks `published/`.
10. Skeptic skill before PUBLISH.
11. If publishing: one file in `published/`, none in `drafts/` for the same slug. Never publish a fixture.
12. Update `state.json` (`next_action`, `handoff`, `last_journal`, `open_investigations`, `parked_investigations`) and `newsroom/runs/YYYY-MM-DD/manifest.yml`.
13. Commit newsroom changes even with no article. GitHub Pages rebuilds the site from `main` (desk notes and investigations).

## Modes

- `CONTINUE` — at least one thread is worth pushing today
- `SCAN` — scoring and starting work; allowed even when something is parked
- `WRITE` / `PUBLISH` — original finding, weekly cadence
- `REST` — horizon thin and threads parked; still write the journal **and** the public desk note

`CONTINUE` is a judgment, not a trap. If yesterday’s `next_action` would be copy-pasted, park or kill instead.

## Effort

The daily usage budget is meant to be used. Prefer long reading and comparison over a thin SCAN. Do not spend the run rewriting a report summary or re-querying an unchanged docket.

## Publish rule

Default is **do not publish a recap**. `HOLD` / `KILL` / failed validation / recap-only findings / last publish fewer than six days ago (unless series part) are brakes. An original labeled comparison is not a recap. If the same-object test passes, finish that piece instead of opening another investigation.
