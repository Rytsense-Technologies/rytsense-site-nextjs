import React from "react";
import TechnologyStack from "../../../../components/services/TechnologyStack";
import HeroSection from "../../../../components/services/HeroSection";
import bannerImage from "../../../../../public/images/service-img/bi-banner.png";
import Link from "next/link";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Buisness Intelligence Development"}
        subTitle={
          "Hire Business Intelligence Experts For Accurate And Well-informed Decision-making"
        }
        heroImage={bannerImage}
      />
      <section className="mb-8ml-10 mr-10">
        <div className="p-10 my-4 mb-4">
          <p className="text-gray-600 p-5">
            {" "}
            Business Intelligence is one of the essential services needed to
            analyze business activity. The services purpose is to reach targets
            and goals in an optimized manner.Rytsense Technologies offers
            outstanding business intelligence services that provide an
            end-to-end solution for a wide range of Business Intelligence and
            Analytics services. It helps to predict the likely expectation
            opportunity and develop perspectives. Descriptive analytics helps to
            measure the performance of the present and future. With the help of
            BI, the decision-making process enhances and presents the accurate
            interpretation of data. BI has excellent tools and technology that
            leverage the analytical skills of the business. The requirement for
            Business Intelligence comes with the concept that manages not to
            lend inaccurate and incomplete information. As a wrong decision can
            take a toll on your business, Business Intelligence ensures that
            data is precise and well-informed. Being a leading mobile app
            development company, we assist you to recognize emerging trends,
            accurate decision-making processes, data-driven tactics and find
            valuable insights.
          </p>
        </div>
      </section>

      <div className=" ml-10 mr-10 p-16">
        <h1 className="font-bold text-xl text-gray-800">
          Our BI Experts Have Master Major BI Tools:
        </h1>

        <h1 className="font-bold text-xl text-gray-800"> Power BI</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          It is a set of software services that help connectors work together to
          turn data into valuable insights. The tool is robust and transforms
          business structure better.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800"> Tableau</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          BI applies Tableau to predict and understand the future. With the help
          of data and decide according to that. It is one of the most used tools
          in Business Intelligence{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800"> User Verification</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Suppose someone is looking for minor details for verification. In that
          case, object recognition makes it more accessible, and it makes
          everything on the spot and helps save time on the long going process.
        </p>

        <h1 className="font-bold text-xl text-gray-800"> Plotly</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          It is a tool that helps perform analytics, statistics, and graphing
          for managerial work and makes future prediction easier. The gathered
          information in analytics is applied in several sectors and business
          fields.{" "}
        </p>
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
