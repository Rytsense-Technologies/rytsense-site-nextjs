import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const IndustryBanner = ({heading, subheading, bannerImage}) => {
  return (
    <div className="px-4 sm:px-10 lg:px-40 mt-20 lg:mt-40">
      <section className="relative pt-12 sm:pt-16">
        <div className="absolute inset-0 bg-opacity-50">
          <Image
            className="w-full h-full object-cover rounded-xl opacity-75"
            src={bannerImage}
            alt="Healthcare Banner"
            width={800}
            height={600}
          />
        </div>
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center py-20 relative z-10   rounded-xl px-6 sm:px-10">
            <p className="max-w-4xl mx-auto mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
              {heading}
            </p>
            <h1 className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-white font-inter">
             {subheading}
            </h1>
            <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <Link
                href="#"
                title="Request a proposal"
                className="mb-3 sm:mb-0 inline-flex items-center justify-center gap-3 sm:gap-5 w-full px-6 sm:px-8 py-2 text-base sm:text-lg font-bold text-white transition-all duration-200 border-2 border-white sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Schedule a Call <IoIosArrowForward />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryBanner;
