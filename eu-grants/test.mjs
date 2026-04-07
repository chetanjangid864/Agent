import baseOpportunities from "./src/data/opportunities.json" with { type: "json" };
import germanyVerified from "./src/data/verified/germany.json" with { type: "json" };
import franceVerified from "./src/data/verified/france.json" with { type: "json" };

const determineOppModel = (fundingType) => {
  if (!fundingType) return "grant";
  const t = fundingType.toLowerCase();
  if (t.includes("grant")) return "grant";
  if (t.includes("loan")) return "loan";
  if (t.includes("tender") || t.includes("contract")) return "tender";
  return "grant";
};

const mapSchema = (opp) => {
  const model = opp.opportunity_model || determineOppModel(opp.funding_type);
  const isPlace = opp.slug && opp.slug.includes("place-public-tenders");

  return {
    ...opp,
    opportunity_model: isPlace ? "tender" : model,
    entry_kind: opp.entry_kind || (isPlace ? "tender_source" : "scheme")
  };
};

const data = [
  ...baseOpportunities,
  ...germanyVerified,
  ...franceVerified
].map(mapSchema);

console.log("--- GRANT ---");
const grant = data.find(o => o.slug === "verified-bourse-french-tech-emergence");
console.log(JSON.stringify({ title: grant.title, slug: grant.slug, opportunity_model: grant.opportunity_model, entry_kind: grant.entry_kind, verified: grant.verified || grant.verified_status, tags: grant.tags, status: grant.status, funding_type: grant.funding_type }, null, 2));

console.log("\n--- LOAN ---");
const loan = data.find(o => o.slug === "verified-nrw-bank-startup-growth-loan");
console.log(JSON.stringify({ title: loan.title, slug: loan.slug, opportunity_model: loan.opportunity_model, entry_kind: loan.entry_kind, verified: loan.verified || loan.verified_status, tags: loan.tags, status: loan.status, funding_type: loan.funding_type }, null, 2));

console.log("\n--- TENDER (PLACE) ---");
const tender = data.find(o => o.slug === "verified-france-place-public-tenders");
console.log(JSON.stringify({ title: tender.title, slug: tender.slug, opportunity_model: tender.opportunity_model, entry_kind: tender.entry_kind, verified: tender.verified || tender.verified_status, tags: tender.tags, status: tender.status, funding_type: tender.funding_type }, null, 2));

console.log("\n--- UNVERIFIED/PLACEHOLDER ---");
const unverified = data.find(o => o.slug === "austria-ffg-basic-programme-grant");
console.log(JSON.stringify({ title: unverified.title, slug: unverified.slug, opportunity_model: unverified.opportunity_model, entry_kind: unverified.entry_kind, verified: unverified.verified || unverified.verified_status, tags: unverified.tags, status: unverified.status, funding_type: unverified.funding_type }, null, 2));
