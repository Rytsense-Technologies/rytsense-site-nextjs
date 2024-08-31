import Image from "next/image";
import React from "react";

const SponserSection1 = ({title, buttonText, bgImage
}) => {
  return (
    <div className="py-10 lg:px-40">
      <div className="relative flex items-center py-10 bg-gray-800 h-60 sm:h-72 md:h-80 lg:h-96 p-8">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black via-transparent"></div>
        <div className="relative flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto z-10">
          <div className="text-white md:w-3/5">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {title}
            </h2>
            <button className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-xs sm:text-sm md:text-base px-4 sm:px-5 py-2.5 text-center mb-2">
              {buttonText}
            </button>
          </div>
        </div>
        <Image
          src={bgImage}
          alt="Education Background" 
          width={800}
          height={600}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
      </div>
    </div>
  );
};

export default SponserSection1;
