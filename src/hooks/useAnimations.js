import { useState, useEffect, useRef, useCallback } from 'react';

export const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '50px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, triggerOnce]);

  return [elementRef, isVisible];
};

export const useParallax = (speed = 0.5) => {
  const [offsetY, setOffsetY] = useState(0);
  const elementRef = useRef();

  const handleScroll = useCallback(() => {
    if (elementRef.current) {
      const scrollTop = window.pageYOffset;
      const rect = elementRef.current.getBoundingClientRect();
      const elementTop = rect.top + scrollTop;
      const windowHeight = window.innerHeight;
      
      // Only apply parallax when element is in viewport
      if (scrollTop + windowHeight > elementTop && scrollTop < elementTop + rect.height) {
        setOffsetY((scrollTop - elementTop) * speed);
      }
    }
  }, [speed]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return [elementRef, offsetY];
};

export const useHoverAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return [elementRef, isHovered];
};

export const useTypewriter = (text, speed = 50, delay = 0) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!text) return;

    const timeout = setTimeout(() => {
      setIsTyping(true);
      let index = 0;
      
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, index + 1));
        index++;
        
        if (index >= text.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return [displayedText, isTyping];
};

export const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isActive, setIsActive] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isActive) {
          setIsActive(true);
          
          let startTime;
          const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * (end - start) + start);
            
            setCount(currentCount);
            
            if (progress < 1) {
              requestAnimationFrame(animateCount);
            }
          };
          
          requestAnimationFrame(animateCount);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [end, duration, start, isActive]);

  return [elementRef, count];
};

export const useStaggerAnimation = (itemCount, delay = 100) => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, i]));
            }, i * delay);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [itemCount, delay]);

  const isItemVisible = (index) => visibleItems.has(index);

  return [elementRef, isItemVisible];
};

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

// Custom animation timing functions
export const easingFunctions = {
  easeOutQuart: t => 1 - Math.pow(1 - t, 4),
  easeOutBounce: t => {
    if (t < 1 / 2.75) return 7.5625 * t * t;
    if (t < 2 / 2.75) return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    if (t < 2.5 / 2.75) return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  },
  easeOutElastic: t => 
    t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1
};

export default {
  useScrollAnimation,
  useParallax,
  useHoverAnimation,
  useTypewriter,
  useCountUp,
  useStaggerAnimation,
  useMousePosition,
  easingFunctions
};