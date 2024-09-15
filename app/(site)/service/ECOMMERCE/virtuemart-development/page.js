import React from "react";
import TechnologyStack from "../../../../components/services/TechnologyStack";
import HeroSection from "../../../../components/services/HeroSection";
import bannerImage from "../../../../../public/images/service-img/virtumart-banner.png";
import Link from "next/link";
import varients from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Virtumart DevelopmentCompany"}
        subTitle={
          "Virtuemart Offers Modules Components And Plugins That You Can Use For Your Shop."
        }
        heroImage={bannerImage}
      />
      <div className=" min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
            <div className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4">
              How Virtuemart Differs From Other Open-source E-commerce Solutions
            </div>
            <p className="text-gray-700">
              If you have heard of Virtuemart before you probably already know
              that it is an e-commerce solution available as an open-source
              system for interested online users. However, what you may not have
              known is that it is actually meant to be used with the Joomla!
              Content Management System. The two are meant to be used together
              because they are both based on PHP programming which makes them
              adaptable for use within a PHP/MySQL Environment. Virtuemart’s
              other claim to fame is that more e-commerce websites rely on it
              compared to popular e-commerce solutions like OpenCart,
              PrestaShop, an osCommerce. If you wish assistance in migrating to
              the Virtuemart system, you can always ask Rytsense Technology for
              their input.{" "}
            </p>
          </section>
          <section>
            <p className="text-gray-700">
              To migrate to Virtuemart you will need at least Joomla! 1.5
              version, PHP version 5.2 and version 5.3, and of course MySQL 5.
              Virtuemart itself has over 500 features that may make your online
              business stronger and more active by helping you generate more
              sales. Virtuemart offers modules, templates, components and
              plugins that you can use for your Virtuemart shop. Because
              Virtuemart works for the hand in glove with Joomla! you may use
              the Joomla! plugins for coupons, payments, shipments, computing
              procedures, and even custom product fields.
            </p>
          </section>
          <section>
            <p className="text-gray-700 mt-5">
              Virtuemart will accommodate your SEO requirements by supplying
              necessary meta tags, nested categories and offer the right
              description plus multiple media. Product descriptions can be short
              or long and will give the correct size and weight dimensions of
              the product being sold. Related products will also be offered as
              well as ratings and reviews that may influence the buying decision
              of your customers. Naturally, pricing is a very important
              consideration for your shopping audience so that too is provided
              with pricing, price display, payments, and shipments based on
              shopper groups. Interestingly, Virtuemart can help you compute the
              right payment based on the currency your customer prefers to use.{" "}
            </p>
          </section>
          <section>
            <p className="text-gray-700">
              Of course, no e-commerce solution would be worth acquiring if it
              did not help you keep track of your product inventory. Virtuemart
              can help you monitor stocking or inventory, alert you when stocks
              are running low, and even give data about the virtual stock (which
              are products that were ordered but remain with you because the
              customer did not buy them).{" "}
            </p>
          </section>
          <section>
            <p className="text-gray-700">
              All these features are important but could be a bit overwhelming
              to apply to your business. If you think you need a more
              experienced hand to guide you then consider hiringRytsense
              Technology to ease the way for you.{" "}
            </p>
          </section>
        </div>
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
