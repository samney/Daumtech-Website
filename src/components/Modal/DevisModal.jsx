import React from "react";
import DevisForms from "./../../components/Forms/DevisForms";
const DevisModal = ({ closeModal }) => (
  <div className="relative p-0 shadow-sm bg-Background rounded-3xl">
    <button
      type="button"
      className="absolute inline-flex items-center justify-center w-8 h-8 text-sm text-white bg-transparent rounded-lg top-3 right-3 hover:bg-Accent hover:text-DarkText"
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
    <div className="flex flex-col justify-center w-full m-0 text-center sm:px-0 sm:flex-row md:p-0 place-items-center">
      <div className="sm:hidden border  sm:w-[40%] flex place-items-center justify-center flex-row">
        <div className="flex items-center justify-center w-auto h-auto overflow-hidden rounded-3xl ">
          <img
            src="./assets/newimport/bg/bgdemo.png"
            alt=""
            className="hidden object-cover w-full h-auto "
          />
        </div>
      </div>
      <div className="sm:w-[60%] flex flex-col gap-0 place-items-center sm:place-items-start justify-center p-4 sm:p-18">
        <h1 className="mb-2 text-2xl font-medium text-center text-Slight sm:text-start sm:text-2xl sm:mb-0 lg:text-4xl">
          Demander un devis
        </h1>
        <h3 className="mb-2 text-sm font-normal text-center sm:text-start text-Slight/60 sm:text-md sm:mb-0 lg:text-md">
          Veuillez remplir le formulaire fourni et notre équipe vous contactera
          dans les plus brefs delais.
        </h3>
        <DevisForms />
      </div>
      <div className="hidden w-[40%] sm:flex place-items-center justify-center flex-row">
        <div className="flex items-center justify-center w-auto h-auto overflow-hidden rounded-3xl ">
          <img
            src="./assets/newimport/bg/bgdemo.png"
            alt=""
            className="object-cover w-full h-full "
          />
        </div>
      </div>
    </div>
  </div>
);

export default DevisModal;
