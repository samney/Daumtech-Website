import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import CustomFilterRow from "../CustomFilterRow";
import CustomDropdown from "../CustomDropdown";
import ButtonIcon from "../buttons/ButtonIcon";
import ArrowButton from "../buttons/ArrowButton";
import mockJobs from "../Career/mockjobs";

import IconAll from "../../../public/assets/newimport/icons/all.svg";
import iconBussines from "../../../public/assets/newimport/icons/bussines.svg";
import iconDesign from "../../../public/assets/newimport/icons/design.svg";
import iconDev from "../../../public/assets/newimport/icons/dev.svg";
import iconMarketing from "../../../public/assets/newimport/icons/marketing.svg";
import iconArgonomy from "../../../public/assets/newimport/icons/argonomy.svg";

// Mock data (same as before)
const categories = [
  { label: "Tous", icon: IconAll },
  { label: "Agronomie", icon: iconArgonomy },
  { label: "Affaires", icon: iconBussines },
  { label: "Design", icon: iconDesign },
  { label: "Développement", icon: iconDev },
  { label: "Marketing", icon: iconMarketing },
];

const CardJob = () => {
  const [filter, setFilter] = useState("All");
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  useEffect(() => {
    setJobs(mockJobs);
    setFilteredJobs(mockJobs);
  }, []);

  useEffect(() => {
    if (filter === "All") {
      setFilteredJobs(jobs);
    } else {
      setFilteredJobs(jobs.filter((job) => job.Category === filter));
    }
  }, [filter, jobs]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col gap-6 p-4 w-full rounded-2xl md:p-12 bg-Accent/6 border-1 border-Accent/33">
      {/* Header + Filter */}
      <div className="flex flex-col justify-between items-center mt-4 mb-4 sm:flex-row">
        <h2 className="relative mb-0 text-2xl font-bold tracking-tight sm:text-xl text-neutral-900">
          <span className="relative z-10">Parcourez les postes  à pourvoir</span>
        </h2>
        <div className="hidden xl:block">
          <CustomFilterRow onFilterChange={handleFilterChange} />
        </div>

        <div className="xl:hidden">
          <CustomDropdown
            categories={categories}
            onFilterChange={handleFilterChange}
          />
        </div>
      </div>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        {currentJobs.map((job) => (
          <div
            key={job.id}
            className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm transition-all hover:shadow-md"
          >
            {/* Link to individual job post page */}
            <Link to={`/career/${job.id}`} className="block">
              <h3 className="mb-1 text-lg font-semibold">{job.Title}</h3>
              <p className="text-xs text-gray-600">
                {mockJobs[0].MissionEtResponsabilites[0].Description.content}
              </p>
              {/* md:flex-row */}
              <div className="flex flex-row gap-2 justify-between place-items-center mt-8 sm:flex-col xl:flex-row">
                <div className="flex flex-col gap-4 justify-between place-items-center w-full sm:justify-start sm:justify-between sm:flex-row sm:gap-2">
                  <ButtonIcon
                    text={job.Category}
                    color="bg-Accent"
                    imageSrc="./assets/newimport/icons/bussines.svg"
                    textColor="text-DarkText/80"
                    borderColor="border-Accent"
                    hoverBg=""
                    iconPosition="left"
                    isLink={false} // Make sure it's not rendered as a link inside ButtonIcon
                  />
                  <ButtonIcon
                    text={job.Location}
                    color="bg-Accent/2"
                    imageSrc="./assets/newimport/icons/location.svg"
                    textColor="text-DarkText/80"
                    borderColor="border-Accent/10"
                    hoverBg=""
                    iconPosition="left"
                    isLink={false} // Again, ensure it's not nested as a link
                  />
                </div>
                <div className="justify-between place-items-center w-full flex-1/2">
                  <ArrowButton
                    title="Postulez maintenant"
                    textSize="text-[9px] sm:text-xs"
                    textColor="text-DarkText/50"
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {filteredJobs.length > jobsPerPage && (
        <div className="flex flex-row gap-2 justify-end place-items-end mt-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-xs text-white rounded-md sm:text-sm border-1 border-bg-color1 bg-Accent hover:bg-Accent hover:text-DarkText"
          >
            précédente
          </button>
          <span className="self-center text-sm font-medium">{currentPage}</span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage * jobsPerPage >= filteredJobs.length}
            className="px-4 py-2 text-xs text-white rounded-md sm:text-sm border-1 border-bg-color1 bg-Accent hover:bg-Accent hover:text-DarkText"
          >
            suivante
          </button>
        </div>
      )}
    </div>
  );
};

export default CardJob;
