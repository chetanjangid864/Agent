import ListingView from '@/components/opportunity/ListingView';

export default function GrantsCountryPage({ params }) {
  return <ListingView type="grant" countrySlug={params.country} sectorSlug="all" />;
}
