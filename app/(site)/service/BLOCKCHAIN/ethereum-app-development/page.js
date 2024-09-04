import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/service-img/ethereum-banner.png";
import Link from "next/link";
import varients from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Ethereum App DevelopmentCompany"}
        subTitle={
          "Get Best Ethereum Development Services to Develop Smart Contracts and Decentralized Apps"
        }
        heroImage={bannerImage}
      />
      <div className=" min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
            <p className="text-gray-700">
              Ethereum is an open software platform based on Blockchain
              technology that assists Smart Contracts Development and
              Distributed Applications development - DApps. Ethereum app
              development is a unique innovation in the business world, but its
              already showing to be a powerful tool for developing and managing
              blockchain systems, clear smart contracts and brilliant new ideas
              about how companies can be organized. Ethereum platform is used to
              develop several applications over a wide range of services and
              industries that cover financial applications, semi-financial
              applications, and non-financial apps. In the world of Ethereum app
              development,Rytsense Technology blend our expertise and unique
              features of Ethereum to know your business demands and deliver
              customized app development services.{" "}
            </p>
          </section>
          <section>
            <p className="text-gray-700">
              The specific cryptographic token which is called Ether and it is
              one of the most famous cryptocurrencies associated with smart
              contracts. Ether is also used by application developers to pay for
              transaction fees and help on the Ethereum network.{" "}
            </p>
          </section>
        </div>

        <div className=" text-left p-20">
          <h1 className="font-bold text-xl text-gray-800 mb-5">
            Why Should You Choose Rytsense Technologies As Your Ethereum App
            Development Partner?
          </h1>

          <p className=" text-gray-800 mt-1 mb-3">
            Hyperlink InfoSystem is dedicatedly working to make the
            revolutionary Ethereum blockchain development to incorporate state
            of the art technologies to make you high octane and fully
            customizable Ethereum development solutions which is fit to the
            unique demands of your project. Enhance your business operations
            with our Cryptocurrency development services and build powerful
            decentralized applications.
          </p>

          <ol class="list-decimal md:list-disc lg:list-decimal ml-10">
            <li class="mb-2">Expert & professional employees</li>
            <li class="mb-2">Tailor Made Decentralised Apps</li>
            <li class="mb-2">Scalable, Flexible & Interactive Ethereum Apps</li>
            <li class="mb-2">Fast Responders</li>
            <li class="mb-2">Security Professionals</li>
          </ol>
        </div>
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
