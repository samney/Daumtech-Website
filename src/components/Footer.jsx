import React from "react";
import SocialIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <div className="px-0 my-0 mt-20 border-gray-200 border-t-1">

      <div className="flex flex-col gap-0 p-2 w-full sm:flex-row juistify-between place-item-center">
        
        <div className="flex gap-4 justify-center place-items-center w-full">
          <img alt="" src="/assets/svg/mailIcon.svg" className="h-4.3 w-auto" />
            <p aria-label="Email contact">
              <a
                href="mailto:contact@daumtech.ma"
                className=" text-[0.5647rem] md:text-[0.5647rem] sm:text-xs text-black font-medium sm:font-normal tracking-wide leading-snug hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-DarkText"
              >
                contact@DAUMTech.ma
              </a>
            </p>
        </div>     

        <div className="flex flex-col gap-0 items-center w-full">
          <SocialIcons color="text-DarkText" />
          <div className="py-2">
          <p className="text-center p-0 text-DarkText font-medium text-[10px]">
            © 2025 DAUMTech SA. Tous droits réservés.
          </p>
          <p className="text-center p-0 text-DarkText font-medium text-[10px]">
            Conditions d’utilisation
          </p>
        </div>

        </div>
        
        <div className="flex gap-4 justify-center place-items-center w-full">
          <div className="flex gap-3 items-center">
            <img alt="" src="/assets/svg/location.svg" className="w-auto h-5" />

            <p aria-label="Location">
              <a className=" text-[0.5647rem] md:text-[0.5647rem] sm:text-sm text-black font-medium sm:font-normal tracking-wide leading-snug focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-DarkText">
                UM6P - Rabat Campus
              </a>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
