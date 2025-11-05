import React from "react";
import "@fontsource/darker-grotesque";
import BlogSection from "../../components/Blog/CardBlog";

const HomeBlog = () => {
  return (
    <section className="sm:px-10 md:px-10 lg:px-33 2xl:px-30">
      <div className="flex flex-col max-w-screen-xl px-3 py-8 mx-auto my-10 gap-23 lg:py-16 lg:px-6">
        <BlogSection type="rowCard" />
      </div>
    </section>
  );
};

export default HomeBlog;

// text-left mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl
