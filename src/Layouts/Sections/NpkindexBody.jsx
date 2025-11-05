import React from "react";
import "@fontsource/darker-grotesque";
import VerticalTabsSimple from "../../components/VerticalTabsSimple";
import LFeatureCard from "../../components/Cards/LFeatureCard";
import RFeatureCard from "../../components/Cards/RFeatureCard";
import Cta from "../../components/Cta";
import HeadingSub from "../../components/HeadingSub";
import { tabData as registrationSteps } from "../../constants/tabDataNpkIndex";
import FixedBottomButton from "../../components/buttons/FixedButton";
import DemoModal from "../../components/Modal/DemoModal";
import DevisModal from "../../components/Modal/DevisModal";
import AnimatedSection from "../../components/AnimatedSection";
import SmartParagraph from "../../components/SmartParagraph";
import LazyImage from "../../components/LazyImage";
import AnimatedTitle from "../../components/AnimatedTitle";
import { SectionReveal } from "../../components/PageTransition";

// const buttonProps = {
//   text: "",
//   size: "lg",
//   color: "bg-Accent",
//   imageSrc: "./assets/newimport/npkindex/steps.svg",
//   textColor: "text-Accent",
//   borderColor: "border-Accent",
//   hoverBg: "border-Accent",
// };

const NpkindexBody = () => {
  return (
    <>
      <section className="sm:px-10 md:px-10 lg:px-33 2xl:px-30">
        <div className="flex flex-col gap-20 px-3 py-8 mx-auto my-10 max-w-screen-xl lg:py-16 lg:px-6">
          {/* p section */}
          <div className="m-0">
            <AnimatedTitle 
              as="h2" 
              className="relative mb-12 text-2xl font-bold tracking-tight sm:text-4xl text-neutral-900"
              animation="fade-up"
              delay={0}
            >
              <span className="relative z-10">
                Fertilisation de précision
              </span>
            </AnimatedTitle>

              <SmartParagraph as="h6" className="mb-4 sm:text-[18px] font-normal inline-block gap-2">
                Une approche agronomique fondée sur la science et calibrée pour
                les
                <SmartParagraph as="span" className="text-[14px] sm:text-[18px] font-bold pl-1 text-black">
                  réalités du terrain.
                </SmartParagraph>
              </SmartParagraph>

              <SmartParagraph as="p" className="mb-4 sm:text-[18px]">
                Issu de plusieurs années de recherche appliquée et de
                modélisation agronomique,
                <SmartParagraph as="span" className="text-[14px] sm:text-[18px] font-semibold px-1 text-black">
                  DAUMTech
                </SmartParagraph>
                a développé un modèle avancé de fertilisation de précision. Ce
                modèle repose sur une gestion raisonnée des macro-éléments
                (N-P-K) selon le principe des 4B :
              </SmartParagraph>

              <SmartParagraph as="h6" className="mb-4 sm:text-[16px] md:text-[18px] text-[12px] font-semibold">
                le bon produit, à la bonne dose, au bon moment, au bon endroit.
              </SmartParagraph>

              <SmartParagraph as="p" className="mb-4 sm:text-[16px] md:text-[18px] text-[12px] font-bold">
                Cette approche vise à :
              </SmartParagraph>

              <ul className="list-disc pl-6 mb-4 sm:text-[16px] md:text-[18px] text-[12px] font-semibold space-y-2">
                <SmartParagraph as="li">Optimiser l'efficience d'utilisation des nutriments,</SmartParagraph>
                <SmartParagraph as="li">Réduire les pertes par lixiviation et volatilisation,</SmartParagraph>
                <SmartParagraph as="li">
                  Limiter l'impact environnemental des intrants
                  <SmartParagraph as="span" className="text-[14px] sm:text-[18px] font-medium pl-1 text-black">
                    pollution des sols et des ressources hydriques.
                  </SmartParagraph>
                </SmartParagraph>
              </ul>
              <SmartParagraph as="p" className="mb-0 sm:text-[18px]">
                Grâce à notre service
                <SmartParagraph as="span" className="text-[14px] sm:text-[18px] font-semibold px-1 text-black">
                  NPK-Index,
                </SmartParagraph>
                les producteurs bénéficient de recommandations agronomiques
                dynamiques, adaptées aux stades phénologiques des cultures,
                selon deux approches complémentaires :
              </SmartParagraph>
            </div>

          {/* Card List */}
          <div className="flex flex-col gap-8">
            <AnimatedTitle 
              as="h2" 
              className="flex relative flex-row mb-0 text-2xl font-bold tracking-tight sm:text-4xl text-color1"
              animation="fade-up"
              delay={0}
            >
              <span className="z-10 buttom-10">
                Modèle hybride basé sur la télédétection
              </span>
            </AnimatedTitle>
            <LFeatureCard layout="left" />
            <AnimatedTitle 
              as="h2" 
              className="flex relative flex-row mb-0 text-2xl font-bold tracking-tight sm:text-4xl text-color1"
              animation="fade-up"
              delay={0}
            >
              <span className="z-10 buttom-10">
                Modèle de bilan agronomique basé sur l'analyse du sol
              </span>
            </AnimatedTitle>
            <RFeatureCard layout="right" />
          </div>
          
          {/* p section  */}
          {/* numbers */}
          <AnimatedSection animation="fade">
            <section>
              <SmartParagraph as="h2" className="relative mb-12 text-2xl font-bold tracking-tight sm:text-4xl text-neutral-900">
                <SmartParagraph as="span" className="relative z-10">
                  Produisez plus avec moins et durablement !
                </SmartParagraph>
              </SmartParagraph>
              <div className="px-2 py-8 mx-auto max-w-screen-xl sm:pt-16 lg:px-6">
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                  
                  <div className="flex flex-col gap-0 justify-center place-items-center px-1 py-4 rounded-2xl md:gap-4 bg-color1/20 border-1 border-color1/10">
                    <div className="mt-0 mb-0 h-auto rounded-full lg:mb-4 w-33 lg:w-25 lg:p-2 lg:h-12">
                      <LazyImage
                        className="w-auto h-auto"
                        src="./assets/newimport/npkindex/leftcircel.png"
                        alt=""
                      />
                    </div>
                    <SmartParagraph as="h3" className="mb-2 w-full text-sm font-bold text-center sm:text-sm lg:text-lg 2xl:text-lg">
                      D'économie en azote
                    </SmartParagraph>
                  </div>

                  <div className="flex flex-col gap-0 justify-center place-items-center px-1 py-4 rounded-2xl md:gap-4 bg-Accent/14 border-1 border-Accent/10">
                    <div className="mt-0 mb-0 h-auto rounded-full lg:mb-4 w-33 lg:w-25 lg:p-2 lg:h-12">
                      <LazyImage
                        className="w-auto h-auto"
                        src="./assets/newimport/npkindex/middlcircel.png"
                        alt=""
                      />
                    </div>
                    <SmartParagraph as="h3" className="mb-2 w-full text-sm font-bold text-center sm:text-sm lg:text-lg 2xl:text-lg">
                      En rendement
                    </SmartParagraph>
                  </div>

                  <div className="flex flex-col gap-0 justify-center place-items-center px-1 py-4 bg-gray-100 rounded-2xl border-gray-100 md:gap-4 border-1">
                    <div className="mt-0 mb-0 h-auto rounded-full lg:mb-4 w-33 lg:w-25 lg:p-2 lg:h-12">
                      <LazyImage
                        className="w-auto h-auto"
                        src="./assets/newimport/npkindex/rightcircle.png"
                        alt=""
                      />
                    </div>
                    <SmartParagraph as="h3" className="mb-2 w-full text-sm font-bold text-center sm:text-sm lg:text-lg 2xl:text-lg">
                      De carbone non émis
                    </SmartParagraph>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection animation="fade">
            <VerticalTabsSimple
              tabData={registrationSteps}
              heading="Comment ça marche?"

            />
          </AnimatedSection>

          {/* Devi  + Demo section */}
          {/* <AnimatedSection animation="fade"> */}
          <div className="flex flex-col gap-4 justify-center place-items-center md:flex-row">
            <FixedBottomButton
              isFixed={false}
              ModalContent={DevisModal}
              buttonStyles={{
                text: "Demandez un devis",
                color: "bg-color1",
                hoverBg: "hover:bg-color1/10",
                textColor: "text-white hover:text-color1",
                borderRadius: "rounded-xl text-[14px]",
                iconSize: "h-20 w-6",
                padding: "px-10 py-4",
                variation: "text+icon",
                hoverBorderColor: "hover:border-color1",
                size: "3xl",
                gap: "gap-0",
              }}
            />
            <FixedBottomButton
              isFixed={false}
              ModalContent={DemoModal}
              buttonStyles={{
                text: "Réservez une démo",
                color: "bg-Accent",
                hoverBg: "hover:bg-DarkText",
                textColor: "text-DarkText hover:text-Accent",
                borderRadius: "rounded-xl text-[14px]",
                iconSize: "h-20 w-6",
                padding: "px-10 py-4",
                variation: "text+icon",
                hoverBorderColor: "hover:border-Accent",
                size: "3xl",
                gap: "gap-0",
              }}
            />
          </div>
          {/* </AnimatedSection> */}

          {/* CTA GOOGLE PLAY + APPLE STORE */}
          <AnimatedSection animation="fade">
            <Cta
              className="p-8 rounded-3xl border lg:p-8 bg-Accent"
              innerClassName="backdrop-blur-xs bg-Accent/33 rounded-2xl"
              backgroundImage="./assets/newimport/bgHero.png"
              headings={[
                {
                  tag: "h2",
                  text: "Télécharger NPK-Index",
                  className:
                    "font-semibold md:text-5xl text-2xl text-white tracking-normal py-4 md:py-4 ",
                },
              ]}
              buttons={[
                {
                  href: "https://apps.apple.com/ma/app/fertiedge/id1661415817",
                  variation: "icon",
                  rightIconSrc: "./assets/newimport/npkindex/ctaAp.svg",
                  color: "bg-color1-second",
                  borderColor: "border-color1",
                  hoverBg: "hover:bg-color1-second/70",
                  iconSize: "h-auto w-50",
                  size: "xl",
                  text: "",
                  px: "px-8",
                  py: "py-9",
                },
                {
                  href: "https://play.google.com/store/apps/details?id=ma.agriedge.fertiedge.ferti&hl=en",
                  variation: "icon",
                  rightIconSrc: "./assets/newimport/npkindex/ctaGp.svg",
                  color: "bg-color1-second",
                  borderColor: "border-color1",
                  hoverBg: "hover:bg-color1-second/70",
                  iconSize: "h-auto w-50",
                  size: "lg",
                  text: "",
                  px: "px-8",
                  py: "py-9",
                },
              ]}
            />
          </AnimatedSection>
          <AnimatedSection animation="fade">
            <HeadingSub />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default NpkindexBody;
