import ListingView from '@/components/opportunity/ListingView';

export default function LoansCountryPage({ params }) {
  return <ListingView type="loan" countrySlug={params.country} sectorSlug="all" />;
}
