import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" style={{ background: '#f1f5f9', borderTop: '1px solid var(--border)', padding: '4rem 2rem 2rem', marginTop: '6rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4rem', marginBottom: '4rem' }}>
        
        <div>
          <h4 style={{ color: 'var(--text-color)', marginBottom: '1.5rem', fontWeight: 700 }}>Platform</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link href="/about" style={{ color: 'var(--text-muted)' }}>About</Link></li>
            <li><Link href="/methodology" style={{ color: 'var(--text-muted)' }}>Methodology</Link></li>
            <li><Link href="/contact" style={{ color: 'var(--text-muted)' }}>Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: 'var(--text-color)', marginBottom: '1.5rem', fontWeight: 700 }}>Opportunities</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link href="/grants" style={{ color: 'var(--text-muted)' }}>Grants</Link></li>
            <li><Link href="/loans" style={{ color: 'var(--text-muted)' }}>Loans</Link></li>
            <li><Link href="/tenders" style={{ color: 'var(--text-muted)' }}>Tenders</Link></li>
            <li><Link href="/opportunities?verified=true" style={{ color: 'var(--primary)' }}>Verified Opportunities</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: 'var(--text-color)', marginBottom: '1.5rem', fontWeight: 700 }}>Browse</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link href="/countries" style={{ color: 'var(--text-muted)' }}>Countries</Link></li>
            <li><Link href="/sectors" style={{ color: 'var(--text-muted)' }}>Sectors</Link></li>
            <li><Link href="/blog" style={{ color: 'var(--text-muted)' }}>Blog</Link></li>
            <li><Link href="/resources" style={{ color: 'var(--text-muted)' }}>Resources</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: 'var(--text-color)', marginBottom: '1.5rem', fontWeight: 700 }}>Legal</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link href="/privacy-policy" style={{ color: 'var(--text-muted)' }}>Privacy Policy</Link></li>
            <li><Link href="/terms" style={{ color: 'var(--text-muted)' }}>Terms of Service</Link></li>
            <li><Link href="/disclaimer" style={{ color: 'var(--text-muted)' }}>Disclaimer</Link></li>
          </ul>
        </div>

      </div>

      <div className="container" style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', display: 'flex',flexDirection:'column', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <p>© {new Date().getFullYear()} EU Funding Intel. All rights reserved.</p>
        <p>Verified European funding, loan, and tender intelligence for businesses and startups.</p>
      </div>
    </footer>
  );
}
