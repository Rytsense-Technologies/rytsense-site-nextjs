import React from "react";
import TechnologyStack from "../../../../components/services/TechnologyStack";
import HeroSection from "../../../../components/services/HeroSection";
import bannerImage from "../../../../../public/images/service-img/bigcommerce-banner.png";
import Link from "next/link";
import varients from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"BigCommerce DevelopmentCompany"}
        subTitle={
          "BigCommerce Gives You The Freedom To Terminate The Service At Any Time You Wish."
        }
        heroImage={bannerImage}
      />
      <div className=" min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
            <div className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4">
              Why BigCommerce Can Help Your E-commerce Website Survive
              Competition
            </div>
            <p className="text-gray-700">
              When you opt to use a BigCommerce Store, you gain some features
              that will help you in the e-commerce world. For example, your
              online store will look attractive to any demographic because
              BigCommerce offers a range of store themes that you can choose
              between and HTML/CSS based interface that you can customize as you
              wish. BigCommerce can make your e-commerce marketing campaign
              stronger by offering you necessary marketing tools (such as
              newsletters, coupons and promo campaigns). Because your store will
              be designed at the start for better search engine rankings, you
              may be pleased to find that you do get higher rankings after the
              switch to BigCommerce. Another great aspect is that you will not
              have to pay for hidden fees even as you are given access to
              multiple features that will help in e-commerce.{" "}
            </p>
          </section>
          <section>
            <p className="text-gray-700">
              With other e-commerce solutions, you are really on your own as you
              try to learn how to apply their features to your business.
              BigCommerce offers you a special team of experts called the
              Success Squad that can assist you in this. Plus you also have the
              option of hiring Rytsense Technologies to speed up adaptation to
              BigCommerce. Before you launch your store, after you have launched
              your store, as you market your products and services, and as you
              experience a spike in sales – you have the Success Squad and
              Rytsense Technologies watching your back for you so that business
              does not falter.
            </p>{" "}
          </section>
          <section>
            <p className="text-gray-700 mt-5">
              With the BigCommerce system, you can literally sell anything you
              wish through your online store but still be able to raise sales to
              the right target market. You can choose the right business plan
              for your e-commerce needs, ranging from Bronze, Silver, Gold,
              Platinum to Diamond. Each plan will charge you a monthly fee
              starting at $24.95 per month for the Bronze plan and max out at
              $299.95 per month for the Diamond plan. Take note that there are
              no transaction fees that will give you a nasty surprise plus you
              can always check out the service for a free trial period of 15
              days. When you do decide to make the big switch to BigCommerce, be
              sure to have the right credit cards ready to pay for your plan
              (acceptable cards are JCB, American Express, MasterCard, and
              Visa). You won’t need to sign a contract because you are only
              charged for the month – this gives you the freedom to terminate
              the service at any time you wish.{" "}
            </p>
          </section>
        </div>
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
