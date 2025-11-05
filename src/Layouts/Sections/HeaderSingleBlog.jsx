import TopNav from "../../components/TopNav";
import MainNav from "../../components/MainNav";
import "@fontsource/darker-grotesque";

export default function HeaderSingleBlog() {
  return (
    <div className="display-flex justify-center rounded-xl min-w-full p-0.5">
      <div className="object-cover bg-cover bg-center bg-[url('/assets/newimport/bg/bgBlog.png')] shadow-[0_0_0_2px_rgba(255,255,255,0.5)] rounded-xl">
        <div className="container-wrapper">
          <TopNav />
          <MainNav />
          <div className="relative inset-x-0 top-0 pl-0 pr-0 max-sm:m-0 max-sm:p-0 lg:px-4">
            <div className="flex items-center justify-between p-2 m-2 2xl:px-4 xl:px-10 lg:px-4 md:px-2 sm:px-4 border-b-1 border-Flight/20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
