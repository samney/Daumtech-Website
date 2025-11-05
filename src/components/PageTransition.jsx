import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    filter: "blur(10px)"
  },
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)"
  },
  out: {
    opacity: 0,
    scale: 1.05,
    y: -20,
    filter: "blur(5px)"
  }
};

const slideVariants = {
  initial: {
    opacity: 0,
    x: -100,
    scale: 0.9
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: 100,
    scale: 0.9
  }
};

const scaleVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    rotateX: 90
  },
  in: {
    opacity: 1,
    scale: 1,
    rotateX: 0
  },
  out: {
    opacity: 0,
    scale: 1.2,
    rotateX: -90
  }
};

const pageTransition = {
  type: "tween",
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.8
};

const PageTransition = ({ 
  children, 
  variant = 'fade', // fade, slide, scale
  className = "" 
}) => {
  const location = useLocation();
  
  const getVariants = () => {
    switch (variant) {
      case 'slide':
        return slideVariants;
      case 'scale':
        return scaleVariants;
      default:
        return pageVariants;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={getVariants()}
        transition={pageTransition}
        className={`min-h-screen ${className}`}
        style={{ 
          transformOrigin: 'center',
          backfaceVisibility: 'hidden',
          perspective: 1000,
          position: 'relative',
          zIndex: 1
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// Loading overlay component
export const LoadingOverlay = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="bg-white p-8 rounded-2xl shadow-2xl"
          >
            <div className="loading-dots text-Accent">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Section reveal animation
export const SectionReveal = ({ children, delay = 0, direction = 'up' }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

// Stagger container for multiple elements
export const StaggerContainer = ({ children, staggerChildren = 0.1 }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PageTransition;