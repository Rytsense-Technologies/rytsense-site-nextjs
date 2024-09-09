import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font py-20 md:py-20">
      <div className="mx-auto flex px-5 md:py-24 py-10 flex-col md:flex-row items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 leading-tight">
            Hire Dedicated Developers from India’s Top 1% Talent Pool
          </h1>
          <p className="mb-8 text-base sm:text-lg leading-relaxed">
            Elevate your business with Rytsense Technologies' years of expertise, 
            delivering customized software solutions that ensure your success in 
            a fast-paced market.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Connect Us
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="https://miro.medium.com/v2/resize:fit:800/0*XH3rLskyOsCqVV-j.jpg"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
