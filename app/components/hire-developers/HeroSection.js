import Image from "next/image";
import React from "react";
import CustomButton from "../common/CustomButton";

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font py-20 md:py-20">
      <div className="mx-auto flex px-5 md:py-24 py-10 flex-col md:flex-row items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 leading-tight">
          Hire Software Developers in India to Scale Your Business
          </h1>
          <p className="mb-8 text-base sm:text-lg leading-relaxed">
          Rytsense Tech offers highly skilled and dedicated developers in India. Hire expert developers to bring your projects to life with top-notch solutions.
          </p>
          <div className="flex justify-center">
          <CustomButton title={"Hire Dedicated Developers Now"} />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1726193210/hire_tcafiw.jpg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
