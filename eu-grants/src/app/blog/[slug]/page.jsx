import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import blogs from '@/data/blogs';
import opportunities from '@/data/index';

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    notFound();
  }

  // Find related opportunities
  const relatedOpps = opportunities
    .filter(o => blog.related_opportunities?.includes(o.slug))
    .slice(0, 3);

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Blog Hero */}
      <section style={{ padding: '4rem 1.5rem', background: 'var(--bg-color)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
           <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: 500 }}>
              <ArrowLeft size={16} /> Back to Hub
           </Link>
           
           <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', fontWeight: 600 }}>
              <span>{blog.date}</span>
              <span>&middot;</span>
              <span>By {blog.author}</span>
           </div>

           <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>{blog.title}</h1>
           <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.7 }}>
              {blog.intro}
           </p>

           {/* Internal Quick Links based on user request */}
           {slug === 'top-startup-grants-france-2026' && (
             <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/grants" className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '0.6rem 1.2rem' }}>
                   Explore Grants
                </Link>
                <Link href="/grants/france" className="btn btn-outline" style={{ fontSize: '0.9rem', padding: '0.6rem 1.2rem', background: 'white' }}>
                   France Opportunities
                </Link>
             </div>
           )}
        </div>
      </section>

      {/* Blog Content */}
      <section className="container prose" style={{ padding: '4rem 1.5rem' }}>
         <MDXRemote source={blog.content} />
      </section>

      {/* Related Opportunities */}
      {relatedOpps.length > 0 && (
        <section className="container" style={{ maxWidth: '1000px', padding: '4rem 1.5rem', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Related Opportunities</h2>
          <div className="grid grid-2">
             {relatedOpps.map(opp => (
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
                      {opp.provider_organization || opp.source_authority}
                   </div>
                   <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', color: '#334155', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      View Details <ArrowRight size={16} />
                   </div>
                </Link>
             ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="container" style={{ maxWidth: '800px', padding: '4rem 1.5rem', textAlign: 'center', background: 'var(--bg-color)', borderRadius: '12px', marginTop: '2rem' }}>
         <h2 style={{ marginBottom: '1rem' }}>Ready to Scale?</h2>
         <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
            Find the right capital for your startup today, or connect with our assessment partners to prepare your file.
         </p>
         <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/opportunities?verified=true" className="btn btn-primary">
               Browse Verified Opportunities
            </Link>
            <Link href="/contact" className="btn btn-outline" style={{ background: 'white' }}>
               Check Eligibility
            </Link>
         </div>
      </section>
    </div>
  );
}
