# Gaps

- The two GAO reports do not publish a row-level crosswalk between the 236 business-entity claimant universe, the 15-claimant eligibility sample, and the 43 claimant/operator companies associated with 59 critical-mineral mines.
- The reports use different units and scopes: approved hardrock operations versus identified critical-mineral mines on BLM-managed land; claimant versus operator; all hardrock minerals versus selected non-energy critical minerals.
- BLM's public pages describe MLRS/NRS case, report, map, and serial-number access but do not establish which fields are exposed in a retrievable public record. A direct case or report test is still required.
- On October 20, the linked NRS report page loaded only the BLM reporting shell and displayed “Your session has expired”; the public MLRS portal returned HTTP 503. These are retrieval barriers, not evidence that the underlying records do not exist.
- On October 21, BLM's public geospatial plans layer exposed a case serial, business-account label, commodity, and operator relationship for `NVNV106165882` but its published schema exposed no citizenship or parent-ownership field. The layer is evidence of a bounded data boundary, not a complete crosswalk to either GAO population.
- Foreign-parent ownership was determined by GAO from company, state, SEC, and commercial records; that does not mean MLRS itself contains the ownership chain.
- The GAO samples are nongeneralizable. No company may be named as unqualified, foreign-controlled, or a national-security concern without a primary record that supports the exact statement.

## Decision required

The same-object test now passes for a bounded finding: the GAO reports and the BLM layer concern BLM hardrock mining claimant/operator records, and the BLM record supplies a reproducible case/operator/commodity join while omitting the ownership and citizenship fields central to the GAO comparisons. Draft the labeled gap after the cadence brake clears; do not name a company as ineligible or foreign-controlled. Park only if a later review shows the layer is not a relevant MLRS population, and do not repeat the failed NRS/MLRS paths or unchanged ArcGIS queries.
