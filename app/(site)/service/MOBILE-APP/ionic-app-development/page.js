import React from "react";
import TechnologyStack from "../../../../components/services/TechnologyStack";
import HeroSection from "../../../../components/services/HeroSection";
import bannerImage from "../../../../../public/images/service-img/Ionic-banner.png";
import Link from "next/link";
import { fadeIn } from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Ionic App DevelopmentCompany"}
        subTitle={"We Develop Powerful Ionic Based Apps For You!"}
        heroImage={bannerImage}
      />
      <div className=" min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
            <p className="text-gray-700">
              Ionic is the best hybrid mobile app development framework which is
              mainly used to code for powerful hybrid mobile apps in the
              simplest way. The ionic development enables the use of various
              frameworks, which helps to add the latest features and
              functionality to the native or a hybrid mobile app. A mobile app
              which is developed on this advanced HTML5 hybrid app framework can
              perform and behave extremely well on all the latest mobile
              devices.
            </p>
          </section>
          <section>
            <p className="text-gray-700">
              Ionic app development service drives native mobile elements with
              attractive designing and smoother animations. Ionic apps have a
              more native touch which makes UI Layouts and design elements more
              alluring. So, Ionic Platform proves to be a very responsive
              framework.
            </p>
          </section>
          <section>
            <p className="text-gray-700 mt-5">
              We at Rytsense Technology, develop higher quality ionic
              application development which is strong in user experience and
              user-friendly that can deliver high performance on both web and
              native platforms. With a team of highly talented Ionic developers
              and mobile app designers who leverage the potential of this
              framework to develop apps with unique user engagement and faster
              time to market. Our Ionic framework developers follow the latest
              app development processes and methodologies to develop
              high-performing Ionic app solutions for any kind of businesses. We
              develop the bug-free app that effectively leads our clients to the
              top position.
            </p>
          </section>
        </div>
        <div className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4 p-6 text-center">
          Know the Spectacular Benefits of Ionic App Framework
        </div>
        <div className="h-full min-h-screen w-full p-4">
          <div className="grid gap-14 md:grid-cols-3 md:gap-5">
            <div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="rounded-xl bg-white p-6 text-center shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-yellow-600 shadow-lg shadow-teal-500/40 text-4xl font-bold">
                01
              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
                Easy to Maintain
              </h1>
              <p className="px-4 text-gray-500">
                Ionic framework is a comprehensive open-source framework that is
                used to develop hybrid apps. With plenty of options, Ionic
                framework the developers develop multi-featured apps with
                simplicity.
              </p>
            </div>

            <div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              data-aos-delay="150"
              className="rounded-xl bg-white p-6 text-center shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40 text-4xl font-bold">
                02
              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14 ">
                Cross-Platform Mobile Development
              </h1>
              <p className="px-4 text-gray-500">
                A mobile app that developed on the ionic framework supports on
                various mobile platforms which decreases the expenses of
                developing a single app for different platforms.
              </p>
            </div>
            <div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              data-aos-delay="300"
              className="rounded-xl bg-white p-6 text-center shadow-xl"
            >
              <modiv className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40 text-4xl font-bold">
                03
              </modiv>
              <h1 className="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">
                Save Time & Money
              </h1>
              <p className="px-4 text-gray-500">
                Developers code for a single time on the ionic framework which
                saves a massive amount of time and also an extra effort that is
                spent on codes for different platform.
              </p>
            </div>

            <div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="rounded-xl bg-white p-6 text-center shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-yellow-600 shadow-lg shadow-teal-500/40 text-4xl font-bold">
                04
              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
                Beautiful UI Design & Multiple Features
              </h1>
              <p className="px-4 text-gray-500">
                Ionic framework with its multiple features is comprehensively
                appreciated by the developers so ionic app development is given
                priority by the small business entities.
              </p>
            </div>
            <div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              data-aos-delay="150"
              className="rounded-xl bg-white p-6 text-center shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40 text-4xl font-bold">
                05
              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14 ">
                Default User Interface
              </h1>
              <p className="px-4 text-gray-500">
                The Ionic framework has default JS and CSS components which
                comprise a majority of the basic and essential things that have
                to be covered in a mobile application.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4 p-6 text-center"
      >
        Our Services – Ionic App Development
      </div>
      <p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="text-gray-700 p-6 text-center"
      >
        Our ionic app development services include up-to-date mobile apps that
        are highly functional and combines powerful features that suit your
        business.
      </p>
      <div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-wrap justify-between p-10"
      >
        <div className="max-w-sm rounded overflow-hidden shadow-2xl mb-4">
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Ionic Development Consultancy
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Ionic Upgrade to Latest Version
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Native to Ionic App Migration
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Ionic app with Sass Development
            </span>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Ionic Hybrid App Development
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Ionic AngularJS App Development
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Ionic Web Development
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Open GLReal-Time Hybrid App with Ionic & Firebase
            </span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Ionic Game Development
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Ionic App Porting
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Ionic Framework Development
            </span>
          </div>
        </div>
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
