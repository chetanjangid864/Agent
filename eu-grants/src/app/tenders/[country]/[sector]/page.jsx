import ListingView from '@/components/opportunity/ListingView';

export default function TendersSectorPage({ params }) {
  return <ListingView type="tender" countrySlug={params.country} sectorSlug={params.sector} />;
}
