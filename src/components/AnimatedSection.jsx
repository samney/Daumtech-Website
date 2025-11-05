import React, { useEffect, useRef } from "react";

const AnimatedSection = ({
  children,
  className = "",
  animation = "fade-in",
  stagger = false,
  elementAnimations = {
    title: true,
    text: true,
    image: true,
    card: true,
    number: true,
    underline: true,
  },
}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");

            if (stagger) {
              const container = entry.target.querySelector(
                ".animate-stagger-container"
              );
              if (container) {
                container.classList.add("show");
              }
            }

            if (elementAnimations.title) {
              const titles = entry.target.querySelectorAll(
                "h1, h2, h3, h4, h5, h6"
              );
              titles.forEach((title) =>
                title.classList.add("animate-title", "show")
              );
            }

            if (elementAnimations.text) {
              const texts = entry.target.querySelectorAll("p, span");
              texts.forEach((text) =>
                text.classList.add("animate-text", "show")
              );
            }

            if (elementAnimations.image) {
              const images = entry.target.querySelectorAll("img");
              images.forEach((img) =>
                img.classList.add("animate-image", "show")
              );
            }

            if (elementAnimations.card) {
              const cards = entry.target.querySelectorAll(
                '.card, [class*="card-"]'
              );
              cards.forEach((card) =>
                card.classList.add("animate-card", "show")
              );
            }

            if (elementAnimations.number) {
              const numbers =
                entry.target.querySelectorAll('[class*="number-"]');
              numbers.forEach((num) =>
                num.classList.add("animate-number", "show")
              );
            }

            if (elementAnimations.underline) {
              const underlines = entry.target.querySelectorAll(
                '[class*="underline-"]'
              );
              underlines.forEach((underline) =>
                underline.classList.add("animate-underline", "show")
              );
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
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
  }, [stagger, elementAnimations]);

  return (
    <div
      ref={sectionRef}
      className={`animate-section ${animation} ${className}`}
    >
      {stagger ? (
        <div className="animate-stagger-container">{children}</div>
      ) : (
        children
      )}
    </div>
  );
};

export default AnimatedSection;
