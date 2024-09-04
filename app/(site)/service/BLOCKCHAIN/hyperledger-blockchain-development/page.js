import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/service-img/hyper-banner.png";
import Link from "next/link";
import varients from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Hyperledger BlockChain DevelopmentCompany"}
        subTitle={"We Develop Unique Blockchain on Hyperledger"}
        heroImage={bannerImage}
      />
      <div
        className="min-h-screen py-10 pb-14"
        style={{ marginBottom: "200px" }}
      >
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
            <p className="text-gray-700">
              Hyperledger blockchain technology is a new demand of the business
              world and mostly every business are looking for Hyperledger
              blockchain development. This technology was founded in December
              2015 by the Linux Foundation. It is open source and based on the
              distributed ledgers with the purpose of the betterment of the
              blockchain industry. It acts as an intermediary for decentralized
              digital communities. Hyperledger blockchain technology uses smart
              contract app which results in the highly beneficial for the
              enterprises over the globe and it is known as Hyperledger smart
              contracts.{" "}
            </p>
          </section>
          <section>
            <p className="text-gray-700">
              Rytsence Technology is a Cryptocurrency development company that
              enables wallets to store your personal data and manageable
              activities. We make the method user-friendly, provide a seamless
              experience and scalable investment. It helps to avail benefits
              from the operation and interface of the Cryptocurrency wallet. We
              help to make different payment methods easily integrated. We
              assist in storing and managing a certain amount of currency in the
              wallet. It will also have a public digital code in the
              Cryptocurrency wallet, assigned to a respective wallet address. We
              help businesses to manage the Cryptocurrency wallet well and
              adhere to expert guidance for it.
            </p>
          </section>
          <section>
            <p className="text-gray-700">
              Hence, while seeing the demand, it has been seen many companies
              has turned into Hyperledger Blockchain development Company and
              among them,Rytsense Technologies is known as a best Hyperledger
              Fabric blockchain development company. Expert Developers at
              Rytsense Technologies can help you to build decentralized
              enterprise apps using Hyperledger which is the top Blockchain
              platforms.{" "}
            </p>
          </section>
        </div>

        <div className=" p-10 container mx-auto py-8 px-4 ">
          <h1 className="font-bold text-xl text-gray-800">
            {" "}
            Some Of The Business Blockchain Frameworks Hosted Currently With
            Hyperledger Are:
          </h1>

          <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
            <li>Hyperledger Burrow</li>
            <li> Hyperledger Fabric</li>
            <li> Hyperledger Sawtooth</li>
            <li>Hyperledger Indy</li>
            <li>Hyperledger Iroha</li>
          </ul>
          <h1 className="font-bold text-xl text-gray-800">
            {" "}
            Know the feature of Hyperledger
          </h1>
          <p>
            With Rytsense Technologies, you are guaranteed that using
            Hyperledger, we can offer you the following features,
          </p>
          <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
            <li>Plethora of Network Platform</li>
            <li>Higher Accuracy</li>
            <li> Open-Source Security</li>
            <li> Trustworthy business model</li>
          </ul>

          <h1 className="font-bold text-xl text-gray-800">
            {" "}
            Why ChooseRytsense Technologies for Ethereum Hyperledger Blockchain
            Development?
          </h1>
          <p>
            When it comes to choosing a Hyperledger app for your business
            development, you should hire the team from Rytsense Technologies for
            expert Blockchain development. So are you looking to opt this
            technology for your business development, so your search is complete
            here because Rytsense Technologies gives you numerous reasons to
            hire it. We have a leading talent in the field of blockchain
            technology,Rytsense Technologies is a blend of responsive,
            professional and skilled employees.
          </p>

          <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
            <li>Award Winning Company</li>
            <li>Dedicated Employees</li>
            <li>24*7 Support</li>
            <li>On Time Delivery</li>
            <li>Fast Responders</li>
            <li>Security Professionals</li>
          </ul>
        </div>
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
