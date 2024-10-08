import IndustryBanner from "../../../components/industry/common/IndustryBanner";
import { industryData } from "../../../mock/industryData";
import DevelopmentService from "../../../components/industry/common/DevelopmentService";
import SponserSection1 from "../../../components/industry/common/SponserSection1";
import QualitiesService from "../../../components/industry/common/QualitiesService";
import IndustryFeatures from "../../../components/industry/common/IndustryFeatures";
import InnovativeTechnologies from "../../../components/industry/common/InnovativeTechnologies";
import IndustryFaq from "../../../components/industry/common/IndustryFaq";
import IndustryTechnologies from "../../../components/industry/common/IndustryTechnologies";

// 1. generateStaticParams - Generate the paths for static pages
export async function generateStaticParams() {
  return industryData.map((page) => ({
    slug: page.slug,
  }));
}

// 2. generateMetadata - For SEO purposes
export async function generateMetadata({ params }) {
  const data = industryData.find((page) => page.slug === params.slug);

  return {
    title: data?.seoTitle || "Default Title",
    description: data?.seoDescription || "Default Description",
  };
}

// 3. Page component - Fetch data and render the page content
const Page = ({ params }) => {
  const data = industryData.find((page) => page.slug === params.slug);

  if (!data) {
    return <div>Page not found</div>;
  }

  return (
    <>
      <IndustryBanner
        heading={data?.company}
        subheading={data?.about}
        bannerImage={data?.bg}
        buttonText={data?.buttontext}
      />
      <DevelopmentService
        heading={data?.appservicesheading}
        subheading={data?.appservicespassage}
        data={data?.appservicecontent}
      />
      <SponserSection1
        title={data?.servicebutton?.heading}
        buttonText={data?.servicebutton?.buttoncontent}
        bgImage={data?.bg}
      />
      <QualitiesService
        data={data?.servicemid?.arraypassage}
        title={data?.servicemid?.heading}
        para={data?.servicemid?.passage}
      />
      <IndustryFeatures
        title={data?.features?.heading}
        subTitle={data?.features?.passage}
        data={data?.features?.featurearray}
      />
      <InnovativeTechnologies
        title={data?.developmentprocess?.heading}
        data={data?.developmentprocess?.array}
      />
      <IndustryFaq faq={data?.faq?.accordinarray} />
      <IndustryTechnologies
        title={data?.technology?.heading}
        subTitle={data?.technology?.passage}
        data={data?.technology?.technologyarray}
      />
    </>
  );
};

export default Page;
