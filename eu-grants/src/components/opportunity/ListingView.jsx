import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import opportunities from '@/data/index';
import { europeanCountries } from '@/utils/countries';

export default function ListingView({ type, countrySlug, sectorSlug }) {
  const isAllCountries = !countrySlug || countrySlug === 'all';
  const isAllSectors = !sectorSlug || sectorSlug === 'all';

  const countryName = isAllCountries ? 'Europe' : (europeanCountries.find(c => c.slug === countrySlug)?.name || countrySlug);
  const sectorName = isAllSectors ? 'All Sectors' : sectorSlug.replace(/-/g, ' ');

  // Filter logic
  let results = opportunities.filter(o => o.opportunity_model === type);
  if (!isAllCountries) {
    results = results.filter(o => o.country_slug === countrySlug || (o.country && o.country.toLowerCase() === countrySlug));
  }
  if (!isAllSectors) {
    results = results.filter(o => o.tags?.includes(sectorSlug) || o.sector?.toLowerCase().includes(sectorName.split(' ')[0]));
  }

  // Split out verified and unverified for the toggle
  const verifiedResults = results.filter(o => o.verified === true);
  
  // Note: For this Phase 2 scope, we'll default to only strongly showing verified items in the top grid.
  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', padding: '4rem 2rem' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        
        {/* Breadcrumb / Nav */}
        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          <Link href="/">Home</Link> &gt; 
          <Link href={`/${type}s`} style={{ marginLeft: '0.5rem', textTransform: 'capitalize' }}>{type}s</Link> &gt; 
          <span style={{ marginLeft: '0.5rem', color: '#0f172a', textTransform: 'capitalize' }}>{countryName}</span>
          {!isAllSectors && <span style={{ marginLeft: '0.5rem', textTransform: 'capitalize' }}> &gt; {sectorName}</span>}
        </div>

        {/* Intro Banner */}
        <div style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid var(--border)' }}>
          <h1 style={{ fontSize: '3rem', color: '#0f172a', marginBottom: '1rem', textTransform: 'capitalize' }}>
            {type}s in {countryName} {isAllSectors ? '' : `- ${sectorName}`}
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px' }}>
            Discover active {type} opportunities engineered for businesses and startups scaling in {countryName}. Narrow down your search by applying sector filters or verify exact technical requirements in the records below.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '3rem' }}>
          
          {/* Sidebar Area */}
          <aside>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '1rem' }}>Filter by Sector</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Link href={`/${type}s/${countrySlug || 'all'}/cleantech`} style={{ color: 'var(--primary)' }}>Cleantech</Link>
                <Link href={`/${type}s/${countrySlug || 'all'}/software`} style={{ color: 'var(--primary)' }}>IT / Software</Link>
                <Link href={`/${type}s/${countrySlug || 'all'}/biotech`} style={{ color: 'var(--primary)' }}>Biotech</Link>
                <Link href={`/${type}s/${countrySlug || 'all'}/manufacturing`} style={{ color: 'var(--primary)' }}>Manufacturing</Link>
                <Link href={`/${type}s/${countrySlug || 'all'}`} style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Clear Sector Filter</Link>
              </div>
            </div>
            
            <div className="glass-card" style={{ padding: '1.5rem', background: '#f8fafc' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '0.5rem' }}>Verified / Live Toggle</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>We default to hiding unverified placeholder data.</p>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--primary)' }}>
                <input type="checkbox" checked={true} readOnly /> Show Verified Only
              </label>
            </div>
          </aside>

          {/* Listings Area */}
          <main>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
               <h2 style={{ fontSize: '1.5rem', color: '#0f172a' }}>{verifiedResults.length} Verified Records Found</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {verifiedResults.length > 0 ? verifiedResults.map(opp => (
                <Link href={`/opportunity/${opp.slug}`} key={opp.slug} className="glass-card" style={{ padding: '2rem', display: 'flex', gap: '2rem', textDecoration: 'none' }}>
                   <div style={{ flex: 1 }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', background: '#e0e7ff', color: '#4338ca', borderRadius: '12px', fontWeight: 600 }}>
                           {opp.opportunity_model.toUpperCase()}
                        </span>
                        <span style={{ fontSize: '0.8rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                           <CheckCircle size={14} /> Verified
                        </span>
                     </div>
                     <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '1rem' }}>{opp.title}</h3>
                     <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{opp.short_summary || opp.funding_objective}</p>
                   </div>
                   <div style={{ width: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: '1px solid var(--border)', paddingLeft: '2rem' }}>
                     <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Deadline</div>
                     <div style={{ fontWeight: 600, color: '#0f172a', marginBottom: '1rem' }}>{opp.application_deadline || "Rolling"}</div>
                     <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Source</div>
                     <div style={{ fontWeight: 600, color: 'var(--primary)' }}>{opp.provider_organization || opp.source_authority}</div>
                   </div>
                </Link>
              )) : (
                <div style={{ padding: '4rem', textAlign: 'center', background: '#f8fafc', borderRadius: '8px', border: '1px dashed var(--border)' }}>
                  <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '0.5rem' }}>No exact matches available</h3>
                  <p style={{ color: 'var(--text-muted)' }}>We are continually validating new information. Please check back soon or widen your filters.</p>
                </div>
              )}
            </div>

            {/* Related Blog Links */}
            <div style={{ marginTop: '5rem', borderTop: '1px solid var(--border)', paddingTop: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '1.5rem' }}>Related Intelligence</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                 <div className="glass-card" style={{ padding: '1.5rem', background: '#f8fafc' }}>
                    <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Read Guide</h4>
                    <h3 style={{ color: '#0f172a', fontSize: '1.1rem' }}>Applying in {countryName}: A Strategic Overview</h3>
                 </div>
                 <div className="glass-card" style={{ padding: '1.5rem', background: '#f8fafc' }}>
                    <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Download</h4>
                    <h3 style={{ color: '#0f172a', fontSize: '1.1rem' }}>{type.charAt(0).toUpperCase() + type.slice(1)} Readiness Matrix</h3>
                 </div>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
