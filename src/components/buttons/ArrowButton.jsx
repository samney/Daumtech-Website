import React from "react";
import { ArrowRightIcon as ArrowRightOutline } from "@heroicons/react/24/outline";

const ArrowButton = ({
  rotated = false,
  asToggle = false,
  active = false,
  title = "",
  size = "md", // New prop for size
  textColor = "",
  href = "#",
  target = "_self",
  isLink = false,
}) => {
  // Size-based class mappings
  const sizeClasses = {
    sm: {
      wrapper: "px-2 py-1 text-sm",
      icon: "w-4 h-4",
      text: "text-xs",
    },
    md: {
      wrapper: "px-4 py-2 text-base",
      icon: "w-5 h-5",
      text: "text-sm",
    },
    lg: {
      wrapper: "px-6 py-3 text-lg",
      icon: "w-6 h-6",
      text: "text-base",
    },
  };

  const currentSize = sizeClasses[size] || sizeClasses["md"];

  const iconClasses = `
    ${currentSize.icon}
    transition-transform duration-300 
    ${rotated ? "rotate-90" : "rotate-0"} 
    ${active ? "text-[#3B2E13]" : "text-DarkText/40"}
  `;

  const wrapperClasses = `
    m-0 ${currentSize.wrapper} rounded-xl 
    flex items-center gap-2
    transition-all duration-300 ease-in-out transform 
    border 
    ${
      active
        ? "bg-gradient-to-br from-[#EDEDED] to-[#D5D5D5] border-gray-300"
        : "bg-gradient-to-br from-[#FDF4E7] to-[#C8B289] border-[#C8B289]"
    }
    hover:shadow-md hover:scale-[1.02]
  `;

  const TitleElement = () =>
    title ? (
      <span className={`${currentSize.text} ${textColor}`}>{title}</span>
    ) : null;

  const ElementType = isLink ? "a" : "div";

  return (
    <ElementType
      href={isLink ? href : undefined}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={wrapperClasses}
    >
      <TitleElement />
      <ArrowRightOutline className={iconClasses} />
    </ElementType>
  );
};

export default ArrowButton;
