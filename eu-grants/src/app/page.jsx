'use client';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Search, FileText, Briefcase, ChevronRight, Map, TrendingUp, Settings, Activity } from 'lucide-react';
import opportunities from '@/data/index';

export default function Home() {
  const verifiedOpps = opportunities.filter(o => o.verified === true).slice(0, 6);

  return (
    <div style={{ background: 'var(--bg-color)' }}>
      {/* SECTION 1: HERO */}
      <section style={{ padding: '6rem 2rem 4rem', textAlign: 'center', background: 'linear-gradient(to bottom, #f1f5f9, #ffffff)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Find Verified European Grants, Loans, and Tenders for Businesses and Startups
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
            Browse opportunities by type, country, sector, and business profile with clear, source-based information.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <Link href="/grants" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
              Explore Grants
            </Link>
            <Link href="/loans" className="btn btn-primary" style={{ background: '#1e293b', padding: '1rem 2rem' }}>
              Explore Loans
            </Link>
            <Link href="/tenders" className="btn btn-primary" style={{ background: '#0f766e', padding: '1rem 2rem' }}>
              Explore Tenders
            </Link>
          </div>
          <div>
            <Link href="/opportunities?verified=true" style={{ color: 'var(--primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
               Browse All Verified Opportunities <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: THREE MAIN CARDS */}
      <section style={{ padding: '4rem 2rem', background: '#ffffff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <Link href="/grants" className="glass-card" style={{ padding: '2rem', display: 'block', textDecoration: 'none' }}>
             <Activity size={32} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
             <h2 style={{ fontSize: '1.5rem', color: '#0f172a' }}>Grants</h2>
             <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Non-dilutive or program-based support for eligible businesses and startups.</p>
             <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Explore Grants &rarr;</span>
          </Link>
          <Link href="/loans" className="glass-card" style={{ padding: '2rem', display: 'block', textDecoration: 'none' }}>
             <Briefcase size={32} color="#1e293b" style={{ marginBottom: '1.5rem' }} />
             <h2 style={{ fontSize: '1.5rem', color: '#0f172a' }}>Loans</h2>
             <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Public or public-backed business financing and guaranteed growth capital.</p>
             <span style={{ color: '#1e293b', fontWeight: 600 }}>Explore Loans &rarr;</span>
          </Link>
          <Link href="/tenders" className="glass-card" style={{ padding: '2rem', display: 'block', textDecoration: 'none' }}>
             <Settings size={32} color="#0f766e" style={{ marginBottom: '1.5rem' }} />
             <h2 style={{ fontSize: '1.5rem', color: '#0f172a' }}>Tenders</h2>
             <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Public procurement and contract opportunities from state and public bodies.</p>
             <span style={{ color: '#0f766e', fontWeight: 600 }}>Explore Tenders &rarr;</span>
          </Link>
        </div>
      </section>

      {/* SECTION 3: BROWSE BY COUNTRY */}
      <section style={{ padding: '5rem 2rem', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2rem', color: '#0f172a', margin: 0 }}>Browse by Country</h2>
            <Link href="/countries" style={{ color: 'var(--primary)', fontWeight: 600 }}>View all countries &rarr;</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
            {['France', 'Germany', 'Netherlands', 'Spain', 'Italy', 'Belgium'].map(country => (
              <Link href={`/countries/${country.toLowerCase()}`} key={country} className="glass-card" style={{ padding: '1.5rem', textAlign: 'center', fontWeight: 600, color: '#334155' }}>
                 {country}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: BROWSE BY SECTOR */}
      <section style={{ padding: '5rem 2rem', background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2rem', color: '#0f172a', margin: 0 }}>Browse by Sector</h2>
            <Link href="/sectors" style={{ color: 'var(--primary)', fontWeight: 600 }}>View all sectors &rarr;</Link>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {['Cleantech', 'Biotech', 'IT / Software', 'AI / Data', 'Energy', 'Women-led', 'SMEs', 'General Innovation'].map(sector => (
              <Link href={`/sectors/${sector.toLowerCase().replace(/ \/ | /g, '-')}`} key={sector} style={{ padding: '0.75rem 1.5rem', border: '1px solid var(--border)', borderRadius: '30px', color: '#334155', fontWeight: 500, background: '#f8fafc' }}>
                 {sector}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: LATEST VERIFIED */}
      <section style={{ padding: '5rem 2rem', background: '#f8fafc' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '2rem' }}>Latest Verified Opportunities</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
             {verifiedOpps.map(opp => (
                <Link href={`/opportunity/${opp.slug}`} key={opp.slug} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', background: '#e0e7ff', color: '#4338ca', borderRadius: '12px', fontWeight: 600 }}>
                         {opp.opportunity_model.toUpperCase()}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                         <CheckCircle size={14} /> Verified
                      </span>
                   </div>
                   <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.5rem', flex: 1 }}>{opp.title}</h3>
                   <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                      {opp.provider_organization || opp.source_authority} &middot; {opp.country}
                   </div>
                   <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', color: '#334155', fontSize: '0.9rem', fontWeight: 600 }}>
                      Deadline: {opp.application_deadline || "Rolling / Varies"}
                   </div>
                </Link>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: GUIDES / BLOG PREVIEW */}
      <section style={{ padding: '5rem 2rem', background: '#ffffff' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '2rem' }}>Essential Intelligence</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
             {/* Placeholders for Blog */}
             <div className="glass-card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem' }}>Guide</div>
                <h3 style={{ fontSize: '1.25rem', color: '#0f172a' }}>EU Grants vs Loans: What Startups Need to Know</h3>
             </div>
             <div className="glass-card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem' }}>Sector Deep Dive</div>
                <h3 style={{ fontSize: '1.25rem', color: '#0f172a' }}>Top Cleantech Funding Pathways in 2026</h3>
             </div>
             <div className="glass-card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem' }}>Country Guide</div>
                <h3 style={{ fontSize: '1.25rem', color: '#0f172a' }}>How to Secure Innovation Funding in Germany</h3>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: RESOURCES / DOWNLOADS */}
      <section style={{ padding: '5rem 2rem', background: '#f8fafc' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '2rem' }}>Resources & Toolkits</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
             <div className="glass-card" style={{ border: '2px dashed var(--border)', padding: '2rem', textAlign: 'center', background: 'transparent' }}>
                <FileText size={32} color="var(--text-muted)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.1rem', color: '#0f172a' }}>Grant Application Checklist</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Downloadable PDF coming soon</p>
             </div>
             <div className="glass-card" style={{ border: '2px dashed var(--border)', padding: '2rem', textAlign: 'center', background: 'transparent' }}>
                <FileText size={32} color="var(--text-muted)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.1rem', color: '#0f172a' }}>Tender Readiness Assessment</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Downloadable Excel coming soon</p>
             </div>
             <div className="glass-card" style={{ border: '2px dashed var(--border)', padding: '2rem', textAlign: 'center', background: 'transparent' }}>
                <FileText size={32} color="var(--text-muted)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.1rem', color: '#0f172a' }}>Startup Funding Prep Guide</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Interactive template coming soon</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: INQUIRY CTA */}
      <section style={{ padding: '5rem 2rem', background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Need Help Checking Eligibility?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
            Our expert partners can help you navigate complex technical requirements and accelerate your funding journey.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/contact" style={{ background: 'white', color: 'var(--primary)', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 600 }}>
               Request Support
            </Link>
            <Link href="/contact" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 600 }}>
               Ask About an Opportunity
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
