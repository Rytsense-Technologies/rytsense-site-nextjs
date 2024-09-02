"use client";
import React, { useState } from "react";
import Image from "next/image";

const IndustryTechnologies = ({ title, subTitle, data }) => {
  const [activeTab, setActiveTab] = useState(data[0].heading);

  // Find the active tab data based on the selected tab heading
  const activeTabData = data.find((tab) => tab.heading === activeTab);

  return (
    <div className="mx-auto py-20 px-4 sm:px-6 lg:px-10 ">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-sm text-gray-600 sm:text-lg">{subTitle}</p>
      </div>
      <div className="flex flex-wrap justify-center mb-8">
        {data.map((tab) => (
          <button
            key={tab.heading}
            className={`px-3 py-2 sm:px-5 sm:py-3 mx-2 my-1 sm:my-0 rounded font-bold ${
              activeTab === tab.heading
                ? "bg-sky-500 text-white"
                : "border border-gray-800 text-gray-700"
            }`}
            onClick={() => setActiveTab(tab.heading)}
          >
            {tab.heading}
          </button>
        ))}
      </div>
      <div className="flex justify-center flex-wrap">
        {activeTabData.logos.map((logo, index) => (
          <div key={index} className="m-2 w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 bg-gray-100 p-2 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <Image
              src={logo.image}
              alt={logo.name}
              width={40}
              height={40}
              className="mb-2"
            />
            <p className="text-center text-sm">{logo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryTechnologies;
