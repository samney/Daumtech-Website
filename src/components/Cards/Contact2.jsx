import React from "react";
import ContactCard from "./ContactCard";
import ButtonIcon from "../buttons/ButtonIcon";
import FAQAccordion from "../FAQAccordion";

const faqs = [
  {
    question: "Comment fonctionne la plateforme ?",
    answer:
      "Notre plateforme vous guide étape par étape, de l’inscription à la génération de votre rapport NPK personnalisé.",
  },
  {
    question: "Est-ce que le service est gratuit ?",
    answer:
      "Oui, l’inscription et la génération de bilans NPK sont entièrement gratuites.",
  },
  {
    question: "Puis-je modifier les informations de ma parcelle ?",
    answer:
      "Oui, vous pouvez à tout moment mettre à jour les données de votre parcelle depuis votre tableau de bord.",
  },
  {
    question: "Quels types de cultures sont pris en charge ?",
    answer:
      "La plateforme prend en charge une large gamme de cultures, des céréales aux légumes, en passant par les cultures industrielles et fruitières.",
  },
  {
    question: "Comment mes données sont-elles protégées ?",
    answer:
      "Nous appliquons des normes de sécurité strictes pour garantir la confidentialité et la protection de vos données personnelles et agricoles.",
  },
];

const Contact2 = () => {
  return (
    <>
      <section className="flex flex-col items-start justify-between w-full gap-10 xl:flex-row">
        <div className="flex flex-col items-center justify-center w-full gap-8 p-0 mx-auto xl:pr-18 lg:py-4 xl:items-start">
          <div className="p-0 mb-0">
            <div className="flex justify-center w-full gap-0 p-0 my-4 sm:flex-row sm:items-start xl:justify-start">
              <ButtonIcon
                text="FAQ"
                color="bg-[#EBDAB9]/70"
                imageSrc="./assets/newimport/npkindex/carbonedge/faq.svg"
                textColor="text-Accent"
                borderColor="border-Accent"
                hoverBg=""
              />
            </div>
            <h2 className="mb-8 text-2xl font-extrabold tracking-tight text-center lg:text-3xl xl:text-4xl xl:text-start text-DarkText">
              Questions Fréquemment Posées
            </h2>
            <p className="mb-8 font-medium text-center lg:mb-2 lg:text-center xl:text-start -DarkText sm:text-sm md:text-sm ">
              Lorem ipsum dolor sit amet consectetur feugiat amet sed pretium
              orci vitae auctor elit netus lacinia.
            </p>
          </div>
          <ContactCard />
        </div>
        <FAQAccordion faqs={faqs} />
      </section>
    </>
  );
};

export default Contact2;
