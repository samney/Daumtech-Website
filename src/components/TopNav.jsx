import React, { useState } from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import SocialMediaIcons from "./SocialMediaIcons";

export default function TopNav() {
  const [language, setLanguage] = useState("FR");

  return (
    <div className="flex flex-row justify-between items-center z-1000">
      {/* Hide top mail + location */}
      
      {/* <div className="flex gap-4 justify-between place-items-center">
        <div className="flex gap-3 items-center">
          <img alt="" src="/assets/svg/mailIcon.svg" className="h-4.3 w-auto" />
          <p aria-label="Email contact">
            <a
              href="mailto:contact@daumtech.ma"
              className=" text-[0.5647rem] md:text-[0.5647rem] sm:text-xs text-white font-medium sm:font-normal tracking-wide leading-snug hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-DarkText"
            >
              contact@DAUMTech.ma
            </a>
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <img alt="" src="/assets/svg/location.svg" className="w-auto h-5" />

          <p aria-label="Location">
            <a className=" text-[0.5647rem] md:text-[0.5647rem] sm:text-sm text-white font-medium sm:font-normal tracking-wide leading-snug focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-DarkText">
              UM6P - Rabat Campus
            </a>
          </p>
        </div>
      </div> */}

      {/* Latter */}
      <div className="hidden gap-8 lg:flex lg:flex-1 lg:justify-end">
        <SocialMediaIcons color="text-white" />
        <Menu as="div" className="inline-block relative py-2 text-left">
            <MenuButton className="inline-flex w-full justify-center gap-x-1. rounded-md  bg-Accent/25 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-Accent/55 ring-inset hover:bg-gray-50">
              <a className="-m-1.5 p-1.5 flex items-center justify-between gap-3 text-Background hover:text-black">
                {/* <img
                  alt=""
                  src="/assets/svg/frFlag.svg"
                  className="w-5 h-5"
                /> */}
                Français
              </a>
              <ChevronDownIcon
                aria-hidden="true"
                className="mx-2 -mr-1 text-white size-4 hover:text-black"
              />
            </MenuButton>

          <MenuItems
            transition
            className="absolute right-0 z-10 py-2 mt-2 w-36 bg-white rounded-md ring-1 shadow-lg transition origin-top-right ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
              <MenuItem>
              <a
                  href="#"
                  className="block px-4 py-2 m-0 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  Français
                </a>
                
              </MenuItem>
              <MenuItem>
              <a
                  href="#"
                  className="block px-4 py-2 m-0 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  English
                </a>
                
              </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}
