import React from "react";
import TechnologyStack from "../../../../components/services/TechnologyStack";
import HeroSection from "../../../../components/services/HeroSection";
import bannerImage from "../../../../../public/images/service-img/private-banner.png";
import Link from "next/link";
import varients from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Private Blockchain DevelopmentCompany"}
        subTitle={
          "Get Top-notch, Extensively, Innovative Private Blockchains Solution By Rytsense Technologies"
        }
        heroImage={bannerImage}
      />
      <div className=" min-h-screen" style={{ marginBottom: "150px" }}>
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
            <p className="text-gray-700">
              A private blockchain is a peer-to-peer network, made centralized
              by connecting all the nodes to a center point that manages the
              whole platform. Private blockchains are mainly by used banks and
              businesses for promoting smooth operations. It is usually set up
              by the network validator, where every participant holds the
              ultimate power to pick who can and cannot be a part of the network
              and perform transactions. A private blockchain asks for the
              permission from its center point that appears the network whenever
              a participant tries to participate. The transactions in private
              blockchain are faster and easy when compared to the Bitcoin
              blockchain.
            </p>{" "}
          </section>

          <section>
            <p className="text-gray-700">
              Rytsense Technologies is a global consulting company providing
              solutions that put together the best team on board to develop and
              design all the services ranging from simple to advanced Blockchain
              architecture.
            </p>{" "}
          </section>

          <div className=" ml-30 mr-30 p-10">
            <h1 className="font-bold text-xl text-gray-800">
              {" "}
              Know Advantages of Private Blockchains
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              <ul class="list-disc text-gray-800 mt-1 mb-3 ml-10">
                <li>Cryptographic Auditing</li>
                <li>Improved Efficiency</li>
                <li>Glorified Databases</li>
                <li>Control The Environment</li>
              </ul>
              <ul class="list-disc text-gray-800 mt-1 mb-3 ml-10">
                <li>Faster and cheaper transactions</li>
                <li>Huge amount of data, files can be shared and stored</li>
                <li>Low-risk transactions because of KYC authentication</li>
                <li>Increased stability and scalability</li>
              </ul>
            </div>

            <h1 className="font-bold text-xl text-gray-800">
              {" "}
              Why Choose Rytsense Technologies for Private Blockchain
              Development Services ?
            </h1>
            <p>
              Rytsense Technologies is providing the best blockchain development
              services globally. We can be the best choice for your private
              blockchain development demands as we provide a highly-secure
              private blockchain infrastructure of shared peers.{" "}
            </p>
            <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
              <li>Plethora of Network Platform</li>
              <li>Higher Accuracy</li>
              <li> Open-Source Security</li>
              <li> Trustworthy business model</li>
            </ul>

            <h1 className="font-bold text-xl text-gray-800">
              {" "}
              We promise you{" "}
            </h1>

            <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
              <li>Completely Decentralized Options</li>
              <li>Get Your own cryptocurrency</li>
              <li>Faster and cheaper transactions</li>
              <li>Auto public key generation</li>
            </ul>

            <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
              <li>Obtain investment advice</li>
              <li>Create multiple key values and identity databases</li>
              <li>Tracking accessibility at all network level</li>
              <li>Dynamic control over all transactions</li>
            </ul>
          </div>
        </div>
      </div>

      <TechnologyStack />
    </>
  );
};

export default page;
