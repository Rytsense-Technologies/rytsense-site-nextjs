import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/service-img/data-banner.png";
import Link from "next/link";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Data AnalystCompany"}
        subTitle={
          "Expand Brand Value & Data-Driven Decision With Data Analytics"
        }
        heroImage={bannerImage}
      />
      <section className="mb-8ml-10 mr-10">
        <div className="p-10 my-4 mb-4">
          <p className="text-gray-600 p-5">
            {" "}
            It Data Analytics is an essential part of Artificial Intelligence.
            It enhances the business, helps them to gain brand value by making a
            data-driven decision. The collected data is beneficial for the
            company to make valuable analyses. Data Analytics also reduces the
            market risks and allows us to make brilliant decisions. In other
            words, it helps businesses to transform their business data into
            actionable insights. Data Analytics enables us to make instant and
            data-driven decisions. a computer vision technique to detect and
            identify objects in images and video. It is a method driven by
            Artificial Intelligence and Machine learning. Facial practices like
            image, video, and other minor things are detected with object
            recognition. Through computer vision techniques, you can perform
            analytics.
          </p>
          <p className="text-gray-600 pt-5">
            Data Analytics gives a vision of the business growth, actionable
            insights, realistic leverage, and more. The latest market trends are
            known with Data Analytics. Following modification and patterns are
            implemented with the help of the tool. It is an intelligent approach
            to obtain valuable insights and solutions. Artificial Intelligence
            provides optimization, aspect, automation, and much more. It helps
            businesses expand their brand loyalty and connect with the product
            and services with enhanced throughput, data-driven decision systems
            and monetize the earning.{" "}
          </p>
        </div>
      </section>

      <div className=" ml-10 mr-10 p-16">
        <h1 className="font-bold text-xl text-gray-800">Process We Follow:</h1>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Collect Data Requirements
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          It is essential to know what data is required and how to classify it
          into respective categories. Our experts define the business necessary
          and adhere to the challenges to tackle. We collect relevant
          information from the current database and other sources. It helps to
          quantify available data and identify KPIs and objectives. The data is
          formed with consistency, collaboration, and others.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800"> Data Analysis</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          The following process is an analysis of the data and information
          gathered by Data Analytics. The future prediction is recognized after
          the data analysis is optimized and provides a new framework for data
          research. It helps to recognize patterns, start comparisons, and build
          insights. The tool also removes unnecessary and misleading information
          that is irrelevant to the objectives. The data structure is a frame to
          implement it accurately.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800"> Data Optimization</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Data analysis is estimated, and a predictive technique is applied to
          plan future consequences. It optimizes the data and implements it
          after objectives are defined. The tool is cost-effective, reliable,
          and scalable to the business. A conclusion is prepared with Data
          Optimization for further research.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800">
          Final Deploy Process
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          The last process step is deployment and maintenance. The result is
          deployed, monitor, and more. Our Data Analyst keeps a constant eye on
          challenges, issues and sustains the maintenance of the objective.{" "}
        </p>
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
