import React, { useState, useEffect } from "react";
import { ArrowRightIcon as ArrowRightOutline } from "@heroicons/react/24/outline";
import ButtonIcon from "./../buttons/ButtonIcon";
import CustomDropdown from "../CustomDropdown";
import { Link } from "react-router-dom"; // 🔥 Import Link from react-router-dom
import mockArticles from "./mockArticles";

const CardBlog = ({ type }) => {
  const [filter, setFilter] = useState("All");
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const uniqueCategories = Array.from(
    new Map(
      mockArticles.map((article) => [
        article.category,
        {
          label: article.category,
          icon: article.icon,
        },
      ])
    ).values()
  );

  // Add "All" as the first option in the dropdown
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
    const selected =
      typeof selectedCategory === "string"
        ? selectedCategory
        : selectedCategory?.label;

    if (selected) setFilter(selected);
  };

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (type === "rowCard") {
    return (
      <div className="flex flex-col gap-0">
        <div className="flex flex-col items-center justify-between mb-4 bg-white sm:flex-row">
          <h2 className="relative mb-0 text-2xl font-bold tracking-tight sm:text-4xl text-neutral-900">
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
              <img
                src={article.image}
                alt="article"
                className="h-auto w-auto bg-[#ee542d]/20 p-0 border-1 border-[#ee542d27] rounded-2xl transform transition-all duration-500 ease-in-out hover:scale-[1.03]"
              />
              <Link
                to={`/blog/${article.slug}`}
              >
                <h3 className="text-start w-full mb-2 mx-2 my-4 sm:text-md text-sm font-display transition-all duration-300 ease-in-out hover:text-[#A39262]">
                  {article.title}
                </h3>
              </Link>
              <div className="flex items-center justify-start w-full gap-0 p-0 m-0 sm:flex-row">
                <ButtonIcon
                  href="#"
                  text={article.category}
                  size="md"
                  color={article.color}
                  textColor={article.textColor}
                  imageSrc={article.icon}
                  borderColor={article.borderColor}
                  hoverBg={article.hoverBg}
                />
                <a
                  href="#"
                  className="flex text-center p-1 m-3 text-xs text-gray-500 justify-center items-center transition-all duration-300 ease-in-out hover:text-[#A39262]"
                >
                  <span>{article.date}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-row justify-end gap-2 mt-4 place-items-end">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-xs text-white rounded-md sm:text-sm md:text-md border-1 border-bg-color1 bg-color1"
          >
            précédente
          </button>
          <span className="p-2">{currentPage}</span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage * articlesPerPage >= filteredArticles.length}
            className="px-4 py-2 text-xs text-white rounded-md sm:text-sm border-1 border-bg-color1 bg-color1"
          >
            suivante
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col w-full gap-5 p-0 lg:flex-row md:px-4 sm:px-2">
        {/* Featured Card */}
        <div className="bg-white flex flex-col justify-center items-center mb-4 w-full max-h-full px-6 py-4 bg-primary-100 rounded-2xl border-1 border-[#ee542d]/20">
          <img
            src="/assets/newimport/home/BlogImage.png"
            alt="featured"
            className="h-auto w-auto bg-[#ee542d]/20 border-1 border-[#ee542d27] rounded-2xl hover:scale-[1.03] transition-all duration-500 ease-in-out"
          />
          <h3 className="text-start w-full mb-2 mx-2 my-4 text-sm sm:text-md md:text-md lg:text-lg font-display hover:text-[#A39262] transition-all duration-300 ease-in-out">
            Pour une fertilisation efficiente et raisonnée du blé : Cas du N, P
            et K
          </h3>
          <div className="flex items-center justify-start w-full gap-0 sm:flex-row">
            <ButtonIcon
              href="#"
              text="Resources"
              size="md"
              color="bg-color1/20"
              textColor="text-color1"
              imageSrc="/assets/newimport/home/iconResource.svg"
              borderColor="border-color1/30"
              hoverBg="hover:bg-color1/10"
            />
            <a
              href="#"
              className="text-xs text-gray-500 m-3 transition-all duration-300 ease-in-out hover:text-[#A39262]"
            >
              Dec 4, 2024
            </a>
          </div>
        </div>

        {/* Side Cards */}
        <div className="flex flex-col w-full gap-4">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-white flex flex-col justify-center items-center p-4 bg-primary-100 rounded-2xl border-1 border-[#ee542d]/10 w-full hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-row items-center justify-between w-full">
                <h3 className="text-sm sm:text-md lg:text-lg font-display hover:text-[#A39262]">
                  Une raréfaction d'eau à l'horizon – L'agriculture y contribue
                  et en écope
                </h3>
                <div className="inline-block px-2 py-1 rounded-xl bg-gradient-to-br from-[#F8F8F8] to-[#E5E5E5] hover:from-[#FFEFD2] hover:to-[#C8B289] transform hover:scale-110 hover:rotate-3 transition-all">
                  <ArrowRightOutline className="w-4 h-6 text-gray-600 hover:text-[#A39262]" />
                </div>
              </div>
              <div className="flex items-center justify-start w-full gap-0 sm:flex-row">
                <ButtonIcon
                  href="#"
                  text="Articles"
                  size="md"
                  color="bg-color2/20"
                  textColor="text-color2"
                  imageSrc="/assets/newimport/home/iconArticles.svg"
                  borderColor="border-color2/30"
                  hoverBg="hover:bg-color2/10"
                />
                <a
                  href="#"
                  className="text-xs text-gray-500 m-3 transition-all duration-300 ease-in-out hover:text-[#A39262]"
                >
                  Dec 4, 2024
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default CardBlog;
