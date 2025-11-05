import React, { useState, useEffect, useRef } from "react";
import ButtonIcon from "./ButtonIcon";
import CustomModalContent from "../Modal/CustomModalContent";

const FixedBottomButton = ({
  isFixed = true,
  ModalContent,
  buttonStyles = {
    text: `Abonnez vous`,
    color: "bg-color1",
    imageSrc: "/assets/newimport/icons/iconMailWhite.svg",
    hoverIconSrc: "/assets/newimport/icons/iconMailRed.svg",
    textColor: "text-white p-0 m-0",
    borderColor: "bg-color1",
    hoverBorderColor: "bg-color1/10",
    hoverBg: "hover:bg-white hover:text-color1",
    iconPosition: "top",
    iconSize: "h-10 w-auto ml-1 mb-0 p-0 mt-0",
    size: "xs",
    gap: "gap-0",
    variation: "text+icon",
    padding: "px-0 py-8",
    borderRadius: "rounded-xl",
  },
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef(null);

  const handleButtonClick = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  return (
    <div>
      <div className={`${isFixed ? "fixed bottom-0 left-0 m-10 z-[9998]" : ""}`}>
        <ButtonIcon
          {...buttonStyles}
          text={buttonStyles.text}
          onClick={handleButtonClick}
          textColor={buttonStyles.textColor}
          textSize={buttonStyles.textSize}
          borderColor={buttonStyles.borderRadius}
          padding={buttonStyles.padding}
          variation={buttonStyles.variation}
          gap={buttonStyles.gap}
          size={buttonStyles.size}
          iconSize={buttonStyles.iconSize}
          iconPosition={buttonStyles.iconPosition}
          iconColor={buttonStyles.iconColor}
          hoverIconColor={buttonStyles.hoverIconColor}
          hoverBg={buttonStyles.hoverBg}
          hoverIconSrc={buttonStyles.hoverIconSrc}
          hoverBorderColor={buttonStyles.hoverBorderColor}
          rightIconSrc={buttonStyles.rightIconSrc}
        />
      </div>

      <div
        id="popup-modal"
        tabIndex="-1"
        className={`modal-overlay fixed inset-0 flex items-center justify-center px-4 overflow-auto bg-opacity-50 bg-Accent/10 backdrop-blur-xs z-[10000] transition-opacity duration-300 ease-in-out ${
          isVisible ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          ref={modalRef}
          className={`modal-content relative w-full max-w-5xl max-h-full p-0 transition-all duration-300 ease-in-out transform ${
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <CustomModalContent
            ModalContent={ModalContent}
            closeModal={closeModal}
          />
        </div>
      </div>
    </div>
  );
};

export default FixedBottomButton;
