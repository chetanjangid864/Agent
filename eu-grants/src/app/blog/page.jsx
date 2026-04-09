'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import blogs from '@/data/blogs';

export default function BlogIndex() {
  return (
    <div style={{ background: 'var(--bg-color)', minHeight: '100vh' }}>
      <div className="container" style={{ padding: '3rem 1.5rem' }}>
         <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: 500 }}>
            <ArrowLeft size={16} /> Back to Directory
         </Link>
         
         <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Funding Intelligence & Guides</h1>
         <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '800px' }}>
            Actionable insights, deep-dive country guides, and strategy playbooks for securing European public funding.
         </p>

         <div className="grid grid-2">
            {blogs.map(blog => (
               <Link href={`/blog/${blog.slug}`} key={blog.slug} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                     {blog.date}
                  </div>
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: 1.3 }}>{blog.title}</h2>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flex: 1, lineHeight: 1.6 }}>
                     {blog.intro}
                  </p>
                  <div style={{ color: 'var(--text-color)', fontWeight: 600, borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                     Read Guide &rarr;
                  </div>
               </Link>
            ))}
         </div>
      </div>
    </div>
  );
}
