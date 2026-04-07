import opportunities from '@/data/opportunities.json';
import Link from 'next/link';
import { Euro, Calendar } from 'lucide-react';

export default function RelatedOpportunities({ count = 3, categoryFilter = null }) {
  // Simple logic to show related grants based on category, or just latest if no filter provided.
  const relatedOpts = categoryFilter 
     ? opportunities.filter(o => o.category === categoryFilter || o.tags.includes(categoryFilter.toLowerCase()))
     : opportunities;

  const displayOps = relatedOpts.slice(0, count);

  if (displayOps.length === 0) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
      {displayOps.map((opp) => (
        <Link href={`/opportunity/${opp.slug}`} key={opp.slug}>
          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', transition: 'transform 0.2s', cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <span style={{ padding: '4px 12px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary)', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>{opp.funding_type}</span>
            </div>
            <h4 style={{ fontSize: '1.25rem', margin: 0, color: 'white' }}>{opp.title}</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>{opp.short_summary}</p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
               <span style={{ fontSize: '0.8rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '4px' }}><Euro size={14}/> {opp.funding_amount}</span>
               <span style={{ fontSize: '0.8rem', color: '#cbd5e1', opacity: 0.5 }}>|</span>
               <span style={{ fontSize: '0.8rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14}/> {opp.application_deadline}</span>
               <span style={{ fontSize: '0.8rem', color: '#cbd5e1', opacity: 0.5 }}>|</span>
               <span style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>{opp.country}</span>
            </div>
          </div>
        </Link>
      ))}
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
         <Link href="/opportunities" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.95rem' }}>View All Live Opportunities &rarr;</Link>
      </div>
    </div>
  );
}
