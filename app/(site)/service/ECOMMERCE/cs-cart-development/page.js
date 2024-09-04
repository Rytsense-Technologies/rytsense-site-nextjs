import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/service-img/cscart-banner.png";
import Link from "next/link";
import varients from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"CSCart DevelopmentCompany"}
        subTitle={"Develop Business Websites With Our Cs Cart Development"}
        heroImage={bannerImage}
      />
      <div className=" min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
            <div className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4">
              Why Cs-cart Is Called A Shopping Cart Solution For Any E-commerce
              Business
            </div>
            <p className="text-gray-700">
              Cs-Cart is called a Shopping Cart Solution rather than simply an
              e-commerce solution because the aim of the Cs-Cart engineers is to
              promote the customer shopping experience. Thus, by calling it a
              shopping cart solution Cs-Cart engineers want your business to
              become known for having the right products and services to sell
              that customers really want. Cs-Cart is offered as an open-source
              code system meaning you have the added freedom of customizing the
              source code as your business requires if that is what you require.
              At the same time, the Cs-Cart Store you set up can be adjusted and
              designed for you by the Cs-Cart people for a certain fee. (Take
              note,Rytsense Technologies can help you with the source code
              programming if coding is not your strength).{" "}
            </p>
          </section>
          <section>
            <p className="text-gray-700">
              One of the key benefits of signing up with Cs-Cart is that you get
              updated and correct shipping information via the manual shipping
              features of its shopping cart software. Cs-Cart can be used with
              real-time information from trustworthy carriers including DHL,
              Australia Post, Canada Post, USPS, and FedEx. This way you
              minimize customer complaints about lost shipments or inaccurate
              shipping quotes which translate to more customer satisfaction.
            </p>
          </section>
          <section>
            <p className="text-gray-700 mt-5">
              At the same time, you can also control the flow of and access to
              sensitive information within your own e-commerce business. You
              want some employees left out of the loop? No problem, this is
              doable. Want to limit access to data that only you should see?
              Yes, this too is possible with the Cs-Cart software. For security
              purposes, you will require a server adjusted for SSL and that has
              the right certificate installed on it.{" "}
            </p>
          </section>
          <section>
            <p className="text-gray-700 mt-5">
              Despite this emphasis on accuracy of data and sticking to the
              right security features, Cs-Cart will allow you to get great SEO
              benefits such as developing dynamic URLs based on static URLs. You
              also have the option of putting keywords and meta tags within your
              online store pages. This will help your customers gain word about
              your company and anything you want to sell to the public.
            </p>{" "}
          </section>
          <section>
            <p className="text-gray-700 mt-5">
              Despite the open-source nature of this shopping cart software, you
              might be hesitant to migrate to it because you are not strong in
              programming code or are more experienced in the industry that you
              are in. No worries – just contact Rytsense Technologies so we can
              take steps to do what is needed for your business to adapt to the
              Cs-Cart solution today.
            </p>{" "}
          </section>
        </div>
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
