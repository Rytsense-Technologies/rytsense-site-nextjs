import React from "react";
import dynamic from "next/dynamic";
// import CustomButton from "../../components/common/CustomButton";

const CustomButton = dynamic(
  () => import("../../../components/common/CustomButton"),
  { ssr: false }
);

const AboutComapny = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class=" flex px-5 py-24 items-center justify-center flex-col">
        <div class="lg:px-10 w-full">
          <h1 class="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900">
            Custom Software Development Company, USA
          </h1>
          <p class="mb-8 text-xl font-semibold leading-relaxed">
            Rytsense Technologies, a top-notch custom software development
            company in USA, is dedicated to creating future technological
            solutions. We support startups, large companies, and successful
            businesses. We assist them in planning ahead, identifying their
            unique strengths, and achieving substantial profits. Our customized
            solutions help them grow steadily and see real result.
          </p>
          <p class="mb-8 text-xl font-semibold leading-relaxed">
            Our skilled software developers leverage their diverse expertise to
            deliver high-quality software development products. We utilize the
            latest technologies to ensure the best results. Our primary goal is
            to help clients create customer-focused solutions that maximize
            business efficiency, increase ROI, and enhance customer engagement.
            We help you achieve your digital ambitions and build world-class
            digital solutions by leveraging our knowledge and experience.
            Rytsense technologies provide the best-of-all software development
            services in USA, which helps our partners and clients pave the way
            to the future they wish for.
          </p>
          <div class="flex justify-center">
            <CustomButton title={"Let's Connect"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComapny;
