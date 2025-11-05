import React from "react";
import ButtonIcon from "../buttons/ButtonIcon";

const ListSection = () => {
  return (
    <div>
      <section className="bg-[#FFF7F3] border rounded-4xl border-Accent/14">
        <div className="gap-8 items-center px-4 py-8 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="flex flex-col gap-4 place-items-center mt-12 md:mt-0 sm:place-items-start">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center sm:text-start xl:text-6xl text-color1-second">
              Atouts de CarboEdge
            </h2>
            <p className="sm:text-[18px] mb-6 font-normal sm:text-start text-center text-DarkText md:text-md lg:text-start">
              Une plateforme pensée pour guider chaque étape de votre transition
              carbone.
            </p>
            {/* <ButtonIcon
              text="Contactez-nous"
              href="/#contact"
              color="bg-color1"
              rightIconSrc="./assets/newimport/npkindex/redLeftArrow.svg" // Custom image/icon
              textColor="text-white"
              borderColor="border-color1/20"
              hoverBg="hover:bg-color1/22"
              iconSize="h-7.5 w-8"
              size="lg"
              gap="gap-8 mb-6" // wider spacing
              isLink={true}
            /> */}
          </div>
          <div className="flex flex-row gap-2 justify-center place-items-start p-0 m-0 w-full">
            <div className="w-[80%] flex flex-col justify-start gap-2 p-0 m-0 place-items-start">
              <div className="w-[100%] flex flex-row gap-2 p-2 bg-white justify-items-center place-items-center border-1 rounded-2xl border-color1/20">
                <img
                  src="./assets/newimport/npkindex/carbonedge/icon1.svg"
                  className="p-0 m-0 w-auto h-12 place-item-center"
                />

                <h3 className="p-0 m-0 text-[0.554rem] font-normal text-start sm:text-start sm:text-sm lg:text-sm 2xl:text-md">
                  Suivi personnalisé de l’empreinte carbone.                 
                </h3>
                <div />
              </div>
              <div className="w-[100%] flex flex-row gap-2 p-2 bg-white justify-items-center place-items-center border-1 rounded-2xl border-color1/20">
                <img
                  src="./assets/newimport/npkindex/carbonedge/icon2.svg"
                  className="p-0 m-0 w-auto h-12 place-item-center"
                />

                <h3 className="p-0 m-0 text-[0.554rem] font-normal text-start sm:text-start sm:text-sm lg:text-sm 2xl:text-md">
                  Analyse des 
                  émissions et mesure de l’empreinte carbone.
                </h3>
                <div />
              </div>
              <div className="w-[100%] flex flex-row gap-2 p-2 bg-white justify-items-center place-items-center border-1 rounded-2xl border-color1/20">
                <img
                  src="./assets/newimport/npkindex/carbonedge/icon3.svg"
                  className="p-0 m-0 w-auto h-12 place-item-center"
                />

                <h3 className="p-0 m-0 text-[0.554rem] font-normal text-start sm:text-start sm:text-sm lg:text-sm 2xl:text-md">
                  Suivi des objectifs de réduction carbone.
                </h3>
                <div />
              </div>
              <div className="w-[100%] flex flex-row gap-2 p-2 bg-white justify-items-center place-items-center border-1 rounded-2xl border-color1/20">
                <img
                  src="./assets/newimport/npkindex/carbonedge/icon4.svg"
                  className="p-0 m-0 w-auto h-12 place-item-center"
                />

                <h3 className="p-0 m-0 text-[0.554rem] font-normal text-start sm:text-start sm:text-sm lg:text-sm 2xl:text-md">
                  Ajustement de la stratégie de 
                  décarbonisation en fonction de l’empreinte carbone.
                </h3>
                <div />
              </div>
            </div>

            <div className="flex flex-col justify-center w-[20%] gap-2 p-0 m-0 place-items-center">
              <div className="flex flex-col gap-7 justify-between place-items-center p-0 mt-4 max-h-full sm:gap-6 md:gap-8 lg:gap-7 xl:gap-6 2xl:gap-7">
                <div className="p-0 m-0 w-auto h-12 place-item-center">
                  <div className="z-10">
                    <ButtonIcon
                      text="1"
                      color="bg-[#FFDFD7]"
                      textColor="text-color1"
                      borderColor="border-color1/20"
                      size="md"
                      padding="px-3.5"
                    />
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="w-0 bg-color1/12 border-r-1 border-color1">
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
                <div className="p-0 m-0 w-auto h-12 place-item-center">
                  <div className="z-10">
                    <ButtonIcon
                      text="2"
                      color="bg-[#FFDFD7]"
                      textColor="text-color1"
                      borderColor="border-color1/20"
                      size="md"
                      padding="px-3.5"
                    />
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="w-0 bg-color1/12 border-r-1 border-color1">
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
                <div className="p-0 m-0 w-auto h-12 place-item-center">
                  <div className="z-10">
                    <ButtonIcon
                      text="3"
                      color="bg-[#FFDFD7]"
                      textColor="text-color1"
                      borderColor="border-color1/20"
                      size="md"
                      padding="px-3.5"
                    />
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="w-0 bg-color1/12 border-r-1 border-color1">
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
                <div className="p-0 m-0 w-auto h-12 place-item-center">
                  <div className="z-10">
                    <ButtonIcon
                      text="4"
                      color="bg-[#FFDFD7]"
                      textColor="text-color1"
                      borderColor="border-color1/20"
                      size="md"
                      padding="px-3.5"
                    />
                  </div>
                </div>

                <div />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListSection;
