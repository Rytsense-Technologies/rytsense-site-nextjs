import React from "react";
import TechnologyStack from "../../../../components/services/TechnologyStack";
import HeroSection from "../../../../components/services/HeroSection";
import bannerImage from "../../../../../public/images/service-img/mobiletab.png";
import Link from "next/link";
import { fadeIn } from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Kotlin App DevelopmentCompany"}
        subTitle={
          "Hire Expert Kotlin App Developers for Android App Solution From Rytsense Technology"
        }
        heroImage={bannerImage}
      />
      <div className=" min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
            <p className="text-gray-700">
              Mobile app development industry is rising at an immense rate and
              with the growing demand for apps, a large number of mobile app
              developers are coming up with extremely scalable apps that can
              satisfy your business demands. However, when it comes to
              developing a mobile app, to choose the appropriate programming
              language is the most importance.
            </p>
          </section>
          <section>
            <p className="text-gray-700">
              Google has announced a new programming language about Kotlin as an
              official language for Android app development. Kotlin is a
              brilliantly designed and developed language that will make Android
              development quicker and more exciting. Kotlin is the latest open
              source, statically typed programming language that targets the
              Java platform. It is a great fit for server-side web applications
              development, that enables writing safe, concise and fully
              interoperable code with current Java libraries.
            </p>
          </section>
          <section>
            <p className="text-gray-700 mt-5">
              Rytsense Technology offers Kotlin app development services to
              develop world-class Android apps. As a Kotlin app development
              company, we provide Kotlin app developers for both onsite/offshore
              requirements. Being compatible with Java, Kotlin for Android
              development can work side-by-side with these languages and it is
              also easy to get started. So, our developers will simply keep your
              current code, continue with the Android library and at the same
              time add Kotlin to your project. At Rytsense Technology, we put in
              our best efforts, to provide the aptest solutions for years of
              experience and expertise and come up with tailor-made solutions.
              Our Android app developers have years of experience in producing
              various kinds of Android applications.
            </p>
          </section>
        </div>
        <div className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4 p-6 text-center">
          Know The Benefits Of Choosing Kotlin To Develop Your Android App
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
                Open Source
              </h1>
              <p className="px-4 text-gray-500">
                Kotlin is an open-source programming language. More apart from
                being open-source, it also provides a single-click tool for
                Android developers to convert current Java code.
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
                Better Performance
              </h1>
              <p className="px-4 text-gray-500">
                Kotlin provides better performance. The operation of call
                methods in Kotlin is faster as there is no need to know at
                runtime which method to call.
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
                Safe & Reliable
              </h1>
              <p className="px-4 text-gray-500">
                Kotlin contains safety features for immutability, which improves
                Android app development. And Kotlin’s compiler verifies the
                accuracy of programs at compile time, so less chance for runtime
                crashes.
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
                Functional & Object-Oriented
              </h1>
              <p className="px-4 text-gray-500">
                In Kotlin web framework, developers can do code in both
                object-oriented and functional manner. This way Kotlin helps
                Android developers to write first-class functions.
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
                Data Classes in Kotlin
              </h1>
              <p className="px-4 text-gray-500">
                In Kotlin, developers can write the same logic in a very simpler
                manner and relatively lesser lines.
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
                Named parameters
              </h1>
              <p className="px-4 text-gray-500">
                In Kotlin web framework, we can pass parameters by name, rather
                than an index. This way is very helpful when a function has a
                number of parameters.
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
        Rytsense Technology Develops An Android App With Kotlin For The
        Following Categories
      </div>
      <p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="text-gray-700 p-6 text-center"
      >
        Here are some of the top mobile app development categories, where Kotlin
        fits perfectly with the Android platform. Apart from these categories,
        we develop any other type of Android application by using Kotlin
        according to your business requirements.
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
              Logistic & Transportation Apps
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Education & Learning Apps
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Photo & Video Apps
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Health & Fitness Apps
            </span>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Grocery Apps
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              On-demand Apps
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Project-Management Apps
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Tours & Traveling Apps
            </span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Music & Entertainment Apps
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Food Apps
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Financing Apps
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Lifestyle Apps
            </span>
          </div>
        </div>
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
