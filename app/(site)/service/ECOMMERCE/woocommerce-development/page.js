import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/service-img/woo-banner.png";
import Link from "next/link";
import varients from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"WooCoomerce DevelopmentCompany"}
        subTitle={
          "Get WooCommerce Development For Robust And Effective Websites"
        }
        heroImage={bannerImage}
      />
      <div className=" min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
            <div className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4">
              Why Rytsense Technologies To Hire WooCommerce Developers?
            </div>
            <p className="text-gray-700">
              WooCommerce provides excellent web development services. Rytsense
              Technologies has skilled WooCommerce developers. WooCommerce helps
              develop e-commerce from planning to development and deployment;
              our WooCommerce developers are accountable for everything.
              WooCommerce develops a website with a pleasant user experience and
              high functionality. Our dedicated team is ready to help and
              support you 24/7. We believe in balance, and thus whatever your
              business is, startup, medium, and giant enterprise, we provide
              everyone with great quality. Our WooCommerce has specialization
              themselves in WooCommerce development, and hence any enquiring are
              solved by them. The best part of WooCommerce development is
              cost-effective, efficient for every industry, highly scalable, and
              much more.
            </p>{" "}
          </section>
          <section>
            <p className="text-gray-700">
              Our WooCommerce are always there to help ensure that the website
              functions bug-free and users have a seamless experience while
              using it. WooCommerce development built by our developers are
              reliable, scalable, and have unique features, which helps to keep
              users engaging. We transform a website into robust and creative
              e-commerce stores with advanced technologies. WooCommerce
              development provides high-security standards and amazing features
              for the project. Our developers deliver the project with the best
              technology, tools, and techniques. We ensure that by applying our
              WooCommerce development, you will witness enhancement in your
              business.
            </p>{" "}
          </section>
        </div>
        <div className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4 p-6 text-center">
          Why Opt For Rytsense Technologies For WooCommerce Development?{" "}
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
              1) Unparalleled Efficiency
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                We provide WooCommerce development with higher efficiency that
                offers a great user experience and increases business. We
                believe in offering efficient and high-end solutions that boost
                clients business. Our WooCommerce developers are not just
                developers, and they are experts who are fond of WooCommerce
                development in every prospective way.{" "}
              </span>
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              2) Secured & Safe
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                We provide WooCommerce development, which is safe and secure.
                Our WooCommerce team ensures that information is securely
                encrypted and stored. We value private information and data;
                thus, we provide secured WooCommerce development that offers you
                a secure and trustworthy website developed with WooCommerce
                Development.{" "}
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              3) Cost-Effective
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Our WooCommerce development is cost-effective. We leverage
                development with high quality and scalability and are worth
                every penny. Moreover, our WooCommerce development has multiple
                features which give you a seamless experience in
                cost-effectiveness. So, if you feel a startup or small business
                cannot hire WooCommerce development, come to us. We will provide
                you with the best, which will bring effective results for your
                business.{" "}
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              4) Global Experts
            </h1>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                We have a team of experts who are great at their work. People
                acknowledged us for our WooCommerce development work, and we
                succeeded in sustaining that always. Our WooCommerce developers
                are aware of global operations. Therefore no matter what country
                or state you are from, we have got you covered. The expertise is
                reflected in the development, which is a bonus point for the
                business to improve and boost it with Rytsense Technologies
                WooCommerce development.
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
