import React from "react";
import TechnologyStack from "../../../../components/services/TechnologyStack";
import HeroSection from "../../../../components/services/HeroSection";
import bannerImage from "../../../../../public/images/service-img/smart-banner.png";
import Link from "next/link";
import varients from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Smart Contract DevelopmentCompany"}
        subTitle={"A Full-service Smart Contract Development Firm"}
        heroImage={bannerImage}
      />
      <div className="" style={{ marginBottom: "100px" }}>
        <div className=" min-h-screen">
          <div className="container mx-auto py-8 px-4">
            <section className="mb-8">
              <p className="text-gray-700">
                Smart contracts help you exchange anything of value in a
                transparent way while avoiding the services of a middleman.
                Smart Contracts are digital computer protocols that are backed
                by the ability to keep a track of the terms of an agreement
                between businesses. The smart contracts facilitate a fair
                exchange of goods and services between the exchanging parties.
                The smart contract is a development on the Ethereum blockchain.
                It is the main part of a technology that adapts the Ethereum
                cryptocurrency from Bitcoin’s Blockchain. Smart Contracts have
                grown along with the new possibilities in the software
                development scenario. The release of Ethereum in 2015 allowed
                the very first implementation of smart contracts.
              </p>{" "}
            </section>
            <section>
              <p className="text-gray-700">
                Rytsense Technologies is a good Blockchain Development Company
                with an excellence in building decentralized smart contracts. We
                have a skilled team of Blockchain Developers that specialize to
                develop world-class decentralized apps - DAPPs for various
                industries. A team of Rytsense Technologies works together with
                clients to validate, design, and develop smart contracts to make
                safe, accurate, and honest transactions.{" "}
              </p>
            </section>
            <div className="ml-30 mr-30 p-10">
              <h1 className="font-bold text-xl text-gray-800">
                {" "}
                Key Advantages of Smart Contracts
              </h1>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <ul class="list-disc text-gray-800 mt-1 mb-3 ml-10">
                  <li>Quick, Reliable & Immutable</li>
                  <li>Automatic Monitoringc</li>
                  <li>Clear Recordkeeping</li>
                  <li>Decentralized Performance</li>
                </ul>
                <ul class="list-disc text-gray-800 mt-1 mb-3 ml-10">
                  <li>Creation of New Business Models</li>
                  <li>Intermediary-free Transactions</li>
                  <li>A Self-auditing Mechanism of Digital Value</li>
                </ul>
                <ul class="list-disc text-gray-800 mt-1 mb-3 ml-10">
                  <li>High Accuracy</li>
                  <li>Associated with Cryptocurrency</li>
                  <li>Automatic Fulfillment of Orders</li>
                </ul>
              </div>

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
                Why You Should Hire Rytsense Technologies For Smart Contracts
                Development{" "}
              </h1>
              <p>
                At Rytsense Technologies, we have a good team of developers who
                have proven skills and vast expertise in offering smart
                contracts development services and solutions as per our clients’
                requirement. Whether you need to accept payment through
                cryptocurrencies or want to secure your transactions by using
                smart contracts, our smart contract development services are
                sure to get your task done the right way and cost-effectively.{" "}
              </p>

              <ul className="list-disc text-gray-800 mt-1 mb-3 ml-10">
                <li>Strong Blockchain &Smart contracts development team</li>
                <li>Customizable and scalable solutions</li>
                <li>
                  Web platforms using Phoneix / Elixir and serverless
                  architecture
                </li>
                <li>Quick-responder to your business needs</li>
                <li>Development with Web3, Solidity, Cakeshop, and Truffle</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
