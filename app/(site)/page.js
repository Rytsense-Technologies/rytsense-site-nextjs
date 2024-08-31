import Image from "next/image";

import MainPageBanner from "../components/home/MainPageBanner";

import Carousalclutch from "../components/home/Carousalclutch";
import Ranking from "../components/home/Ranking";
import CompanyStats from "../components/home/CompanyStats";
import RankSection from "../components/home/RankSection";
import KeyfeatureClutch from "../components/home/KeyfeatureClutch";
import Testimonials from "../components/common/Testimonials";
import ClientOnly from "../client/ClientOnly";
import ServicesBox from "../components/common/ServicesBox";
import Partnercompany from "../components/home/Partnercompany";
import EstimateProject from "../components/home/EstimateProject";
import PartnerShipModel from "../components/home/PartnerShipModel";
import ServiceSuspence from "../components/home/ServiceSuspence";
import MainProdcast from "../components/home/MainProdcast";
import LatestBlogs from "../components/home/Latestblog";
// import CaseStudyCardAnimation from "../components/home/CaseStudyCardAnimation";

export const metadata = {
  title:
    "Rytsense Technologies | Leading Software Development Company in USA & India",
  description:
    "Rytsense Technologies, a rapidly growing IT services provider with over 10 years of experience, empowers companies to redefine their digital possibilities. With a team of 100 tech experts, we build the digital infrastructure that positions our clients as market leaders. We create new solutions and transform existing ones with a development process that meets industry-best timelines. As a leading software development company in the USA and India, we offer custom app development services across various industries. Discover our partnership models, including fixed-price engagements for well-defined projects and time & material models for flexible, ongoing development. We also provide on-site development resources for clients needing temporary support, ensuring cost-effective and timely project delivery.",
  alternates: {
    canonical: "https://www.rytsensetech.com/",
  },
};

export default function Home() {
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
            "We Create New Solution &Transform.Existing Ones With a Development.  Process That Beats Industry - Best Time Line</span>"
          }
        />
        <Partnercompany />
        <EstimateProject />
        <PartnerShipModel />
        <ServiceSuspence />
        <MainProdcast />
        <LatestBlogs />
        {/* <CaseStudyCardAnimation /> */}

        {/* <Testimonials/> */}
      </main>
    </>
  );
}
