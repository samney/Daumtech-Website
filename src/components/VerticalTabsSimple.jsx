import React, { useState } from "react";
import ButtonIcon from "./buttons/ButtonIcon";
import SmartParagraph from "./../components/SmartParagraph";

export default function VerticalTabsSimple({
  tabData = [],
  heading = "Comment ça marche ?",
  subHeading = "",
  buttonProps,
}) {
  const [activeTab, setActiveTab] = useState(0);
  if (!Array.isArray(tabData) || tabData.length === 0) {
    return (
      <div className="text-center text-color3">Aucune donnée à afficher.</div>
    );
  }
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col justify-between p-0 py-7 sm:flex-row">
        <h2 className="relative mb-12 text-2xl font-bold tracking-tight sm:text-4xl text-neutral-900">
          <span className="relative z-10">{heading}</span>
          <br />
          <span className="relative z-10 text-xl text-Accent">{subHeading}</span>
        </h2>
        {buttonProps && (
          <ButtonIcon
            text={SmartParagraph(buttonProps.text)}
            size={buttonProps.size || "lg"}
            color={buttonProps.color}
            imageSrc={buttonProps.imageSrc}
            textColor={buttonProps.textColor}
            borderColor={buttonProps.borderColor}
          />
        )}
      </div>

      <div className="flex flex-col gap-8 justify-center place-items-center mt-0 w-full h-full xl:flex-row xl:gap-18">
        {/* Tabs List */}
        <div className="flex flex-col gap-4 lg:w-[60%] sm:w-[60%] max-w-md">
          {tabData.map((tab, idx) => {
            const isActive = activeTab === idx;

            return (
              <button
                key={tab.title || idx}
                onClick={() => setActiveTab(idx)}
                className={`rounded-3xl flex flex-col place-items-start justify-between 
                px-2 py-3 gap-8 font-semibold transition-all duration-300 w-full
                ${isActive ? tab.activeStyle : "text-DarkText"}
                ${isActive ? "shadow-sm scale-105 border-2 border-Accent" : ""}`}
              >
                <div className="flex flex-row gap-4 place-items-center p-0 m-0 w-full">
                  <img
                    src={tab.icon || "/default-icon.svg"}
                    alt={tab.title || "default title"}
                    className="w-16 h-16 rounded-md"
                  />
                  <div className="flex flex-col flex-1 gap-1 text-left">
                    <span className="text-xs font-medium text-DarkText/70">
                      {tab.title || "No Title"}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right panel with image */}
        <div className="p-[8px] rounded-2xl bg-gradient-to-t from-Accent via-Accent/50 to-Accent/20">
          <figure className="relative z-1 max-w-full w-full sm:w-full md:w-full lg:w-full xl:w-xl 2xl:w-3xl h-auto shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)] rounded-b-lg">
            <div className="flex relative items-center px-24 py-2 w-full max-w-full bg-gray-800 rounded-t-lg sm:w-full md:w-full lg:w-full xl:w-xl 2xl:w-3xl dark:bg-neutral-700">
              <div className="flex absolute top-2/4 gap-x-1 -translate-y-1 start-4">
                <span className="bg-gray-600 rounded-full size-2 dark:bg-neutral-600"></span>
                <span className="bg-gray-600 rounded-full size-2 dark:bg-neutral-600"></span>
                <span className="bg-gray-600 rounded-full size-2 dark:bg-neutral-600"></span>
              </div>
              <div className="flex justify-center items-center size-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-neutral-600 dark:text-neutral-400">
                www.daumtech.com
              </div>
            </div>

            <div className="overflow-hidden bg-gray-800 rounded-b-lg">
              <img
                src={tabData[activeTab]?.image || ""}
                alt={tabData[activeTab]?.title || "Default Image"}
                className="object-contain w-full h-auto rounded-b-lg"
              />
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
}
