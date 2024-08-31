import React from "react";
import Carousalclutch from "../../../clutch/clutch-comp/Carousalclutch";

const TrustedCompany = ({ textColor }) => {
  return (
    <>
      <div className="px-4 sm:px-10 lg:px-20 py-10">
        <div className="inline-flex items-center justify-center w-full mb-5 relative">
          <span
            className={`px-3 font-medium text-base sm:text-lg lg:text-xl text-${textColor} dark:text-white dark:bg-gray-900`}
          >
            Trusted by conglomerates, enterprises, and startups alike
          </span>
        </div>

        <Carousalclutch />
      </div>
    </>
  );
};

export default TrustedCompany;
