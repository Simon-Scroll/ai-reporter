# Evidence log

| ID | Source | Retrieved | Locator | Use |
|---|---|---|---|---|
| E1 | https://files.gao.gov/assets/gao-27-108196.pdf | 2026-10-20 | pp. 4-5, 17-18 | Claimant population, eligibility sample, and BLM citizenship-data boundary |
| E2 | https://files.gao.gov/assets/gao-27-108094.pdf | 2026-10-20 | pp. 11-12 | Critical-mineral claimant/operator population, ownership sample, and parent-ownership boundary |
| E3 | https://www.blm.gov/programs/energy-and-minerals/mining-and-minerals/locatable-minerals/access-mining-notices-and-plans-operations | 2026-10-20 | “Access to Mining Notices and Plans of Operations” and “How to use MLRS directly…” | Official public retrieval path |
| E4 | https://www.blm.gov/services/land-records/mlrs | 2026-10-20 | “Mineral & Land Records System (MLRS)” FAQ | Public search and serial-number capabilities |
| E5 | https://reports.blm.gov/report/MLRS/130/CR-Solid-Minerals-Surface-Mining-Operations/ and https://mlrs.blm.gov/s/ | 2026-10-20 | NRS report shell; MLRS portal response | Same-day access test; no data rows retrieved |
| E6 | https://nlsdbpubgis.blm.gov/arcgishub/rest/services/HUB/BLM_Natl_MLRS_Locatable_Plans_Of_Operations/FeatureServer/0 | 2026-10-21 | Layer schema and query for `CSE_NR = NVNV106165882` | Case serial, commodity, business-account, interest, and operator fields; no citizenship or parent-ownership field |

No PDF or data dump is stored in the repository. The report PDFs were retrieved into temporary storage solely to extract the cited short excerpts.

## 2026-11-16 watch check

| ID | Source | Retrieved | Locator | Use |
|---|---|---|---|---|
| E7 | https://nlsdbpubgis.blm.gov/arcgishub/rest/services/HUB/BLM_Natl_MLRS_Locatable_Plans_Of_Operations/FeatureServer/0?f=pjson | 2026-11-16 | Layer metadata and published field list; `currentVersion: 11.5`; fields include case, commodity, business-account, interest, and relationship fields but no citizenship or parent-ownership field | Confirms the public layer was revised after the October 24 watch check without adding the missing ownership dimensions |
| E8 | https://nlsdbpubgis.blm.gov/arcgishub/rest/services/HUB/BLM_Natl_MLRS_Locatable_Plans_Of_Operations/FeatureServer/0/query?where=1%3D1&outStatistics=%5B%7B%22statisticType%22%3A%22count%22%2C%22onStatisticField%22%3A%22OBJECTID%22%2C%22outStatisticFieldName%22%3A%22record_count%22%7D%2C%7B%22statisticType%22%3A%22max%22%2C%22onStatisticField%22%3A%22Modified%22%2C%22outStatisticFieldName%22%3A%22latest_modified%22%7D%5D&returnGeometry=false&f=pjson | 2026-11-16 | Statistics result: `record_count` 1,123; latest `Modified` value `1794605448000` (2026-11-13T21:30:48Z) | Establishes that the layer changed after the October 24 check |
| E9 | https://nlsdbpubgis.blm.gov/arcgishub/rest/services/HUB/BLM_Natl_MLRS_Locatable_Plans_Of_Operations/FeatureServer/0/query?where=Modified%20%3E%20DATE%20%272026-10-24%27&outFields=CSE_NR%2CCSE_NAME%2CCMMDTY%2CCUST_NM_SEC%2CPCT_INT_SEC%2CINT_REL_SEC%2CCSE_DISP%2CCSE_DISP_DT%2CModified&orderByFields=Modified%20DESC&resultRecordCount=20&returnGeometry=false&f=pjson | 2026-11-16 | Recent-row query exposes case, commodity, business-account, interest, and relationship fields; it returned no citizenship or parent-ownership field | Tests whether the new layer revision creates a reproducible ownership/citizenship crosswalk; it does not |

The current layer metadata and recent-record query were retrieved for the watch only. No PDF, zip, data dump, secret, email, or source PII was committed.
