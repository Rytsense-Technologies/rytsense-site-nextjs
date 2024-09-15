import React from "react";
import TechnologyStack from "../../../../components/services/TechnologyStack";
import HeroSection from "../../../../components/services/HeroSection";
import bannerImage from "../../../../../public/images/service-img/iphone.png";
import Link from "next/link";
import { fadeIn } from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"iPhone App DevelopmentCompany"}
        subTitle={
          "Transform Your Idea By Hiring Our Experts iPhone App Developers"
        }
        heroImage={bannerImage}
      />
      <div className=" min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
            <p className="text-gray-700">
              The popularity of iPhone apps is as high as the iPhones. Even
              though there are tons of iPhone apps available out there; iPhone
              app development demands much more than just a bit of coding
              knowledge. If you want to develop an efficient iPhone app
              development solution that can work well more than just amazing for
              your target audience then all you need is support from top iPhone
              app development companies like Rytsense Technology.
            </p>
            <p className="text-gray-700">
              The app development team of Rytsense Technology does not just hold
              the app development expertise, but they are specialized in
              developing custom iOS mobile applications that can meet all your
              predefined requirements and suit well to your industry market to
              help you stand out from your competitors. Our iPhone app
              developers are proficient enough to develop applications that can
              work well on iPad, iPhone, Apple TV, Apple Watch and various
              others.{" "}
            </p>
          </section>
          <section>
            <p className="text-gray-700">
              When it comes to focusing on browsing specification we have
              deployed Android applications browsable for SmartTV, wearable
              devices, tablets, and of course mobile devices. Without doing much
              except blending our Android app development expertise well with
              our clients app idea, we have made ourselves one of the most
              preferred Android Application development partners for global
              business.
            </p>
          </section>
          <section>
            <p className="text-gray-700 mt-5">
              Keeping the practice makes a man perfect in the center, our
              Android developers have achieved remarkable success by offering
              Android app development services to successfully deploy
              easy-to-use, intuitive, and feature-rich mobile applications for
              Google Playstore. Various global businesses have achieved their
              much-anticipated outcomes by hiring Android developers from us.{" "}
            </p>
          </section>
        </div>
        <div className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4 p-6 text-center">
          Power Up Your Business Through Service Offering of iOS App Development
          Company
        </div>
        <p className="text-gray-700 p-6 text-center">
          Being a Top iPhone app development company we offer tons of app
          development services. Browse through some of our iPhone app
          development services.
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
              Full-Stack iOS App Development
            </h1>
            <p className="px-4 text-gray-500">
              Get the experts on your side starting from the app development
              planning stage to get secure, feature-rich and user-friendly
              iPhone apps that can work well with iOS smartphones, wearables,
              Macs or even on TV applications.
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
              Enterprise iPhone Application Development
            </h1>
            <p className="px-4 text-gray-500">
              Have a business idea to turn into a working iPhone mobile app
              digital solution? Reach out to us. We have years of expertise to
              develop enterprise-oriented iPhone mobile apps.
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
              iPhone App Migration & Revamp
            </h1>
            <p className="px-4 text-gray-500">
              iPhone app developers at Rytsense Technology have the expertise to
              migrate your existing mobile application to the iOS operating
              system and even upgrade your existing iOS mobile application to
              make them pertinent to the latest market trends.
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
              iPhone UI/UX Design
            </h1>
            <p className="px-4 text-gray-500">
              Our team of iOS app designers specialize in creating experiences
              that leave long-lasting impressions on viewers using the latest
              design trends and technologies to deliver an immersive and
              memorable user experience.
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
              iPhone App Development Consultation
            </h1>
            <p className="px-4 text-gray-500">
              Being a leading iPhone app development company, we have industry
              experts on our team that you can reach out to to get accurate and
              satisfying guidance for iPhone app development.{" "}
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
              API Development and Integration
            </h1>
            <p className="px-4 text-gray-500">
              Our iOS app development experts will do everything in their power
              to develop amazing solutions whether it could be the integration
              of 3rd party APIs or developing customized iPhone API for your
              complex app development requirements.
            </p>
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
        Technical Expertise Our iPhone App Developers Possess
      </div>
      <p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="text-gray-700 p-6 text-center"
      >
        Keeping rooted with traditional methods we master all the latest
        technologies to deliver the most efficient iPhone app solutions.
      </p>
      <div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-wrap justify-between p-10"
      >
        <div className="max-w-sm rounded overflow-hidden shadow-2xl mb-4">
          <h1 className="text-darken mb-3 pt-3 text-xl font-bold lg:h-14 lg:px-14">
            Language
          </h1>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Swift
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Objective-C
            </span>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
          <h1 className="text-darken mb-3 pt-3 text-xl font-bold lg:h-14 lg:px-14">
            Frameworks
          </h1>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              CoCoa Controls
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Cocos2D
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Cocoa Touch
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Native SDK
            </span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
          <h1 className="text-darken mb-3 pt-3 text-xl font-bold lg:h-14 lg:px-14">
            Platforms
          </h1>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              MAC OS Maverick
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              macOS Sierra
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Yosemite
            </span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
          <h1 className="text-darken mb-3 pt-3 text-xl font-bold lg:h-14 lg:px-14">
            Development Tool
          </h1>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              XCODE
            </span>
          </div>
          <h1 className="text-darken mb-3 pt-3 text-xl font-bold lg:h-14 lg:px-14">
            Database
          </h1>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              SQlite
            </span>
          </div>
        </div>
      </div>
      <h1 class="text-3xl md:text-3xl lg:text-3xl text-center mt-8">
        Frequently Asked Questions
      </h1>

      <div className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl m-12">
        <details className="p-6 group" open>
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900">
              1. How frequent project updates will I get?
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            We believe in complete transparency. So, our project manager will be
            in touch with you constantly to offer you frequent updates about the
            progress of the project lifecycle and understand your views on the
            project progress.{" "}
          </p>
        </details>

        <details className="p-6 group">
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900">
              What type Hiring modele do yo offer?
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            Along with offering various iOS app development services, we also
            offer various types of hiring models such as Fixed Cost Fixed Time
            Model, Time and Material Model, On-Site Model, Hire Dedicated Team
            Model and Offshore Development Center Model. You can choose the
            best-suited one based on your requirements. If you are not sure
            which one will suit you the best, you can reach out to our iPhone
            app developers with your requirements and we will suggest you the
            best one.{" "}
          </p>
        </details>

        <details className="p-6 group">
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900">
              Can I hire dedicated developers from your company ?
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            Along with offering various iOS app development services, we also
            offer various types of hiring models such as Fixed Cost Fixed Time
            Model, Time and Material Model, On-Site Model, Hire Dedicated Team
            Model and Offshore Development Center Model. You can choose the
            best-suited one based on your requirements. If you are not sure
            which one will suit you the best, you can reach out to our iPhone
            app developers with your requirements and we will suggest you the
            best one.{" "}
          </p>
        </details>
        <details className="p-6 group">
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900">
              How much can iPhone developmnt app cost ?
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            App development cost estimation does not depend on just one factor.
            The cost estimation considers various factors such as your app
            development project requirements, type of app development solution,
            the complexity of the app development, features and functionalities
            to include in the iPhone application and many more.{" "}
          </p>
        </details>
        <details className="p-6 group">
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900">
              How Much time app development can take ?
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            Just as the cost estimation, defining the time frame of the Android
            app development solution depends on various factors such as project
            requirements, app development time frame, the complexity of the app
            development, the type of solution, features, and functionalities of
            the mobile application, the required app development team, and many
            more.{" "}
          </p>
        </details>
        <details className="p-6 group">
          <summary className="flex items-center justify-between cursor-pointer">
            <h5 className="text-lg font-medium text-gray-900">
              How do you assure the confidentialy of my app idea ? ?
            </h5>

            <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            Your app idea matters to us as much as it does to you. So before
            moving on with anything else we make sure to sign an NDA to keep
            your app idea always safe and secure.{" "}
          </p>
        </details>
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
