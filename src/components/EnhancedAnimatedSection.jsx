import React, { useEffect, useRef, useState } from "react";

const EnhancedAnimatedSection = ({
  children,
  className = "",
  animation = "fade-bounce",
  stagger = false,
  staggerType = "wave", // wave, center
  delay = 0,
  duration = 1,
  threshold = 0.1,
  triggerOnce = true,
  enableParallax = false,
  parallaxSpeed = 0.5,
  enableHover = false,
  hoverEffect = "lift", // lift, scale, glow
  ...props
}) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect
  useEffect(() => {
    if (!enableParallax) return;

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * parallaxSpeed;
        setScrollY(rate);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableParallax, parallaxSpeed]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!triggerOnce || !isVisible)) {
            setTimeout(() => {
              setIsVisible(true);
              entry.target.classList.add("show");

              // Handle stagger animations
              if (stagger) {
                const staggerContainer = entry.target.querySelector(
                  `.animate-stagger-${staggerType}`
                );
                if (staggerContainer) {
                  staggerContainer.classList.add("show");
                }
              }

              // Animate child elements
              animateChildElements(entry.target);
            }, delay * 1000);
          } else if (!entry.isIntersecting && !triggerOnce) {
            entry.target.classList.remove("show");
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: "50px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold, delay, triggerOnce, stagger, staggerType, isVisible]);

  const animateChildElements = (target) => {
    // Animate titles
    const titles = target.querySelectorAll("h1, h2, h3, h4, h5, h6");
    titles.forEach((title, index) => {
      setTimeout(() => {
        title.classList.add("animate-title", "show");
      }, index * 100);
    });

    // Animate paragraphs and text
    const texts = target.querySelectorAll("p, span:not(.loading-dots span)");
    texts.forEach((text, index) => {
      setTimeout(() => {
        text.classList.add("animate-text", "show");
      }, index * 150 + 200);
    });

    // Animate images
    const images = target.querySelectorAll("img");
    images.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add("animate-image", "show");
      }, index * 200 + 400);
    });

    // Animate cards
    const cards = target.querySelectorAll(
      '.card, [class*="card-"], [class*="bg-"], .rounded-2xl, .rounded-4xl'
    );
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("animate-card", "show");
        if (enableHover) {
          card.classList.add(`card-hover-${hoverEffect}`);
        }
      }, index * 100 + 300);
    });

    // Animate buttons
    const buttons = target.querySelectorAll("button, a[class*='button'], [class*='btn']");
    buttons.forEach((btn, index) => {
      setTimeout(() => {
        btn.classList.add("animate-button", "button-magnetic");
      }, index * 150 + 600);
    });
  };

  // Generate dynamic classes
  const getAnimationClasses = () => {
    let classes = `animate-section ${animation} animate-gpu`;
    
    if (stagger) {
      classes += ` animate-stagger-${staggerType}`;
    }

    if (enableParallax) {
      classes += ` parallax-${parallaxSpeed > 0.5 ? 'fast' : 'slow'}`;
    }

    return classes;
  };

  // Apply parallax transform
  const parallaxStyle = enableParallax ? {
    transform: `translateY(${scrollY * -0.3}px)`,
    '--scroll-y': `${scrollY}px`
  } : {};

  // Apply custom animation duration
  const animationStyle = {
    transitionDuration: `${duration}s`,
    ...parallaxStyle
  };

  return (
    <div
      ref={sectionRef}
      className={`${getAnimationClasses()} ${className}`}
      style={animationStyle}
      {...props}
    >
      {stagger ? (
        <div className={`animate-stagger-${staggerType}`}>
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default EnhancedAnimatedSection;