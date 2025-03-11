export const getImageUrl = (url: string, width: number) => {
  // Remove any existing parameters
  const baseUrl = url.split('?')[0];
  
  // Check if it's a GitHub image
  if (baseUrl.includes('github.com')) {
    return `${baseUrl}?raw=true&w=${width}&q=80`;
  }
  
  // For other URLs, just append width and quality
  return `${baseUrl}?w=${width}&q=80`;
};