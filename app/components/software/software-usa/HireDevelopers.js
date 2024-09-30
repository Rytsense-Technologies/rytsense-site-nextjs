import React from "react";
import dynamic from 'next/dynamic';
import CustomButton from "../../common/CustomButton";
import Image from "next/image";



const HireDevelopers = () => {
  return (
    <section className="text-gray-600 body-font px-5 sm:px-20 py-10 md:px-20">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-center md:items-start md:text-left mb-16 md:mb-0 text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hire Top Software Developers in USA
          </h1>
          <p className="mb-8 text-xl font-semibold leading-relaxed">
            As a top software company in USA, we carefully select the finest
            custom software developers.
          </p>
          <ul className="text-lg list-disc mb-8 md:text-left">
            <li>
              Our software experts in USA know all the latest tools and
              languages.
            </li>
            <li>
              Rytsense technologies provide top-notch software solutions in
              United States of America that meet your business needs using
              flexible hiring.
            </li>
            <li>
              We test our software thoroughly to prevent any problems before
              its finished.
            </li>
            <li>
              We use strong security measures to keep your personal info safe in
              our database.
            </li>
          </ul>
          <div className="flex justify-center">
            <CustomButton title={"Let's Connect"}/>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <Image
            className="object-cover object-center rounded-lg"
            alt="hero"
            src="https://www.icoderzsolutions.com/image/hire-web-developers-img.webp"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default HireDevelopers;
