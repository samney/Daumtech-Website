import React from "react";
import { useParams } from "react-router-dom";
import "@fontsource/darker-grotesque";
import TopNav from "../../components/TopNav";
import MainNav from "../../components/MainNav";
import SocialIcons from "../../components/SocialMediaIcons";
import ButtonIcon from "../../components/buttons/ButtonIcon";
import ArrowButton from "../../components/buttons/ArrowButton";
import mockJobs from "../Career/mockjobs";
import NotFoundPage from "../../pages/NotFoundPage";
import CardButton from "../Cards/ContactCard";
import ContactSection from "../../components/ContactSection";
import Forms from "../../components/Forms/CareerForm";
import Contact from "../../components/Cards/Contact3";
import JobApplication from "../../components/Career/JobApplication";

import AnimatedSection from "../AnimatedSection";

// Helper component to render each related job card
const RelatedJobCard = ({ job }) => {
  return (
    <AnimatedSection animation="fade">
      <div className="flex flex-col justify-between p-3 w-full rounded-2xl border border-gray-200 shadow-sm transition-all bg-Accent/13 hover:shadow-md">
        <h3 className="mb-1 text-lg font-semibold">{job.Title}</h3>
        <p className="text-xs text-gray-600 sm:text-sm line-clamp-2 md:line-clamp-2 lg:line-clamp-3">
          {job.MissionPrincipale[0].Description.content}
        </p>
        <div className="flex flex-col gap-4 justify-between place-items-center mt-8 w-full xl:flex-row">
          <div className="flex flex-row gap-4 sm:gap-10 xl:flex-row">
            <ButtonIcon
              text={job.Category}
              color="bg-Accent"
              imageSrc="/assets/newimport/icons/bussines.svg"
              textColor="text-DarkText/80 text-xs"
              borderColor="border-Accent"
              hoverBg=""
              size="sm "
              iconPosition="left"
              isLink={false}
            />
            <ButtonIcon
              text={job.Location}
              color="bg-Accent/2"
              imageSrc="/assets/newimport/icons/location.svg"
              textColor="text-DarkText/80 text-xs"
              borderColor="border-Accent/10"
              hoverBg=""
              iconPosition="left"
              isLink={false}
            />
          </div>
          <div className="mt-0 sm:hidden">
            <ArrowButton
              title="Voir les détails de l'offre"
              textSize="text-xs sm:text-xs"
              textColor="text-DarkText/50"
              href={`/career/${job.id}`}
              isLink={true}
            />
          </div>
          <div className="hidden mt-0 sm:block">
            <ArrowButton
              title="Details"
              textSize="text-xs sm:text-xs"
              textColor="text-DarkText/50"
              href={`/career/${job.id}`}
              isLink={true}
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const PostPage = () => {
  const { id } = useParams(); // Get the job ID from the URL

  // Find the job that matches the `id` from the mock data
  const job = mockJobs.find((job) => job.id === parseInt(id));

  // If no job is found, return "Job not found"
  if (!job) {
    return <NotFoundPage />;
  }

  // Filter the related jobs based on the current job's category
  const relatedJobs = mockJobs.filter(
    (relatedJob) =>
      relatedJob.Category === job.Category && relatedJob.id !== job.id
  );
  const Contact = () => {
    return <JobApplication jobTitle={job.Title} />;
  };
  return (
    <>
      {/* Header */}
      <div className="display-flex justify-center rounded-xl min-w-full p-0.5">
        <div className="object-cover bg-cover bg-center bg-[url('/assets/newimport/bgHero.png')] shadow-[0_0_0_2px_rgba(255,255,255,0.5)] rounded-xl">
          <div className="container-wrapper">
            <TopNav />
            <MainNav />
            <div className="relative inset-x-0 top-0 pr-0 pl-0 max-sm:m-0 max-sm:p-0 lg:px-4">
              <div className="flex justify-between items-center p-2 m-2 2xl:px-4 xl:px-10 lg:px-4 md:px-2 sm:px-4 border-b-1 border-Flight/20">
                <section className="w-[100%] flex flex-col justify-content place-item-center gap-0 p-0 m-0">
                  {/* Title Section */}
                  <div className="grid px-0 py-0 mx-0 max-w-screen-2xl lg:gap-8 xl:gap-0 lg:py-0 lg:grid-cols-0">
                    <div className="place-self-center m-0 w-full lg:col-span-8">
                      <h1 className="mt-8 mb-8 text-3xl font-bold tracking-tight leading-tight text-center text-black text-white md:font-semibold md:text-5xl lg:text-6xl">
                        {job.Title}
                      </h1>
                    </div>
                  </div>
                  {/* Buttons */}
                  <div className="flex gap-0 justify-center items-center p-0 mb-10 w-full sm:flex-row">
                    <ButtonIcon
                      href="#"
                      text={job.Category}
                      size="md"
                      color="bg-color3/20"
                      textColor="text-color3"
                      imageSrc={job.IconCategory}
                      borderColor="border-color3/30"
                      hoverBg="hover:bg-color3/10"
                    />
                    <a
                      href="#"
                      className="flex text-center p-1 m-3 text-xs text-gray-500 justify-center items-center transition-all duration-300 ease-in-out hover:text-[#A39262]"
                    >
                      <span>{job.Date}</span>
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="sm:px-10 md:px-10 lg:px-33 2xl:px-30">
        <div className="px-3 py-0 mx-auto max-w-screen-xl sm:py-8 lg:py-16 lg:px-6">
          {/* Daumtech About Section */}
          <AnimatedSection animation="fade">
            <section className="flex flex-col gap-0 px-3 py-8 mx-auto my-10 max-w-screen-xl lg:py-16 lg:px-6">
              <div className="w-[100%] flex flex-col justify-content place-item-center gap-0 p-0 m-0">
                <h2 className="py-0 mb-4 text-sm tracking-tight text-center text-black font-Normal sm:text-3xl sm:py-0">
                  {job.DaumtechAbout[0]?.title.content}
                </h2>
                <p className="mb-8 sm:text-[18px] text-center">
                  {job.DaumtechAbout[0]?.Description.content}
                </p>

                {/* Render DaumtechAbout Media */}
                {job.DaumtechAbout[0]?.media?.map((mediaItem, index) => {
                  if (mediaItem.type === "image") {
                    return (
                      <img
                        key={index}
                        src={mediaItem.content}
                        alt={mediaItem.altText || "Image"}
                        className="mb-4 w-auto h-auto rounded-3xl"
                      />
                    );
                  }
                  return null;
                })}
              </div>
            </section>
          </AnimatedSection>

          {/* --- Job Sections --- */}
          <AnimatedSection animation="fade">
            <section className="flex flex-col gap-12 justify-between w-full text-start">
              {/* Card: Apply to job */}
              <div className="flex justify-center">
                <CardButton
                  imageSrc="/assets/newimport/career/cardIcons.svg"
                  heading="Postulez pour ce poste"
                  email=""
                  link="#formsCareer"
                />
              </div>
              <div className="flex justify-between w-full">
                {job.MissionPrincipale?.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-bold mb-4 relative tracking-tight py-2 sm:py-4 before:content-[''] before:absolute before:top-0 before:left-0 before:h-[3px] before:bg-[#ee542d] before:w-[14%] before:hidden lg:before:block">
                      {item.title.content}
                    </h3>
                    <p className="text-sm text-gray-700 whitespace-pre-line">
                      {item.Description.content}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col justify-center sm:flex-row sm:gap-4">
                {job.ProfileRequis?.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-bold mb-4 relative tracking-tight py-2 sm:py-4 before:content-[''] before:absolute before:top-0 before:left-0 before:h-[3px] before:bg-[#ee542d] before:w-[18%] before:hidden lg:before:block">
                      {item.title.content}
                    </h3>
                    <ul className="pl-5 space-y-1 text-sm list-disc text-gray-700">
                      {item.Description?.ProfileRequisDetails?.content
                        ?.split("\n")
                        .map((line, i) => {
                          const trimmed = line.trim();
                          return trimmed ? <li key={i}>{trimmed}</li> : null;
                        })}
                    </ul>
                  </div>
                ))}

                {job.MissionEtResponsabilites?.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-bold mb-4 relative tracking-tight py-2 sm:py-4 before:content-[''] before:absolute before:top-0 before:left-0 before:h-[3px] before:bg-[#ee542d] before:w-[7%] before:hidden lg:before:block">
                      {item.title.content}
                    </h3>
                    <p className="text-sm text-gray-700 whitespace-pre-line">
                      {item.Description.content}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </AnimatedSection>

          {/* Related Jobs */}
          {relatedJobs.length > 0 && (
            <AnimatedSection animation="fade">
              <section className="px-3 py-16 mx-auto max-w-screen-xl sm:px-4 lg:px-2">
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-800 md:text-start">
                  Offres Similaires
                </h2>
                <div className="grid grid-cols-1 gap-3 w-full sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                  {relatedJobs.slice(0, 2).map((relatedJob) => (
                    <RelatedJobCard key={relatedJob.id} job={relatedJob} />
                  ))}
                </div>
              </section>
            </AnimatedSection>
          )}
          <AnimatedSection animation="fade">
            <section
              className="flex flex-row gap-3 justify-center place-items-center mt-16 w-full"
              id="formsCareer"
            >
              <ContactSection
                Forms={Forms}
                Contact={Contact}
                direction="right"
              />
            </section>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <div className="px-0 my-0 mt-20 border-gray-200 border-t-1">
        <div className="flex flex-col gap-0 p-2">
          <SocialIcons color="text-DarkText" />
          <div className="py-2">
            <p className="text-center p-0 text-DarkText font-medium text-[10px]">
              © 2025 Daumtech SA. Tous droits réservés.
            </p>
            <p className="text-center p-0 text-DarkText font-medium text-[10px]">
              Conditions d'utilisation
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPage;
