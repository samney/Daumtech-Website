import React, { useState, useEffect, useRef } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./../../firebase"; 
import ButtonNasted from "../buttons/ButtonNasted";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const AbonnezForms = ({ closeModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); 
  const [success, setSuccess] = useState(""); 
  const timerRef = useRef(null);
  const messageTimerRef = useRef(null);

  useEffect(() => {
    if (success) {
      messageTimerRef.current = setTimeout(() => {
        setSuccess("");
      }, 10000);
    }
    return () => {
      if (messageTimerRef.current) {
        clearTimeout(messageTimerRef.current);
        messageTimerRef.current = null;
      }
    };
  }, [success]);

  useEffect(() => {
    if (error) {
      messageTimerRef.current = setTimeout(() => {
        setError("");
      }, 10000);
    }
    return () => {
      if (messageTimerRef.current) {
        clearTimeout(messageTimerRef.current);
        messageTimerRef.current = null;
      }
    };
  }, [error]);

  useEffect(() => {
    if (success && closeModal) {
      timerRef.current = setTimeout(() => {
        closeModal();
      }, 10000);
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [success, closeModal]);

  const validateForm = () => {
    if (!name || !email) {
      return "Nom et email sont requis!"; 
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Veuillez entrer un email valide!";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); 
    setSuccess("");

    const formError = validateForm();
    if (formError) {
      setError(formError);
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "abonnezSubmissions"), {
        name,
        email,
        timestamp: serverTimestamp(), 
      });

      setLoading(false);
      setName("");
      setEmail("");
      setSuccess("Formulaire envoyé avec succès !"); 
    } catch (error) {
      setLoading(false);
      setError("Erreur lors de la soumission du formulaire : " + error.message);
      setSuccess("");
    }
  };

  return (
    <div className="p-2 py-2 w-full lg:py-14">
      <form onSubmit={handleSubmit} className="space-y-12 lg:space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => { setName(e.target.value); setError(""); setSuccess(""); }}
              className="bg-[#FEFAF4] border border-[#EBDAB9] text-[#634C12] placeholder-[#634C12]/50 text-[0.654rem] sm:text-xs/3 rounded-2xl focus:ring-Accent focus:border-Accent block w-full p-3.5"
              placeholder="Nom & Prénom"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); setSuccess(""); }}
              className="bg-[#FEFAF4] border border-[#c5bcaa] text-[#634C12] placeholder-[#634C12]/50 text-[0.654rem] sm:text-xs/3 rounded-2xl focus:ring-Accent focus:border-Accent block w-full p-3.5"
              placeholder="Adresse e-mail"
              required
            />
          </div>
        </div>

        <div className="flex justify-center">
          <ButtonNasted
            icon={ArrowRightIcon}
            buttonColor="#EBDAB9"
            iconColor="#634C12"
            hoverColor="#634C12"
            textColor="text-[#634C12]"
            text={loading ? "Envoyer..." : "Envoyer"}
            onClick={handleSubmit}
          />
        </div>
      </form>

      {error && (
        <div
          className="flex justify-center items-center mt-4"
          role="alert"
          aria-live="assertive"
        >
          <div
            className="flex gap-2 items-center px-6 py-3 text-sm font-medium rounded-2xl shadow-md"
            style={{ background: 'var(--color1)', color: 'var(--color-LightText)' }}
          >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0Z" /></svg>
            {error}
          </div>
        </div>
      )}
      {success && (
        <div
          className="flex justify-center items-center mt-4"
          role="status"
          aria-live="polite"
        >
          <div
            className="flex gap-2 items-center px-6 py-3 text-sm font-medium rounded-2xl shadow-md"
            style={{ background: 'var(--color-Accent)', color: 'var(--color-DarkText)' }}
          >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            {success}
          </div>
        </div>
      )}
    </div>
  );
};

export default AbonnezForms;
