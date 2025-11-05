import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({
  src,
  alt = '',
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0icmdiYSgyNDcsIDI0NywgMjQ3LCAwLjEpIi8+CiAgPHRleHQgeD0iNTAiIHk9IjUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNlZTU0MmQiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+REFVTVRFQ0g8L3RleHQ+Cjwvc3ZnPg==',
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef();

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
      alt={alt}
      className={`${className} ${!isLoaded ? 'blur-sm' : ''} transition-all duration-300 ease-in-out`}
      style={{
        opacity: isError ? 0.5 : 1,
        filter: isLoaded ? 'none' : 'blur(2px)',
      }}
      {...props}
    />
  );
};

export default LazyImage;