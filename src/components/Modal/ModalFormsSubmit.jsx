import React, { useEffect } from "react";

const ModalFormsSubmit = ({ isOpen, onClose }) => {
  // Automatically close the modal after 5 seconds
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Close after 5 seconds

      return () => clearTimeout(timer); // Clean up the timer on unmount
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg">
        <h2 className="text-xl font-semibold text-center text-Accent">
          Formulaire soumis avec succès !
        </h2>
        <p className="mt-4 text-center text-Accent">
          Merci pour votre soumission. Nous reviendrons vers vous bientôt.
        </p>
        <div className="flex justify-center mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 text-white bg-color1 rounded-xl"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalFormsSubmit;
