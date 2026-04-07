import OpportunityHero from './shared/OpportunityHero';
import OpportunitySidebar from './shared/OpportunitySidebar';

export default function TenderDetail({ opp }) {
  return (
    <>
      <OpportunityHero opp={opp} />
      
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
        <div className="prose" style={{ margin: 0, maxWidth: '100%' }}>
          
          {(opp.full_description || opp.summary) && (
            <>
              <h2>What is this tender?</h2>
              <p>{opp.full_description || opp.summary}</p>
            </>
          )}

          {opp.contract_categories && (
            <>
              <h2>What is being procured?</h2>
              <p>{opp.contract_categories}</p>
            </>
          )}

          {(opp.estimated_value || opp.procedure_type || opp.lot_structure || opp.submission_method) && (
            <>
              <h2>Tender Details</h2>
              <ul>
                {opp.estimated_value !== undefined && opp.estimated_value !== null && <li><strong>Estimated Value:</strong> {opp.estimated_value}</li>}
                {opp.procedure_type && <li><strong>Procedure Type:</strong> {opp.procedure_type}</li>}
                {opp.lot_structure && <li><strong>Lot Structure:</strong> {opp.lot_structure}</li>}
                {opp.submission_method && <li><strong>Submission Method:</strong> {opp.submission_method}</li>}
              </ul>
            </>
          )}

          {(opp.eligibility || opp.geographic_eligibility || opp.sector) && (
            <>
              <h2 style={{ marginTop: '3rem' }}>Who can bid?</h2>
              <ul>
                {opp.eligibility && <li><strong>Core Eligibility:</strong> {opp.eligibility}</li>}
                {opp.geographic_eligibility && <li><strong>Geography / Restrictions:</strong> {opp.geographic_eligibility}</li>}
                {opp.sector && <li><strong>Sector:</strong> {opp.sector}</li>}
              </ul>
            </>
          )}

          {(opp.application_process || opp.required_documents) && (
            <>
              <h2 style={{ marginTop: '3rem' }}>Submission Process</h2>
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
