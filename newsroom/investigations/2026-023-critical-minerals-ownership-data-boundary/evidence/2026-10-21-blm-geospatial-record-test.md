# Evidence — BLM geospatial record test

- URLs:
  - https://www.blm.gov/programs/energy-and-minerals/mining-and-minerals/locatable-minerals/access-mining-notices-and-plans-operations
  - https://www.arcgis.com/sharing/rest/content/items/2ba74f2e88934c988b80c3e6772ca099?f=pjson
  - https://nlsdbpubgis.blm.gov/arcgishub/rest/services/HUB/BLM_Natl_MLRS_Locatable_Plans_Of_Operations/FeatureServer/0?f=pjson
  - https://nlsdbpubgis.blm.gov/arcgishub/rest/services/HUB/BLM_Natl_MLRS_Locatable_Plans_Of_Operations/FeatureServer/0/query?where=CSE_NR%20%3D%20%27NVNV106165882%27&outFields=OBJECTID%2CID%2CGEO_STATE%2CBLM_PROD%2CCSE_DISP%2CCSE_TYPE_NR%2CCSE_NR%2CLEG_CSE_NR%2CCSE_NAME%2CCMMDTY%2CCUST_NM_SEC%2CPCT_INT_SEC%2CINT_REL_SEC%2CCSE_DISP_DT%2CSRC%2CQLTY%2CCSE_META%2CRCRD_ACRS%2CSF_ID%2CCreated%2CModified&returnGeometry=false&f=pjson
- Retrieved: 2026-10-21
- Relevant claims: C3, C4

## Excerpts

- **BLM access page, “Mining Notices and Plans Geospatial Data Layers”:** BLM links the public “BLM Mining Plans of Operations” and “BLM Mining Notices” layers through its Geospatial Business Platform. The same page says the layers include mining notices and plans of operations data.
- **ArcGIS item metadata:** The BLM-owned item is titled “BLM Natl MLRS Locatable Plans of Operations,” is a public Feature Service, and identifies the service URL as `https://nlsdbpubgis.blm.gov/arcgishub/rest/services/HUB/BLM_Natl_MLRS_Locatable_Plans_Of_Operations/FeatureServer`.
- **Feature-layer schema:** The public plans layer exposes `CSE_NR` (“Case Serial Number”), `CSE_NAME` (“Geographic Name”), `CMMDTY` (“Commodity”), `CUST_NM_SEC` (“Business Account Name”), `PCT_INT_SEC` (“Business Account Percent Interest”), and `INT_REL_SEC` (“Business Account Interest Relationship”). The published field list contains no citizenship or parent-ownership field.
- **Exact case query:** Querying `CSE_NR = NVNV106165882` returned one authorized surface-management mining-plan record: `GOLDSTRIKE MINE`, commodity `GOLD, LODE`, business account `NEVADA GOLD MINES LLC`, 100 percent interest, relationship `Operator`, and legacy serial `NVN    070708`. The record exposes a stable case/operator/commodity join but no ownership-chain or citizenship value.
- **Layer count check:** The same public layer returned 1,135 plan features: 818 with a non-null business-account name and 317 with a null business-account name. These counts describe the current public layer and are not treated as a GAO population denominator.

## Why it matters

The public BLM geospatial layer can join a mining plan to a case serial, commodity, and business-account label. It does not expose the citizenship or parent-ownership fields needed to reproduce either GAO's eligibility test or its foreign-parent review. The public record therefore supports a bounded data-reproducibility gap, not a conclusion about any named company's eligibility or ownership.

No PDF, data dump, or binary is stored in the repository.
