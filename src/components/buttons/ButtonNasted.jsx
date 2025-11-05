import React from "react";

// Default icon, but will accept an icon prop.
import { ArrowRightIcon as ArrowRighttOutline } from "@heroicons/react/24/outline";
import { ArrowLeftIcon as ArrowLeftOutline } from "@heroicons/react/24/outline";

const ButtonNasted = ({
  icon: Icon = ArrowRighttOutline, // Default to ArrowLeftOutline icon if no icon is passed
  buttonColor = "#C8B289", // Default button color
  iconColor = "#634C12", // Default icon color
  hoverColor = "#A39262", // Default hover color
  textColor = "#A39262", // Default hover color
  text = "Envoyer", // Default button text
}) => {
  return (
    <button
      type="submit"
      className={`flex flex-row justify-between items-center gap-4 py-1 px-3 text-xs/3 font-medium text-center ${textColor} rounded-lg 
        transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-primary-300`}
      style={{
        backgroundColor: buttonColor,
        borderColor: hoverColor,
      }}
    >
      <span>{text}</span>
      <div
        className={`inline-block px-2 py-1 sm:px-1 sm:py-0 rounded-xl 
          transform hover:scale-110 hover:rotate-3 transition-all duration-300 ease-in-out`}
        style={{
          background: `linear-gradient(to bottom right, #FFF6E4, ${buttonColor})`,
        }}
      >
        <Icon
          className={`w-4 sm:w-6 md:w-8 h-6 sm:h-8 md:h-10 p-0 sm:p-1 md:p-2 transition-colors duration-300 
            hover:text-[${hoverColor}] focus:text-[${hoverColor}]`}
          style={{
            color: iconColor,
          }}
        />
      </div>
    </button>
  );
};

export default ButtonNasted;
