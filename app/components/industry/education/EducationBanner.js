import React from "react";
import { LuArrowUpRightFromCircle } from "react-icons/lu";

const EducationBanner = () => {
  return (
    <>
      <div className="py-28 lg:py-40 flex flex-col items-start gap-5 px-4  sm:px-10 lg:px-20">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
          Education App Development <br /> Services
        </h1>
        <p className="text-xs sm:text-sm lg:text-base">
          A leading education software development company redefining learning
          for 10+ million students and trainers
        </p>
        <button
          type="button"
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-xs sm:text-sm lg:text-base px-4 sm:px-5 py-2.5 text-center flex items-center gap-2 dark:focus:ring-[#4285F4]/55 mb-2"
        >
          Request a Quote
          <LuArrowUpRightFromCircle />
        </button>
      </div>
    </>
  );
};

export default EducationBanner;
