import React from "react";
import MainBanner from "../../components/clutch/MainBanner";
import CompanyStats from "../../components/clutch/CompanyStats";
import RankSection from "../../components/home/RankSection";
import KeyfeatureClutch from "../../components/home/KeyfeatureClutch";
import ServicesBox from "../../components/common/ServicesBox";
import EstimateProject from "../../components/home/EstimateProject";
import Partnercompany from "../../components/home/Partnercompany";
import ServiceSuspence from "../../components/clutch/ServiceSuspence";
import LatestBlogs from "../../components/home/Latestblog";
import Faq from "../../components/common/faq/Faq";
import LetsConnect from "../../components/common/LetsConnect";
import Carousalclutch from "../../components/common/Carousalclutch";

const ClutchLandingPage = () => {
  const faqs = [
    {
      question: "What software development services do you offer?",
      answer:
        "With a dedicated team of over 50 highly skilled software developers, including top-tier AI specialists, and a track record of over 800 successful project deliveries, we stand at the forefront of web application development. As a premier AI developer company, we possess the expertise and experience to cater to your unique software needs. Our comprehensive suite of services encompasses cutting-edge AI solutions, innovative mobile apps, and customized software development tailored to elevate your business to new heights",
    },
    {
      question: "What LLMs do you use?",
      answer:
        "We use 4 different LLM providers and decide which one to use based on latency, cost, speed, performance and task in real-time. Taking care of this plumbing, we make sure our customers focus on getting great answers.",
    },
    {
      question: "Do you assist with software integration and data migration?",
      answer:
        "Yes, we offer end-to-end software integration and data migration services that can simplify your critical business processes. As a dedicated mobile application development company, we ensure using a tailored strategy to optimize the software integration process. We start with a thorough analysis of your business objectives and align them with the most appropriate integration approach. We prioritize non-functional requirements like scalability and security to determine the ideal delivery model and governance structure.",
    },
    {
      question:
        "How do you ensure the security and quality of the software you develop?",
      answer:
        "As the best software and mobile application development agency, we hold security and software quality in the highest regard. We begin the project by signing a Non-Disclosure Agreement (NDA) to safeguard your information. This legally binding document emphasizes our commitment to maintaining the confidentiality of your sensitive data and establishing a secure and trustworthy partnership.",
    },
    {
      question: "Do you offer app maintenance and support services?",
      answer:
        "Yes, we offer comprehensive maintenance and support services tailored to meet your business requirements. Being one of the best mobile app development agencies, our approach is centered around helping you choose the maintenance strategy that best aligns with your needs, ensuring the seamless operation of your software applications.",
    },
  ];

  return (
    <>
      <MainBanner />
      <Carousalclutch/>
      <CompanyStats />
      <RankSection />
      <KeyfeatureClutch />
      <ServicesBox
        heading={
          "We Create New Solution &Transform.Existing Ones With a Development.  Process That Beats Industry - Best Time Line</span>"
        }
      />
      <EstimateProject />
      {/* <PartnerClutch /> */}
      <Partnercompany />
      {/* <ServiceSuspence /> */}
      <LatestBlogs />
      <Faq faqs={faqs} />

      <LetsConnect />
    </>
  );
};

export default ClutchLandingPage;
