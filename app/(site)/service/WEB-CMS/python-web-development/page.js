import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/service-img/python-banner.png";
import Link from "next/link";
import { fadeIn } from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Python DevelopmentCompany"}
        subTitle={
          "We Don't Just Build Solutions, We Build Solutions That Sells."
        }
        heroImage={bannerImage}
      />
      <div className=" min-h-screen">
        <div className="container mx-auto  px-4">
          <section className="">
            <p className="text-gray-700">
              Python is one of the finest and most easily readable programming
              languages. This platform provides professionals to show core
              concepts just in fewer lines of code. There are various
              programming languages available today, but Python has ranked among
              the top, which is typically used for general purpose programming
              to develop applications and components.
            </p>
          </section>
          <section>
            <p className="text-gray-700">
              If you looking to make highly flexible & fast to market products
              or better union of your current technology, you should consider
              Python language. When we talk about product development strategy,
              you need an experienced Python Development Partner who clearly
              know Python and can add value to design, development, deployment &
              support for your product.
            </p>
          </section>
          <section>
            <p className="text-gray-700 mt-5">
              Rytsense Technologies has a good experience in Python consulting
              and Python development. With an experienced team of Python
              developers & experts, Rytsense Technologies provides outstanding
              dynamics web apps, custom application development in Django
              framework, BI & analytics services. Our team caters to your
              demands for processing large amounts of traffic as well as solving
              complex tasks very easily, using the defining Python frameworks.
              We guarantee that our Python-based solutions surely help our
              clients to meet their business objectives with full support.
            </p>
          </section>
          <section>
            <p className="text-gray-700 mt-5">
              Team of Rytsense Technologies has worked with a different range of
              clients on a wide variety of projects. Our experience provides
              rise to the confidence that is essential for driving results. With
              dedicated Python developers to hire on-site or offshore, we
              provide you the benefit of flexibility and utility when you want
              it, and the way you want it. Rytsense Technologies has gained
              result oriented experience in Python web application development
              services and providing a wide array of services to the enterprises
              looking for high-end yet affordable Python development services.
            </p>
          </section>
        </div>
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
