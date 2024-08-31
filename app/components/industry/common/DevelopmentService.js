"use client"

import React, { useState } from "react";

const DevelopmentService = ({ textColor, data }) => {
  const [selectedService, setSelectedService] = useState(data.points[0]);

  const handleTitleClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="px-4 sm:px-10 lg:px-20 py-10">
      <div className="w-full lg:w-3/5">
        <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-${textColor}`}>
          {data.title}
        </h1>
        <p className={`text-base sm:text-lg lg:text-xl text-${textColor} mt-5`}>
          {data.subTitle}
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row border border-indigo-800 rounded-lg mt-10">
        <div className="w-full lg:w-1/2 pr-4 p-5 lg:p-10 bg-sky-600">
          <ul className="divide-y divide-gray-200">
            {data.points.map((service, index) => (
              <li
                key={index}
                className={`py-3 cursor-pointer text-base sm:text-lg lg:text-xl font-semibold ${
                  selectedService?.title === service.title
                    ? "text-white"
                    : "text-gray-400"
                }`}
                onClick={() => handleTitleClick(service)}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">{index + 1}.</div>
                  <div className="flex-1 min-w-0">
                    <p className="truncate">{service.title}</p>
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
              <img
                className="bg-sky-700 p-2 rounded-lg w-10 h-auto"
                src={selectedService.icon}
                alt={selectedService.title}
              />
              <h1 className={`text-xl sm:text-2xl font-bold text-${textColor} mt-5`}>
                {selectedService.title}
              </h1>
              <p className={`text-base sm:text-lg lg:text-xl text-${textColor} mt-5`}>
                {selectedService.desc}
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
