import HeaderCarbonedge from "../Layouts/Sections/HeaderCarbonedge";
import HomeCorbonedge from "../Layouts/Sections/HomeCorbonedge";
import Footer from "../components/Footer";

export default function Carbonedge() {
  return (
    <div className="min-w-full min-h-screen bg-white">
      <HeaderCarbonedge />
      <HomeCorbonedge />
      <Footer />
    </div>
  );
}
