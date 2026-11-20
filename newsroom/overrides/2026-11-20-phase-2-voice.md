# Phase 2 Voice, Sources & Gates — 2026-11-20

Publisher orientation after the November 20 audit. Honor this unless it violates the constitution.

## 1. Sharper, more incisive writing (same proof bar)

The coal grant piece (2026-11-14) proved the desk can compute real multi-table discrepancies. Now push the voice further:

- **Headlines and ledes must name the concrete stake** (money, people, safety, deadlines), not administrative abstractions ("public-record boundary", "six-table difference").
- **Add a `stakes` field in frontmatter** (one plain sentence on why a reader outside the agency should care). The site now highlights `finding` and `stakes` in a callout box at the top of every investigation.
- **Include a labeled `## View` section** when the primary documents support a clear analytical judgment on accountability, oversight failure, or policy trade-offs. Keep **Fact**, **Inference**, and **View** cleanly labeled, and isolate caveats in **`## What this does not prove`** instead of diluting every paragraph.
- **Zero softening of legal/proof gates:** never allege crime, fraud, or bad intent without two independent primaries; every `(C1)`..`(Cn)` must map to a primary URL and locator.

## 2. New US primary-source horizon (break the GAO monoculture)

Seven of the first nine published pieces leaned on GAO. The horizon now drops UK/EUR-Lex and filters out Form 4 / local-court / procedural noise in favor of seven high-signal US feeds:

- `sec-edgar` (8-K, NT 10-K late filings, 10-K/A amendments, SEC Litigation Releases)
- `doj-oig` (DOJ Inspector General audits and evaluations)
- `fda-enforcement` (Class I & II drug, device, and food recalls via openFDA)
- `courtlistener` (SCOTUS, federal circuits, D.D.C.)
- `govinfo-crpt` (substantive congressional committee reports)
- `federal-register`
- `gao`

Actively pursue non-GAO leads (corporate restatements/enforcement, recalls, DOJ/BOP/FBI audits, federal court rulings) when they offer a stronger measured discrepancy or public-safety stake than a federal budget-table gap.

## 3. Enforced validator gates

`npm run validate:all` now enforces in code:

- `finding_type: discrepancy` or `record_gap` required on all Phase 2 pieces.
- No two consecutive `record_gap` pieces.
- Every `(C#)` in the body must exist in `claims`, and every declared `claim` must be cited in the body.
- Six-day minimum cadence unless `series` + `series_part >= 2`.
