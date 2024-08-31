"use client"
import React, { useState } from "react";
import f1 from "../../../public/images/technologies/f1.png";
import { fa1 } from "@fortawesome/free-solid-svg-icons/fa1";
import Image from "next/image";

const tabs = [
  { name: "Frontend Programming Languages", key: "Frontend" },
  { name: "Backend Programming Languages", key: "Backend" },
  { name: "Mobile", key: "Mobile" },
  { name: "Desktop", key: "Desktop" },
  { name: "DevOps", key: "DevOps" },
  { name: "Web Development", key: "Web" },
];

const images = {
  Frontend: [f1],
  Backend: [f1],
  Mobile: [f1],
  Desktop: [f1],
  DevOps: [f1],
  Web: [fa1],
};

const TechnologyStack = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  return (
    <div className="mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Technology Stack That Makes Your Healthcare App Secure and Exceptional
        </h1>
        <p className="text-sm sm:text-lg">
          As a reputed healthcare mobile app development company, our mobile app
          development process is guided by a robust
          <a href="#" className="text-blue-500">
            {" "}
            technology stack
          </a>{" "}
          that makes your healthcare products interoperable, robust, fast, and
          secure. By putting a strong emphasis on innovation, we strive to
          deliver software development services for healthcare industry that not
          only meet present needs but also foresee potential problems down the
          road, giving you a forward-thinking, long-term strategy to advance
          your healthcare business operations.
        </p>
      </div>
      <div className="flex flex-wrap justify-center mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`px-3 py-2 sm:px-5 sm:py-3 mx-2 my-1 sm:my-0 rounded ${
              activeTab === tab.key
                ? "bg-sky-500 text-white"
                : "border border-gray-800 text-gray-700"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div>
        <div className="flex justify-center flex-wrap">
          {images[activeTab].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={activeTab}
              width={40}
              height={40}
              className="m-2 w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 bg-gray-100 p-2 rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;
