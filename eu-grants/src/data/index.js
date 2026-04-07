import baseOpportunities from './opportunities.json';
import germanyVerified from './verified/germany.json';
import franceVerified from './verified/france.json';

/**
 * Aggregates unverified placeholders with structurally verified datasets.
 * Automatically exports the consolidated list so the frontend doesn't need to manually import regional files.
 */
const getEntryKind = (opp, model, isPlace) => {
  if (isPlace) return 'tender_source';
  if (model === 'loan') return 'lender';
  if (model === 'tender') return 'tender_notice';
  return 'scheme';
};

const determineOppModel = (fundingType = '') => {
  const t = fundingType.toLowerCase();

  if (t.includes('tender') || t.includes('contract') || t.includes('procurement')) {
    return 'tender';
  }

  if (t.includes('loan') || t.includes('credit') || t.includes('finance')) {
    return 'loan';
  }

  if (t.includes('grant') || t.includes('subsidy') || t.includes('funding')) {
    return 'grant';
  }

  return 'grant';
};

const mapSchema = (opp) => {
  const model = opp.opportunity_model || determineOppModel(opp.funding_type || '');
  const isPlace = opp.slug && opp.slug.includes('place-public-tenders');

  const isVerified = opp.verified === true || opp.verified === 'verified' || opp.verified_status === 'verified';

  return {
    ...opp,
    opportunity_model: isPlace ? 'tender' : model,
    entry_kind: opp.entry_kind || getEntryKind(opp, model, isPlace),
    status: opp.status || 'unknown',
    verified: isVerified,
    verification_status: isVerified ? 'verified' : 'pending'
  };
};

const allOpportunities = [
  ...baseOpportunities,
  ...germanyVerified,
  ...franceVerified
].map(mapSchema);

export default allOpportunities;
