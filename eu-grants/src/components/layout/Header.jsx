'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShieldCheck, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar" style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
      <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
        <Link href="/" className="nav-logo" style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.35rem', textDecoration: 'none' }}>
          <ShieldCheck size={24} />
          EU Funding Intel
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-links desktop-only" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link href="/grants" className="nav-link">Grants</Link>
          <Link href="/loans" className="nav-link">Loans</Link>
          <Link href="/tenders" className="nav-link">Tenders</Link>
          <div style={{ width: '1px', height: '20px', background: 'var(--border)' }}></div>
          <Link href="/blog" className="nav-link">Blog</Link>
        </nav>

        <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/opportunities?verified=true" className="nav-cta" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', background: 'var(--bg-color)', color: '#0f172a', border: '1px solid var(--border)' }}>
             Browse Verified Opportunities
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-only" onClick={toggleMenu} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-color)', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu mobile-only" style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'var(--surface)', borderBottom: '1px solid var(--border)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
          <Link href="/grants" className="nav-link" onClick={toggleMenu} style={{ fontSize: '1.1rem' }}>Grants</Link>
          <Link href="/loans" className="nav-link" onClick={toggleMenu} style={{ fontSize: '1.1rem' }}>Loans</Link>
          <Link href="/tenders" className="nav-link" onClick={toggleMenu} style={{ fontSize: '1.1rem' }}>Tenders</Link>
          <div style={{ height: '1px', background: 'var(--border)', margin: '0.5rem 0' }}></div>
          <Link href="/blog" className="nav-link" onClick={toggleMenu} style={{ fontSize: '1.1rem' }}>Blog</Link>
          <Link href="/opportunities?verified=true" className="nav-cta" onClick={toggleMenu} style={{ textAlign: 'center', marginTop: '1rem', textDecoration: 'none', padding: '1rem', width: '100%' }}>
             Browse Verified Opportunities
          </Link>
        </div>
      )}
    </header>
  );
}
