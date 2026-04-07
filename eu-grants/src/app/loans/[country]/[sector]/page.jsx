import ListingView from '@/components/opportunity/ListingView';

export default function LoansSectorPage({ params }) {
  return <ListingView type="loan" countrySlug={params.country} sectorSlug={params.sector} />;
}
