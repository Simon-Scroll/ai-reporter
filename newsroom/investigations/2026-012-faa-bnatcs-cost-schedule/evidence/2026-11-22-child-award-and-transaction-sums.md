# Evidence E7 — Child-award and transaction sums, 22 November 2026

- Child list: https://api.usaspending.gov/api/v2/idvs/awards/ with `award_id` CONT_IDV_693KA726D00003_6920, `type` child_awards
- Each award: https://api.usaspending.gov/api/v2/awards/<generated_unique_award_id>/
- Each transaction file: https://api.usaspending.gov/api/v2/transactions/ with that award id
- Retrieved: 2026-11-22
- Locator: 18 child `total_obligation`, `base_exercised_options`, and `base_and_all_options` values; every child `federal_action_obligation` by `action_date`.
- Excerpt: The 18 child awards sum to obligations $274,322,489.79, exercised options $289,773,553.10, and base-and-all-options $1,438,168,739.40, matching the IDV rollup to the cent. Order 693KA726F00029 is obligated at $58,568,298 with base-and-all-options still $290,346,940.54; its base action on 2026-08-26 obligated $49,702,112. Order 693KA726F00020 is obligated at $15,451,063.31 and has exercised options of $30,902,126.62. Order 693KA726F00013 modification P00007, action date 2026-09-14, obligated $7,700,000. Transactions dated before 2026-09-15 sum to $275,183,854.58. Transactions dated on or after 2026-09-15 sum to −$861,364.79. The full transaction file sums to $274,322,489.79.
- Post-15 September 2026 obligation actions that are not zero: 693KA726F00014 P00009 +$500,000 (2026-09-16); 697DCK26F00265 P00004 −$3,513,643 (2026-09-23); 693KA726F00032 base +$412,000 (2026-09-23); 693KA726F00013 P00008 +$2,695,604 (2026-09-24); 693KA826F00112 P00004 +$816,333.21 (2026-10-29); 693KA726F00013 P00009 −$6,663,896 (2026-11-03); 693KA726F00029 P00001 +$8,393,066 (2026-11-06); 693KA726F00029 P00002 +$473,120 (2026-11-13); 693KA826F00054 P00007 +$5,000,000 (2026-11-16); 697DCK26F00350 P00004 +$107,932 (2026-11-18); 693KA826F00055 P00005 −$9,081,881 (2026-11-19).
- Claim link: C10, C11, C13.
- Boundary: The transaction endpoint used here exposes `federal_action_obligation`, not a history of base-and-all-options values. Potential-value changes are not reconstructed order by order.
