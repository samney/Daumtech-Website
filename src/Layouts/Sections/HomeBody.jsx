import React from "react";
import "@fontsource/darker-grotesque";
import VerticalTabs from "../../components/VerticalTabs";
import BlogSection from "../../components/BlogSection";
import ContactSection from "../../components/ContactSection";
import AnimatedSection from "../../components/AnimatedSection";
import EnhancedAnimatedSection from "../../components/EnhancedAnimatedSection";
import { SectionReveal, StaggerContainer } from "../../components/PageTransition";
import AnimatedTitle from "../../components/AnimatedTitle";
import Forms from "../../components/Forms/Forms";
import Contact from "../../components/Cards/Contact";
import SmartParagraph from "../../components/SmartParagraph";
import LazyImage from "../../components/LazyImage";


const HomeBody = () => {
  return (
    <>
      <section className="sm:px-10 md:px-10 lg:px-33 2xl:px-30">
        <div className="px-3 py-8 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          {/* About Section */}
          <section id="apropos" className="scroll-mt-24">
            <AnimatedTitle 
              as="h2" 
              className="relative mb-6 text-2xl font-bold tracking-tight sm:text-4xl text-neutral-900"
              animation="fade-up"
              delay={0}
            >
              <span className="relative z-10">Qui sommes-nous ?</span>
            </AnimatedTitle>
            <SectionReveal direction="up" delay={0.2}>
              <SmartParagraph as="p" className="mb-0 sm:text-[18px]">
              DAUMTech est le trait d'union entre les acteurs du monde agricole, les avancées technologiques et l'innovation en recherche et développement. Nous mettons la technologie au service de l'agriculture pour optimiser la gestion des ressources et améliorer la productivité. Notre mission est de favoriser l'adoption de pratiques agricoles précises, efficientes et durables, conciliant performance économique et préservation de l'environnement.
            </SmartParagraph>
            </SectionReveal>
          </section>
          <section>
            <div className="px-0 py-12 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              {/* Title section */}
              <AnimatedTitle
                as="h6" 
                className="mb-4 sm:text-[18px] font-normal inline-block gap-2"
                animation="fade-up"
                delay={0}
              >
                <span className="text-[14px] sm:text-[18px] pr-1 font-bold  text-black [&:not(:first-child)]:mt-0 items-center">
                DAUMTech
                </span>
                s'engage à :
              </AnimatedTitle>
                {/* Box cards */}
                <StaggerContainer staggerChildren={0.2}>
                <div className="justify-center mt-10 space-y-8 max-w-full md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                  <div className="flex flex-col justify-center items-center mb-4 w-full max-h-full px-4 py-6  bg-primary-100 rounded-4xl border-1 border-[#ee542d]/30 card-hover-lift morphing-blob">
                    <div>
                      <LazyImage
                        src="./assets/newimport/cardfeatures/drons.png"
                        alt=""
                        className="h-25 w-auto bg-[#ee542d]/20 p-2 border-1 border-[#ee542d] rounded-2xl"
                      />
                    </div>
                    <div>
                    <h3 className="mb-2 w-full text-sm font-bold text-center sm:text-sm lg:text-sm 2xl:text-lg">
                    Développer des outils technologiques
                      </h3>
                    </div>
                    <div>
                    <SmartParagraph as="p" className="text-center text-gray-700">
                        permettant une production agricole plus efficiente et
                        résiliente.
                      </SmartParagraph>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center mb-4 w-full max-h-full px-4 py-6 bg-primary-100 rounded-4xl border-1 border-[#88FF00]/30 card-hover-lift">
                    <div>
                      <LazyImage
                        src="./assets/newimport/cardfeatures/durables.png"
                        alt=""
                        className="h-25 w-auto bg-[#88FF00]/20 p-2 border-1 border-[#88FF00] rounded-2xl"
                      />
                    </div>
                    <div>
                      <h3 className="mb-2 w-full text-sm font-bold text-center sm:text-sm lg:text-sm 2xl:text-lg">
                        Promouvoir des pratiques durables
                      </h3>
                    </div>
                    <div>

                    <SmartParagraph as="p" className="text-center text-gray-700">
                      qui réduisent l'impact environnemental tout en
                      maximisant les rendements.
                      </SmartParagraph>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center mb-4 w-full max-h-full px-4 py-6 bg-primary-100 rounded-4xl border-1 border-[#C99B25]/30 card-hover-lift">
                    <div>
                      <LazyImage
                        src="./assets/newimport/cardfeatures/optimize.png"
                        alt=""
                        className="h-25 w-auto bg-[#C99B25]/20 p-2 border-1 border-[#C99B25] rounded-2xl"
                      />
                    </div>
                    <div>
                    <h3 className="mb-2 w-full text-sm font-bold text-center sm:text-sm lg:text-sm 2xl:text-lg">
                    Optimiser la gestion des ressources
                      </h3>
                    </div>
                    <div>
                    <SmartParagraph as="p" className="text-center text-gray-700">
                        afin de faire face à l'augmentation des coûts et aux
                        défis du changement climatique.
                      </SmartParagraph>
                    </div>
                  </div>
                </div>
                <SmartParagraph as="p" className="mb-4 text-center p-0 sm:p-4 md:p-8 lg:px-18 font-medium sm:text-[22px]">
                  En alliant innovation et expertise agronomique,
                  <br />
                  <span className="p-0 px-1 text-[14px] md:text-[22px] font-semibold text-color1 [&:not(:first-child)]:mt-0 items-center">
                    DAUMTech vous accompagne
                  </span>
                  dans la transition vers une agriculture de précision, plus
                  performante et résiliente face aux défis actuels et futurs.
                </SmartParagraph>
                </StaggerContainer>
              </div>
          </section>
          <section id="services" className="scroll-mt-24">
            {/* New Section  */}
            <AnimatedTitle 
              as="h2" 
              className="relative mb-6 text-2xl font-bold tracking-tight sm:text-4xl text-neutral-900"
              animation="fade-up"
              delay={0}
            >
              <span className="relative z-10">Nos Services</span>
            </AnimatedTitle>
            
              <SmartParagraph as="h6" className="mb-4 sm:text-[18px] font-normal inline-block gap-2">
                <span className="text-[14px] sm:text-[18px] pr-1 font-semibold text-black [&:not(:first-child)]:mt-0 items-center">
                  Nos Services digitaux
                </span>
                permettent aux acteurs de l’agriculture de prendre des décisions
                raisonnées pour une gestion optimale de leurs exploitations.
              </SmartParagraph>
              <VerticalTabs />
          </section>
          <section id="blog" className="scroll-mt-24">
            <BlogSection />
          </section>

          <section id="contact" className="scroll-mt-24">
            <AnimatedTitle 
              as="h2" 
              className="relative pb-0 mb-0 text-2xl font-bold tracking-tight sm:text-4xl text-neutral-900"
              animation="fade-up"
              delay={0}
            >
              <span className="relative z-10">Contact</span>
            </AnimatedTitle>
            <ContactSection Forms={Forms} Contact={Contact} />
          </section>
        </div>
      </section>
    </>
  );
};

export default HomeBody;
