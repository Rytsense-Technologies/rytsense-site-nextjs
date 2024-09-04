import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/service-img/prestashop-banner.png";
import Link from "next/link";
import varients from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Prestashop Website DevelopmentCompany"}
        subTitle={
          "Why PrestaShop Can Catch The Attention Of E-commerce Businesses"
        }
        heroImage={bannerImage}
      />
      <div className=" min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
            <div className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4">
              Develop Your Ecommerce Website Using Prestashop
            </div>
            <p className="text-gray-700">
              The main reason PrestaShop can be an attractive e-commerce
              business solution is that it is an open-source system. If you are
              an online business owner you naturally want to get a business
              solution that is priced as low as possible so that your overhead
              does not overwhelm you. With an open-source solution like
              PrestaShop, you need not pay anything to get it which is a boon
              especially if every cent saved counts.Rytsense Technologies knows
              PrestaShop so we too can contribute to your e-commerce survival.
            </p>
          </section>
          <section>
            <p className="text-gray-700">
              If you are currently using some other e-commerce solution but are
              interested to try PrestaShop, you can always migrate easily to
              PrestaShop (as many other e-commerce merchants have done before
              you). The nice thing about migrating is that your valuable
              customer and sales data will remain intact until you have
              completed the transition. Data such as customers, catalog content,
              orders, payments, shipping details, preferences and business
              statistics will all be moved to PrestaShop without any data being
              lost along the way. No matter what e-commerce solution you are
              currently using your new PrestaShop store will be able to
              accommodate your business information.{" "}
            </p>
          </section>
          <section>
            <p className="text-gray-700 mt-5">
              One advantage with moving to PrestaShop is that you gain
              simplified back office solutions along with a slew of new
              functions. We all know that your back office transactions are just
              as valuable as your front office activities so ideally, both will
              be managed well with your current e-commerce solution. If you’re
              not happy with how your back office is being managed right now,
              you can always shift to PrestaShop to get a better experience.{" "}
            </p>
          </section>
          <section>
            <p className="text-gray-700 mt-5">
              Because PrestaShop is easy to learn and use, you may save hours
              daily that would have gone towards going over your different
              e-commerce responsibilities. Time saved means the time that you
              can then devote to other business needs such as meeting with your
              sales force to find out how you can better serve your customers or
              checking out inventory to learn which products are moving fast.
              You might even be able to use those extra hours coming up with new
              products or services that you can offer to make your online
              business more competitive and profitable.
            </p>{" "}
          </section>
        </div>
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
