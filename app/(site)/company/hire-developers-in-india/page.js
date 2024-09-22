import React from "react";
import HeroSection from "../../../components/hire-developers/HeroSection";
import WhyHireUs from "../../../components/hire-developers/WhyHireUs";
import ValuesAndBenefits from "../../../components/hire-developers/ValuesAndBenefits";
// import HireIndiaDevelopers from "../../components/hire-developers/HireIndiaDevelopers";
import BenefitsOfHiring from "../../../components/hire-developers/BenefitsOfHiring";
import HiringFactors from "../../../components/hire-developers/HiringFactors";
import HiringChallenges from "../../../components/hire-developers/HiringChallenges";
import HiringComparison from "../../../components/hire-developers/HiringComparison";
import DeveloperTips from "../../../components/hire-developers/DeveloperTips";
import FAQSection from "../../../components/hire-developers/FAQSection";

export const metadata = {
  title: "Hire Software Developers / Programmers In India",
  description:
    "Looking to hire Indian software developers/ programmers ? Hire dedicated and skilled software programmers/developers in India to boost your project. Lets connect today!",
  alternates: {
    canonical: "https://rytsensetech.com/hire-developers-in-india",
    languages: {
      "en-us": "https://rytsensetech.com/hire-developers-in-india",
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
