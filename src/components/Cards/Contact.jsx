import React from "react";
import ContactCard from "./ContactCard";
import ButtonIcon from "../buttons/ButtonIcon";
import SmartParagraph from "../../components/SmartParagraph";

const Contact = () => {
  return (
    <>
      <section className="flex flex-col gap-10 justify-between items-center w-full xl:flex-col">
        <div className="flex flex-col gap-8 justify-center items-center p-0 mx-auto w-full xl:pr-18 lg:py-4 xl:items-start">
          <div className="p-0 m-0">
            {/* <div className="flex gap-0 justify-center p-0 my-4 w-full sm:flex-row sm:items-start xl:justify-start"> */}
              {/* <ButtonIcon
                text="Contact"
                color="bg-[#EBDAB9]/70"
                imageSrc="./assets/newimport/home/contactIcon.svg"
                textColor="text-DarkText/80"
                borderColor="border-Accent"
                hoverBg=""
                iconPosition="left"
              /> */}
            {/* </div> */}
            <SmartParagraph as="h2" className="mb-4 text-2xl font-extrabold tracking-tight text-center lg:text-3xl xl:text-4xl xl:text-start text-DarkText">
              Contactez-nous dès aujourd'hui
            </SmartParagraph>
            <ul className="pl-5 mt-4 text-sm list-disc text-gray-800 md:text-lg">
              <li>Des questions autour de notre activité, sur nos projets, produits ou services ?</li>
              <li>Disposez-vous de commentaires ou d'idées que vous aimeriez partager avec nous ?</li>
              <li>Laissez-nous un message … Nous serions ravis de vous entendre !</li>
            </ul>
          </div>
          {/* <ContactCard /> */}
        </div>
      </section>
    </>
  );
};

export default Contact;
