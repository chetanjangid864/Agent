'use client';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import blogs from '@/data/blogs';

export default function BlogIndex() {
  const featuredBlog = blogs[0]; // Most recent / prioritized
  const remainingBlogs = blogs.slice(1);

  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '5rem' }}>
      <div className="container" style={{ paddingTop: '3rem' }}>
         <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: 500 }}>
            <ArrowLeft size={16} /> Back to Directory
         </Link>
         
         <div style={{ marginBottom: '4rem', maxWidth: '800px' }}>
           <h1 style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1.1 }}>Funding Intelligence Hub</h1>
           <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>
              Actionable insights, precise country frameworks, and strategy playbooks for securing non-dilutive European public funding.
           </p>
         </div>

         {/* FEATURED STORY */}
         {featuredBlog && (
           <div style={{ marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Featured Guide</h2>
              <Link href={`/blog/${featuredBlog.slug}`} className="card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', textDecoration: 'none' }}>
                <div style={{ padding: '3rem', background: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '0.85rem', padding: '0.3rem 0.8rem', background: '#e0e7ff', color: '#4338ca', borderRadius: '4px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                         {featuredBlog.category}
                      </span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>{featuredBlog.date}</span>
                   </div>
                   <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2, color: '#0f172a' }}>{featuredBlog.title}</h2>
                   <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2rem', lineHeight: 1.6, maxWidth: '800px' }}>
                      {featuredBlog.intro}
                   </p>
                   <div style={{ color: 'var(--primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      Read Featured Guide <ArrowRight size={16} />
                   </div>
                </div>
              </Link>
           </div>
         )}

         {/* LATEST GUIDES GRID */}
         <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Latest Additions</h2>
            <div className="grid grid-2">
               {remainingBlogs.map(blog => (
                  <Link href={`/blog/${blog.slug}`} key={blog.slug} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', background: '#ffffff', textDecoration: 'none' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', background: 'var(--bg-color)', color: '#334155', borderRadius: '4px', fontWeight: 600, textTransform: 'uppercase' }}>
                           {blog.category}
                        </span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 500 }}>{blog.date}</span>
                     </div>
                     <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: 1.3, color: '#0f172a' }}>{blog.title}</h3>
                     <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', flex: 1, lineHeight: 1.6 }}>
                        {blog.intro}
                     </p>
                     <div style={{ color: 'var(--text-color)', fontWeight: 600, borderTop: '1px solid var(--border)', paddingTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        Read Article <ArrowRight size={16} />
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
