import React, { useState, useEffect } from "react";
import { ArrowRightIcon as ArrowRightOutline } from "@heroicons/react/24/outline";
import ButtonIcon from "./../buttons/ButtonIcon";
import CustomDropdown from "../CustomDropdown";
import { Link } from "react-router-dom";
import mockArticles from "./mockArticles";
import AnimatedSection from "../../components/AnimatedSection";
import LazyImage from "../LazyImage";

const CardBlog = ({ type, cards = false }) => {
  const [filter, setFilter] = useState("All");
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const categoryMap = {};

  mockArticles.forEach((article) => {
    if (!categoryMap[article.category]) {
      categoryMap[article.category] = {
        label: article.category,
        icon: article.icon,
      };
    }
  });

  const uniqueCategories = Object.values(categoryMap);

  const dropdownCategories = [
    { label: "All", icon: "/assets/newimport/icons/all.svg" },
    ...uniqueCategories,
  ];

  useEffect(() => {
    setArticles(mockArticles);
    setFilteredArticles(mockArticles);
  }, []);

  useEffect(() => {
    if (filter === "All") {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(
        articles.filter((article) => article.category === filter)
      );
    }
  }, [filter, articles]);

  const handleFilterChange = (selectedCategory) => {
    if (selectedCategory?.label) {
      setFilter(selectedCategory.label);
    }
  };

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (type === "rowCard" && cards === false) {
    return (
      <AnimatedSection animation="fade">
        <div className="flex flex-col gap-0">
          <div className="flex flex-col justify-between items-center mb-4 bg-white sm:flex-row">
            <h2 className="relative mb-0 text-2xl font-bold tracking-tight sm:text-2xl text-neutral-900">
              <span className="relative z-10">Actualités & Articles</span>
            </h2>
            <CustomDropdown
              categories={dropdownCategories}
              onFilterChange={handleFilterChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {currentArticles.map((article) => (
              <div
                key={article.id}
                className="flex flex-col justify-center items-center mb-4 w-full max-h-full px-6 py-4 bg-primary-100 rounded-2xl border-1 border-[#ee542d]/20 transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg"
              >
                <LazyImage
                  src={article.image}
                  alt="article"
                  className="w-full h-full object-cover bg-[#ee542d]/20 p-0 border-1 border-[#ee542d27] rounded-2xl transform transition-all duration-500 ease-in-out hover:scale-[1.03]"
                />
                <Link to={`/blog/${article.slug}`}>
                  <h3 className="text-center md:text-start w-full mb-2 mx-2 my-4 sm:text-md text-sm font-display transition-all duration-300 ease-in-out hover:text-[#A39262]">
                    {article.title}
                  </h3>
                </Link>
                <div className="flex gap-0 justify-start items-center p-0 m-0 w-full sm:flex-row">
                  <ButtonIcon
                    href="#"
                    text={article.category}
                    size="md"
                    color={article.color}
                    textColor={article.textColor}
                    imageSrc={article.icon}
                    borderColor={article.borderColor}
                    hoverBg={article.hoverBg}
                    isLink={false}
                  />
                  <span className="flex text-center p-1 m-3 text-xs text-gray-500 justify-center items-center transition-all duration-300 ease-in-out hover:text-[#A39262]">
                    {article.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-row gap-2 justify-end place-items-end mt-4">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 text-xs text-white rounded-md sm:text-sm border-1 border-bg-color1 bg-Accent hover:bg-Accent hover:text-DarkText"
            >
              précédente
            </button>
            <span className="p-2">{currentPage}</span>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage * articlesPerPage >= filteredArticles.length
              }
              className="px-4 py-2 text-xs text-white rounded-md sm:text-sm border-1 border-bg-color1 bg-Accent hover:bg-Accent hover:text-DarkText"
            >
              suivante
            </button>
          </div>
        </div>
      </AnimatedSection>
    );
  } else {
    const featuredArticle = articles.find((a) => a.featured) || articles[0];
    const sideArticles = articles
      .filter((a) => a.id !== featuredArticle.id)
      .slice(0, 3);

    return (
      <AnimatedSection animation="fade">
        <div className="flex flex-col gap-8 p-0 w-full lg:flex-row md:px-4 sm:px-2">
          {/* Featured Card */}
          {featuredArticle?.slug ? (
            <Link
              to={`/blog/${featuredArticle.slug}`}
              className="bg-white flex flex-col justify-center items-center mb-4 w-full max-h-full px-6 py-4 bg-primary-100 rounded-2xl border-1 border-[#ee542d]/20 hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
            >
              <LazyImage
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover bg-[#ee542d]/20 border-1 border-[#ee542d27] rounded-2xl hover:scale-[1.03] transition-all duration-500 ease-in-out"
              />
              <h3 className="text-center md:text-start w-full mb-2 mx-2 my-4 text-sm sm:text-md md:text-md lg:text-lg font-display hover:text-[#A39262] transition-all duration-300 ease-in-out">
                {featuredArticle.title}
              </h3>
              <div className="flex gap-0 justify-center items-center w-full md:justify-start sm:flex-row">
                <ButtonIcon
                  href="/blog"
                  text={featuredArticle.category}
                  size="md"
                  color={featuredArticle.color}
                  textColor={featuredArticle.textColor}
                  imageSrc={featuredArticle.icon}
                  borderColor={featuredArticle.borderColor}
                  hoverBg={featuredArticle.hoverBg}
                  isLink={false}
                />
                <span className="m-3 text-xs text-gray-500">
                  {featuredArticle.date}
                </span>
              </div>
            </Link>
          ) : (
            <div className="bg-white flex flex-col justify-center items-center mb-4 w-full max-h-full px-6 py-4 bg-primary-100 rounded-2xl border-1 border-[#ee542d]/20">
              <p>Featured article missing a slug!</p>
            </div>
          )}

          {/* Side Cards */}
          <div className="flex flex-col gap-0 w-full">
            {sideArticles.map((article) =>
              article?.slug ? (
                <Link
                  key={article.id}
                  to={`/blog/${article.slug}`}
                  className="flex flex-col gap-4 justify-center place-items-center p-4 bg-primary-100 rounded-2xl border-1 border-[#ee542d]/10 w-full hover:scale-[1.02] hover:shadow-lg transition-all duration-300 bg-white"
                >
                  <div className="flex flex-row gap-10 justify-between items-end w-full md:items-center">
                    <h3 className="text-sm sm:text-md lg:text-lg font-display hover:text-[#A39262]">
                      {article.title}
                    </h3>
                    <div className="inline-block px-2 py-1 rounded-xl bg-gradient-to-br from-[#F8F8F8] to-[#E5E5E5] hover:from-[#FFEFD2] hover:to-[#C8B289] transform hover:scale-110 hover:rotate-3 transition-all">
                      <ArrowRightOutline className="w-4 h-6 text-gray-600 hover:text-[#A39262]" />
                    </div>
                  </div>
                  <div className="flex gap-0 justify-start items-center pt-2 w-full sm:flex-row">
                    <ButtonIcon
                      href="#"
                      text={article.category}
                      size="md"
                      color={article.color}
                      textColor={article.textColor}
                      imageSrc={article.icon}
                      borderColor={article.borderColor}
                      hoverBg={article.hoverBg}
                      isLink={false}
                    />
                    <span className="m-3 text-xs text-gray-500">
                      {article.date}
                    </span>
                  </div>
                </Link>
              ) : (
                <div
                  key={article.id}
                  className="bg-white flex flex-col justify-center items-center p-4 bg-primary-100 rounded-2xl border-1 border-[#ee542d]/10 w-full"
                >
                  {/* Placeholder or error message */}
                  <p>Article missing a slug!</p>
                </div>
              )
            )}
          </div>
        </div>
      </AnimatedSection>
    );
  }
};

export default CardBlog;
