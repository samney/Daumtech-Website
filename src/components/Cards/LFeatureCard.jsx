import React from "react";
import ButtonIcon from "../buttons/ButtonIcon";
import LazyImage from "../LazyImage";

const LFeatureCard = () => {
  return (
    <div>
      <section className="bg-[#FFF7F3] border rounded-4xl border-Accent/14">
        <div className="items-center max-w-screen-xl gap-8 px-4 py-8 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 ">
          <div className="flex flex-col justify-center gap-2 place-items-center">
            <LazyImage
              className="w-full h-auto"
              src="./assets/newimport/npkindex/npmkIndex.png" // Custom image/icon
              alt="npmkIndex"
            />
            <div className="p-3 m-2 bg-color1-second/20 border-1 border-Accent/20 rounded-2xl flex gap-4 items-center lg:w-[80%]">
              <LazyImage
                src="./assets/newimport/npkindex/n.svg"
                alt="iconCallout"
                className="h-6 sm:h-4 md:h-8 sm:mt-1"
              />
              <p className="tracking-normal  text-color1-second font-semibold text-[9.26px]">
                Recommandations précises en azote intégrées à une carte de
                modulation spatiale, détaillant les doses optimales par zones
                intra-parcellaires.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-12 md:mt-0 place-items-center lg:place-items-center">
            <ButtonIcon
              text="N"
              color="bg-[#FFE0CE]"
              imageSrc="./assets/newimport/npkindex/n.svg" // Custom image/icon
              textColor="text-color1-second"
              borderColor="border-color1/20"
              hoverBg=""
            />
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center xl:text-6xl text-color1-secon text-color1-second ">
              N-Index
            </h2>
            <p className="sm:text-[18px] mb-6 font-medium text-center text-DarkText md:text-md">
              Génère des recommandations basées sur les images satellitaires par
              stade phénologique de vos cultures.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LFeatureCard;
