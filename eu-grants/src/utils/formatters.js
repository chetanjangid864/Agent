export function formatStatus(status) {
  if (!status) return 'Unknown';
  
  const statusMap = {
    'verification_pending': 'Verification Pending',
    'open': 'Open',
    'upcoming': 'Upcoming',
    'closed': 'Closed',
    'data collection in progress': 'Data Collection in Progress',
  };
  
  // Try to match lowercase version in map, fallback to auto-capitalizing if not found
  const lowerStatus = status.toLowerCase();
  
  if (statusMap[lowerStatus]) {
    return statusMap[lowerStatus];
  }
  
  // Fallback formatter: Capitalize first letter, replace underscores with spaces
  return status
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
