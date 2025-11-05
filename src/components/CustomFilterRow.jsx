import React, { useState } from "react";

// Mock icons
import IconAll from "../../public/assets/newimport/icons/all.svg";
import iconAgronomy from "../../public/assets/newimport/icons/argonomy.svg";
import iconBussines from "../../public/assets/newimport/icons/bussines.svg";
import iconDesign from "../../public/assets/newimport/icons/design.svg";
import iconDev from "../../public/assets/newimport/icons/dev.svg";
import iconMarketing from "../../public/assets/newimport/icons/marketing.svg";

const filterOptions = [
  { label: "All", icon: IconAll },
  { label: "Agronomie", icon: iconAgronomy },
  { label: "Business", icon: iconBussines },
  { label: "Design", icon: iconDesign },
  { label: "Développement", icon: iconDev },
  { label: "Marketing", icon: iconMarketing },
];

const CustomFilterRow = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleFilterClick = (value) => {
    setSelectedFilter(value);
    if (onFilterChange) {
      onFilterChange(value);
    }
  };

  return (
    <div className="flex gap-1 p-2 mt-2 bg-white rounded-2xl sm:mt-0 border-1 border-Accent/33">
      {filterOptions.map((option) => (
        <button
          key={option.label}
          className={`flex items-center gap-2 px-3 py-2 text-sm ${
            selectedFilter === option.label
              ? "bg-[#EBDAB9] text-DarkText border-Accent border-1 border-Accent rounded-2xl font-semibold"
              : "bg-white text-gray-700 font-medium hover:bg-Accent-100 hover:border-1 hover:border-Accent hover:rounded-2xl"
          }`}
          onClick={() => handleFilterClick(option.label)}
        >
          <img src={option.icon} alt={option.label} className="w-4 h-4" />
          <span>{option.label}</span>
        </button>
      ))}
    </div>
  );
};

export default CustomFilterRow;
