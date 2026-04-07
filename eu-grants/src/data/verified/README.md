# Verified Data Population Guide

This directory contains verified funding data structurally separated from unverified placeholders. All files here (`germany.json`, `france.json`, etc.) represent the highest tier of trust in our application.

## Core Rules for Verified Opps
1. **No Fabrication:** Every data point must be traceable back to an official government or trusted agency source.
2. **Missing Facts:** If an exact start date, funding maximum, or eligibility subset is strictly unknown, leave it as an empty string `""` or explicit placeholder notation (e.g., `"TBC by official guidelines"`). Do not extrapolate.
3. **Structured Taxonomy:** Strings must perfectly map onto taxonomy keys used in our filter engines (`Grant`, `Government Loan`, `Tender`). Do NOT use informal casings like `grant` or plurals like `Loans`.
4. **Verification Metadata:** Every verified entry must include at least:
   - `verified_status`: `"verified"` or `"partially_verified"`
   - `last_verified_date`: YYYY-MM-DD
   - `verification_notes`: E.g., `"Sourced directly from KfW budget report 2026."` 

## Example Command for Scrapers/Admins
When writing a new verified opportunity, mirror the exact required structure seen in `germany.json`. The keys must conform universally so the `index.js` aggregator can parse them without disrupting the UI.
