import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./../../firebase";
import ModalFormsSubmit from "../Modal/ModalFormsSubmit"; // Import Modal component
import ButtonNasted from "../buttons/ButtonNasted"; // Import the ButtonNasted component

const Forms = ({ formType }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  // Front-end Validation function
  const validateForm = () => {
    if (!name || !email) {
      return "Name and email are required!";
    }

    // Simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address!";
    }

    // Phone validation (only numbers and optional dashes/spaces)
    const phoneRegex = /^[0-9\s\-()+]+$/;
    if (phone && !phoneRegex.test(phone)) {
      return "Please enter a valid phone number!";
    }

    return null; // No error
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validate form data
    const formError = validateForm();
    if (formError) {
      setError(formError);
      setLoading(false);
      return;
    }

    try {
      // Add form data to Firestore
      await addDoc(collection(db, "contactForms"), {
        name,
        email,
        phone,
        organization,
        formType: formType || "default", // If formType is undefined, use 'default'
        timestamp: serverTimestamp(),
      });

      setLoading(false);
      setIsModalOpen(true); // Open the modal on success
      setName(""); // Reset the form fields
      setEmail("");
      setPhone("");
      setOrganization("");
    } catch (error) {
      setLoading(false);
      setError("Error storing form data: " + error.message);
    }
  };

  return (
    <div className="bg-[#EBDAB9] w-full p-4 py-8 lg:py-14 border-1 border-Accent rounded-2xl">
      <form onSubmit={handleSubmit} className="space-y-12 lg:space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-xs/3 font-medium text-[#634C12]"
            >
              Nom et Prénom
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Nom & Prénom"
              className="bg-[#FEFAF4] border border-[#EBDAB9] text-[#634C12] placeholder-[#634C12]/50 text-[0.654rem] sm:text-xs/3 rounded-2xl focus:ring-border-DarkText focus:border-DarkText block w-full p-3.5"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-xs/3 font-medium text-[#634C12]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Info@Gmail.com"
              className="bg-[#FEFAF4] border border-[#EBDAB9] text-[#634C12] placeholder-[#634C12]/50 text-[0.654rem] sm:text-xs/3 rounded-2xl focus:ring-border-DarkText focus:border-DarkText block w-full p-3.5"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-xs/3 font-medium text-[#634C12]"
            >
              Numéro de téléphone
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+212 123 456 789"
              className="bg-[#FEFAF4] border border-[#EBDAB9] text-[#634C12] placeholder-[#634C12]/50 text-[0.654rem] sm:text-xs/3 rounded-2xl focus:ring-border-DarkText focus:border-DarkText block w-full p-3.5"
            />
          </div>
          <div>
            <label
              htmlFor="organization"
              className="block mb-2 text-xs/3 font-medium text-[#634C12]"
            >
              Organisation
            </label>
            <input
              type="text"
              id="organization"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              placeholder="DAUMTech (ex)"
              className="bg-[#FEFAF4] border border-[#EBDAB9] text-[#634C12] placeholder-[#634C12]/50 text-[0.654rem] sm:text-xs/3 rounded-2xl focus:ring-border-DarkText focus:border-DarkText block w-full p-3.5"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <ButtonNasted
            text={loading ? "Submitting..." : "Envoyer"} // Button text based on loading state
            buttonColor="#C8B289" // Button color
            iconColor="#634C12" // Icon color
            hoverColor="#A39262" // Hover color
            textColor="#A39262" // Text color
          />
        </div>
      </form>

      {error && (
        <p className="mt-4 text-sm font-medium text-red-500">{error}</p>
      )}

      {/* Modal to show success message */}
      <ModalFormsSubmit
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Forms;
