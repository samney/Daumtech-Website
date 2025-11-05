import React from "react";
import ButtonIcon from "./buttons/ButtonIcon";
import "@fontsource/darker-grotesque";
import AnimatedSection from "../components/AnimatedSection";
import SmartParagraph from "../components/SmartParagraph"

const HeroContent = () => {
  return (
    <>
      <div className="relative inset-x-0 top-0 pr-0 pl-0 max-sm:m-0 max-sm:p-0 lg:px-4">
        <div className="flex justify-between items-center p-2 m-2 2xl:px-4 xl:px-10 lg:px-4 md:px-2 sm:px-4 border-b-1 border-Flight/20">
          <section className="w-[100%] flex flex-col gap-0 p-0 m-0  ">
            <AnimatedSection animation="slide-left ">
              <div className="grid px-0 py-0 mx-0 max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-4 lg:grid-cols-12">
              <div className="place-self-start w-full lg:col-span-8">
                <h1 className="mt-8 mb-4 text-3xl font-bold tracking-tight leading-tight text-white md:font-semibold md:text-5xl lg:text-6xl">
                  L'Agriculture Réinventée
                  <span className="block">par l'Innovation</span>
                </h1>
                <SmartParagraph as="p" className="mb-3 font-light tracking-wider text-white text-[0.76rem]/5 sm:text-[0.86rem]/6 text-start">
                DAUMTech incarne l’alliance stratégique entre l’excellence scientifique de l’UM6P et le savoir-faire des Domaines Agricoles, au service de l'agriculture de demain. En capitalisant sur les technologies avancées et la recherche de pointe, nous transformons les défis agricoles en opportunités d’innovation.
                </SmartParagraph>

                <SmartParagraph as="p" className="mb-3 font-light tracking-wider text-white text-[0.76rem]/5 sm:text-[0.86rem]/6 text-start">
                  <span className="font-bold">Notre objectif :</span> accompagner la transition vers une agriculture plus efficiente, plus productive et profondément durable.
                </SmartParagraph>
              </div>
              </div>
              <div className="flex flex-row gap-4 justify-start place-items-start pb-12 mt-8 sm:mt-4 sm:pb-18 max-sm-p-0 max-sm:flex max-sm:flex-row max-sm:justify-start">
                <ButtonIcon
                  href="/#apropos"
                  text="Qui sommes nous ?"
                  color="bg-Accent"
                  textColor="text-white"
                  borderColor="border-color3/50"
                  hoverBg="hover:bg-DarkText"
                  size="lg"
                  padding="px-6 sm:px-8"
                  isLink={true}
                />
                <ButtonIcon
                  href="/#contact"
                  text="Contact"
                  color="bg-white/0"
                  textColor="text-white"
                  borderColor="bg-Accent"
                  hoverBg="hover:bg-Accent"
                  size="lg"
                  padding="px-2 sm:px-8"
                  isLink={true}
                />
              </div>
            </AnimatedSection>
          </section>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
