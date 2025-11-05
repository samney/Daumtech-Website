// Image optimization utilities
export const getOptimizedImageSrc = (src, width = null) => {
  // For local development and static assets
  if (src.startsWith('./') || src.startsWith('/')) {
    return src;
  }
  
  // For external URLs, you could implement Cloudinary, ImageKit, or similar
  // For now, return the original src
  return src;
};

export const generateSrcSet = (src, breakpoints = [320, 640, 768, 1024, 1280, 1536]) => {
  // For static assets, we can't generate multiple sizes on the fly
  // This would be implemented with an image optimization service
  return breakpoints
    .map(width => `${getOptimizedImageSrc(src, width)} ${width}w`)
    .join(', ');
};

export const getImageSizes = (className = '') => {
  // Extract responsive sizes from className or provide defaults
  if (className.includes('sm:w-')) return '(max-width: 640px) 100vw, 640px';
  if (className.includes('md:w-')) return '(max-width: 768px) 100vw, 768px';
  if (className.includes('lg:w-')) return '(max-width: 1024px) 100vw, 1024px';
  if (className.includes('xl:w-')) return '(max-width: 1280px) 100vw, 1280px';
  
  return '100vw';
};

// Preload critical images
export const preloadImage = (src) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};

// Image format detection
export const supportsWebP = () => {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

export const supportsAvif = () => {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1;
  return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
};