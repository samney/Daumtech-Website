import React from "react";

export const HeadingSub = () => {
  return (
    <div>
      <h2 className="relative mb-12 text-2xl font-bold tracking-tight sm:text-4xl text-neutral-900">
        <span className="relative z-10">
          Notre service est présent dans de nombreux pays
        </span>
      </h2>

      <p className="mb-4 sm:text-[18px] pb-8 text-center">
        Nous accompagnons les agriculteurs dans de nombreux pays pour les aider
        à produire plus avec moins, tout en adoptant des pratiques durables pour
        une agriculture respectueuse de l'environnement
      </p>
      <img
        src="./assets/newimport/npkindex/worldwideMap.svg"
        alt="Carte de présence mondiale"
        className="object-cover w-full h-auto"
      />
    </div>
  );
};

export default HeadingSub;
