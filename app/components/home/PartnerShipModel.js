"use client";

import React, { useEffect, useState } from "react";

import { IoIosPricetags } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { GrDeploy } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";

const PartnerShipModel = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleButtonClick = () => {
    if (isClient) {
      window.open("https://calendly.com/ramkumar_p/call-schedule", "_blank");
    }
  };

  const partnershipmodalData = [
    {
      title: "Fixed Price Model",
      desc: "Project scope, cost, and timeline are set before development begins.",
      icon: <IoIosPricetags />,
    },
    {
      title: "Hire Dedicated Model",
      desc: "Clients pay for developer hours, allowing flexibility and communication.",
      icon: <FiUsers />,
    },
    {
      title: "On Site Development Model",
      desc: "Temporary on-site developers for direct communication and timely completion.",
      icon: <GrDeploy />,
    },
  ];

  return (
    <div className="bg-gray-100 px-6 md:px-10 lg:px-28 py-6 md:py-8 lg:py-10 mb-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold mb-4 md:mb-6 font-mono">
          Partnership Model
        </h1>
        <p className="text-md  lg:text-md text-center font-medium text-black mb-10">
          Rytsense Technology, a leading software company in the USA & India,
          offers custom app development for various industries. <br /> Learn
          about our partnership models.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {partnershipmodalData.map((data, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-2xl p-6 md:p-8 lg:p-10 transition-shadow duration-300 ease-in-out"
            style={{
              boxShadow:
                "rgba(255, 255, 255, 0.8) -5px -5px 10px, rgba(0, 0, 0, 0.15) 5px 5px 10px",
              height: "250px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "inset rgba(0, 0, 0, 0.15) 5px 5px 5px, inset rgba(255, 255, 255, 0.8) -5px -5px 5px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "rgba(255, 255, 255, 0.8) -5px -5px 10px, rgba(0, 0, 0, 0.15) 5px 5px 10px";
            }}
          >
            <div className="flex flex-col items-start gap-8">
              <span className="text-xl text-indigo-800">{data.icon}</span>
              <div>
                <h1 className="text-lg  lg:text-lg font-medium text-black mb-4">
                  {data.title}
                </h1>
                <p className="text-md text-gray-600">{data.desc}</p>
              </div>
            </div>
            <span
              className="flex justify-end mt-8 text-indigo-800 cursor-pointer"
              onClick={handleButtonClick}
            >
              <FaArrowRightLong />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerShipModel;
