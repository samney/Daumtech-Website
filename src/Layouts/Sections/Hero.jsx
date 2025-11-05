import TopNav from "../../components/TopNav";
import MainNav from "../../components/MainNav";
import HeroContent from "../../components/HeroContent";

export default function Hero() {
  return (
    <div className="display-flex justify-center rounded-xl min-w-full p-0.5">
      <div className="object-cover bg-cover bg-center bg-[url('/assets/newimport/bgHero.png')] shadow-[0_0_0_2px_rgba(255,255,255,0.5)] rounded-xl">
        <div className="container-wrapper">
          <TopNav />
          <MainNav />
          <HeroContent />
        </div>
      </div>
    </div>
  );
}
