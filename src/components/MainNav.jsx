import { useState, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ButtonIcon from "./buttons/ButtonIcon";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/#apropos" },
  { name: "services", href: "/#services" },
  { name: "Carrières  ", href: "/career" },
  { name: "Contact  ", href: "/contact" },
  { name: "Blog ", href: "/blog" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Clear any pending timeout
      clearTimeout(timeoutId);

      // Add small debounce to prevent rapid state changes
      timeoutId = setTimeout(() => {
        if (scrollPosition > 80) {
          setIsScrolled(true);
        } else if (scrollPosition < 20) {
          setIsScrolled(false);
        }
        // Do nothing in the 20-80px range to create hysteresis
      }, 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {/* Spacer div to prevent layout shift when navbar becomes fixed */}
      {isScrolled && (
        <div className="h-24 max-sm:h-16 max-md:h-20 max-lg:h-22" />
      )}

      <div
        className={`${isScrolled ? "flex fixed top-0 right-0 left-0 justify-center z-[9999]" : ""}`}
      >
        <nav
          className={`${
            isScrolled
              ? "w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] bg-color1"
              : "w-full backdrop-blur-sm bg-DarkText/2"
          } flex items-center justify-between p-8 py-0 m-4 rounded-2xl h-24 max-sm:h-16 max-md:h-20 max-lg:h-22 max-sm:m-2 max-md:m-2 max-lg:m-2 max-sm:p-2 max-md:p-2 max-lg:p-8 transition-all duration-500 ease-in-out`}
        >
          <div>
            <a href="/" className="p-0 -m-0">
              <img
                alt=""
                src="/assets/newimport/logo.svg"
                className={`w-auto p-0 my-30 max-sm:h-12 max-md:h-16 max-lg:h-18 transition-all duration-500 ease-in-out ${isScrolled ? "h-15 brightness-0 invert" : "h-20"}`}
              />
            </a>
          </div>
          <div className="lg:hidden sm:hidden md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center p-2.5 rounded-md text-white"
            >
              <Bars3Icon aria-hidden="true" className="size-9" />
            </button>
          </div>
          <div className="flex flex-row justify-center items-center w-full max-sm:hidden gap-8 md:gap-6 lg:gap-8">
            <div className="">
              <a
                href="/"
                className="px-3 font-medium text-lg text-white hover:text-Accent focus:text-DarkText focus:font-bold transition-all duration-300 ease-out hover:scale-105 relative group"
              >
                <span className="relative z-10">Accueil</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-Accent transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/#apropos"
                className="px-3 font-medium text-lg text-white hover:text-Accent focus:text-DarkText focus:font-bold transition-all duration-300 ease-out hover:scale-105 relative group"
              >
                <span className="relative z-10">À propos</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-Accent transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/#services"
                className="px-3 font-medium text-lg text-white hover:text-Accent focus:text-DarkText focus:font-bold transition-all duration-300 ease-out hover:scale-105 relative group"
              >
                <span className="relative z-10">Services</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-Accent transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/career"
                className="px-3 font-medium text-lg text-white hover:text-Accent focus:text-DarkText focus:font-bold transition-all duration-300 ease-out hover:scale-105 relative group"
              >
                <span className="relative z-10">Carrières</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-Accent transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/blog"
                className="px-3 font-medium text-lg text-white hover:text-Accent focus:text-DarkText focus:font-bold transition-all duration-300 ease-out hover:scale-105 relative group"
              >
                <span className="relative z-10">Blog</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-Accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
          <div className="px-0 py-0 max-sm:hidden lg:flex lg:flex-1 lg:justify-end">
            <ButtonIcon
              href="/#contact"
              text="Contact"
              color="bg-Accent"
              textColor="text-white"
              borderColor="border-color3/50"
              hoverBg="hover:bg-DarkText"
              size="xl"
              padding="px-6"
              isLink={true}
            />
          </div>
        </nav>
      </div>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-[9999] w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex flex-row justify-between place-items-center p-0 m-0">
            <a href="/" className="m-1.5 p-1.5">
              <img
                alt=""
                src="/assets/newimport/logo.svg"
                className="w-auto h-16"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="flow-root mt-0">
            <div className="flex flex-col gap-0 justify-between place-items-center my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 mx-3 text-xl font-semibold text-center text-gray-900 rounded-lg hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 -mx-3 text-xl font-semibold text-center text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center place-items-center p-2 w-full rounded-2xl border bg-Accent/50 borde-1 border-Accent">
            <div className="flex justify-between place-items-center p-0 m-0 w-full">
              <Menu as="div" className="w-[50%] mx-2">
                <div>
                  <MenuButton className="inline-flex w-full justify-center gap-x-1. rounded-md  bg-Accent/25 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-Accent/55 ring-inset hover:bg-gray-50">
                    <a className="-m-1.5 p-1.5 flex items-center justify-between gap-3 text-Background">
                      <img
                        alt=""
                        src="/assets/svg/frFlag.svg"
                        className="h-4 w-auto h=10"
                      />
                    </a>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 text-white size-5"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-[10002] mt-2 transition origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black/5 focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                      >
                        French
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </div>
            <div className="flex justify-between place-items-center p-1 px-4 m-0 w-1/2 rounded-2xl bg-Accent border-1 border-DarkText/3">
              <a className="flex justify-center items-center p-0 m-0 text-white transition-colors hover:text-Accent">
                <img
                  alt="LinkedIn"
                  src="/assets/svg/LinIcon.svg"
                  className="w-auto h-4 transition-transform hover:scale-110"
                />
              </a>
              <a className="flex justify-center items-center p-0 m-0 text-white transition-colors hover:text-Accent">
                <img
                  alt="Facebook"
                  src="/assets/svg/facebookIcon.svg"
                  className="w-auto h-5 transition-transform hover:scale-110"
                />
              </a>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
