import React from "react";
import HeroSection from "../../components/hire-developers/HeroSection";
import WhyHireUs from "../../components/hire-developers/WhyHireUs";
import ValuesAndBenefits from "../../components/hire-developers/ValuesAndBenefits";
// import HireIndiaDevelopers from "../../components/hire-developers/HireIndiaDevelopers";
import BenefitsOfHiring from "../../components/hire-developers/BenefitsOfHiring";
import HiringFactors from "../../components/hire-developers/HiringFactors";
import HiringChallenges from "../../components/hire-developers/HiringChallenges";
import HiringComparison from "../../components/hire-developers/HiringComparison";
import DeveloperTips from "../../components/hire-developers/DeveloperTips";
import FAQSection from "../../components/hire-developers/FAQSection";
import DetailedMessageSection from "../../components/hire-developers/DetailedMessageSection";
import TypesOfDevelopersSection from "../../components/hire-developers/TypesOfDevelopersSection";
import TechnologiesExpertiseSection from "../../components/hire-developers/TechnologiesExpertiseSection";
import EngagementModelsSection from "../../components/hire-developers/EngagementModelsSection";
import HiringProcessSection from "../../components/hire-developers/HiringProcessSection";
import SuccessStoriesSection from "../../components/hire-developers/SuccessStoriesSection";
import LetsConnect from "../../components/common/LetsConnect";

export const metadata = {
  title: "Hire Dedicated Software Developers and Programmers India",
  description:
    "Looking to hire software developers in India? Rytsense Tech offers skilled, dedicated developers for custom software solutions. Scale your business with expert IT talent today.",
  alternates: {
    canonical: "https://rytsensetech.com/hire-developers-in-india",
    languages: {
      "en-US": "https://rytsensetech.com/hire-developers-in-india",
      // "x-default": "https://rytsensetech.com/ai-development-services-usa",
    },
  },
};

const page = () => {
  return (
    <>
      <div className="lg:px-20">
        <HeroSection />
        <DetailedMessageSection />
        <WhyHireUs />
        <TypesOfDevelopersSection />
        <TechnologiesExpertiseSection />
      </div>

      <BenefitsOfHiring />
      <EngagementModelsSection />
      <HiringProcessSection />
      <SuccessStoriesSection />
      <LetsConnect />
      <FAQSection />
    </>
  );
};

export default page;
