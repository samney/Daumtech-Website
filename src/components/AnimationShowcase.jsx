import React, { useState } from 'react';
import EnhancedAnimatedSection from './EnhancedAnimatedSection';
import { SectionReveal, StaggerContainer } from './PageTransition';
import { useTypewriter, useCountUp, useHoverAnimation } from '../hooks/useAnimations';

const AnimationShowcase = () => {
  const [displayedText] = useTypewriter("✨ Animations magiques en action!", 100, 500);
  const [countRef, count] = useCountUp(1000, 2000);
  const [hoverRef, isHovered] = useHoverAnimation();

  const animationTypes = [
    { name: 'Fade Bounce', type: 'fade-bounce' },
    { name: 'Slide Up', type: 'slide-up' },
    { name: 'Zoom Rotate', type: 'zoom-rotate' },
    { name: 'Flip In', type: 'flip-in' },
    { name: 'Elastic', type: 'elastic' },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title with typewriter effect */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gradient-animate">
            {displayedText}
          </h2>
          <div className="text-2xl text-gray-600" ref={countRef}>
            {count.toLocaleString()}+ animations actives
          </div>
        </div>

        {/* Different animation types */}
        <StaggerContainer staggerChildren={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {animationTypes.map((anim, index) => (
              <EnhancedAnimatedSection
                key={anim.type}
                animation={anim.type}
                delay={index * 0.2}
                enableHover={true}
                hoverEffect="lift"
                className="bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{anim.name}</h3>
                  <p className="text-gray-600">Animation fluide et élégante</p>
                </div>
              </EnhancedAnimatedSection>
            ))}
          </div>
        </StaggerContainer>

        {/* Interactive elements */}
        <SectionReveal direction="up" delay={0.5}>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-8">Interactions Avancées</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Magnetic button */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold mb-4">Bouton Magnétique</h4>
                <button className="button-magnetic bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold">
                  Survolez-moi!
                </button>
              </div>

              {/* Hover effect */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold mb-4">Effet de Survol</h4>
                <div 
                  ref={hoverRef}
                  className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-500 ${
                    isHovered ? 'scale-125 rotate-180' : 'scale-100 rotate-0'
                  }`}
                />
              </div>

              {/* Morphing shape */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold mb-4">Forme Morphologique</h4>
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-pink-400 to-red-400 morphing-blob animate-gpu" />
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Parallax demo */}
        <EnhancedAnimatedSection
          animation="slide-up"
          enableParallax={true}
          parallaxSpeed={0.3}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Effet Parallaxe</h3>
          <p className="text-xl opacity-90">Cette section bouge avec le défilement de la page</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 rounded-xl p-6 card-float">
              <div className="w-12 h-12 bg-white/30 rounded-full mx-auto mb-3"></div>
              <p>Animation flottante</p>
            </div>
            <div className="bg-white/20 rounded-xl p-6 card-float" style={{animationDelay: '0.5s'}}>
              <div className="w-12 h-12 bg-white/30 rounded-full mx-auto mb-3"></div>
              <p>Délai personnalisé</p>
            </div>
            <div className="bg-white/20 rounded-xl p-6 card-float" style={{animationDelay: '1s'}}>
              <div className="w-12 h-12 bg-white/30 rounded-full mx-auto mb-3"></div>
              <p>Effet coordonné</p>
            </div>
          </div>
        </EnhancedAnimatedSection>

        {/* Loading states */}
        <SectionReveal direction="up" delay={0.3}>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center mt-16">
            <h3 className="text-2xl font-bold mb-6">États de Chargement</h3>
            <div className="flex justify-center items-center gap-8">
              <div className="loading-dots text-purple-500 text-2xl">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="text-gray-600">Chargement en cours...</div>
            </div>
          </div>
        </SectionReveal>

      </div>
    </div>
  );
};

export default AnimationShowcase;