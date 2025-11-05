import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase";
import ModalFormsSubmit from "../Modal/ModalFormsSubmit";
import ButtonNasted from "../buttons/ButtonNasted";

const Career = ({ formType }) => {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [poste, setPoste] = useState("");
  const [motivation, setMotivation] = useState(null);
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateForm = () => {
    if (!nom || !email) {
      return "Nom et email sont requis!";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Veuillez entrer un email valide!";
    }

    const phoneRegex = /^[0-9\s\-()+]+$/;
    if (phone && !phoneRegex.test(phone)) {
      return "Veuillez entrer un numéro de téléphone valide!";
    }

    return null;
  };

  const uploadFile = async (file, pathPrefix) => {
    if (!file) return null;
    try {
      const fileRef = ref(storage, `${pathPrefix}/${Date.now()}_${file.name}`);

      // Add metadata to help with CORS
      const metadata = {
        contentType: file.type,
        customMetadata: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers":
            "Content-Type, Authorization, X-Requested-With",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Max-Age": "3600",
        },
      };

      // Upload with metadata
      await uploadBytes(fileRef, file, metadata);
      return await getDownloadURL(fileRef);
    } catch (error) {
      console.error("Error uploading file:", error);
      if (error.code === "storage/unauthorized") {
        throw new Error(
          "Erreur d'autorisation. Veuillez vérifier les règles CORS."
        );
      } else if (error.code === "storage/canceled") {
        throw new Error("Téléchargement annulé.");
      } else if (error.code === "storage/unknown") {
        throw new Error(
          "Erreur inconnue lors du téléchargement. Veuillez réessayer."
        );
      }
      throw new Error(
        "Erreur lors du téléchargement du fichier: " + error.message
      );
    }
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
      const [motivationUrl, resumeUrl] = await Promise.all([
        uploadFile(motivation, "motivations"),
        uploadFile(resume, "resumes"),
      ]);

      await addDoc(collection(db, "careerSubmissions"), {
        prenom,
        nom,
        email,
        formType,
        phone,
        poste,
        motivation: motivationUrl,
        resume: resumeUrl,
        message,
        timestamp: serverTimestamp(),
      });

      // Reset form
      setPrenom("");
      setNom("");
      setEmail("");
      setPhone("");
      setPoste("");
      setMotivation(null);
      setResume(null);
      setMessage("");
      setIsModalOpen(true);
    } catch (error) {
      setError("Erreur lors de la soumission du formulaire: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#EBDAB9] w-full p-4 py-8 lg:py-14 border-1 border-Accent rounded-2xl">
      <form onSubmit={handleSubmit} className="space-y-12 lg:space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="prenom"
              className="block mb-2 text-xs/3 font-medium text-[#634C12]"
            >
              Prénom
            </label>
            <input
              type="text"
              id="prenom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              className="bg-[#FEFAF4] border border-[#EBDAB9] text-[#634C12] placeholder-[#634C12]/50 text-[0.654rem] sm:text-xs/3 rounded-2xl focus:ring-border-DarkText focus:border-DarkText block w-full p-3.5"
              placeholder="Votre prénom"
            />
          </div>
          <div>
            <label
              htmlFor="nom"
              className="block mb-2 text-xs/3 font-medium text-[#634C12]"
            >
              Nom*
            </label>
            <input
              type="text"
              id="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="bg-[#FEFAF4] border border-[#EBDAB9] text-[#634C12] placeholder-[#634C12]/50 text-[0.654rem] sm:text-xs/3 rounded-2xl focus:ring-border-DarkText focus:border-DarkText block w-full p-3.5"
              placeholder="Votre nom"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
              className="bg-[#FEFAF4] border border-[#EBDAB9] text-[#634C12] placeholder-[#634C12]/50 text-[0.654rem] sm:text-xs/3 rounded-2xl focus:ring-border-DarkText focus:border-DarkText block w-full p-3.5"
              placeholder="info@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="poste"
              className="block mb-2 text-xs/3 font-medium text-[#634C12]"
            >
              Titre du poste
            </label>
            <input
              type="text"
              id="poste"
              value={poste}
              onChange={(e) => setPoste(e.target.value)}
              className="bg-[#FEFAF4] border border-[#EBDAB9] text-[#634C12] placeholder-[#634C12]/50 text-[0.654rem] sm:text-xs/3 rounded-2xl focus:ring-border-DarkText focus:border-DarkText block w-full p-3.5"
              placeholder="Responsable marketing (ex)"
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
              className="bg-[#FEFAF4] border border-[#EBDAB9] text-[#634C12] placeholder-[#634C12]/50 text-[0.654rem] sm:text-xs/3 rounded-2xl focus:ring-border-DarkText focus:border-DarkText block w-full p-3.5"
              placeholder="06 12 34 56 78"
            />
          </div>
          <div>
            <label
              htmlFor="motivation"
              className="block mb-2 text-xs/3 font-medium text-[#634C12]"
            >
              Lettre de motivation
            </label>
            <input
              type="file"
              id="motivation"
              onChange={(e) => setMotivation(e.target.files[0])}
              className="bg-[#FEFAF4] border border-[#EBDAB9] text-xs/3 text-[#634C12] file:mr-2 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs/3 file:bg-Accent file:text-white hover:file:bg-DarkText block w-full p-1.5 rounded-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="resume"
              className="block mb-2 text-xs/3 font-medium text-[#634C12]"
            >
              CV
            </label>
            <input
              type="file"
              id="resume"
              onChange={(e) => setResume(e.target.files[0])}
              className="bg-[#FEFAF4] border border-[#EBDAB9] text-xs/3 text-[#634C12] file:mr-2 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs/3 file:bg-Accent file:text-white hover:file:bg-DarkText block w-full p-1.5 rounded-2xl"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-xs/3 font-medium text-[#634C12]"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-[#FEFAF4] border border-[#EBDAB9] text-[#634C12] placeholder-[#634C12]/50 text-[0.654rem] sm:text-xs/3 rounded-2xl focus:ring-border-DarkText focus:border-DarkText block w-full p-3.5"
              placeholder="Votre message ici..."
            />
          </div>
        </div>

        <div className="flex justify-center">
          <ButtonNasted
            text={loading ? "Envoi en cours..." : "Envoyer"}
            onClick={handleSubmit}
          />
        </div>
      </form>

      {error && (
        <p className="mt-4 text-sm font-medium text-red-500">{error}</p>
      )}

      <ModalFormsSubmit
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Career;
