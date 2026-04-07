import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import RelatedOpportunities from '@/components/RelatedOpportunities';

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'content', 'blog');
  
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir);

  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ''),
    }));
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, 'utf8');
  const { content, data: frontmatter } = matter(rawContent);

  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      <article className="prose">
        <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: '1.2' }}>
          {frontmatter.title}
        </h1>
        {frontmatter.date && (
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontWeight: 500 }}>
             Published on: {frontmatter.date}
          </p>
        )}
        <div style={{ background: 'var(--surface-glass)', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--border)' }}>
          <MDXRemote source={content} />
        </div>

        <div style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--border)' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Live Related Opportunities</h3>
          <p style={{ color: 'var(--text-muted)' }}>Apply to these verified live funding drops available right now.</p>
          <RelatedOpportunities count={3} />
        </div>
      </article>
    </div>
  );
}
