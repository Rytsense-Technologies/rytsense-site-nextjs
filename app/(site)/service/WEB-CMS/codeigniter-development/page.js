import React from "react";
import TechnologyStack from "../../../../components/services/TechnologyStack";
import HeroSection from "../../../../components/services/HeroSection";
import bannerImage from "../../../../../public/images/service-img/codeignter-banner.png";
import Link from "next/link";
import { fadeIn } from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"CodeIgniter Web DevelopmentCompany"}
        subTitle={
          "Exploit Our Power of CodeIgniter Framework for the Growth of your Business"
        }
        heroImage={bannerImage}
      />
      <div className=" min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
            <p className="text-gray-700">
              CodeIgniter is one of the most famous and open source PHP
              development frameworks in the world of web development. It is
              based on MVC development model that helps to build dynamic and
              instinctual websites. Compared to other best frameworks
              CodeIgniter is fastest, easiest and works less like a framework
              and have a very interactive interface with developer-friendly
              tools. Its MVC architecture and flexibility allow you to get agile
              web apps while meeting budgetary limitations and deadlines.{" "}
            </p>
          </section>
          <section>
            <p className="text-gray-700">
              A good CodeIgniter PHP framework solution uses a small footprint
              to give excellent performance. Compatibility and zero
              configuration are the main parameters to rate an open source
              website. The framework is continually rising on the new heights
              because the council guarantees that constant development on this
              framework will nurture it further.{" "}
            </p>
          </section>
        </div>
        <div className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4 p-6 text-center">
          Explore Our CodeIgniter Web Application Development Services:{" "}
        </div>

        <div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-wrap justify-between p-10"
        >
          <div className="max-w-sm rounded overflow-hidden shadow-2xl mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              1) CodeIgniter Web Development
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                At Rytsense Technologies we offer best-in-class CodeIgniter Web
                Development services that help you to take your business to the
                next level.
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              2) Develop Web Portals with PHP CodeIgniter and MySQL
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Users can expand their online services globally with web portals
                with our CodeIgniter frameworks that make the people know about
                your growing business.
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              3) CodeIgniter Social Networking Solution
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                As everyone knows, social media has become a most important part
                of the business & so we provide you with featured- packed social
                networking solutions with CodeIgniter.
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              4) Web 2.0 Based CMS Development
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Our developers at Rytsense Technologies build an efficient CMS,
                customize as you want with strong functionality streams within
                your time frame.{" "}
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              5) CodeIgniter ECommerce/Shopping Cart Development
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Rytsense Technologies offers you with a huge range of shopping
                cart or E-Commerce solutions that assist you to maximize the
                ROI.{" "}
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              9) Integration with third party API’ s
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Our expert team integrates third-party services like payment
                gateways, email services, social media services, analytics, etc.
                with various APIs.{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
