import Image from "next/image";
import React from "react";
import CustomButton from "../../common/CustomButton";

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
            <CustomButton title={buttonText} />
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
