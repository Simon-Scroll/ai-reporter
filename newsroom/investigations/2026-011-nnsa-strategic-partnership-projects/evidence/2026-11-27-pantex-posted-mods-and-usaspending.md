# Evidence — Posted Pantex modifications and the USAspending award

- Contract page: https://www.energy.gov/nnsa/pantex-plant-contract
- Retrieved: 2026-11-27
- Page SHA-256: `5f68d3c937e0854a3d06ffe767dae1e01fbf6bb5d5e7e7a2dc1ae06b3701c394`
- Locator: “Contract and modifications” for 89233224CNA000004.

## Excerpt — what NNSA posts

The page lists four official modifications: PXD 00001 (09/19/2024), PXD 00002 (10/29/2024), PXD 00004 (12/13/2024), and PXD 00010 (02/12/2025). It says the unofficial conformed contract runs through Modification 00010, that funding modifications are available upon request, and that a reader should contact the contracting officer to verify the current version.

## Posted modification PDFs

- PXD 00001, https://www.energy.gov/nnsa/articles/pantex-plant-contract-pxd-00001-09192024, sha256 `72c186a8f87915bf64ebe8305ea7192cad2efbba896b16e3b4cf5c6643a96aae`, 24 pages. Page 2 sets a transition-period not-to-exceed amount of $13,000,000 on CLIN 0001. It does not set a CLIN 0003 fee.
- PXD 00002, https://www.energy.gov/nnsa/articles/pantex-plant-contract-pxd-00002-10292024, sha256 `efa646322f6ff62f584b3b0fec64b6f53efa5d5fffc1058488aacbe6ec0eb18f`, 6 pages. Page 2 changes CLIN 0003A so the base period is November 1, 2024, to October 31, 2029. It does not state a fee-base or fixed-fee dollar amount.
- PXD 00004, https://www.energy.gov/nnsa/articles/pantex-plant-contract-pxd-00004-12132024, sha256 `32f4635b4b27c86b476aafbabd625d28ae9ecb63552b89d431cc47c3d3d000a6`. Page 2 says the modification updates Section J appendices and that all other terms remain unchanged.
- PXD 00010, https://www.energy.gov/nnsa/articles/pantex-plant-contract-pxd-00010-02122025, sha256 `b39eed53cff83fea04e06960d233480e1159fc8f983adde9bded74a2f54c8e8d`, 2 pages. Page 2 removes DEAR 970.5226-1, Diversity Plan, and Appendix L. It says all other terms and conditions remain unchanged.

## USAspending award

- URL: https://api.usaspending.gov/api/v2/awards/CONT_AWD_89233224CNA000004_8900_-NONE-_-NONE-/
- Retrieved: 2026-11-27
- Response SHA-256: `ebdd35e2ad61be56b43e862f7ab64a68c1ae244b6adf6016a7987ff95a3e1a99`
- Excerpt: Description, “CONTRACT 89233224CNA000004 FOR THE MANAGEMENT AND OPERATION OF THE PANTEX PLANT.” `total_obligation` 3875509200.38. `base_exercised_options` 6456000000.0. `base_and_all_options` 30103600000.0. `period_of_performance.last_modified_date` is 2026-11-24.
- Transactions: https://api.usaspending.gov/api/v2/transactions/ with that award id. Sixty transactions. The sum of `federal_action_obligation` is 3875509200.38, the same as `total_obligation`. Extracted fields SHA-256 `06272199e3fb7484636571a7de391e5348230e3c4bec134c9222f8b3c11438bd`.
- Latest row: modification P00062, action date 2026-11-24, action type M, “OTHER ADMINISTRATIVE ACTION,” obligation 10000000.0, description “MANAGEMENT AND OPERATION OF THE PANTEX PLANT.”
- Two rows are action type B, “SUPPLEMENTAL AGREEMENT FOR WORK WITHIN SCOPE,” at obligation 0: P00030 on 2026-02-17 and P00044 on 2026-06-11. Their descriptions do not name Strategic Partnership Projects or a fee.

## Boundary

The obligation total is the plant management-and-operating contract. It is not a CLIN 0003 fee base or fixed fee. The contract page already says funding modifications are available on request and that the posted set should be verified with the contracting officer. None of the four posted PDFs states a CLIN 0003 dollar fee.
