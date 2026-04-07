import Link from 'next/link';
import { Building, BookOpen, ExternalLink } from 'lucide-react';

export default function OpportunitySidebar({ opp }) {
  const tags = Array.isArray(opp?.tags) ? opp.tags : [];

  return (
    <div>
      <div className="glass" style={{ padding: '2rem', borderRadius: '16px', position: 'sticky', top: '100px' }}>
        <h3 style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>Direct Actions</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {(opp.official_source_url || opp.official_website) ? (
            <a href={opp.official_source_url || opp.official_website} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
              Official Source <ExternalLink size={16} style={{ marginLeft: '8px' }}/>
            </a>
          ) : (
            <button className="btn btn-primary" disabled style={{ width: '100%', opacity: 0.5, cursor: 'not-allowed' }}>
              Source Listing TBD
            </button>
          )}
          <Link href="/grant-eligibility-europe" className="btn btn-outline" style={{ width: '100%' }}>
            Check Eligibility Guides <BookOpen size={16} style={{ marginLeft: '8px' }}/>
          </Link>
        </div>

        {(opp.provider_organization || opp.source_authority || opp.issuing_body) && (
          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Funding / Controlling Authority</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-color)', fontWeight: 600 }}>
              <Building size={18} color="var(--accent)" /> {opp.provider_organization || opp.source_authority || opp.issuing_body}
            </div>
          </div>
        )}

        {tags.length > 0 && (
          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Tags</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {tags.map((tag, i) => (
                <span key={i} style={{ padding: '4px 10px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '20px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>#{tag}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
