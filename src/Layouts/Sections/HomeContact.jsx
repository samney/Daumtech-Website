import React from "react";
import "@fontsource/darker-grotesque";
import ContactSection from "../../components/ContactSection";
import Forms from "../../components/Forms/Forms";
import Contact from "../../components/Cards/Contact";
import AnimatedSection from "../../components/AnimatedSection";

// import "../../styles/animations.css";

const HomeContact = () => {
  return (
    <>
      <section className="sm:px-10 md:px-10 lg:px-33 2xl:px-30">
        <div className="flex flex-col max-w-screen-xl px-3 py-8 mx-auto my-10 gap-23 lg:py-16 lg:px-6">
          <section>
            <AnimatedSection animation="fade">
              <ContactSection Forms={Forms} Contact={Contact} />
            </AnimatedSection>
          </section>
        </div>
      </section>
    </>
  );
};

export default HomeContact;
