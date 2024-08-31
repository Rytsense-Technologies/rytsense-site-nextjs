
import HireBanner from "../../../components/hire/HireBanner";
import pagesData from "../../../mock/pagesData.json"
import PricingPlane from "../../../components/hire/PricingPlane"
import TechnologyStack from "../../../components/services/TechnologyStack";
import ClassTalent from "../../../components/hire/ClassTalent"
import HiringSteps from "../../../components/hire/HiringSteps"
import DescriptionSection from "../../../components/hire/DescriptionSection"
import Faq from "../../../components/common/faq/Faq"

const page = ({ params }) => {
  const pageData = pagesData.find((page) => page.slug === params.slug);

  return (
<>
<HireBanner bannerData={pageData.banner}/>
<DescriptionSection desc={pageData.description}/>
<PricingPlane/>
<ClassTalent/>
<HiringSteps/>
<TechnologyStack/>
<Faq faqs={pageData.faqs}/>
</>
  );
};

export default page;
