"use client"

import Image from "next/image";
import React, { useState } from "react";

const DevelopmentService = ({heading,subheading, data }) => {
  const [selectedService, setSelectedService] = useState(data[0]);

  const handleTitleClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="px-4 sm:px-10 lg:px-20 py-20">
      <div className="w-full lg:w-3/5">
        <h1 className={`text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-800`}>
          {heading}
        </h1>
        <p className={`text-base sm:text-lg lg:text-lg text-gray-600 mt-5`}>
          {subheading}
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row border border-indigo-800 rounded-lg mt-10">
        <div className="w-full lg:w-1/2 pr-4 p-5 lg:p-10 bg-sky-600">
          <ul className="divide-y divide-gray-200">
            {data.map((service, index) => (
              <li
                key={index}
                className={`py-3 cursor-pointer text-base sm:text-lg lg:text-xl font-semibold ${
                  selectedService?.heading === service.heading
                    ? "text-white"
                    : "text-gray-300"
                }`}
                onClick={() => handleTitleClick(service)}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">{index + 1}.</div>
                  <div className="flex-1 min-w-0">
                    <p className="truncate">{service.heading}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Details */}
        <div className="w-full lg:w-1/2 pl-8 p-5 lg:p-20">
          {selectedService ? (
            <div>
              <Image
                className="bg-sky-700 p-2 rounded-lg w-10 h-auto"
                src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1725175063/star-removebg-preview_sy1kzj.png"
                alt="service"
                width={20}
                height={20}
              />
              <h1 className={`text-xl sm:text-2xl font-bold text-gray-800 mt-5`}>
                {selectedService.heading}
              </h1>
              <p className={`text-base sm:text-lg lg:text-xl text-gray-800 mt-5`}>
                {selectedService.passage}
              </p>
            </div>
          ) : (
            <div className="text-gray-500">
              Please select a service to view details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DevelopmentService;
