import OpportunityHero from './shared/OpportunityHero';
import OpportunitySidebar from './shared/OpportunitySidebar';

export default function GrantDetail({ opp }) {
  return (
    <>
      <OpportunityHero opp={opp} />
      
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
        <div className="prose" style={{ margin: 0, maxWidth: '100%' }}>
          
          {(opp.full_description || opp.summary) && (
            <>
              <h2>What is this grant?</h2>
              <p>{opp.full_description || opp.summary}</p>
            </>
          )}

          {opp.funding_objective && (
            <>
              <h2>Why this grant exists</h2>
              <p>{opp.funding_objective}</p>
            </>
          )}

          {(opp.minimum_funding || opp.maximum_funding || opp.co_funding_ratio || opp.grant_intensity) && (
            <>
              <h2>Funding Details</h2>
              <ul>
                {opp.minimum_funding !== undefined && opp.minimum_funding !== null && <li><strong>Minimum Funding:</strong> {opp.minimum_funding}</li>}
                {opp.maximum_funding !== undefined && opp.maximum_funding !== null && <li><strong>Maximum Funding:</strong> {opp.maximum_funding}</li>}
                {opp.co_funding_ratio && <li><strong>Co-Financing Ratio:</strong> {opp.co_funding_ratio}</li>}
                {opp.grant_intensity && <li><strong>Grant Intensity:</strong> {opp.grant_intensity}</li>}
              </ul>
            </>
          )}

          {(opp.eligibility || opp.geographic_eligibility || opp.business_stage || opp.sector) && (
            <>
              <h2 style={{ marginTop: '3rem' }}>Eligibility Criteria</h2>
              <ul>
                {opp.eligibility && <li><strong>Core Eligibility:</strong> {opp.eligibility}</li>}
                {opp.geographic_eligibility && <li><strong>Geography:</strong> {opp.geographic_eligibility}</li>}
                {opp.business_stage && <li><strong>Business Stage:</strong> {opp.business_stage}</li>}
                {opp.sector && <li><strong>Sector:</strong> {opp.sector}</li>}
              </ul>
            </>
          )}

          {(opp.application_process || opp.required_documents) && (
            <>
              <h2 style={{ marginTop: '3rem' }}>Application Process</h2>
              {opp.application_process && <p><strong>Where to apply:</strong> {opp.application_process}</p>}
              {opp.required_documents && <p><strong>Required Documents:</strong> {opp.required_documents}</p>}
            </>
          )}

          {opp.incubator_or_partner_support && (
            <div style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent)', background: 'rgba(245, 158, 11, 0.05)', marginTop: '2rem' }}>
               <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--accent)' }}>Partner Ecosystem Support</h4>
               <p style={{ margin: 0 }}>{opp.incubator_or_partner_support}</p>
            </div>
          )}
        </div>

        <OpportunitySidebar opp={opp} />
      </div>
    </>
  );
}
