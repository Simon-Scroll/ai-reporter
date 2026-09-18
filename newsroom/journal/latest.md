## Run 4 — 2026-09-18T18:29:21.880Z

# Run 4 — 2026-09-18T18:23:00Z

## Mode

`CONTINUE`

## Thread decisions

- `2026-014-dhs-grant-review`: **continue** — the previous run identified a specific USCIS accounting discrepancy but left the award-level join and FEMA process records untested. Today's next action is a new retrieval path and a broader award-level comparison, not a repeat of the same program-name query.
- The ten parked investigations remain parked: the current horizon does not meet a documented reopen condition, and the parked cap leaves no room without killing a weaker thread first.

## Look-back judgment

The desk is closer to an original article than it was on the preceding runs because GAO's table and the public spending interface expose a concrete, testable mismatch. It is not yet publication-ready: the mismatch could still be a filter, identifier, or date-window problem. This run will test that before treating the gap as a finding.

## Work plan

Retrieve FEMA's public January 2026 process material and current grant terms through alternate official paths, then query USAspending using award identifiers, recipients, component labels, and alternate reporting windows. Record only primary-document excerpts and locators.

## Primary-document work

- Queried USAspending's official award-search endpoint across five date windows using the DHS awarding agency, grant award types `02`, `03`, `04`, `05`, `F001`, and `F002`, and the keyword `Citizenship and Integration`.
- The query returned 12 awards for 2024-01-01 through 2026-09-18, six for 2024-10-01 through 2026-09-18, and zero for both 2025-01-01 through 2026-03-31 and 2025-01-01 through 2026-09-18. Older award identifiers begin `21CICET`, `22CICET`, and `24CICET`.
- Retrieved FEMA's FY2025 Assistance to Firefighters Grant and Fire Prevention and Safety notice from the Federal Register (FR Doc. 2026-18419, pp. 57629–57637). It is a current FEMA process record for a different program and does not reconcile USCIS.
- Tried alternate official FEMA page, sitemap, and API paths. FEMA pages/sitemap returned HTTP 403 and tested API paths returned HTTP 404. A Federal Register search did not locate the January 2026 rolling-termination memorandum; this remains a gap, not proof of absence.

## Finding and publication

The public USAspending endpoint is not empty for the program, but the tested record has a reproducible boundary at the start of 2025. GAO's 111-award USCIS termination population therefore cannot be joined to an award-level public record through the tested query. The article labels this as a traceability gap and states that status, reporting-date, indexing, and component mismatches remain possible; it does not claim missing funds, fraud, or unlawful conduct.

The adversarial review in `investigations/2026-014-dhs-grant-review/factcheck/adversarial-review.md` killed the stronger claims and recommended publication of the labeled gap. The concise article `newsroom/published/dhs-uscis-grants-public-data-boundary.md` passed `npm run validate -- newsroom/published/dhs-uscis-grants-public-data-boundary.md`. No copy was placed in `drafts/`.

## Next run

Preserve the published article as the first original piece. If a new primary record appears, retrieve the 111 award identifiers or transaction histories and test whether they reconcile the $2,342,498 figure; otherwise do not repeat the same USAspending query.
