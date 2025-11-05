import React from "react";
import AbonnezForms from "./../../components/Forms/AbonnezForms";

const CustomModalContent = ({ ModalContent, closeModal }) => {
  if (ModalContent) {
    return <ModalContent closeModal={closeModal} />;
  } else {
    return (
      <div className="relative p-4 rounded-3xl border-2 shadow-sm border-color1 bg-color1">
        <button
          type="button"
          className="inline-flex absolute top-3 right-3 justify-center items-center w-8 h-8 text-sm text-white bg-transparent rounded-lg hover:bg-Accent hover:text-DarkText"
          onClick={closeModal}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>

        <div className="flex flex-col justify-center place-items-center p-0 m-0 w-full text-center sm:flex-row md:p-5">
          <div className="sm:hidden sm:w-[40%] flex place-items-center justify-center flex-row">
            <img
              src="./assets/newimport/icons/IcomModalEmail.svg"
              alt="Icon"
              className="w-auto h-52 sm:h-32"
            />
          </div>

          <div className="sm:w-[60%] flex flex-col gap-0 place-items-center justify-center">
            <h1 className="mb-4 text-2xl font-medium text-white sm:text-2xl sm:mb-6 lg:text-4xl">
              Abonnez-vous pour recevoir nos actualités mensuelles
            </h1>

            <AbonnezForms closeModal={closeModal} />
          </div>

          <div className="hidden w-[40%] sm:flex place-items-center justify-center flex-row">
            <img src="./assets/newimport/icons/IcomModalEmail.svg" alt="Icon" />
          </div>
        </div>
      </div>
    );
  }
};

export default CustomModalContent;
