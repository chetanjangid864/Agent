'use client';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Search, FileText, Briefcase, ChevronRight, Activity, ShieldCheck, Globe, Star, Zap } from 'lucide-react';
import opportunities from '@/data/index';

export default function Home() {
  const verifiedOpps = opportunities.filter(o => o.verified === true).slice(0, 6);

  return (
    <>
      {/* SECTION 1: HERO */}
      <section style={{ padding: '6rem 0 3rem', textAlign: 'center', background: '#f8fafc' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 style={{ marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Find Verified European Grants, Loans & Tenders for Businesses and Startups
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
            Filter and discover non-dilutive capital by country, sector, and business type with strict, source-backed data.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <Link href="/grants" className="btn btn-primary">
              Explore Grants
            </Link>
            <Link href="/opportunities?verified=true" className="btn btn-outline" style={{ background: 'white' }}>
              Browse Verified Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'white', padding: '1.5rem 0' }}>
        <div className="container" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontWeight: 600 }}>
             <ShieldCheck size={20} color="var(--primary)" /> Verified data
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontWeight: 600 }}>
             <Globe size={20} color="var(--primary)" /> European coverage
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontWeight: 600 }}>
             <Star size={20} color="var(--primary)" /> Startup focus
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontWeight: 600 }}>
             <Zap size={20} color="var(--primary)" /> No noise
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="section-padding" style={{ background: '#ffffff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '3rem' }}>How It Works</h2>
          <div className="grid grid-3">
             <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '24px', background: 'var(--bg-color)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem', fontWeight: 800 }}>1</div>
                <h3>Choose type</h3>
                <p style={{ color: 'var(--text-muted)' }}>Select between equity-free grants, low-interest loans, or public tenders.</p>
             </div>
             <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '24px', background: 'var(--bg-color)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem', fontWeight: 800 }}>2</div>
                <h3>Select country</h3>
                <p style={{ color: 'var(--text-muted)' }}>Filter by your business jurisdiction to find locally relevant opportunities.</p>
             </div>
             <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '24px', background: 'var(--bg-color)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem', fontWeight: 800 }}>3</div>
                <h3>Filter by sector</h3>
                <p style={{ color: 'var(--text-muted)' }}>Narrow down specific funding matching your technology or operational industry.</p>
             </div>
          </div>
        </div>
      </section>

      {/* THREE MAIN CARDS */}
      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="grid grid-3">
            <Link href="/grants" className="card" style={{ padding: '2.5rem', display: 'block' }}>
               <Activity size={32} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
               <h3>Grants</h3>
               <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Non-dilutive or program-based support for eligible businesses and startups.</p>
               <span style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Explore Grants <ArrowRight size={16} /></span>
            </Link>
            <Link href="/loans" className="card" style={{ padding: '2.5rem', display: 'block' }}>
               <Briefcase size={32} color="#1e293b" style={{ marginBottom: '1.5rem' }} />
               <h3>Loans</h3>
               <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Public or public-backed business financing and guaranteed growth capital.</p>
               <span style={{ color: '#1e293b', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Explore Loans <ArrowRight size={16} /></span>
            </Link>
            <Link href="/tenders" className="card" style={{ padding: '2.5rem', display: 'block' }}>
               <ShieldCheck size={32} color="#0f766e" style={{ marginBottom: '1.5rem' }} />
               <h3>Tenders</h3>
               <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Public procurement and contract opportunities from state bodies.</p>
               <span style={{ color: '#0f766e', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Explore Tenders <ArrowRight size={16} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST VERIFIED */}
      <section className="section-padding" style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
             <h2 style={{ margin: 0 }}>Latest Verified Opportunities</h2>
             <Link href="/opportunities?verified=true" style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Browse Verified Opportunities <ArrowRight size={16} />
             </Link>
          </div>
          <div className="grid grid-3">
             {verifiedOpps.map(opp => (
                <Link href={`/opportunity/${opp.slug}`} key={opp.slug} className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', background: 'var(--bg-color)', border: '1px solid var(--border)', color: '#334155', borderRadius: '4px', fontWeight: 600 }}>
                         {opp.opportunity_model.toUpperCase()}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                         <CheckCircle size={14} /> Verified
                      </span>
                   </div>
                   <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', flex: 1, lineHeight: 1.4 }}>{opp.title}</h3>
                   <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                      {opp.provider_organization || opp.source_authority} &middot; {opp.country}
                   </div>
                   <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', color: '#334155', fontSize: '0.85rem', fontWeight: 600 }}>
                      Deadline: {opp.application_deadline || "Rolling / Varies"}
                   </div>
                </Link>
             ))}
          </div>
        </div>
      </section>

      {/* INQUIRY CTA */}
      <section className="section-padding" style={{ background: 'var(--bg-color)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <h2>Need Help with an Application?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
            Expert partners can help you navigate complex requirements and accelerate your funding journey.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">
               Check Eligibility
            </Link>
            <Link href="/contact" className="btn btn-outline" style={{ background: 'white' }}>
               Get Application Help
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
