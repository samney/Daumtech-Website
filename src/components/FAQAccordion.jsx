import React, { useState } from "react";
import ArrowButton from "./buttons/ArrowButton";

const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl p-0 mx-auto">
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`w-full p-4 transition-all duration-300 border shadow-sm rounded-xl ${
                isOpen
                  ? "bg-[#FDF4E7] border-[#C89F64] text-[#3B2E13]"
                  : "bg-[#FAF9F7] border-gray-200 text-[#4B4B4B]"
              }`}
            >
              <button
                className="flex items-center justify-between w-full text-xs font-medium text-left sm:text-sm text-DarkText focus:outline-none"
                onClick={() => toggle(index)}
              >
                <span
                  className={`pr-4 transition-all duration-200 ${
                    isOpen
                      ? "text-sm sm:text-base font-semibold"
                      : "text-xs sm:text-sm"
                  }`}
                >
                  {faq.question}
                </span>
                <ArrowButton rotated={isOpen} asToggle active={isOpen} />
              </button>

              {isOpen && (
                <div className="mt-3 text-xs leading-relaxed">{faq.answer}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQAccordion;
