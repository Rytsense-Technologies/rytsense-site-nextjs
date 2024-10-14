import React from "react";
import Hero from "../../../components/industries-comp/finance/Hero";
import TrustedBrands from "../../../components/industries-comp/finance/TrustedBrands";
import ServicesSection from "../../../components/industries-comp/finance/ServicesSection";
import ServicesGrid from "../../../components/industries-comp/finance/ServicesGrid";
import BenefitsSection from "../../../components/industries-comp/finance/BenefitsSection";
import Solutions from "../../../components/industries-comp/finance/Solutions";
import FintechSection from "../../../components/industries-comp/finance/FintechSection";
import BrandsSection from "../../../components/industries-comp/finance/BrandsSection";
import FinanceTestimonials from "../../../components/industries-comp/finance/FinanceTestimonials";
import FAQSection from "../../../components/industries-comp/finance/FAQSection";
import FinanceNav from "../../../components/industries-comp/finance/FinanceNav";

const page = () => {
  return (
    <>
      <FinanceNav />
      <div className="lg:px-20">
        <Hero />
        <TrustedBrands />
        <ServicesSection />
        <ServicesGrid />
        <BenefitsSection />
        <Solutions />
        <FintechSection />
        <BrandsSection />
        <FinanceTestimonials />
        <FAQSection />
      </div>
    </>
  );
};

export default page;
