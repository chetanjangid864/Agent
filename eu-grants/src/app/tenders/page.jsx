import Link from 'next/link';
import opportunities from '@/data/index';

export default function TendersPage() {
  const verifiedTenders = opportunities.filter(o => o.opportunity_model === 'tender' && o.verified === true).slice(0, 6);

  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', padding: '4rem 2rem' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', color: '#0f172a', marginBottom: '1rem' }}>European Public Tenders</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            Massive public procurement contracts and state-funded mandates. Access the verified channels for multi-million euro deployments.
          </p>
        </div>

        {/* Country Browse Block */}
        <section style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: '#0f172a' }}>By Country</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
            {['France', 'Germany', 'Netherlands', 'Spain', 'Italy'].map(country => (
              <Link href={`/tenders/${country.toLowerCase()}`} key={country} className="glass-card" style={{ padding: '1.5rem', textAlign: 'center', fontWeight: 600, color: '#334155' }}>
                 {country}
              </Link>
            ))}
          </div>
        </section>

        {/* Sector Browse Block */}
        <section style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: '#0f172a' }}>By Category</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {['Public Works', 'IT Solutions', 'Healthcare', 'Infrastructure', 'Consulting & Services'].map(sector => (
              <Link href={`/tenders/all/${sector.toLowerCase().replace(/ \/ | & | /g, '-')}`} key={sector} style={{ padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '30px', color: '#334155', fontWeight: 500, background: '#ffffff' }}>
                 {sector}
              </Link>
            ))}
          </div>
        </section>

        {/* Latest Verified Listings */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '1.5rem' }}>Latest Verified Tenders</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
             {verifiedTenders.length > 0 ? verifiedTenders.map(opp => (
                <Link href={`/opportunity/${opp.slug}`} key={opp.slug} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>Verified Source</span>
                   </div>
                   <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.5rem', flex: 1 }}>{opp.title}</h3>
                   <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                      {opp.country}
                   </div>
                   <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', color: '#334155', fontSize: '0.9rem', fontWeight: 600 }}>
                      Status: {opp.status || "Open"}
                   </div>
                </Link>
             )) : (
                <p style={{ color: 'var(--text-muted)' }}>No recent verified tenders available.</p>
             )}
          </div>
        </section>

      </div>
    </div>
  );
}
