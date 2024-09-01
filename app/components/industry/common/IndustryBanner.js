import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const IndustryBanner = ({ heading, subheading, bannerImage, buttonText }) => {
  return (
    <div className="px-4 sm:px-10 lg:px-40 ">
      <section class=" sm:pt-16">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="text-center py-20">
            <p class="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
              {heading}
            </p>
            <h1 class="max-w-2xl mx-auto px-6 text-lg  font-inter">
              {subheading}
            </h1>
            <div class="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <Link
                href="#"
                title=""
                class="mb-3 sm:mb-0 inline-flex items-center bg-sky-600 text-white justify-center gap-5 w-full px-8 py-2 text-lg font-bold  transition-all duration-200  border-2 border-white sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                {buttonText} <IoIosArrowForward />
              </Link>
            </div>
          </div>

          <div class="">
            <div class="">
              <Image
                class="mx-auto"
                src={bannerImage}
                width={800}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryBanner;
