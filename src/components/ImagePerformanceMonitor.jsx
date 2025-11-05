import { useEffect } from 'react';

const ImagePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor image loading performance
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.initiatorType === 'img' && entry.duration > 1000) {
          console.warn(`Slow image loading detected: ${entry.name} took ${entry.duration}ms`);
        }
      });
    });

    if ('PerformanceObserver' in window) {
      observer.observe({ entryTypes: ['resource'] });
    }

    // Monitor Largest Contentful Paint (LCP) for image elements
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.element && entry.element.tagName === 'IMG') {
            console.log(`LCP Image: ${entry.element.src} at ${entry.startTime}ms`);
          }
        });
      });
      
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    }

    return () => {
      if ('PerformanceObserver' in window) {
        observer.disconnect();
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ImagePerformanceMonitor;