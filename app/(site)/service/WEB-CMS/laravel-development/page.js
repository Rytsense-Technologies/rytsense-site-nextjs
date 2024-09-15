import React from "react";
import TechnologyStack from "../../../../components/services/TechnologyStack";
import HeroSection from "../../../../components/services/HeroSection";
import bannerImage from "../../../../../public/images/service-img/laravel-banner.png";
import Link from "next/link";
import { fadeIn } from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Laravel DevelopmentCompany"}
        subTitle={
          "Experienced Laravel Development Solutions to Create Scalable Business Solutions"
        }
        heroImage={bannerImage}
      />
      <div className=" min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
            <p className="text-gray-700">
              Laravel is an open-source PHP framework, Used for the web
              applications development following the MVC architectural platform.
              One of PHP�s most amazing frameworks, Laravel is developed with a
              key focus of writing code syntax which is simple and less
              expensive. Laravel is considered to be the most used after PHP
              framework today.{" "}
            </p>
          </section>
          <section>
            <p className="text-gray-700">
              Being extremely powerful and reliable, it is loaded with amazing
              features and attributes that increase the level of output,
              efficiency, and competitiveness. Designing, development, and
              customization become fast and easy with the Laravel. It gives the
              development of high-quality websites and web applications.{" "}
            </p>
          </section>
          <section>
            <p className="text-gray-700 mt-5">
              At the Rytsense Technologies, we have a skilled team of best
              Laravel developers working on developing small to medium to
              large-scale projects. We provide a wide range of services like
              Laravel website development, Laravel mobile-based applications,
              etc. We provide you the flexibility to hire skilled and
              experienced Laravel developers to work on projects that meet
              clients requirements and deeds and improve their overall
              conversion rate and growth.
            </p>
          </section>
          <section>
            <p className="text-gray-700 mt-5">
              We can help you to build simple apps to complex CMS for eCommerce
              websites at fast turnaround time without using a lot of money. Our
              team of Laravel developers are always ready to build the solutions
              based on latest coding standards and guidelines for creating any
              type and size of applications or websites. Our Laravel developer
              did all the skills of the framework to give a robust, real-time
              solution for the web application to all industry. We use all the
              positive aspects of Laravel to create class-apart eCommerce and
              enterprise apps by implementing agile business methodologies.{" "}
            </p>
          </section>
        </div>
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
