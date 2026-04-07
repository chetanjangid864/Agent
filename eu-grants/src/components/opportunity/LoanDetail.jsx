import OpportunityHero from './shared/OpportunityHero';
import OpportunitySidebar from './shared/OpportunitySidebar';

export default function LoanDetail({ opp }) {
  return (
    <>
      <OpportunityHero opp={opp} />
      
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
        <div className="prose" style={{ margin: 0, maxWidth: '100%' }}>
          
          {(opp.full_description || opp.summary) && (
            <>
              <h2>What is this loan?</h2>
              <p>{opp.full_description || opp.summary}</p>
            </>
          )}

          {opp.funding_objective && (
            <>
              <h2>Why this loan exists</h2>
              <p>{opp.funding_objective}</p>
            </>
          )}

          {(opp.minimum_funding || opp.maximum_funding || opp.term_length || opp.interest_note || opp.repayment_note || opp.guarantee_note) && (
            <>
              <h2>Loan Details</h2>
              <ul>
                {opp.minimum_funding !== undefined && opp.minimum_funding !== null && <li><strong>Minimum Loan:</strong> {opp.minimum_funding}</li>}
                {opp.maximum_funding !== undefined && opp.maximum_funding !== null && <li><strong>Maximum Loan:</strong> {opp.maximum_funding}</li>}
                {opp.term_length && <li><strong>Term Length:</strong> {opp.term_length}</li>}
                {opp.interest_note && <li><strong>Interest Note:</strong> {opp.interest_note}</li>}
                {opp.repayment_note && <li><strong>Repayment Details:</strong> {opp.repayment_note}</li>}
                {opp.guarantee_note && <li><strong>Guarantee / Collateral:</strong> {opp.guarantee_note}</li>}
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
              {opp.application_process && <p><strong>Steps:</strong> {opp.application_process}</p>}
              {opp.required_documents && <p><strong>Required Documents:</strong> {opp.required_documents}</p>}
            </>
          )}

        </div>

        <OpportunitySidebar opp={opp} />
      </div>
    </>
  );
}
