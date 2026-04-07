import Link from 'next/link';
import { Search, ChevronRight } from 'lucide-react';
import { europeanCountries } from '@/utils/countries';

export default function CountriesPage() {
  const popular = europeanCountries.filter(c => ['france', 'germany', 'netherlands', 'spain', 'italy'].includes(c.slug));
  const alphabetical = [...europeanCountries].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', padding: '4rem 2rem' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', color: '#0f172a', marginBottom: '1rem' }}>Browse by Country</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            Select a European jurisdiction to explore regional grants, localized public lending, and state procurement operations.
          </p>
        </div>

        {/* Search Bar Placeholder */}
        <div style={{ maxWidth: '600px', margin: '0 auto 4rem', position: 'relative' }}>
           <input 
             type="text" 
             placeholder="Search for a European country..." 
             style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem', outline: 'none', background: 'white' }}
           />
           <Search size={20} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
        </div>

        {/* Popular Countries */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '1.5rem' }}>Top Jurisdictions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {popular.map(country => (
              <div key={country.slug} className="glass-card" style={{ padding: '1.5rem', background: '#ffffff' }}>
                 <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {country.name}
                 </h3>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <Link href={`/grants/${country.slug}`} style={{ color: 'var(--primary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 500 }}>
                       <span>Explore Grants</span> <ChevronRight size={16} />
                    </Link>
                    <Link href={`/loans/${country.slug}`} style={{ color: '#1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 500 }}>
                       <span>Explore Loans</span> <ChevronRight size={16} />
                    </Link>
                    <Link href={`/tenders/${country.slug}`} style={{ color: '#0f766e', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 500 }}>
                       <span>Explore Tenders</span> <ChevronRight size={16} />
                    </Link>
                 </div>
              </div>
            ))}
          </div>
        </section>

        {/* Alphabetical List */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '1.5rem' }}>All EU Jurisdictions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
            {alphabetical.map(country => (
              <div key={`all-${country.slug}`} style={{ border: '1px solid var(--border)', borderRadius: '8px', padding: '1rem', background: '#ffffff' }}>
                 <div style={{ fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>{country.name}</div>
                 <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8rem' }}>
                    <Link href={`/grants/${country.slug}`} style={{ color: 'var(--text-muted)' }}>Grants</Link>&middot;
                    <Link href={`/loans/${country.slug}`} style={{ color: 'var(--text-muted)' }}>Loans</Link>&middot;
                    <Link href={`/tenders/${country.slug}`} style={{ color: 'var(--text-muted)' }}>Tenders</Link>
                 </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
