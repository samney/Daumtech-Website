import React from "react";

const ContactSection = ({ Contact, Forms, direction = "left" }) => {
  const isRight = direction === "right";

  return (
    <>
    <section
      id="contact"
      className="flex flex-col gap-10 justify-between items-start place-items-start w-full xl:flex-row"
    >
      
      {isRight ? (
        <>
          <div className="flex flex-col justify-center items-center px-4 py-0 mx-auto w-full lg:py-16">
            <Forms formType={"contactForms"} />
          </div>

          <div className="flex flex-col gap-8 justify-center items-center place-items-center p-0 mx-auto w-full xl:pr-0 lg:py-4 xl:items-start sm:mt-10">
            <Contact />
          </div>
        </>
      ) : (
        <>
        
          <div className="flex flex-col gap-8 justify-center items-center place-items-center p-0 mx-auto mt-10 w-full xl:pr-0 lg:py-4 xl:items-start">
            <Contact />
          </div>

          <div className="flex flex-col justify-center items-center px-4 py-0 mx-auto w-full lg:py-16">
            <Forms formType={"contactForms"} />
          </div>
        </>
      )}
    </section>
    </>
  );
};

export default ContactSection;
