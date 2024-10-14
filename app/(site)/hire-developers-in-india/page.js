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

export const metadata = {
  title: "Best software developers in india | Rytsense Technologies",
  description:
    "Hire programmers in India from a top software development company. We offer skilled developers and programmers for your projects, helping you find the best software developers in India for custom solutions",
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
        <WhyHireUs />
        <ValuesAndBenefits />
      </div>
      {/* <HireIndiaDevelopers /> */}
      <BenefitsOfHiring />
      <HiringFactors />
      <HiringChallenges />
      <HiringComparison />
      <DeveloperTips />
      <FAQSection />
    </>
  );
};

export default page;
