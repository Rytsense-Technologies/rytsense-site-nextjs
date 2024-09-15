import React from "react";
import TechnologyStack from "../../../../components/services/TechnologyStack";
import HeroSection from "../../../../components/services/HeroSection";
import bannerImage from "../../../../../public/images/service-img/alexa-banner.png";
import Link from "next/link";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Alexa Skill DevelopmentCompany"}
        subTitle={
          "Transform Your Business Experince with our Voice Enable Alexa Service"
        }
        heroImage={bannerImage}
      />
      <section className="mb-8ml-10 mr-10">
        <div className="p-10 my-4 mb-4">
          <p className="text-gray-600 p-5">
            {" "}
            Alexa is Amazon’s voice-control system. It allows you to speak your
            wishes to a smart speaker and fulfilled it. Starts with simple ones
            like dimming your lights or play music tracks. With the voice
            responsiveness facility user don’t require to press any buttons so
            just with some trigger words, it can be set to perform an action.
            Voice assistants have transformed the way businesses produce a
            personalized user experience to the target audience.
          </p>
          <p className="text-gray-600 p-5">
            At Rytsense Technologies, we raised by getting well-versed in
            IoT-based mobile app development and Alexa skill development. Our
            courage in these sought-after technologies enables us to perform
            Alexa-enabled commands in the clients’ solutions. Our complete Alexa
            skills integration not just to helps them to voice their business
            but also improve their processes and enhances the customer
            experience.{" "}
          </p>
          <p className="text-gray-600 p-5">
            We have a team of expert IoT developers that can produce as per the
            client’s idea according to Alexa’s policy guideline. Our team
            provides cost-effective solutions to our client’s business demands
            and we make sure the skill set to meet the standard security
            demands. AtRytsense Technologies, our team is extremely excited for
            the opportunities that smart speakers and voice technology present
            and are even more happy to be at the forefront of Alexa skill
            development.
          </p>
        </div>
      </section>

      <div className=" ml-10 mr-10 p-16">
        <h1 className="font-bold text-xl text-gray-800">
          Our Alexa Skilled Development Services
        </h1>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Custom Skill Development
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          At HLIS, we create natural and engaging voice experiences with
          custom-built Alexa interaction models by using our Alexa skills.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Alexa For Home Automation
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Our experienced developers make smart solutions that use
          conversational Artificial Intelligence. We have a great skill to
          integrate the current smart home systems with Alexa.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800">
          Alexa For On-demand solution
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          We assure that your customers can book appointments, place orders, or
          book cabs with amazing voice commands given to Alexa.Rytsense
          Technology team integrate your on-demand business model with Alexa to
          get the benefits of smart devices.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800">Alexa Strategy</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          With modern techniques of voice-based SEO like geotagging,
          question-based queries and much more. We efficiently grow your
          business rankings.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Integration With ERP Systems
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          We allow voice-driven management of business operations that draws
          live data from your ERP system, with the integration of Alexa skills.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800"> AWS Lambda</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          The familiarity with AWS Lambda service mandates in order to create
          robust and dynamic Alexa skills and we are well versed in AWS Lambda
          service.
        </p>
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
