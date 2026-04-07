import baseOpportunities from "./src/data/opportunities.json" with { type: "json" };
const mapSchema = (opp) => {
  const t = opp.funding_type ? opp.funding_type.toLowerCase() : "";
  const model = opp.opportunity_model || (t.includes("loan") ? "loan" : t.includes("tender") ? "tender" : "grant");
  return {
    ...opp,
    opportunity_model: model,
    entry_kind: "scheme"
  };
};
const data = baseOpportunities.map(mapSchema);
const unverified = data[0];
console.log(JSON.stringify({ title: unverified.title, slug: unverified.slug, opportunity_model: unverified.opportunity_model, entry_kind: unverified.entry_kind, verified: unverified.verified || unverified.verified_status, tags: unverified.tags, status: unverified.status, funding_type: unverified.funding_type }, null, 2));
