import { Calendar, MapPin, Battery, Target, Activity, CheckCircle } from 'lucide-react';
import { formatStatus } from '@/utils/formatters';

export default function OpportunityHero({ opp }) {
  return (
    <>
      <div style={{ marginBottom: '1.5rem' }}>
        {opp.verified_status === 'verified' && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.4rem 1rem', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', border: '1px solid #10b981', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginRight: '1rem' }}>
            <CheckCircle size={16} /> Verified Source
          </div>
        )}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.4rem 1rem', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary)', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <Activity size={16} /> {opp.funding_type || "Funding"} | {formatStatus(opp.status || "open")}
        </div>
      </div>

      <h1 className="text-gradient" style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>
        {opp.title}
      </h1>

      {(opp.short_summary || opp.summary || opp.full_description) && (
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '800px' }}>
          {opp.short_summary || opp.summary || opp.full_description}
        </p>
      )}

      {/* Hero Stats Card */}
      {(opp.funding_amount || opp.country || opp.application_deadline || opp.audience_type) && (
        <div className="glass-card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', padding: '2rem', marginBottom: '4rem' }}>
          {opp.funding_amount && (
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Battery size={16} color="var(--accent)"/> Amount / Value
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-color)' }}>{opp.funding_amount}</div>
            </div>
          )}
          {(opp.country || opp.region_of_europe) && (
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="var(--primary)"/> Geography
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-color)' }}>
                {opp.country} {opp.region_of_europe ? `(${opp.region_of_europe})` : ''}
              </div>
            </div>
          )}
          {opp.application_deadline && (
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calendar size={16} color="var(--accent)"/> Deadline
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-color)' }}>{opp.application_deadline}</div>
            </div>
          )}
          {opp.audience_type && (
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Target size={16} color="var(--primary)"/> Audience
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-color)' }}>{opp.audience_type}</div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
