# Adversarial review — 2026-09-24

## Claims that survive

- GAO-26-108630 documents the existing SAM representation workflow, the missing representation data, and concern about the proposed change. Source: `https://files.gao.gov/assets/gao-26-108630.pdf`, pp. 18–19, 24–25, and appendix I pp. 32–33.
- RFO FAR Part 4 makes SAM the primary method for entity-level representations and certifications, excepts governmentwide commercial purchase-card micro-purchases from active SAM registration, and provides for collection at the offer when SAM registration is not required. Source: `https://www.acquisition.gov/far-overhaul/far-part-deviation-guide/far-overhaul-part-4`, §§ 4.203-1(a)–(e), 4.203-2(a).
- RFO FAR Part 40 prescribes 52.240-90 in all solicitations and 52.240-91 in solicitations and contracts, while recording covered Section 889 categories in SAM. Source: `https://www.acquisition.gov/far-overhaul/far-part-deviation-guide/far-overhaul-part-40`, §§ 40.204-2 and 40.205.
- HHS's published deviation confirms an operational civilian implementation in which contracting officers rely on offer representations while SAM may continue to contain displaced representations. Source: `https://www.acquisition.gov/sites/default/files/page_file_uploads/HHS_RFO_Deviation_Part-4-8-12-38-40-51.pdf`, § 7.E.
- GSA's RGO memo confirms the GSA-specific deviation scope but does not create a governmentwide public offer repository. Source: `https://www.acquisition.gov/sites/default/files/page_file_uploads/RGO-2026-01.pdf`, §§ 3–5.

## Claims that die or require rewrite

- “The FAR overhaul removed Section 889 representations from SAM for every transaction.” Rejected. The records retain entity-level SAM representations, record covered categories in SAM, and only establish the RFO solicitation path. Rewrite to distinguish entity-level SAM data from solicitation-level Section 889 representations.
- “Purchase-card users are exempt from Section 889.” Rejected. FAR Part 4 establishes an exception to active SAM registration for certain micro-purchases, not an exemption from the Section 889 prohibition. Say only that the captured record does not show where the current representation is publicly searchable for those transactions.
- “Civilian agencies cannot comply” or “the government lost the compliance signal.” Rejected. HHS supplies an offer-level operational path, and the records do not prove noncompliance or loss of controls.
- “GSA implemented the new FAR text governmentwide.” Rejected. RGO-2026-01 applies to GSA contracting activities and procurements; it is not evidence of every civilian agency's practice.

## Remaining gaps

- No public searchable offer-level database or documented purchase-card workflow was found in the official records reviewed.
- HHS is one agency's implementation; the record does not establish uniform treatment across all civilian agencies.
- The June 2026 Federal Register notice remains a proposal and should be used only as history, not as proof of current operation.

## Recommendation

**Publish a bounded comparison.** The original finding is the gap between the official RFO workflow—ordinary solicitations use an offer-level 52.240-90 representation while SAM remains the entity-level system—and the absence, in the records reviewed, of a public searchable equivalent for micro-purchases using a governmentwide commercial purchase card. Label the conclusion as an inference and public-record limitation. Run `npm run validate -- <file>` before publication.
