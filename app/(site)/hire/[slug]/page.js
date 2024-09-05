import HireBanner from "../../../components/hire/HireBanner";
import pagesData from "../../../mock/pagesData.json";
import PricingPlane from "../../../components/hire/PricingPlane";
import TechnologyStack from "../../../components/services/TechnologyStack";
import ClassTalent from "../../../components/hire/ClassTalent";
import HiringSteps from "../../../components/hire/HiringSteps";
import DescriptionSection from "../../../components/hire/DescriptionSection";
import Faq from "../../../components/common/faq/Faq";

import AppDev from "../../../components/hire/hire-page-comp/AppDev";

import AndroidDev from "../../../components/hire/hire-page-comp/AndroidDev";
import AngularDev from "../../../components/hire/hire-page-comp/AppDev";
import WebDev from "../../../components/hire/hire-page-comp/WebDev";
import SoftwareDev from "../../../components/hire/hire-page-comp/SoftwareDev";
import BlockchainDev from "../../../components/hire/hire-page-comp/BlockchainDev";
import BackDev from "../../../components/hire/hire-page-comp/BackDev";
import CakePhpDev from "../../../components/hire/hire-page-comp/CakePhpDev";
import CodeigniterDev from "../../../components/hire/hire-page-comp/CodeigniterDev";
import DartDev from "../../../components/hire/hire-page-comp/DartDev";
import DjangoDev from "../../../components/hire/hire-page-comp/DjangoDev";
import FlutterDev from "../../../components/hire/hire-page-comp/FlutterDev";
import FrontDev from "../../../components/hire/hire-page-comp/FrontDev";
import FullStackDev from "../../../components/hire/hire-page-comp/FullStackDev";
import GoLangDev from "../../../components/hire/hire-page-comp/GoLangDev";
import Iphoneev from "../../../components/hire/hire-page-comp/Iphoneev";
import IonicDev from "../../../components/hire/hire-page-comp/IonicDev";
import JavaDev from "../../../components/hire/hire-page-comp/JavaDev";
import IOSDev from "../../../components/hire/hire-page-comp/IOSDev";
import IOTArchi from "../../../components/hire/hire-page-comp/IOTArchi";
import KotlinDev from "../../../components/hire/hire-page-comp/KotlinDev";
import LaravelDev from "../../../components/hire/hire-page-comp/LaravelDev";
import MangetoDev from "../../../components/hire/hire-page-comp/MangetoDev";
import NodeJsdev from "../../../components/hire/hire-page-comp/NodeJsDev";
import PythonDev from "../../../components/hire/hire-page-comp/PythonDev";
import PhpDev from "../../../components/hire/hire-page-comp/PhpDev";
import ReactDev from "../../../components/hire/hire-page-comp/ReactDev";
import ReactNativeDev from "../../../components/hire/hire-page-comp/RectNativeDev";
import SalesForceDev from "../../../components/hire/hire-page-comp/SalesForceDev";
import ShopifyDev from "../../../components/hire/hire-page-comp/ShopifyDev";
import SolidityDev from "../../../components/hire/hire-page-comp/SolidityDev";
import SwiftDev from "../../../components/hire/hire-page-comp/SwiftDev";
import VueJsDev from "../../../components/hire/hire-page-comp/VueJsDev";
import WordpressDev from "../../../components/hire/hire-page-comp/WordpressDev";
import SpringBootDev from "../../../components/hire/hire-page-comp/SpringBootDev";
import UIUX from "../../../components/hire/hire-page-comp/UIUX";
import WooCommerceDev from "../../../components/hire/hire-page-comp/WooCommerceDev";
import YiiDev from "../../../components/hire/hire-page-comp/YiiDev";
import DataSci from "../../../components/hire/hire-page-comp/DataSci";

const page = ({ params }) => {
  const pageData = pagesData.find((page) => page.slug === params.slug);

  const renderComponentById = (id) => {
    switch (id) {
      case 1:
        return <AppDev />;
      case 2:
        return <WebDev />;
      case 3:
        return <SoftwareDev />;
      case 4:
        return <FullStackDev />;
      case 5:
        return <FrontDev />;
      case 6:
        return <BackDev />;
      case 7:
        return <UIUX />;
      case 8:
        return <IOTArchi />;
      case 9:
        return <SalesForceDev />;
      case 10:
        return <DataSci />;
      case 11:
        return <BlockchainDev />;
      case 12:
        return <AndroidDev />;
      case 13:
        return <IOSDev />;
      case 14:
        return <Iphoneev />;
      case 15:
        return <FlutterDev />;
      case 16:
        return <ReactNativeDev />;
      case 17:
        return <SwiftDev />;
      case 18:
        return <IonicDev />;
      case 19:
        return <KotlinDev />;
      case 20:
        return <JavaDev />;
      case 21:
        return <AngularDev />;
      case 22:
        return <ReactDev />;
      case 23:
        return <NodeJsdev />;
      case 24:
        return <VueJsDev />;
      case 25:
        return <PhpDev />;
      case 26:
        return <WordpressDev />;
      case 27:
        return <CakePhpDev />;
      case 28:
        return <CodeigniterDev />;
      case 29:
        return <LaravelDev />;
      case 30:
        return <YiiDev />;
      case 31:
        return <MangetoDev />;
      case 32:
        return <ShopifyDev />;
      // case 33:
      //   return <SoftwareDev />;
      case 34:
        return <WooCommerceDev />;
      case 35:
        return <PythonDev />;
      case 36:
        return <GoLangDev />;
      case 37:
        return <SolidityDev />;

      case 38:
        return <DartDev />;
      case 39:
        return <SpringBootDev />;
      case 40:
        return <DjangoDev />;

      default:
        return null;
    }
  };

  return (
    <>
      <HireBanner bannerData={pageData.banner} />
      <DescriptionSection desc={pageData.description} />
      {renderComponentById(pageData.id)}{" "}
      {/* Conditionally render based on id */}
      <PricingPlane />
      <ClassTalent />
      <HiringSteps />
      <TechnologyStack />
      <Faq faqs={pageData.faqs} />
    </>
  );
};

export default page;
