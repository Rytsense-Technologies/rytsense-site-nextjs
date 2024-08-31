import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const MainBanner = () => {
  return (
    <>
      <section
        class="pt-12 bg-gray-50 sm:pt-16"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-vector/seamless-gold-rhombus-grid-pattern-black-background_53876-97589.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="text-center py-20">
            <p class="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-white sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
              Healthcare Software Development Services
            </p>
            <h1 class="max-w-2xl mx-auto px-6 text-lg text-white font-inter">
              Delivering world-class custom healthcare software development
              services to enable the best medical care
            </h1>
            <div class="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <a
                href="#"
                title=""
                class="mb-3 sm:mb-0 inline-flex items-center justify-center gap-5 w-full px-8 py-2 text-lg font-bold text-white transition-all duration-200  border-2 border-white sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Request a proposal <IoIosArrowForward />
              </a>
            </div>
          </div>

          <div class="mx-auto mt-4 md:mt-8">
            <div class="lg:max-w-6xl lg:mx-auto">
              <img
                class="px-4 md:mpx-8"
                src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/medical-team-banner.webp"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainBanner;
