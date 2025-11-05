import HeaderContact from "../Layouts/Sections/HeaderContact";
import HomeContact from "../Layouts/Sections/HomeContact";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-w-full min-h-screen bg-white ">
      <HeaderContact />
      <HomeContact />
      <Footer />
    </div>
  );
}
