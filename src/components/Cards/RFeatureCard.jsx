import React from "react";
import ButtonIcon from "../buttons/ButtonIcon";
import SmartParagraph from "../../components/SmartParagraph";
import LazyImage from "../LazyImage";

const RFeatureCard = () => {
  return (
    <div>
      <section className="bg-[#FFF7F3] border rounded-4xl border-Accent/14">
        <div className="flex flex-row items-center max-w-screen-xl gap-8 px-4 py-8 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="flex flex-col gap-4 mt-12 md:mt-0 place-items-center lg:place-items-end">
            <div className="flex flex-col gap-6 md:place-items-end place-items-center">
              <LazyImage
                className="w-full h-auto md:hidden"
                src="./assets/newimport/npkindex/pkIndex.png" // Custom image/icon
                alt="pkIndex"
              />
              <div className="flex flex-col gap-4 mt-12 md:place-items-center md:mt-0 place-items-center ">

                <ButtonIcon
                  text="PK"
                  color="bg-[#FFE0CE]"
                  imageSrc="./assets/newimport/npkindex/n.svg" // Custom image/icon
                  textColor="text-color1-second"
                  borderColor="border-color1/20"
                  hoverBg=""
                />
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight xl:text-6xl text-color1-secon text-color1-second ">
            PK-Index
                </h2>
                <SmartParagraph as="p" className="sm:text-[18px] mb-6 font-medium text-center text-DarkText md:text-md lg:text-center">
                  Recommandations basées sur un bilan agronomique par analyse
                  de sol pour P₂O₅ et K₂O.
                </SmartParagraph>
              </div>
            </div>
          </div>
          <LazyImage
            className="hidden h-auto md:block"
            src="./assets/newimport/npkindex/pkIndex.png" // Custom image/icon
            alt="pkIndex"
          />
        </div>
      </section>
    </div>
  );
};

export default RFeatureCard;
