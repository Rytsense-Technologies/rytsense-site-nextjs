import React from "react";
import Image from "next/image";
import CustomButton from "../../../common/CustomButton";

const SponserBanner1 = () => {
  return (
    <section className="text-gray-600 body-font bg-slate-100 rounded-2xl py-12">
      <div className="container mx-auto flex px-5 md:px-10 flex-col-reverse md:flex-row items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col px-5 md:px-0 md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
          <h1 className="title-font text-3xl md:text-5xl mb-6 font-bold text-gray-900">
            Build Your Fintech App With Code Brew To Reinvent The Way People Pay, Buy, & Invest
          </h1>
          <CustomButton title={"Get Started"} />
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-8 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1728980375/spo-fintech_nk2c4w.webp"
            width={600}
            height={400}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default SponserBanner1;
