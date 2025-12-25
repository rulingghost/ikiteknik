// Image optimization utility
export const optimizeImageUrl = (url, width = 400) => {
  if (url.includes('unsplash.com')) {
    return `${url}${url.includes('?') ? '&' : '?'}auto=format&fit=crop&q=60&w=${width}`;
  }
  return url;
};

// Optimized Image component with lazy loading
export const OptimizedImage = ({ src, alt, className, width = 400 }) => (
  <img 
    src={optimizeImageUrl(src, width)} 
    alt={alt} 
    className={className}
    loading="lazy"
    decoding="async"
  />
);
