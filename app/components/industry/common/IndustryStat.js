import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const IndustryStat = ({ data }) => {
  return (
    <div className="px-4 lg:px-28 py-10">
      <section className="text-gray-600 body-font bg-sky-50 rounded-lg px-6 lg:px-10 py-10">
        <div className="mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            {data.points.map((sta, i) => (
              <div
                key={i}
                className="p-4 sm:w-1/2 lg:w-1/4 w-full divide-y-2 divide-gray-800"
              >
                <h2 className="title-font font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-2">
                  {sta.heading}
                </h2>
                <p className="leading-relaxed text-lg sm:text-xl mt-2 text-gray-700">
                  {sta.subHeading}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button
              type="button"
              className="text-gray-900 flex items-center gap-3 sm:gap-5 border border-gray-800 focus:outline-none hover:bg-sky-500 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-base sm:text-lg px-4 py-2 sm:px-5 sm:py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              {data.buttonText} <IoIosArrowForward />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryStat;
