import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/service-img/senti-banner.png";
import Link from "next/link";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Sentimental AnalysisCompany"}
        subTitle={"Understand Behavioural Aspects With Sentimental Analysis"}
        heroImage={bannerImage}
      />
      <section className="mb-8ml-10 mr-10">
        <div className="p-10 my-4 mb-4">
          <p className="text-gray-600 p-5">
            {" "}
            It is a computer vision technique to detect and identify objects in
            images and video. It is a method driven by Artificial Intelligence
            and Machine learning. Facial practices like image, video, and other
            minor things are detected with object recognition. Through computer
            vision techniques, you can perform analytics.
          </p>
          <p className="text-gray-600 p-5">
            By understanding the behavioural changes, the company can tailor
            products and services according to that- to match the needs. Thus,
            it shifted to be a necessary tool to monitor and know the opinion.
            The Sentimental Analysis is a robust process for decision-making and
            predicts further analytics. Several advantages can be gain through
            Sentimental Analysis. The service analyzes the data, customer
            reviews, feedback, and other media source, from which data
            questionnaires are prepared for analytics. It enhances the
            performance of the businesses.
          </p>{" "}
        </div>
        <p className="text-gray-600 p-5">
          Our experienced team has deep knowledge and understands the insights
          on Sentimental Analysis. We bring the best accurate and specific data
          that helps you to make an efficient decision. Rytsense Technologies
          will help you to analyze the information in real-time with effective
          and efficient latest tools. It benefits to leverage human intelligence
          and behaviour by the message and collected data. We set an algorithm
          that extracts relevant keywords and sentences based on human behavior,
          preferences, and words prediction. Rytsense Technologies makes it
          possible to maintain the enhance the precision of the search work
          without any additional work. We provide domain expertise and analysis
          in multiple languages so that different languages and industries can
          predict excellent results. Our team ensures quality and outcome with
          sentimental analysis.
        </p>
      </section>
      <TechnologyStack />
    </>
  );
};

export default page;
