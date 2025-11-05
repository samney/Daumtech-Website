import React, { useState, useEffect, useRef } from "react";
import ButtonIcon from "./../buttons/ButtonIcon";
// import AbonnezForms from "../Forms/AbonnezForms"; // Default modal content
import Modal from "../Modal/DemoModal";
import { motion, AnimatePresence } from "framer-motion";

const ModalButton = ({ isFixed = false }) => {
  const [isVisible, setIsVisible] = useState(false); // State for modal visibility
  const modalRef = useRef(null); // Reference for the modal container

  const handleButtonClick = () => {
    setIsVisible(true); // Show modal on button click
  };

  const closeModal = () => {
    setIsVisible(false); // Hide modal
  };

  // Close modal if click is outside of modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    // Add event listener if modal is visible
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    }

    // Cleanup event listener on unmount or modal visibility change
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isVisible]);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div>
      <div
        className={`${isFixed ? "fixed bottom-0 left-0 mb-10 ml-10 z-[9998]" : ""}`}
      >
        <ButtonIcon
          text="Abonnez-vous"
          color="bg-color1"
          imageSrc="./assets/newimport/icons/iconMailWhite.svg"
          hoverIconSrc="./assets/newimport/icons/iconMailRed.svg" // New hover icon
          textColor="text-white p-0 m-0"
          borderColor="bg-color1"
          hoverBg="hover:bg-white hover:text-color1"
          iconPosition="top"
          iconSize="h-22 w-auto ml-1 mb-0"
          size="sm"
          gap="gap-0"
          variation="text+icon"
          padding="px-0 py-8"
          borderRadius="rounded-xl"
          onClick={handleButtonClick} // Trigger modal on button click
        />
      </div>

      {/* Modal Code */}
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="modal-overlay flex fixed inset-0 z-[10000] justify-center items-center bg-opacity-50 bg-Accent/10 backdrop-blur-xs"
            onClick={closeModal}
          >
            <motion.div
              ref={modalRef}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="modal-content relative p-0 mx-4 w-full max-w-5xl bg-white rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Modal closeModal={closeModal} />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModalButton;
