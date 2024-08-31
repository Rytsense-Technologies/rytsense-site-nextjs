import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import ClientReviews from "../../../components/services/ClientReviews";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/services/mobile.png";
import Link from "next/link";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Mobile App Development Company"}
        subTitle={
          "Get Top-notch, Extensively, Innovative Mobile App Solution By Us."
        }
        heroImage={bannerImage}
      />
      <section className="mb-12 px-10 lg:px-20">
        <h1 className="my-4 font-extrabold text-3xl sm:text-4xl text-indigo-900 mb-6">
          Overview
        </h1>
        <p className="text-gray-700 text-lg">
          The smartphone Apps have changed the definition of every day activity
          in human life. It has been an essential part of our lives and why not?
          We do almost everything with the help of an app. The world is
          connected with mobile apps. In this really techie era, Rytsense
          Technologies can help you to craft some excellent mobile application
          for your business & start-ups. We are the leading tailor made mobile
          app development company, serving finest apps across the globe.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-10">
          We have top mobile app developers who are highly skilled and updated
          with the latest technology trend. Our team works with the global firms
          to transform recognized ideas into stunning & inventive mobile Apps.
          We have rich experience and creativity in producing stunning mobile
          apps for different clients over the world.
        </p>
      </section>

      <div className="mx-auto max-w-screen-md text-center border border-gray-400 shadow-lg rounded-3xl  h-auto p-10 bg-indigo-700">
        <h2 className="mb-4 text-2xl tracking-tight font-bold leading-tight text-white">
          Want to know How Much Exactly Your Mobile App Will Cost ?
        </h2>
        <p className="mb-6 text-white md:text-lg">
          "The Experts Are Just A CLick Away . Get A Quote"
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center border border-white  bg-gray-700 text-white shadow rounded-lg hover:transition-all mb-7"
        >
          Share Your Idea
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
      <ClientReviews />
      <TechnologyStack />
    </>
  );
};

export default page;
