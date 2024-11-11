"use client";

import React, { useState } from "react";
import Image from "next/image";
import industry1 from "../../../../public/images/industry/1.webp";
import industry2 from "../../../../public/images/industry/2.webp";
import industry3 from "../../../../public/images/industry/3.webp";
import industry4 from "../../../../public/images/industry/4.webp";
import industry5 from "../../../../public/images/industry/5.webp";
import industry6 from "../../../../public/images/industry/6.webp";
import industry7 from "../../../../public/images/industry/7.webp";
import industry8 from "../../../../public/images/industry/8.webp";
import industry9 from "../../../../public/images/industry/9.webp";
import industry10 from "../../../../public/images/industry/10.webp";
import industry11 from "../../../../public/images/industry/11.webp";
import industry12 from "../../../../public/images/industry/12.webp";
import industry13 from "../../../../public/images/industry/13.webp";
import industry14 from "../../../../public/images/industry/14.webp";
import industry15 from "../../../../public/images/industry/15.webp";
import { FaArrowRight } from "react-icons/fa6";
import LetsDiscussModal from "./LetsDiscussModal";

const industries = [
  { title: "On-Demand", description: "Mobile App Development", image: industry1 },
  { title: "Ecommerce", description: "Mobile App Development", image: industry2 },
  { title: "Food", description: "Mobile App Development", image: industry3 },
  { title: "Pickup & Delivery", description: "Mobile App Development", image: industry4 },
  { title: "Blockchain", description: "Mobile App Development", image: industry5 },
  { title: "IoT", description: "Mobile App Development", image: industry6 },
  { title: "Transportation", description: "Mobile App Development", image: industry7 },
  { title: "Healthcare", description: "Mobile App Development", image: industry8 },
  { title: "Banking", description: "Mobile App Development", image: industry9 },
  { title: "Enterprise", description: "Mobile App Development", image: industry10 },
  { title: "Laundry", description: "Mobile App Development", image: industry11 },
  { title: "Social Networking", description: "Mobile App Development", image: industry12 },
  { title: "Real Estate", description: "Mobile App Development", image: industry13 },
  { title: "Manufacturing", description: "Mobile App Development", image: industry14 },
  { title: "Education", description: "Mobile App Development", image: industry15 },
];

const IndustryCard = ({ title, description, image, onClick }) => (
  <div className="flex flex-col" onClick={onClick}>
    <div className="relative w-full h-48 sm:h-52 md:h-60">
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-xl cursor-pointer"
      />
    </div>
    <div className="flex items-center justify-between hover:bg-blue-500 hover:text-white cursor-pointer border border-gray-300 mt-2 rounded-xl p-2">
      <div className="flex flex-col items-start">
        <h3 className="text-sm sm:text-md font-bold">{title}</h3>
        <p className="text-xs sm:text-sm font-semibold">{description}</p>
      </div>
      <div className="bg-blue-400 p-2 border-2 border-gray-100 text-white rounded-full">
        <FaArrowRight />
      </div>
    </div>
  </div>
);

const IndustryGrid = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mx-auto py-6 px-4 sm:px-8 md:px-16 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center md:text-left">
            Industries Transformed With The Best Software Development Services
          </h2>
          <p className="text-gray-600 text-sm sm:text-md text-center md:text-left">
            Being the top software development company in Dubai, we have
            transformed businesses across different industries. Our Android & iOS app
            development services ensure solutions that help your business outshine.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              title={industry.title}
              description={industry.description}
              image={industry.image}
              onClick={() => setOpen(true)}
            />
          ))}
        </div>
      </div>
      <LetsDiscussModal open={open} setOpen={setOpen} />
    </>
  );
};

export default IndustryGrid;
