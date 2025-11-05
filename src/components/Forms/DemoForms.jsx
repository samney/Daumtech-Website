import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./../../firebase";
import ButtonNasted from "../buttons/ButtonNasted";
import ModalFormsSubmit from "../Modal/ModalFormsSubmit";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const DemoForms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // For success modal

  const validateForm = () => {
    if (!name || !email) return "Nom et email sont requis!";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Veuillez entrer un email valide!";

    const phoneRegex = /^[0-9\s\-()+]+$/;
    if (phone && !phoneRegex.test(phone)) {
      return "Veuillez entrer un numéro de téléphone valide!";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formError = validateForm();
    if (formError) {
      setError(formError);
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "demoForms"), {
        name,
        email,
        phone,
        organization,
        timestamp: serverTimestamp(),
      });

      setLoading(false);
      setIsModalOpen(true); // Show success modal

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setOrganization("");
    } catch (err) {
      setLoading(false);
      setError("Erreur lors de la soumission du formulaire: " + err.message);
    }
  };

  return (
    <div className="w-full p-0 py-0 lg:py-8">
      <form onSubmit={handleSubmit} className="space-y-12 lg:space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-[#FEFAF4] border border-[#EBDAB9] text-[#634C12] placeholder-[#634C12]/50 text-[0.654rem] sm:text-xs/3 rounded-2xl focus:ring-Accent focus:border-Accent block w-full p-3.5"
            placeholder="Nom et Prénom"
            required
          />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#FEFAF4] border border-[#EBDAB9] text-[#634C12] placeholder-[#634C12]/50 text-[0.654rem] sm:text-xs/3 rounded-2xl focus:ring-Accent focus:border-Accent block w-full p-3.5"
            placeholder="info@gmail.com"
            required
          />
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-[#FEFAF4] border border-[#EBDAB9] text-[#634C12] placeholder-[#634C12]/50 text-[0.654rem] sm:text-xs/3 rounded-2xl focus:ring-Accent focus:border-Accent block w-full p-3.5"
            placeholder="Numéro de téléphone"
          />
          <input
            type="text"
            id="Organisation"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className="bg-[#FEFAF4] border border-[#EBDAB9] text-[#634C12] placeholder-[#634C12]/50 text-[0.654rem] sm:text-xs/3 rounded-2xl focus:ring-Accent focus:border-Accent block w-full p-3.5"
            placeholder="Organisation"
          />
        </div>

        <div className="flex justify-center">
          <ButtonNasted
            icon={ArrowRightIcon}
            buttonColor="#EBDAB9"
            iconColor="#634C12"
            hoverColor="#634C12"
            textColor="text-[#634C12]"
            text={loading ? "Soumission..." : "Envoyer"}
            type="submit"
          />
        </div>
      </form>

      {error && (
        <p className="mt-4 text-sm font-medium text-red-500">{error}</p>
      )}

      <ModalFormsSubmit
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message="Votre demande a été envoyée avec succès."
      />
    </div>
  );
};

export default DemoForms;
