import React, { useRef, useEffect, useState } from 'react';

const AnimatedTitle = ({ 
  children, 
  as: Component = 'h2', 
  className = '',
  animation = 'fade-up', // fade-up, slide-in, typewriter, gradient
  delay = 0,
  ...props 
}) => {
  const titleRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, [delay]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    
    switch (animation) {
      case 'fade-up':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`;
      
      case 'slide-in':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-8'
        }`;
      
      case 'gradient':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 translate-y-0 text-gradient-animate' 
            : 'opacity-0 translate-y-4'
        }`;
      
      case 'typewriter':
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100 typewriter' 
            : 'opacity-0'
        }`;
      
      default:
        return `${baseClasses} ${
          isVisible 
            ? 'opacity-100' 
            : 'opacity-0'
        }`;
    }
  };

  return (
    <Component
      ref={titleRef}
      className={`${getAnimationClasses()} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default AnimatedTitle;