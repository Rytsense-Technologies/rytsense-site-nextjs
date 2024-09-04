import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/service-img/iotsoft-banner.png";
import Link from "next/link";
import varients from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Embedded Software DevelopmentCompany"}
        subTitle={
          "Develop And Deliver Quality With Embedded Software Development"
        }
        heroImage={bannerImage}
      />
      <section className="p-10">
        <p className="text-gray-700">
          Embedded software is computer software written to control devices and
          machines. The different part is that it runs and is specialized for
          specific hardware and has limited memory. Embedded software is to
          support services for the productive use of next-generation hardware
          products. The system is for the modern world, and it has turned
          universal for the software. For quality software, several companies
          prefer Embedded software and systems. The computer software is robust
          and cost-effective, user-friendly, and more. The software needs the
          expertise to provide a quality development process, and Rytsense
          Technology is the one that will provide the best process with
          efficiency.
        </p>{" "}
      </section>
      <section className="p-10">
        <p className="text-gray-700">
          Embedded Software is the most used and popular software development
          and is reliable by multiple businesses. Because of its cost-effective
          manner and scalable experiences. The software solution is
          interoperable and smooth for any device integration. The system has
          adapted and accurate outcomes. The software helps enhance the
          performance of the products and helps maintain the best practices and
          standards of software development.
        </p>{" "}
      </section>

      <div className=" rounded-2xl ml-30 mr-30 p-20">
        <h1 className="font-bold text-xl text-gray-800 mb-5">
          Process We Follow:
        </h1>
        <h1 className="font-bold text-xl text-gray-800">
          {" "}
          1) Product Planning
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          It is essential to understand and plan the product, which is created
          from embedded software development. The planning will give you clarity
          and usage of the software. As the written computer software is
          dependable, it needs to plan before implementing it.
        </p>
        <h1 className="font-bold text-xl text-gray-800">2) Analysis</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          There is no point in planning if there is a mistake while executing
          development. In the analysis step, the process goes through and
          cross-verify every detail. Later, after approval of analysis, the
          design is finalized.
        </p>
        <h1 className="font-bold text-xl text-gray-800">
          3) Testing and Deployment
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          The testing is a pre-final process where before implementing it, it
          gets tested and checks whether it is appropriate. If there is any
          glitch or error, our expert team immediately solves it and provides an
          outstanding outcome.
        </p>{" "}
        <h1 className="font-bold text-xl text-gray-800">
          4) Care and Maintenance
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          After regression testing, the process went ahead with the final
          system. Our developers observe everything and run the application with
          care and maintenance. Rytsense Technologies is known for providing a
          process with efficiency.
        </p>{" "}
        <h1 className="font-bold text-xl text-gray-800"></h1>
      </div>

      <TechnologyStack />
    </>
  );
};

export default page;
