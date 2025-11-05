import React, { useState, useRef, useEffect } from 'react';

const ResponsiveImage = ({
  src,
  alt = '',
  className = '',
  sizes = '100vw',
  srcSet,
  width,
  height,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y3ZjdmNyIvPgogIDx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjY2NjIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9hZGluZy4uLjwvdGV4dD4KPC9zdmc+',
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef();

  // Generate srcSet if not provided but width/height are available
  const generateSrcSet = (baseSrc) => {
    if (srcSet) return srcSet;
    
    // Basic responsive breakpoints
    const breakpoints = [320, 640, 768, 1024, 1280, 1536];
    
    // If it's a local asset, we can't generate different sizes on the fly
    // This is a placeholder for when you implement proper image optimization
    return breakpoints
      .map(width => `${baseSrc} ${width}w`)
      .join(', ');
  };

  useEffect(() => {
    let observer;
    
    if (imgRef.current && window.IntersectionObserver) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const img = new Image();
            img.onload = () => {
              setImageSrc(src);
              setIsLoaded(true);
            };
            img.onerror = () => {
              setIsError(true);
            };
            img.src = src;
            observer.disconnect();
          }
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      );
      
      observer.observe(imgRef.current);
    } else {
      // Fallback for browsers without IntersectionObserver
      const img = new Image();
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      img.onerror = () => {
        setIsError(true);
      };
      img.src = src;
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      srcSet={isLoaded ? generateSrcSet(src) : undefined}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      className={`${className} ${!isLoaded ? 'blur-sm' : ''} transition-all duration-300 ease-in-out`}
      style={{
        opacity: isError ? 0.5 : 1,
        filter: isLoaded ? 'none' : 'blur(2px)',
      }}
      {...props}
    />
  );
};

export default ResponsiveImage;