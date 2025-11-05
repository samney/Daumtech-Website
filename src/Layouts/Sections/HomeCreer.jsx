import React from "react";
import "@fontsource/darker-grotesque";
import ContactSection from "../../components/ContactSection";
import ArrowButton from "../../components/buttons/ArrowButton";
import CareerForm from "../../components/Forms/CareerForm";
import Contact from "../../components/Cards/Contact3";
import AnimatedSection from "../../components/AnimatedSection";
import CardJob from "../../components/Career/CardJob";
import SmartParagraph from "../../components/SmartParagraph";

const HomeCareer = () => {
  return (
    <>
      <section className="sm:px-10 md:px-10 lg:px-33 2xl:px-30">
        <div className="max-w-screen-xl px-3 py-8 mx-auto lg:py-16 lg:px-6">
          {/* Heading + Sub Heading + RichText */}
          <AnimatedSection animation="fade">
            <section className="flex flex-col items-center justify-center gap-8">

              {/* here */}
              <SmartParagraph className="mb-4 mt-4 p-4 w-full md:w-[70%] sm:text-[18px] font-semibold inline-block gap-2 text-center">
              Si vous êtes passionnés par l’innovation et la technologie, que vous aimez relever les défis, et que vous êtes un coéquipier apprécié, alors nous serions ravis de vous rencontrer.
              </SmartParagraph>
              <ArrowButton title="Postes ouverts" textColor="text-DarkText" />
            </section>
          </AnimatedSection>

          {/* jobs listing section */}
          <AnimatedSection animation="fade">
            <section>
              <div className="max-w-screen-xl px-0 py-0 mx-auto sm:py-16 lg:px-6">
                <CardJob />
              </div>
            </section>
          </AnimatedSection>

          {/* contact section */}
          <AnimatedSection animation="fade">
            <section>
              <ContactSection Forms={CareerForm} Contact={Contact} />
            </section>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default HomeCareer;
