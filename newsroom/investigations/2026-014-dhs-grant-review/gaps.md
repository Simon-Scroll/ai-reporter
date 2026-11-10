# Gaps

- The individual USCIS award identifiers and recipients behind the 111 terminated awards are still not joined to the public API query. The date-window comparison found older Citizenship and Integration awards but no matching record in the tested 2025-start windows.
- The DHS grants page returned HTTP 403 on 2026-09-18; the official GAO alternate PDF was retrieved successfully, but no DHS HTML retry is planned without a new retrieval path.
- FEMA's January 2026 rolling-termination memorandum remains unlocated. FEMA grant pages and sitemap returned HTTP 403, FEMA API paths tested returned HTTP 404, and a Federal Register search did not identify the memorandum. The official Federal Register FY2025 AFG/FP&S notice was retrieved as an alternate current process record but does not address the USCIS population.
- The USAspending boundary may reflect award-status, reporting-date, keyword-indexing, component, or other mismatch rather than missing public records. A public article must label it as a traceability gap and must not call it a loss, fraud, or proof that awards were absent.

## Public finding

The primary documents now support a concise, labeled finding: GAO's 2025 USCIS termination population cannot be joined to the public USAspending record through the tested official query. Older Citizenship and Integration records are returned, but the same query returns none when the period begins in 2025, even when the end date is extended through September 18, 2026. The reconciling award-level identifiers, status history, or reporting explanation remain public-record gaps.

## 2026-11-10 watch check

A changed current query used the broader keyword `Citizenship` and extended the period through November 10, 2026. It returned 19 older `22CICET` and `23CICET` awards and no newer 2025- or 2026-prefixed result. This does not supply the 111 USCIS identifiers or explain the mismatch, so the follow-up does not move to a new series part. Continue to wait for award identifiers, transaction histories, or an official reporting explanation; do not repeat the same query without a changed filter question.
