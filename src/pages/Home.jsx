import Hero from "../Layouts/Sections/Hero";
import HomeBody from "../Layouts/Sections/HomeBody";
import Footer from "../components/Footer";
import ModalButton from "./../components/Modal/ModalButton";
import "../styles/animations.css";

export default function Home() {
  return (
    <div className="min-w-full min-h-screen bg-white ">
      <Hero />
      <HomeBody />
      <Footer />
    </div>
  );
}
