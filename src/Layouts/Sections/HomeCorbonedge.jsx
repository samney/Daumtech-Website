import React from "react";
import "@fontsource/darker-grotesque";
import VerticalTabsSimple from "../../components/VerticalTabsSimple";
// import Contact from "../../components/Cards/Contact2";
import { tabData as registrationSteps } from "../../constants/tabDataCarbon"; // Or another custom data file
import FixedBottomButton from "../../components/buttons/FixedButton";
import DemoModal from "../../components/Modal/DemoModal";
import DevisModal from "../../components/Modal/DevisModal";
import ListSection from "../../components/Cards/ListSection";
import SmartParagraph from "../../components/SmartParagraph";
import { ArrowRightIcon as ArrowRightOutline } from "@heroicons/react/24/outline";
import AnimatedSection from "../../components/AnimatedSection";

import {
  DbsIcon,
  ScopeIcon,
  ChartIcon,
} from "../../components/Icons/HomeIcons";

const HomeCorbonedge = () => {
  return (
    <>
      <section className="sm:px-10 md:px-10 lg:px-33 2xl:px-30">
        <div className="flex flex-col px-3 py-8 mx-auto my-10 max-w-screen-xl gap-23 lg:py-16 lg:px-6">
          {/* p section  */}
          <AnimatedSection animation="fade">
            <div>
            <SmartParagraph as="h2" className="relative mb-12 text-2xl font-bold tracking-tight sm:text-4xl text-neutral-900">
                <span className="relative z-10">
                  Plateforme de comptabilité carbone au service de
                  l'agriculture et l'agro-industriel
                </span>
            </SmartParagraph>

            <SmartParagraph as="p" className="mb-4 sm:text-[18px]">
                Dans un contexte où les changements climatiques et les
                réglementations environnementales redéfinissent les priorités,
                décarboner l'agriculture et l'agro-industrie devient une
                nécessité stratégique. CarboEdge est une solution complète,
                alliant une comptabilité carbone précise à des stratégies
                personnalisées de décarbonation.
            </SmartParagraph>
              <br />
              <SmartParagraph as="p" className="mb-4 sm:text-[18px]">
              Grâce à cette plateforme, les acteurs du secteur peuvent
                mesurer, modéliser et suivre leurs émissions en toute autonomie.
                En facilitant l'amélioration de la qualité des sols, la
                résilience climatique et la compétitivité internationale,
                CarboEdge établit un pont essentiel entre les exigences
                réglementaires, les défis environnementaux et des solutions
                concrètes et durables.
                </SmartParagraph>
              </div>
          </AnimatedSection>

          {/* numbers */}
          <AnimatedSection animation="fade">
            <section>
              <h2 className="py-2 mb-8 font-bold tracking-tight text-center text-3xl/10 sm:py-4">
                CarboEdge, votre allié pour une agriculture plus 
                <br />compétitive et plus durable !
              </h2>
              
              <div className="px-2 py-8 mx-auto max-w-screen-xl rounded-2xl sm:py-16 lg:px-6 bg-Accent/10">
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                  {/* First column */}
                  <div className="flex flex-col justify-center place-items-center">
                    <div className="p-3 rounded-4xl bg-color1">
                      <div className="flex justify-center place-items-center p-3 rounded-full border-2 border-white border-dashed w-50 h-50">
                        <div className="flex flex-col gap-0 justify-center place-items-center p-0 pt-4 m-0 w-full h-full bg-white rounded-full">
                          <DbsIcon
                            color="#ee542d"
                            className="items-center p-0 pt-0 pb-0 m-0 h-auto w-18 sm:w-10 lg:w-20 md:w-20 xl:w-20 2xl:w-20"
                          />
                          <h3 className="pt-2 m-0 w-full text-4xl font-semibold text-center text-color1 sm:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">
                            3
                          </h3>
                        </div>
                      </div>
                    </div>
                    <h3 className="mt-4 w-full text-sm font-medium text-center text-DarkText sm:text-sm lg:text-lg 2xl:text-lg">
                      Postes d'émission à suivre
                    </h3>
                  </div>
                  {/* Second column */}
                  <div className="flex flex-col justify-center place-items-center">
                    <div className="p-3 rounded-4xl bg-DarkText">
                      <div className="flex justify-center place-items-center p-3 rounded-full border-2 border-white border-dashed w-50 h-50">
                      <div className="flex flex-col gap-0 justify-center place-items-center p-0 pt-4 m-0 w-full h-full bg-white rounded-full">
                      <ScopeIcon
                            color="#634c12"
                            className="items-center p-0 m-0 h-auto text-black w-18 sm:w-10 lg:w-20 md:w-20 xl:w-20 2xl:w-20"
                          />
                          <h3 className="w-full pt-2 m-0 text-4xl font-semibold text-[#634c12] text-center sm:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">
                            <span className="text-4xl font-bold text-DarkText">
                              +
                            </span>
                            200
                          </h3>
                        </div>
                      </div>
                    </div>
                    <h3 className="items-center mt-4 w-full text-sm font-medium text-center text-DarkText sm:text-sm lg:text-lg 2xl:text-lg">
                      Scopes d'émission
                    </h3>
                  </div>
                  {/* Third column */}
                  <div className="flex flex-col justify-center place-items-center">
                    <div className="p-3 rounded-4xl bg-Accent">
                      <div className="flex justify-center place-items-center p-3 rounded-full border-2 border-white border-dashed w-50 h-50">
                      <div className="flex flex-col gap-0 justify-center place-items-center p-0 pt-4 m-0 w-full h-full bg-white rounded-full">
                      <ChartIcon
                            color="#c8b289"
                            className="p-0 m-0 h-auto text-black rounded-3xl w-18 sm:w-10 lg:w-20 md:w-20 xl:w-20 2xl:w-20"
                          />
                          <h3 className="pt-2 m-0 w-full text-4xl font-semibold text-center text-Accent sm:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">
                            3
                          </h3>
                        </div>
                      </div>
                    </div>
                    <h3 className="mt-4 w-full text-sm font-medium text-center text-DarkText sm:text-sm lg:text-lg 2xl:text-lg">
                      Niveaux de facteurs d'émissions
                    </h3>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Section with list  */}
          <AnimatedSection animation="fade">
            <section>
              <div className="flex flex-col gap-12">
                <ListSection layout="Right" />
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection animation="fade">
            <VerticalTabsSimple
              tabData={registrationSteps}
              heading="Comment ça marche?"
            />
          </AnimatedSection>

          <div className="flex flex-col gap-4 justify-center place-items-center md:flex-row">
            <FixedBottomButton
              isFixed={false}
              ModalContent={DevisModal}
              buttonStyles={{
                text: "Demandez un devis",
                color: "bg-color1",
                hoverBg: "hover:bg-color1/10",
                textColor: "text-white hover:text-color1",
                borderRadius: "rounded-2xl text-[14px]",
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

          {/* <section>
            <Contact />
          </section> */}
        </div>
      </section>
    </>
  );
};

export default HomeCorbonedge;
