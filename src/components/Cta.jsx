import React from "react";
import ButtonIcon from "../components/buttons/ButtonIcon";

const Cta = ({
  headings = [],
  buttons = [],
  backgroundImage = "",
  className = "", 
  innerClassName = "", 
}) => {
  return (
    <div
      className={`w-full bg-center bg-no-repeat bg-cover ${className}`}
      style={
        backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
      }
    >
      <div
        className={`flex flex-col gap-0 place-items-center p-2 sm:p-6 lg:gap-8 md:p-12 ${innerClassName}`}
      >
        <div className="flex flex-col gap-0 text-center sm:gap-2">
          {headings.map((heading, index) => {
            const Tag = heading.tag || "h2";
            return (
              <Tag
                key={index}
                className={`mb-8 sm:mb-4 p-0 sm:py-0 tracking-tight ${heading.className || ""}`}
              >
                {heading.text}
              </Tag>
            );
          })}
        </div>

        <div className="flex flex-col gap-4 place-items-center sm:flex-row">
          {buttons.map((button, index) => (
            <ButtonIcon isLink={true} key={index} {...button} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cta;
