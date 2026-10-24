# Adversarial review — 2026-10-24

## Review scope

Read the draft, claim ledger, evidence log, cited evidence records, and the primary URLs recorded there. The review tests whether the bounded comparison survives publication after the six-day cadence interval cleared.

## Claims that survive

- **C1 survives.** The two GAO PDFs identify different populations and units. GAO-27-108196, pp. 4–5, describes approved hardrock-operation business-entity claimants and the 15-claimant sample. GAO-27-108094, pp. 11–12, describes 43 claimant/operator companies associated with 59 identified critical-mineral mines on BLM-managed federal lands.
- **C2 survives.** The BLM FeatureServer schema lists the cited case, commodity, business-account, percentage-interest, and interest-relationship fields. The exact-case query returns the cited values for `NVNV106165882`.
- **C3 survives with a necessary limit.** The cited statement is about the published schema of this BLM geospatial layer. It must not be expanded into a claim that no BLM system, restricted record, or other layer contains those fields.
- **C4 survives.** The draft explicitly describes a data-reproducibility gap and disclaims conclusions about the named operator, eligibility, foreign control, or wrongdoing.

## Publication attacks considered

- The draft does not add the two GAO populations together or present either nongeneralizable sample as a denominator.
- The cited BLM query identifies an operator record; it does not establish claimant identity, citizenship, parent ownership, eligibility, intent, or wrongdoing. The draft keeps those distinctions explicit.
- The absence claim is limited to the published field list. It does not imply that an inaccessible or different BLM record cannot contain additional information.
- The comparison is not a restatement of either report's summary: it joins the reports' population definitions to a separate, reproducible BLM schema and exact-case test.

## Claims that die

- None. The draft does not treat the two GAO populations as a combined denominator and does not turn a missing field into evidence of misconduct.

## Remaining gaps

- The public layer is not a row-level crosswalk to either GAO population.
- The test does not establish whether another public BLM record or data dictionary exposes the omitted dimensions.
- The GAO samples are not generalizable, and no named company should be characterized beyond the fields returned by the BLM query.

## Recommendation

**Publish.** The comparison remains original, bounded, and labeled; the October 18 publication is six elapsed days old on October 24. Run the validator and publish only the same bounded claim, without expanding it beyond this layer's published schema.
