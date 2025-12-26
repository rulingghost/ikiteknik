import React, { useState, useMemo } from 'react';

// Image optimization utility
export const optimizeImageUrl = (url, width = 800) => {
  if (!url) return '';
  if (url.includes('unsplash.com')) {
    const baseUrl = url.split('?')[0];
    return `${baseUrl}?auto=format&fit=crop&q=80&w=${width}`;
  }
  return url;
};

// Optimized Image component with lazy loading and shimmer effect
const OptimizedImage = ({ src, alt, className, width = 800 }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const optimizedSrc = useMemo(() => optimizeImageUrl(src, width), [src, width]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 shimmer bg-slate-100" />
      )}
      <img 
        src={optimizedSrc} 
        alt={alt} 
        className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default OptimizedImage;
