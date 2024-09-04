import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/service-img/lang-banner.png";
import Link from "next/link";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Natural Languge ProcessingCompany"}
        subTitle={
          "Classify The Identification And Analyze With Natural Language Processing (NLP)"
        }
        heroImage={bannerImage}
      />
      <section className="mb-8 ml-10 mr-10">
        <div className="p-10 my-4 ">
          <p className="text-gray-600 p-5">
            {" "}
            Natural Language Processing is increasing rapidly because of its
            method and concepts deployed in various new language technologies.
            It is a set of Artificial Intelligence that empower computers to
            understand natural languages. Natural Language Processing is a
            medium for the words and sentences used to communicate with humans.
            It allows you to assist handwriting identification, predictive text
            support, machine translation, and much more. Natural Language
            Processing services are based on text analytics and solution
            services, and the service leverages information to analyze the text
            for performing recognition and automation. The language helps to
            create value and facilitate power to the businesses.
          </p>
          <p className="text-gray-600 p-5">
            It is the best-computerized approach to analyze, discover, and
            understand the human language and assist the developers in following
            the framework and executing the task accordingly. It also helps them
            organize tasks like recognizing entities, reviewing automatically,
            identifying speech, understanding the sentiments, and other topics,
            which helps the company perform better.{" "}
          </p>
          <p className="text-gray-600 p-5">
            Natural Language Processing enables machines to comprehend how
            humans communicate, not just in words but also in concepts and their
            connections to generate meaning. The algorithmic libraries of NLP
            are structured so that they have been used to create blocks and
            develop an application for syntactic and grammatical analysis
            techniques in real-time.
          </p>
        </div>
      </section>

      <div className="ml-10 mr-10 p-16">
        <h1 className="font-bold text-xl text-gray-800">
          NLP Solution We Offer:
        </h1>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Text Categorization
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          It is a classic technique to categorize text. With Machine Learning,
          the tasks have become extremely quick and straightforward and provide
          the best result.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800"> Sentiment Anlysis</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Sentiment Analysis shows the approach, aspect, perspective, and other
          factors of humans. Natural Language Processing is incomplete without a
          sentiment Analysis Solution, and it tailors every step of the process
          with human behaviour.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          Intent Classification
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          The Intent Classification service is critical for training and
          building chatbots, virtual assistants, and other human-machine
          interaction systems. It is a method to support businesses in
          interpreting the conversations intent accurately.{" "}
        </p>

        <h1 className="font-bold text-xl text-gray-800">Entity Recognition</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Entity Recognition is a technique for identifying and classifying
          various items in the text. It may extract data from any text, such as
          a web page, a piece of news, or social media content. It has become an
          imperative step for several businesses.{" "}
        </p>
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
