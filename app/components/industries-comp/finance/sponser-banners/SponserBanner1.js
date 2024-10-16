import React from "react";
import CustomButton from "../../../common/CustomButton";

const SponserBanner1 = () => {
  return (
    <>
      <section class="text-gray-600 body-font bg-slate-100 rounded-2xl">
        <div class="container mx-auto flex px-10  md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col px-10 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-5xl mb-4 font-bold text-gray-900">
            Build Your Fintech App With Code Brew To Reinvent The Way People Pay, Buy, & Invest
            </h1>
           
           <CustomButton title={"Get Started"}/>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1728980375/spo-fintech_nk2c4w.webp"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SponserBanner1;
