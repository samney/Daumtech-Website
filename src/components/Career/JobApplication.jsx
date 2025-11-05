import ButtonIcon from "./../buttons/ButtonIcon";
import ContactCard from "../Cards/ContactCard";

const JobApplication = ({ jobTitle }) => {
  return (
    <section className="flex flex-col items-center justify-between w-full gap-10 xl:flex-col">
      <div className="flex flex-col items-center justify-center w-full gap-8 p-0 mx-auto xl:pr-18 lg:py-4 xl:items-start">
        <div className="p-0 m-0">
          <div className="flex justify-center w-full gap-0 p-0 my-4 sm:flex-row sm:items-start xl:justify-start">
            <ButtonIcon
              text="Profile"
              color="bg-[#EBDAB9]/70"
              imageSrc="/assets/newimport/career/profileIcon.svg"
              textColor="text-Accent"
              borderColor="border-Accent"
              hoverBg=""
              iconPosition="left"
            />
          </div>
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center lg:text-3xl xl:text-4xl xl:text-start text-DarkText">
            {jobTitle}
          </h2>
          <p className="mb-8 font-medium text-center lg:mb-2 lg:text-center xl:text-start -DarkText sm:text-sm md:text-sm ">
            Vous souhaitez nous rejoindre, Nous vous invitons à soumettre votre
            candidature spontanée.
          </p>
        </div>
        <ContactCard />
      </div>
    </section>
  );
};

export default JobApplication;
