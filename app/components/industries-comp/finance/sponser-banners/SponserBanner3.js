"use client";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const SponserBanner3 = () => {
  const handleButtonClick = () => {
    window.open("https://calendly.com/ramkumar_p/call-schedule", "_blank");
  };

  return (
    <section className="bg-sky-600 rounded-lg py-12">
      <div className="container mx-auto flex px-5 items-center justify-between flex-col md:flex-row">
        <div className="text-left lg:w-2/3 w-full">
          <h1 className="text-4xl font-bold text-white mb-4">
            Want Another FinTech Solution For Your Business Need?
          </h1>
          <p className="text-lg text-white">
            With in-depth FinTech domain expertise, we help businesses create
            financial solutions customized to their specific requirements.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <button
            onClick={handleButtonClick}
            className="flex items-center bg-white text-sky-500 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100"
          >
            <span className="text-lg">Let’s Discuss Your Needs</span>
            <FiArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SponserBanner3;
