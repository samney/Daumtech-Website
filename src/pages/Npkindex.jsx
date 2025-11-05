import HeaderNpkIndex from "../Layouts/Sections/HeaderNpkIndex";
import HomeNpkindex from "../Layouts/Sections/NpkindexBody";
import Footer from "../components/Footer";

export default function Npkindex() {
  return (
    <div className="min-w-full min-h-screen bg-white">
      <HeaderNpkIndex />
      <HomeNpkindex />
      <Footer />
    </div>
  );
}
