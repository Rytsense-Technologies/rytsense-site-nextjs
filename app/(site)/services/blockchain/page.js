import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import ClientReviews from "../../../components/services/ClientReviews";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/services/blockchain.png";

const blockchainIntro = {
  title: "What is Blockchain?",
  content: `
      In simple words, the blockchain is a unique distributed record that stores data and verifies its integrity. 
      By using a different set of cryptography-based technologies, Blockchain assures that transactions continue into the 
      blockchain database, which is stable.
    `,
};

const blockchainDevelopment = {
  title: "Blockchain Development",
  content: `
      Nowadays, Blockchain has become the most discussed topic around many businesses, especially in the IT Field. 
      This technology has made a new gateway for payments, which is extremely secure. A blockchain is an excellent 
      form of database storage system that uses records to store data or information. These records or blocks get 
      copied automatically with the mechanism of cryptography, providing a more secure data storage platform. 
      This means your data is stored securely in multiple areas, reducing the overall cost of data storage. 
      The blockchain supports cryptocurrencies and digital currencies. Businesses with a huge amount of big data can 
      hire Blockchain developers to create new and more efficient business processes.
    `,
};

const advantagesOfBlockchain = [
  "Efficiency",
  "Transparency",
  "Trust",
  "Flexibility",
];

const services = [
  {
    title: "Smart Contract Development",
    description:
      "In this service, we create a digital contract to secure your transactions in the blockchain or provide an insightful audit of current contracts.",
    advantages: [
      "Automated Monitoring",
      "Transparent Recordkeeping",
      "Reducing Middlemen Costs",
      "Automatic Fulfillment of Orders",
    ],
  },
  {
    title: "Cryptocurrency Wallet Development",
    description:
      "It is poised to reach all forms of virtual payments, and we have the technical expertise to build and maintain them for your application requirements.",
    platforms: [
      "Ripple",
      "NEM",
      "Dogecoin",
      "Peercoin",
      "ZCash",
      "Augur",
      "Bitcoin",
      "Bitcoin Cash",
      "Dash",
      "Etherium",
      "Monero",
    ],
  },
  {
    title: "Crypto Exchange Development",
    description:
      "It explores new monetization methods by using our development services to put together a vast crypto exchange for you.",
    advantages: [
      "High Performance",
      "Private",
      "Open Source",
      "Reliable",
      "Secure",
    ],
  },
  {
    title: "Ethereum App Development",
    description: `
        It is the favored choice for smart crypto investors. With reliable and rapid transactions, Ethereum apps are a part of the base.
      `,
    examples: [
      "Coinbase",
      "Exodus Wallet",
      "Jaxx Wallet",
      "ETHAdress",
      "MyEther Wallet",
    ],
  },
  {
    title: "Hyperledger",
    description: `
        Hyperledger provides stakeholders the knowledge that they are working within an atmosphere that assures that 
        the process will be as trustworthy and transparent as the complete project.
      `,
    features: [
      "Collaboration",
      "Scalability",
      "Longevity",
      "Security",
      "Transparency",
    ],
  },
  {
    title: "Supply Chain Development",
    description: `
        With the supply chain service, we can improve transparency and traceability and reduce administrative costs. 
        It covers the entire lifecycle of a block of data—from production place, to warehouse, logistics, retail, and end consumers.
      `,
    roles: [
      "Improve Inventory Management",
      "Eliminate Manual Errors and Frauds",
      "Reduced Courier Costs",
      "Enhance Customer-Retailer Relationship",
    ],
  },
];

const whyChooseUs = {
  title: "Why Choose Rytsense Technologies for Blockchain Development?",
  points: [
    "Knowledge of Data Structures",
    "Strong at Cryptography",
    "Knowledge of Latest Technologies and Programming Languages",
    "High Availability",
    "Overall ideation process including expanding business opportunities, technical & financial probability",
    "User-friendly, flexible models for various client requirements",
  ],
};

const page = () => {
  return (
    <>
      <HeroSection
        title={"Blockchain Development Company"}
        subTitle={"Hire The Expert Development Team of Blockchain Technology!"}
        heroImage={bannerImage}
      />
      <div className="bg-gray-100 p-8">
        {/* Introduction Section */}
        <section className="mb-8 p-10 bg-white rounded-lg shadow-md">
          <h1 className="font-bold text-2xl mb-5">{blockchainIntro.title}</h1>
          <p className="text-gray-600">{blockchainIntro.content}</p>
        </section>

        {/* Blockchain Development Section */}
        <section className="mb-8 p-10 bg-white rounded-lg shadow-md">
          <h1 className="font-bold text-2xl mb-5">
            {blockchainDevelopment.title}
          </h1>
          <p className="text-gray-600">{blockchainDevelopment.content}</p>
        </section>

        {/* Advantages of Blockchain Section */}
        <section className="p-10 bg-white rounded-lg shadow-md">
          <h1 className="font-bold text-xl text-gray-800 mb-4">
            Advantages of Blockchain Technology
          </h1>
          <ul className="list-disc text-gray-800 ml-10 space-y-2">
            {advantagesOfBlockchain.map((advantage, index) => (
              <li key={index}>{advantage}</li>
            ))}
          </ul>
        </section>

        {/* Services Section */}
        {services.map((service, index) => (
          <section
            key={index}
            className="mt-8 p-10 bg-white rounded-lg shadow-md"
          >
            <h1 className="font-bold text-xl text-gray-800 mb-4">
              {service.title}
            </h1>
            <p className="text-gray-800 mb-4">{service.description}</p>
            {service.advantages && (
              <>
                <h2 className="font-bold text-lg text-gray-800 mb-2">
                  Advantages of {service.title}
                </h2>
                <ul className="list-disc text-gray-800 ml-10 space-y-2">
                  {service.advantages.map((advantage, idx) => (
                    <li key={idx}>{advantage}</li>
                  ))}
                </ul>
              </>
            )}
            {service.platforms && (
              <>
                <h2 className="font-bold text-lg text-gray-800 mb-2">
                  Platforms used for {service.title}
                </h2>
                <ul className="list-disc text-gray-800 ml-10 flex flex-wrap">
                  {service.platforms.map((platform, idx) => (
                    <li key={idx} className="w-full sm:w-1/2 md:w-1/3 p-2">
                      {platform}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {service.examples && (
              <>
                <h2 className="font-bold text-lg text-gray-800 mb-2">
                  Examples of {service.title}
                </h2>
                <ul className="list-disc text-gray-800 ml-10 flex flex-wrap">
                  {service.examples.map((example, idx) => (
                    <li key={idx} className="w-full sm:w-1/2 md:w-1/3 p-2">
                      {example}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {service.features && (
              <>
                <h2 className="font-bold text-lg text-gray-800 mb-2">
                  Features of {service.title}
                </h2>
                <ul className="list-disc text-gray-800 ml-10 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </>
            )}
            {service.roles && (
              <>
                <h2 className="font-bold text-lg text-gray-800 mb-2">
                  Roles in {service.title}
                </h2>
                <ul className="list-disc text-gray-800 ml-10 space-y-2">
                  {service.roles.map((role, idx) => (
                    <li key={idx}>{role}</li>
                  ))}
                </ul>
              </>
            )}
          </section>
        ))}

        {/* Why Choose Us Section */}
        <section className="mt-8 p-10 bg-white rounded-lg shadow-md">
          <h1 className="font-bold text-xl text-gray-800 mb-4">
            {whyChooseUs.title}
          </h1>
          <ul className="list-disc text-gray-800 ml-10 space-y-2">
            {whyChooseUs.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </section>
      </div>
      <ClientReviews />
      <TechnologyStack />
    </>
  );
};

export default page;
