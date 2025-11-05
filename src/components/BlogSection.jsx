import React from "react";
import CardBlog from "./Blog/CardBlog";
import ButtonIcon from "../components/buttons/ButtonIcon";

const BlogSection = () => {
  return (
    <div>
      <div className="px-0 py-0 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="flex flex-col gap-4 justify-between items-center p-0 py-0 mb-0 sm:flex-row">
          <h2 className="relative mb-0 text-2xl font-bold tracking-tight sm:text-4xl text-neutral-900">
            <span className="relative z-10">Actualités & Articles</span>
          </h2>
          <ButtonIcon
            href="/blog"
            text="Voir tous les articles"
            color="bg-[#FFEFD2]"
            hoverBg="hover:bg-Accent"
            textColor="text-DarkText hover:text-DarkText"
            borderColor="border-Accent"
            size="md"
            variation="text"
            padding="p-4 px-4"
            isLink={true}
          />
        </div>

        <CardBlog type="rowCard" cards={true} />
      </div>
    </div>
  );
};

export default BlogSection;
