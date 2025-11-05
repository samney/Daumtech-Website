import React, { useState } from "react";
import { ArrowRightIcon as ArrowRightOutline } from "@heroicons/react/24/outline";
import SmartParagraph from "./../components/SmartParagraph";
import ButtonIcon from "./buttons/ButtonIcon";
// import FixedBottomButton from "../../components/buttons/FixedButton";
import FixedBottomButton from "../components/buttons/FixedButton";
import DemoModal from "../components/Modal/DemoModal";
import DevisModal from "../components/Modal/DevisModal";
import LazyImage from "./LazyImage";

const tabData = [
  {
    title: "NPK-Index",
    description:
      "Optimisez les apports en NPK tout en améliorant votre production",
    icon: "./assets/newimport/home/npk_index_icon.png",
    image: "./assets/newimport/home/highqualityIndexnpk.jpg",
    activeStyle: "bg-white text-color1 border border-color1",
    inactiveStyle: "bg-white text-color1 border border-color1",
    buttonIcon: {
      text: "Découvrir",
      href: "/npkindex",
      color: "bg-color1/10",
      textColor: "text-color1",
      borderColor: "border-color1",
      hoverBg: "hover:bg-color1/30",
      imageSrc: "./assets/newimport/home/iconResource.svg",
      iconSize: "h-5 w-auto",
      size: "sm",
      padding: "p-4",
      isLink: "true",
    },
  },
  {
    title: "CarboEdge",
    description:
      "Plateforme de comptabilité carbone au service de l'agriculture et l'agro-industriel",
    icon: "./assets/newimport/home/carbonEdge.png",
    image: "./assets/newimport/home/highqualityIndexnpk.jpg",
    activeStyle: "bg-white text-color1 border border-color1",
    inactiveStyle: "bg-color1 text-white",
    buttonIcon: {
      text: "Découvrir",
      href: "/carbonEdge",
      color: "bg-color1/10",
      textColor: "text-color1",
      borderColor: "border-color1",
      hoverBg: "hover:bg-color1/30",
      imageSrc: "./assets/newimport/home/iconResource.svg",
      iconSize: "h-5 w-auto",
      size: "sm",
      padding: "p-4",
      isLink: "true",
    },
  },
];

export default function VerticalTabs() {
  const [activeTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState(null);

  const handleTabClick = (tab) => {
    if (tab.buttonIcon?.href) {
      window.location.href = tab.buttonIcon.href;
    }
  };

  return (
    <div
      className="flex w-full h-[40.481rem] sm:h-[25.481rem] md:h-[40.481rem] flex-col sm:flex-row justify-center items-center mt-18"
      id="services"
    >
      {/* Tabs List */}
      <div className="flex flex-col gap-4 w-full sm:w-[50%] max-w-md p-2">
        {tabData.map((tab, idx) => {
          const isActive = activeTab === idx;
          const isHovered = hoveredTab === idx;
          const isActiveOrHovered = isActive || isHovered;

          return (
            <button
              // key={tab.title}
              key={tab.title}
              onClick={() => handleTabClick(tab)}
              onMouseEnter={() => setHoveredTab(idx)}
              onMouseLeave={() => setHoveredTab(null)}
              className={`p-6 rounded-3xl flex flex-col items-start justify-center 
                 gap-0 font-semibold transition-all duration-300 w-full
                ${isActiveOrHovered ? tab.activeStyle : "bg-color1 text-white"}
                ${isActiveOrHovered ? "shadow-lg scale-105" : ""}
                cursor-pointer
              `}
            >
              {/* Top row: icon + title/desc + arrow */}
              <div className="flex flex-row gap-3 items-center w-full">
                <div
                  className={`transition-all duration-300 ${isActiveOrHovered ? "scale-110" : ""}`}
                >
                  <LazyImage
                    src={tab.icon}
                    alt=""
                    className="w-8 h-auto rounded-md transition-transform duration-300"
                  />
                </div>
                <div>
                  <div className="flex flex-col flex-1 gap-0 text-left">
                    <SmartParagraph
                      as="span"
                      className={`text-base font-bold lg:text-lg transition-colors duration-300 ${
                        isActiveOrHovered ? "text-color1" : "text-white"
                      }`}
                    >
                      {tab.title}
                    </SmartParagraph>
                    <SmartParagraph
                      as="span"
                      className={`text-[0.65rem] lg:text-[0.75rem] font-medium tracking-normal transition-colors duration-300 ${
                        isActiveOrHovered ? "text-color1/80" : "text-white/80"
                      }`}
                    >
                      {tab.description}
                    </SmartParagraph>
                  </div>
                </div>
                <ArrowRightOutline
                  className={`w-8 lg:w-5 h-auto transition-all duration-300 ${
                    isActiveOrHovered
                      ? "translate-x-1 text-color1"
                      : "text-white"
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Right panel with image */}
      <div className="flex flex-col flex-1 justify-center items-center p-8 sm:items-center sm:justify-start">
        <LazyImage
          src={tabData[activeTab].image}
          alt={tabData[activeTab].title}
          className="w-[29.413rem] sm:w-[18.413rem] md:w-[30.413rem] sm:max-h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}
