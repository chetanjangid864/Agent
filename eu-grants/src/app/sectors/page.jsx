import Link from 'next/link';

const sectors = {
  "Innovation & Technology": ["AI / Data", "IT / Software", "Cybersecurity", "DeepTech", "Robotics"],
  "Science & Health": ["Biotech", "HealthTech", "MedTech"],
  "Climate & Infrastructure": ["Cleantech", "Greentech", "Energy", "Circular Economy", "Water / Environment"],
  "Business Profiles": ["Women-led businesses", "SMEs", "Startups", "Scaleups", "R&D businesses"],
  "Other Industries": ["AgriTech", "FoodTech", "FinTech", "Manufacturing", "Mobility / Transport", "Creative / Media / Culture", "Tourism / Hospitality", "Social Impact"]
};

export default function SectorsPage() {
  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', padding: '4rem 2rem' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', color: '#0f172a', marginBottom: '1rem' }}>Browse by Target Sector</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            European funding is highly structured around strategic verticals. Select your domain to discover relevant grants, loans, and tenders.
          </p>
        </div>

        {Object.entries(sectors).map(([category, items]) => (
          <section key={category} style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border)' }}>
              {category}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {items.map(sector => {
                const slug = sector.toLowerCase().replace(/ \/ | & | /g, '-');
                return (
                  <div key={sector} className="glass-card" style={{ padding: '1.5rem', background: '#ffffff' }}>
                    <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '1rem' }}>{sector}</h3>
                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', fontWeight: 500 }}>
                      <Link href={`/grants/all/${slug}`} style={{ color: 'var(--primary)' }}>Grants</Link>&middot;
                      <Link href={`/loans/all/${slug}`} style={{ color: '#1e293b' }}>Loans</Link>&middot;
                      <Link href={`/tenders/all/${slug}`} style={{ color: '#0f766e' }}>Tenders</Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}

      </div>
    </div>
  );
}
