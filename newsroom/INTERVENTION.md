# How to intervene (optional)

The desk is designed to run without you. Use these only when you want to.

## Stop everything

Create an empty file and **commit it** (the cloud agent only sees git):

```
newsroom/KILL
```

The next daily run exits immediately. Delete the file, commit, to resume.

## Investigate but do not publish

Create:

```
newsroom/HOLD
```

Drafts, evidence, the journal, and public **desk notes** still accumulate. Nothing is copied to `newsroom/published/`. If a cloud branch still contains a published file, persist-desk will not put it on `main` while HOLD is present.

Desk notes are progress reports, not investigation articles. Use HOLD when you want a hard freeze on findings only.

## Steer without stopping

Write a note in `newsroom/overrides/`. Or add a line to `newsroom/killfile.md`.

## Unpublish

Delete or move the markdown file out of `newsroom/published/`. The next site build drops it. Persist-desk will merge a validated published article onto `main` unless HOLD is set.

## Turn off the clock

Disable the Cursor Automation. The repo stays intact; nothing wakes the agent.

## Change the publisher identity

Edit `newsroom/masthead.yml`. Fill `contact_email` before the desk sends any FOIA or source email (not enabled on day one).
