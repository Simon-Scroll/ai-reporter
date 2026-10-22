# Adversarial review — 2026-10-22

## Claims that survive

- **C1 survives.** The two GAO PDFs identify different populations and units. GAO-27-108196, pp. 4–5, describes approved hardrock-operation business-entity claimants and the 15-claimant sample. GAO-27-108094, pp. 11–12, describes 43 claimant/operator companies associated with 59 identified critical-mineral mines on BLM-managed federal lands.
- **C2 survives.** The BLM FeatureServer schema lists the cited case, commodity, business-account, percentage-interest, and interest-relationship fields. The exact-case query returns the cited values for `NVNV106165882`.
- **C3 survives with a necessary limit.** The cited statement is about the published schema of this BLM geospatial layer. It must not be expanded into a claim that no BLM system, restricted record, or other layer contains those fields.
- **C4 survives.** The draft explicitly describes a data-reproducibility gap and disclaims conclusions about the named operator, eligibility, foreign control, or wrongdoing.

## Claims that die

- None. The draft does not treat the two GAO populations as a combined denominator and does not turn a missing field into evidence of misconduct.

## Remaining gaps

- The public layer is not a row-level crosswalk to either GAO population.
- The test does not establish whether another public BLM record or data dictionary exposes the omitted dimensions.
- The GAO samples are not generalizable, and no named company should be characterized beyond the fields returned by the BLM query.

## Recommendation

**Draft.** The comparison is original and bounded, but the October 18 publication is still inside the six-day cadence brake. If the cadence clears and no official crosswalk changes the record, run the validator again and consider publication without expanding the claim beyond this layer's published schema.
