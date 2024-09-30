import Image from "next/image";
import React from "react";
import useService from "../../../../public/images/usa-service.jpg";

const USAService = () => {
  return (
    <>
      <section className="text-gray-600 body-font px-5 sm:px-20">
        <div className="px-5 py-10 mb-10 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 md:w-1/2 w-full md:pr-10 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded-lg"
              alt="hero"
              src={useService}
              width={500}
              height={500}
            />
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full md:pl-10 md:pr-10 mb-10 md:mb-0">
            <h1 className="title-font sm:text-lg text-3xl mb-4 font-bold text-gray-900">
              Why Choose Rytsense Technologies for Software Development in USA?
            </h1>

            <p>
              We are one of the Best software development companies in USA. Our
              team has worked with top brands, big companies, and startups
              worldwide. We specialize in eCommerce, mobile app development, and
              PHP development. Our software developers in United States of
              America are experts in creating customized software for different
              industries.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default USAService;
