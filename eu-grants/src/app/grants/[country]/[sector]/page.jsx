import ListingView from '@/components/opportunity/ListingView';

export default function GrantsSectorPage({ params }) {
  return <ListingView type="grant" countrySlug={params.country} sectorSlug={params.sector} />;
}
