"use client";
import { useState, useEffect } from "react";
import MainPageBanner from "../../components/home/MainPageBanner";
import Carousalclutch from "../../components/common/Carousalclutch";
import Ranking from "../../components/home/Ranking";
import CompanyStats from "../../components/home/CompanyStats";
import RankSection from "../../components/home/RankSection";
import KeyfeatureClutch from "../../components/home/KeyfeatureClutch";
import Testimonials from "../../components/common/Testimonials";
import ServicesBox from "../../components/common/ServicesBox";
import Partnercompany from "../../components/home/Partnercompany";
import EstimateProject from "../../components/home/EstimateProject";
import PartnerShipModel from "../../components/home/PartnerShipModel";
import ServiceSuspence from "../../components/home/ServiceSuspence";
import MainProdcast from "../../components/home/MainProdcast";
import LatestBlogs from "../../components/home/Latestblog";
import LetsConnect from "../../components/common/LetsConnect";
import CaseStudyCardAnimation from "../../components/home/CaseStudyCardAnimation";
import EaseInOutCardsAnimation from "../../components/case-study/EaseInOutCardsAnimation";
import MobileViewCaseStudy from "../../components/case-study/MobileViewCaseStudy";

export default function Home() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Function to update state based on screen width
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Change width as per your mobile breakpoint
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <main>
        <MainPageBanner />
        <Carousalclutch />
        <Ranking />
        <CompanyStats />
        <RankSection />
        <KeyfeatureClutch />
        <ServicesBox
          heading={
            "We Create New Solution &Transform.Existing Ones With a Development.  Process That Beats Industry - Best Time Line"
          }
        />
        {/* Conditionally render the correct component based on screen size */}
        {isMobileView ? <MobileViewCaseStudy /> : <EaseInOutCardsAnimation />}
        <Partnercompany />
        <EstimateProject />
        <PartnerShipModel />
        <ServiceSuspence />
        <MainProdcast />
        <LatestBlogs />
        <Testimonials />
        {!isMobileView && <CaseStudyCardAnimation />}
        <LetsConnect />
      </main>
    </>
  );
}
