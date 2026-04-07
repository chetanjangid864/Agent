import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ShieldCheck, Calendar, Euro, Building2, Search, ExternalLink, CheckCircle } from 'lucide-react';
import { europeanCountries } from '@/utils/countries';
import opportunities from '@/data/index';
import sources from '@/data/sources.json';
import { formatStatus } from '@/utils/formatters';

export function generateStaticParams() {
  return europeanCountries.map((c) => ({
    slug: c.slug,
  }));
}

export default async function CountryHubPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const countryData = europeanCountries.find(c => c.slug === slug);

  if (!countryData) {
    notFound();
  }

  // Filter verified opportunities natively matching this country
  const verifiedOpportunities = opportunities.filter(o => o.country_slug === slug);
  const grants = verifiedOpportunities.filter(o => o.funding_type?.includes('Grant'));
  const tenders = verifiedOpportunities.filter(o => o.funding_type?.includes('Tender'));
  const loans = verifiedOpportunities.filter(o => o.funding_type?.includes('Loan'));

  // Load associated country-specific sources if any, and EU-wide generic sources
  const countrySources = sources.filter(s => s.country.toLowerCase() === countryData.name.toLowerCase());
  const euSources = sources.filter(s => s.country === 'EU');

  const hasData = verifiedOpportunities.length > 0 || countrySources.length > 0;

  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      
      {/* Header Profile */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '4rem', marginBottom: '1rem', lineHeight: '1.1' }}>
           {countryData.name} Funding Hub
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
           Verified registry of open grants, public tenders, and state-backed business loans strictly sourced from official government authorities.
        </p>
      </div>

      {!hasData ? (
        /* Empty State Implementation */
        <div className="glass-card" style={{ padding: '5rem 2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
             <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '1.5rem', borderRadius: '50%' }}>
                <Search size={48} color="var(--accent)" />
             </div>
             <h2 style={{ fontSize: '2.5rem', margin: 0, color: 'white' }}>Data Collection in Progress</h2>
             <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: '1.6' }}>
                We refuse to fabricate opportunities. Our analysts and automated crawlers are currently scraping and verifying the official procurement portals and ministries of {countryData.name}. 
                <br/><br/>
                Once verified through our rigid schema framework, the real open applications will populate here automatically.
             </p>
             <Link href="/opportunities" className="btn btn-primary" style={{ marginTop: '1rem' }}>
               Browse Verified EU Opportunities
             </Link>
        </div>
      ) : (
        /* Fully Populated Schema State */
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) 1fr', gap: '3rem' }}>
           
           <div>
              {/* Grants Section */}
              <section style={{ marginBottom: '4rem' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '2rem' }}>
                    <ShieldCheck color="var(--primary)" size={32} />
                    <h2 style={{ fontSize: '2.2rem', margin: 0 }}>Verified Grants</h2>
                 </div>
                 
                 {grants.length > 0 ? grants.map(opp => (
                   <Link href={`/opportunity/${opp.slug}`} key={opp.slug}>
                     <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem', transition: 'transform 0.2s', border: opp.verified_status === 'verified' ? '1px solid #10b981' : '1px solid var(--border)' }}>
                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem' }}>
                         <h3 style={{ fontSize: '1.4rem', margin: 0, color: 'white' }}>{opp.title}</h3>
                         {opp.verified_status?.toLowerCase().includes('pending') ? (
                           <span style={{ fontSize: '0.75rem', padding: '4px 10px', background: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent)', borderRadius: '12px', border: '1px solid rgba(245, 158, 11, 0.3)', whiteSpace: 'nowrap' }}>Pending Verification</span>
                         ) : opp.verified_status === 'verified' ? (
                           <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', padding: '4px 10px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.3)', whiteSpace: 'nowrap' }}><CheckCircle size={12}/> Verified</span>
                         ) : null}
                       </div>
                       <p style={{ color: 'var(--text-muted)' }}>{opp.short_summary}</p>
                       <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                          <span style={{ fontSize: '0.85rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '4px' }}><Euro size={14}/> {opp.funding_amount}</span>
                          <span style={{ fontSize: '0.85rem', color: '#cbd5e1', opacity: 0.5 }}>|</span>
                          <span style={{ fontSize: '0.85rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14}/> {opp.application_deadline}</span>
                          <span style={{ fontSize: '0.85rem', color: '#cbd5e1', opacity: 0.5 }}>|</span>
                          <span style={{ fontSize: '0.85rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                             Source: {opp.official_source_name || "Official Local Govt"}
                          </span>
                       </div>
                     </div>
                   </Link>
                 )) : <p style={{ color: 'var(--text-muted)' }}>No live verified grants exclusively available. Check the EU-wide opportunities.</p>}
              </section>

              {/* Tenders Section */}
              <section style={{ marginBottom: '4rem' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '2rem' }}>
                    <Building2 color="var(--primary)" size={32} />
                    <h2 style={{ fontSize: '2.2rem', margin: 0 }}>Active Public Tenders</h2>
                 </div>
                 
                 {tenders.length > 0 ? tenders.map(opp => (
                   <Link href={`/opportunity/${opp.slug}`} key={opp.slug}>
                     <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem', border: opp.verified_status === 'verified' ? '1px solid #10b981' : '1px solid var(--border)' }}>
                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem' }}>
                         <h3 style={{ fontSize: '1.4rem', margin: 0, color: 'white' }}>{opp.title}</h3>
                         {opp.verified_status?.toLowerCase().includes('pending') ? (
                           <span style={{ fontSize: '0.75rem', padding: '4px 10px', background: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent)', borderRadius: '12px', border: '1px solid rgba(245, 158, 11, 0.3)', whiteSpace: 'nowrap' }}>Pending Verification</span>
                         ) : opp.verified_status === 'verified' ? (
                           <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', padding: '4px 10px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.3)', whiteSpace: 'nowrap' }}><CheckCircle size={12}/> Verified</span>
                         ) : null}
                       </div>
                       <p style={{ color: 'var(--text-muted)' }}>{opp.short_summary}</p>
                       <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                          <span style={{ fontSize: '0.85rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '4px' }}><Euro size={14}/> {opp.funding_amount}</span>
                       </div>
                     </div>
                   </Link>
                 )) : <p style={{ color: 'var(--text-muted)' }}>No localized tenders recorded today. Check TED explicitly.</p>}
              </section>

              {/* Loans Section */}
              <section>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '2rem' }}>
                    <Euro color="var(--primary)" size={32} />
                    <h2 style={{ fontSize: '2.2rem', margin: 0 }}>Govt Backed Loans & Guarantees</h2>
                 </div>
                 
                 {loans.length > 0 ? loans.map(opp => (
                   <Link href={`/opportunity/${opp.slug}`} key={opp.slug}>
                     <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem', borderLeft: opp.verified_status === 'verified' ? '4px solid #10b981' : '4px solid var(--accent)' }}>
                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem' }}>
                         <h3 style={{ fontSize: '1.4rem', margin: 0, color: 'white' }}>{opp.title}</h3>
                         {opp.verified_status?.toLowerCase().includes('pending') ? (
                           <span style={{ fontSize: '0.75rem', padding: '4px 10px', background: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent)', borderRadius: '12px', border: '1px solid rgba(245, 158, 11, 0.3)', whiteSpace: 'nowrap' }}>Pending Verification</span>
                         ) : opp.verified_status === 'verified' ? (
                           <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', padding: '4px 10px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.3)', whiteSpace: 'nowrap' }}><CheckCircle size={12}/> Verified</span>
                         ) : null}
                       </div>
                       <p style={{ color: 'var(--text-muted)' }}>{opp.short_summary}</p>
                     </div>
                   </Link>
                 )) : <p style={{ color: 'var(--text-muted)' }}>No soft-loans detected presently.</p>}
              </section>

           </div>

           {/* Sidebar Component: Official Sources */}
           <div>
             <div className="glass" style={{ padding: '2rem', borderRadius: '16px', position: 'sticky', top: '100px' }}>
                <h3 style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>Official Source Registry</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                   All content on this page is scraped and verified from the following trusted authorities via our programmatic engine.
                </p>

                {countrySources.map(s => (
                   <div key={s.source_id} style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>{s.source_name}</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Coverage: {s.coverage_type}</p>
                      <a href={s.official_url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        Visit Raw Portal <ExternalLink size={12}/>
                      </a>
                   </div>
                ))}

                {euSources.slice(0, 3).map(s => (
                   <div key={s.source_id} style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>{s.source_name} (EU-wide)</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Coverage: {s.coverage_type}</p>
                      <a href={s.official_url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        Visit Raw Portal <ExternalLink size={12}/>
                      </a>
                   </div>
                ))}
             </div>
           </div>

        </div>
      )}
    </div>
  );
}
