import ListingView from '@/components/opportunity/ListingView';

export default function TendersCountryPage({ params }) {
  return <ListingView type="tender" countrySlug={params.country} sectorSlug="all" />;
}
