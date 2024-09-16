import React from "react";
import Image from "next/image";
import CustomButton from "../common/CustomButton";


const HeroSection = ({title, subTitle, heroImage}) => {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-20 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
             {title}
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {subTitle}
            </p>
            <CustomButton title={"Get Started"} />
        
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src={heroImage}
              alt="mockup"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
