import React from "react";
import Image from "next/image";
import CustomButton from "../common/CustomButton";

const HireBanner = ({ bannerData }) => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-28 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
            {bannerData.title}
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {bannerData.subtitle}
          </p>
          <CustomButton title={"Book a Call"} />
        </div>
        <div class="lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src={bannerData.imageUrl}
            alt="mockup"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default HireBanner;
