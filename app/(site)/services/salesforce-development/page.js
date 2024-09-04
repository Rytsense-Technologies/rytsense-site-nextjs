import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import ClientReviews from "../../../components/services/ClientReviews";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/services/saleforce.png";

const introduction = [
  `Customers are surely the biggest & most valuable assets of your company. And, to their requirements, 
    the establishment of an effective CRM system becomes important now. The tools and services in Salesforce 
    are designed to turn a business into an enterprise where every employee, vendors, and customer are together 
    in a single platform helping an organization to function more efficiently than ever. With the growth of 
    Salesforce’s cloud-based CRM and other advanced products, more and more organizations are adopting them 
    to streamline their sales processes.`,
];

const benefits = [
  "In-depth Account Planning",
  "Effective Time Management",
  "Better Team Collaboration",
  "Improved Accessibility",
  "Access to Customer Related Information",
];

const offerings = [
  {
    title: "Salesforce Development",
    description: `A team of Rytsense can help your organization in designing and implementing strong Salesforce-based solutions and get long-term advantages, whether you are a startup or a large Enterprise.`,
    services: [
      "Salesforce Implementation Consulting",
      "Force.com Development",
      "Force.com Integration and Migration",
    ],
  },
  {
    title: "Salesforce Mobile Development",
    description: `As a top Salesforce development company, Rytsense Technologies can help you to increase Salesforce functionality to mobile devices and use Salesforce to its highest potential.`,
    services: [
      "Salesforce Mobile App Consulting & Development",
      "Mobile apps for Appexchange",
      "UI/UX Design Services",
    ],
  },
  {
    title: "Salesforce AppExchange Development",
    description: `AppExchange can improve Salesforce's existing functionality or even implement additional features. With Rytsense Technologies Salesforce development services, you can build custom apps for AppExchange.`,
    services: ["App Consulting", "App Development", "Lightning Apps"],
  },
  {
    title: "Salesforce Lightning Development",
    description: `As a leading salesforce consulting company, Rytsense can help your organization to take full advantage of Salesforce Lightning to make your Salesforce implementation more convenient and natural.`,
    services: [
      "Salesforce Lightning Consulting",
      "Salesforce App Development",
      "Component Development for Salesforce Lightning",
    ],
  },
  {
    title: "Integration With Third-party Solutions",
    description: `We help many businesses to connect this third-party software with their Salesforce Solution so that they can work more efficiently and actively.`,
    services: [
      "Integration Using Tools",
      "API Development",
      "Integration App Development",
      "Custom Integration",
    ],
  },
];

const technicalExpertise = [
  "Writing Apex Triggers And Bulkify Triggers",
  "Overriding Default Behavior",
  "Future Methods And Batch Apex",
  "Record Sharing Through The Apex",
  "Integrating Yahoo UI/jQuery Components In Visualforce",
  "Inbound & Outbound Email Services",
  "Webservice Callouts And Building Web Services",
  "Scheduled Jobs",
];

const elevateBusiness = [
  "Experienced Salesforce Development",
  "Automate And Simplify Your Sales Processes",
  "100% Transparency",
  "Quality Work With Effective Results",
  "Focus On Complete Client Satisfaction",
  "Regular Showcase Of Work",
  "Innovative Approach",
  "Offer 24/7 Customer Support Channels",
  "Cut Down Cost On Infrastructure & Maintenance",
];

const page = () => {
  return (
    <>
      <HeroSection
        title={"Salesforce Development Company"}
        subTitle={"Get the Best For The Best With Our ML"}
        heroImage={bannerImage}
      />
      <div className="bg-gray-100 p-8">
        {/* Introduction Section */}
        <section className="mb-8 p-10 bg-white rounded-lg shadow-md ml-10 mr-10">
          {introduction.map((paragraph, index) => (
            <div key={index} className="p-10 my-4 mb-4">
              <p className="text-gray-600">{paragraph}</p>
            </div>
          ))}
        </section>

        {/* Benefits Section */}
        <section className="p-10 bg-white rounded-lg shadow-md ml-10 mr-10">
          <h1 className="font-bold text-xl text-gray-800 mb-4">
            Important Benefits of Salesforce Development
          </h1>
          <ul className="list-disc text-gray-800 ml-10 space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </section>

        {/* Offerings Section */}
        <section className="mt-8 p-10 bg-white rounded-lg shadow-md ml-10 mr-10">
          <h1 className="font-bold text-xl text-gray-800 mb-4">
            Salesforce Development Company Offerings
          </h1>
          {offerings.map((offering, index) => (
            <div key={index} className="mb-8">
              <h2 className="font-bold text-xl text-gray-800">
                {offering.title}
              </h2>
              <p className="text-gray-800 mt-1 mb-3">{offering.description}</p>
              <ul className="list-disc text-gray-800 ml-10 space-y-2">
                {offering.services.map((service, idx) => (
                  <li key={idx}>{service}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Technical Expertise Section */}
        <section className="mt-8 p-10 bg-white rounded-lg shadow-md ml-10 mr-10">
          <h1 className="font-bold text-xl text-gray-800 mb-4">
            Technical Expertise That You Will Get From Rytsense
          </h1>
          <ul className="list-disc text-gray-800 ml-10 space-y-2">
            {technicalExpertise.map((expertise, index) => (
              <li key={index}>{expertise}</li>
            ))}
          </ul>
        </section>

        {/* Elevate Your Business Section */}
        <section className="mt-8 p-10 bg-white rounded-lg shadow-md ml-10 mr-10">
          <h1 className="font-bold text-xl text-gray-800 mb-4">
            Elevate Your Business To The Next Level With Rytsense
          </h1>
          <p className="text-gray-800 mt-1 mb-3">
            Rytsense is a leading web and app development company with long
            years of industry experience in Salesforce development. We believe
            that innovation paves the path for success and provide high-quality
            Salesforce development services that can change the way you do
            business. We are here to transform the way businesses communicate
            and manage their customers, products, partners, and even employees.
            We are here to provide the best Salesforce services for you.
          </p>
          <ul className="list-disc text-gray-800 ml-10 space-y-2">
            {elevateBusiness.map((point, index) => (
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
