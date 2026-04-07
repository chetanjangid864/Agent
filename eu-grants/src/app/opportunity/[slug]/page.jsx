import { notFound } from 'next/navigation';
import { Calendar, MapPin, Battery, Target, Building, BookOpen, ExternalLink, Activity, CheckCircle } from 'lucide-react';
import opportunities from '@/data/index';
import Link from 'next/link';
import { formatStatus } from '@/utils/formatters';
import GrantDetail from '@/components/opportunity/GrantDetail';
import LoanDetail from '@/components/opportunity/LoanDetail';
import TenderDetail from '@/components/opportunity/TenderDetail';

export function generateStaticParams() {
  return opportunities.map((opp) => ({
    slug: opp.slug,
  }));
}

export default async function OpportunityPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const opp = opportunities.find(o => o.slug === slug);

  if (!opp) {
    notFound();
  }

  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      {opp.opportunity_model === 'loan' ? (
        <LoanDetail opp={opp} />
      ) : opp.opportunity_model === 'tender' ? (
        <TenderDetail opp={opp} />
      ) : (
        <GrantDetail opp={opp} />
      )}
    </div>
  );
}
