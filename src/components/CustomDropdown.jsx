import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const CustomDropdown = ({ categories = [], onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    onFilterChange(category);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="flex relative gap-3 items-center mt-2 sm:mt-0">
      <div className="w-33 z-100">
        <button
          className="flex flex-row justify-between items-center p-2 w-full text-sm text-gray-700 bg-white rounded-lg border border-color1/40"
          onClick={toggleDropdown}
        >
          <img
            src={selectedCategory?.icon}
            alt="category icon"
            className="w-4 h-4"
          />
          <span>{selectedCategory?.label}</span>
          <FaChevronDown
            className={`text-black/33 font-light w-4 h-4 transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute left-0 top-12 z-50 w-full bg-white rounded-lg shadow-lg border-Accent/14">
            {categories.map((category, index) => (
              <div
                key={`${category.label}-${index}`}
                className="flex gap-2 items-center p-2 text-xs cursor-pointer sm:text-sm md:text-md hover:bg-gray-100"
                onClick={() => handleFilterChange(category)}
              >
                <img
                  src={category.icon}
                  alt={category.label}
                  className="w-4 h-4"
                />
                <span>{category.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;
