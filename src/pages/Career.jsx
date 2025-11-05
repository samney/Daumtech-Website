import HeaderCareer from "../Layouts/Sections/HeaderCareer";
import HomeCareer from "../Layouts/Sections/HomeCreer";
import Footer from "../components/Footer";

export default function Career() {
  return (
    <div className="min-w-full min-h-screen bg-white">
      <HeaderCareer />
      <HomeCareer />
      <Footer />
    </div>
  );
}
