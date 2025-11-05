// ScrollToHash.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // Always scroll to top when navigating to a new page (no hash)
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
      return;
    }

    // Only handle hash scrolling if there's actually a hash
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          const header = document.querySelector("header");
          const headerHeight = header ? header.offsetHeight : 0;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerHeight - 20;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          el.classList.add("highlight-section");
          setTimeout(() => {
            el.classList.remove("highlight-section");
          }, 2000);
        }, 100);
      }
    }
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;
