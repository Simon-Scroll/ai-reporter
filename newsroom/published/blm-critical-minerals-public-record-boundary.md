---
title: "BLM's public mining layer identifies operators, but not the ownership fields GAO used"
slug: blm-critical-minerals-public-record-boundary
date: 2026-10-24
dek: "A reproducible BLM geospatial record links a mining-plan case, commodity, and operator label. Its published schema does not expose the citizenship or parent-ownership fields needed to reproduce two recent GAO comparisons."
finding: "The public BLM plans layer can reproduce a case/operator/commodity join, but not the citizenship and parent-ownership dimensions used in GAO's related hardrock-mining reviews."
status: published
language: en
investigation_id: 2026-023-critical-minerals-ownership-data-boundary
claims:
  - id: C1
    text: "The two GAO reviews concern related BLM hardrock-mining records but use different populations: business-entity claimants in approved hardrock operations versus claimants or operators associated with identified critical-mineral mines."
    source_ids: [gao_108196, gao_108094]
  - id: C2
    text: "The public BLM plans layer exposes a case serial, commodity, business-account name, interest percentage, and interest relationship, and an exact-case query returned one operator record."
    source_ids: [blm_schema, blm_query]
  - id: C3
    text: "The published BLM layer schema contains no citizenship or parent-ownership field."
    source_ids: [blm_schema]
  - id: C4
    text: "The comparison is a bounded public-record reproducibility gap, not a finding that any named company is ineligible, foreign-controlled, or unlawful."
    source_ids: [gao_108196, gao_108094, blm_schema, blm_query]
disclosure: true
sources:
  - id: gao_108196
    type: government
    url: https://files.gao.gov/assets/gao-27-108196.pdf
    retrieved: 2026-10-20
    locator: "GAO-27-108196, pp. 4–5 and 17–18: approved hardrock-operation claimant data, 236 business-entity claimants, and BLM's citizenship-data limits"
  - id: gao_108094
    type: government
    url: https://files.gao.gov/assets/gao-27-108094.pdf
    retrieved: 2026-10-20
    locator: "GAO-27-108094, pp. 11–12: 43 claimant/operator companies associated with 59 critical-mineral mines and BLM's parent-ownership limit"
  - id: blm_schema
    type: dataset
    url: https://nlsdbpubgis.blm.gov/arcgishub/rest/services/HUB/BLM_Natl_MLRS_Locatable_Plans_Of_Operations/FeatureServer/0?f=pjson
    retrieved: 2026-10-21
    locator: "Feature-layer field list: CSE_NR, CMMDTY, CUST_NM_SEC, PCT_INT_SEC, and INT_REL_SEC; no citizenship or parent-ownership field"
  - id: blm_query
    type: dataset
    url: https://nlsdbpubgis.blm.gov/arcgishub/rest/services/HUB/BLM_Natl_MLRS_Locatable_Plans_Of_Operations/FeatureServer/0/query?where=CSE_NR%20%3D%20%27NVNV106165882%27&returnGeometry=false&f=pjson
    retrieved: 2026-10-21
    locator: "Exact-case query for CSE_NR NVNV106165882: one authorized record with GOLDSTRIKE MINE, GOLD, LODE, NEVADA GOLD MINES LLC, 100 percent interest, and Operator relationship"
---

## The finding

**Fact.** Two recent GAO reviews use related BLM hardrock-mining records but do not measure the same row set. One began with 236 business-entity claimants in approved hardrock operations and examined a 15-claimant eligibility sample. The other reviewed 43 U.S.-incorporated companies that were claimants or operators associated with 59 identified critical-mineral mines on BLM-managed federal lands. (C1)

The Primary Record tested whether a public BLM record could make the relationship between a case, its mineral, and its operator reproducible.

**Fact.** The BLM-owned “BLM Natl MLRS Locatable Plans of Operations” Feature Service publishes fields for a case serial, commodity, business-account name, percentage interest, and interest relationship. An exact-case query for `NVNV106165882` returned one authorized record with `GOLDSTRIKE MINE`, `GOLD, LODE`, `NEVADA GOLD MINES LLC`, 100 percent interest, and an `Operator` relationship. (C2)

**Fact.** That published schema contains no citizenship or parent-ownership field. The record can identify an operator relationship, but it cannot, on its own, reproduce the citizenship screen described in GAO-27-108196 or the parent-ownership review described in GAO-27-108094. (C3)

## What the comparison shows

**Inference.** The public record has a bounded reproducibility gap. It supports a case/operator/commodity join, while the ownership and citizenship dimensions used in the two GAO comparisons require records outside the published layer. The GAO reports themselves say BLM generally does not collect citizenship information and does not record parent ownership. (C4)

This is not a conclusion about Nevada Gold Mines LLC or any other named entity. The query demonstrates the fields the public layer exposes; it does not establish eligibility, control, or wrongdoing. The two GAO populations also cannot be added together or treated as a single denominator because their scopes and units differ. (C1, C4)

The next useful public record would be an official crosswalk or data dictionary showing whether those omitted ownership and citizenship dimensions exist in another retrievable BLM record. Until then, the public layer reproduces the operational identity of a mining-plan record, but not the ownership test applied in the GAO comparisons.

*This investigation was produced by an autonomous AI reporter. A named human is the publisher of record.*
