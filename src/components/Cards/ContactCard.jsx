import React from "react";
import ArrowButton from "../buttons/ArrowButton";

const ContactCard = ({
  imageSrc = "/assets/newimport/home/contactMailIcon.svg", // Default image source
  heading = "Envoyez-nous un message", // Default heading
  email = "contact@DAUMTech.ma", // Default email
  link = "/contact", // Default link
}) => {
  return (
    <div
      className="flex flex-col justify-center place-items-center mb-0 p-2 sm:px-6 lg:px-0    
      bg-gradient-to-br from-[#FFF6E4] to-[#C8B289] rounded-2xl border-1 border-[#ee542d]/10 w-full sm:w-[80%] md:w-[70%] lg:w-[80%]
      transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg"
    >
      <div className="flex items-center justify-between w-full m-0 sm:flex-row md:p-0 lg:p-2">
        <div>
          <a href={link}>
            <img
              src={imageSrc}
              className="w-auto h-10 p-0 m-0 transition-transform duration-300 ease-in-out sm:h-10 md:h-16 hover:rotate-12"
              alt="Contact email icon"
            />
          </a>
        </div>
        <div className="flex flex-col justify-center w-full gap-2 p-0 m-0 md:gap-0 place-content-center">
          <h6
            className="text-[#634C12] text-center w-full mb-0 mx-0 my-0
             text-[0.754rem] sm:text-lg md:text-md lg:text-lg 2xl:text-md
             font-normal p-0 transition-all duration-300 ease-in-out
             hover:text-[#A39262]"
          >
            {heading}
          </h6>

          <h6
            className="text-[#634C12] text-center w-full mb-0 mx-0 my-0
             text-[0.654rem] sm:text-lg md:text-md lg:text-lg 2xl:text-md
             font-bold p-0 transition-all duration-300 ease-in-out
             hover:text-[#A39262]"
          >
            {email}
          </h6>
        </div>
        {/* Button with arrow */}
        <ArrowButton href={link} isLink={true} />
      </div>
    </div>
  );
};

export default ContactCard;
