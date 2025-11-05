import TopNav from "../../components/TopNav";
import MainNav from "../../components/MainNav";
import ButtonIcon from "../../components/buttons/ButtonIcon";
import "@fontsource/darker-grotesque";

export default function HeaderNpkIndex() {
  return (
    <div className="display-flex justify-center rounded-xl min-w-full p-0.5">
      <div className="object-cover bg-cover bg-center bg-[url('/assets/newimport/bgHero.png')] shadow-[0_0_0_2px_rgba(255,255,255,0.5)] rounded-xl">
        <div className="container-wrapper">
          <TopNav />
          <MainNav />
          <div className="relative inset-x-0 top-0 pl-0 pr-0 max-sm:m-0 max-sm:p-0 lg:px-4">
            <div className="flex items-center justify-between p-2 m-2 2xl:px-4 xl:px-10 lg:px-4 md:px-2 sm:px-4 border-b-1 border-Flight/20">
              <section className="w-[100%] flex flex-col justify-content place-item-center gap-0 p-0 m-0">
                <div className="grid px-0 py-0 mx-0 max-w-screen-2xl lg:gap-8 xl:gap-0 lg:py-0 lg:grid-cols-0">
                  {/* Hero content */}
                  <div className="w-full m-0 place-self-center lg:col-span-8">
                    <h1 className="mt-8 mb-4 text-3xl font-bold leading-tight tracking-tight text-center text-white md:font-semibold md:text-5xl lg:text-6xl">
                      NPK-Index
                    </h1>
                  </div>
                </div>
                {/* buttons */}
                <div className="flex flex-row justify-center gap-4 pb-10 place-items-center max-sm-p-0 max-sm:flex max-sm:flex-row max-sm:justify-center max-lg:mt-6">
                  <ButtonIcon
                    href="#"
                    text="Service"
                    color="bg-Accent"
                    textColor="text-DarkText"
                    borderColor="border-color3/50"
                    size="md"
                    padding="px-4"
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
