import React from "react";
import ButtonIcon from "./buttons/ButtonIcon";
import "@fontsource/darker-grotesque";

const HeaderContent = ({ pop }) => {
  return (
    <>
      <div className="relative inset-x-0 top-0 pr-0 pl-0 max-sm:m-0 max-sm:p-0 lg:px-4">
        <div className="flex justify-between items-center p-2 m-2 2xl:px-4 xl:px-10 lg:px-4 md:px-2 sm:px-4 border-b-1 border-Flight/20">
          <section className="w-[100%] flex flex-col justify-content place-item-center gap-0 p-0 m-0">
            <div className="grid px-0 py-0 mx-0 max-w-screen-2xl lg:gap-8 xl:gap-0 lg:py-0 lg:grid-cols-0">
              <div className="place-self-center m-0 w-full lg:col-span-8">
                <h1 className="mt-8 mb-4 text-3xl font-bold tracking-tight leading-tight text-center text-white md:font-semibold md:text-5xl lg:text-6xl">
                  {pop}
                </h1>
              </div>
            </div>
            <div className="flex flex-row gap-4 justify-center place-items-center pb-10 max-sm-p-0 max-sm:flex max-sm:flex-row max-sm:justify-center max-lg:mt-6">
              <ButtonIcon
                href="#"
                text="NPK Index"
                color="bg-Accent"
                textColor="text-white"
                borderColor="border-color3/50"
                size="md"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HeaderContent;
