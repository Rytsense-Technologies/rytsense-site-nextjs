import React from "react";
import TechnologyStack from "../../../../components/services/TechnologyStack";
import HeroSection from "../../../../components/services/HeroSection";
import bannerImage from "../../../../../public/images/service-img/flutter_banner.png";
import Link from "next/link";
import { fadeIn } from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Flutter App DevelopmentCompany"}
        subTitle={
          "An Expressive, Flexible and Revolutionary Framework to Develop The Next-Gen Apps"
        }
        heroImage={bannerImage}
      />
      <div className="min-h-screen">
        <div className="container mx-auto px-4">
          <p className="">
            Google flutter app development SDK, is the newly launched framework
            designed to support native development for both iOS & Android mobile
            apps by using a single code structure. Flutter is robust and
            reactive with widgets and tools that enable the development and
            deployment of UI with animations and a single code which works for
            different platforms.
          </p>
          <p className="mt-5">
            The most lucrative thing about Flutter framework is it provides a
            bridge to native, so developers can do almost everything that
            Kotlin/Swift/Java does. The core concepts for Flutter are connecting
            and drawing. Flutter can be rightly observed in applications that
            make use of the camera, Geolocation, network, storage, and 3rd party
            SDKs. All of this attributes to the latest standards in
            cross-platform developments which can be accomplished using the
            flutter app development framework.
          </p>
          <p className="mt-5">
            Rytsense Technology is one of the top flutter application
            development companies. Despite the latest existence of flutter
            compared to other frameworks, we have still managed to get
            accustomed to its styles and methods of functioning by making us one
            of the best flutter application development companies. Our diverse
            and skilled team of developers can help sketch you the smartest and
            quickest solution for your cross-platform development projects and
            bring to life the expectations you aspire for your projects.
          </p>
        </div>
        <div className="h-full min-h-screen w-full bg-gray-100 p-4">
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
                Quick & Easy Code
              </h1>
              <p className="px-4 text-gray-500">
                This platform entices developers by leveraging them with faster
                coding process. It enables faster debugging and analyzes the
                process to fix bugs. Moreover, the simple process enables for
                easy experimentation in the app features that improve
                functionality and the richness of the UI.
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
                Easy To Use
              </h1>
              <p className="px-4 text-gray-500">
                Flutter architecture analyzes the development process for
                developers. It does this by providing integration when
                developers use other programming languages.
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
                Single Coding Based
              </h1>
              <p className="px-4 text-gray-500">
                With the use of Flutter architecture, developers no longer have
                to give duplicate codes for different platforms. It allows only
                single code for both iOS and Android.
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
                Smooth Experience
              </h1>
              <p className="px-4 text-gray-500">
                Flutter’s modern technology allows developers to build a faster
                and more fluent experience for end users, that makes it easier.
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
                Fast Testing
              </h1>
              <p className="px-4 text-gray-500">
                As you do not have to develop different apps for different
                platforms so the testing becomes much faster. This also boosts
                your testing process.
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
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40 text-4xl font-bold">
                06
              </div>
              <h1 className="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">
                Widgets Creation
              </h1>
              <p className="px-4 text-gray-500">
                Flutter architecture allows developers to make new widgets. The
                great widget library in the SDK allows it simple to customize a
                widget very quick.
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
        Our Flutter Application Development Services
      </div>

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
              Hire dedicated Flutter app developers
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Get personalized services with us
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Custom server-side APIs for mobile
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Accessible SDKs
            </span>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Quick support & maintenance
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Minimum Viable Product (MVP)
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Advanced app development approach
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Native Features
            </span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              End-to-End Project Management
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Cross-Platform App Development
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Eye-Catching UI
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Hot Reload
            </span>
          </div>
        </div>
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
