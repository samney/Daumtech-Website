import React from "react";
import { useParams } from "react-router-dom";
import TopNav from "../../../components/TopNav";
import MainNav from "../../../components/MainNav";
import mockArticles from "../mockArticles";
import ButtonIcon from "../../buttons/ButtonIcon";
import AnimatedSection from "../../AnimatedSection";
import SmartParagraph from "../../../components/SmartParagraph";

const BlogDetail = () => {
  const { slug } = useParams();
  const article = mockArticles.find((article) => article.slug === slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <>
      {/* Header */}
      <div className="display-flex justify-center rounded-xl min-w-full p-0.5">
        <div className="object-cover bg-cover bg-center bg-[url('/assets/newimport/bg/bgBlog.png')] shadow-[0_0_0_2px_rgba(255,255,255,0.5)] rounded-xl">
          <div className="container-wrapper">
            <TopNav />
            <MainNav />
            <div className="relative inset-x-0 top-0 pr-0 pl-0 max-sm:m-0 max-sm:p-0 lg:px-4">
              <div className="flex justify-between items-center p-2 m-2 2xl:px-4 xl:px-10 lg:px-4 md:px-2 sm:px-4 border-b-1 border-Flight/20"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blog Content */}
      <div className="px-4 mx-auto mt-10 max-w-screen-lg post-page">
        <section className="w-[100%] flex flex-col justify-center gap-0 p-0 m-0">
          <div className="grid px-0 py-0 mx-0 max-w-screen-2xl lg:gap-8 xl:gap-0 lg:py-0 lg:grid-cols-0">
            <div className="place-self-center m-0 w-full lg:col-span-8">
            <SmartParagraph as="h1" className="mt-8 mb-4 text-3xl font-bold tracking-tight leading-tight text-center text-black md:font-semibold md:text-5xl lg:text-6xl">
                {article.title}
              </SmartParagraph>
              <div className="flex gap-0 justify-center items-center w-full sm:flex-row">
                <ButtonIcon
                  text="Blog"
                  color="bg-[#EBDAB9]/70"
                  imageSrc="/assets/newimport/home/contactIcon.svg"
                  textColor="text-Accent"
                  borderColor="border-Accent"
                  hoverBg=""
                  iconPosition="left"
                />
              </div>
            </div>
          </div>
        </section>

        <h1 className="mb-4 text-2xl font-bold">{article.title}</h1>
        <p className="text-xs text-gray-500">{article.date}</p>

        {/* Render content based on type */}
        {article.content.map((section, index) => {
        if (section.type === "text") {
          return (
            <AnimatedSection animation="fade" key={index}>
              
              <SmartParagraph as="p" className="mt-4 text-sm text-gray-800 md:text-lg">
                {section.content}
              </SmartParagraph>
            </AnimatedSection>
          );
        } else if (section.type === "image") {
          return (
            <AnimatedSection animation="fade" key={index}>
              <img
                src={section.content}
                alt="blog-content"
                className="object-cover w-[60%] mt-5 rounded-lg shadow-lg place-self-center"
              />
            </AnimatedSection>
          );
        } else if (section.type === "link") {
          return (
            <AnimatedSection animation="fade" key={index}>
              <a
                href={section.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-base/2 text-color1"
              >
                {section.text}
              </a>
            </AnimatedSection>
          );
        } else {
          return null;
        }
      })}

      </div>;

    </>
  );
};

export default BlogDetail;
