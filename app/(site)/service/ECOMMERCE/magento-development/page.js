import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/service-img/webtab.png";
import Link from "next/link";
import varients from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Mangeto E-Commerce Development"}
        subTitle={"We Develop Solutions That Ignite Your Business."}
        heroImage={bannerImage}
      />
      <div className=" min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
            <div className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4">
              Why You Should choose Magento E-commerce Solution
            </div>
            <p className="text-gray-700">
              Magento is a big advantage when it comes to e-commerce if your
              website�s retail business is struggling to control costs because
              Magento is an open-source solution used for e-commerce
              applications. Yes, the big retail websites do use this system
              which was formerly owned by the Varien company but if you are a
              small player trying to compete against the big boys then every
              cent you save counts in the long run. Because of this even major
              auction site eBay recognizes the usefulness of being associated
              with Magento (eBay has already bought out 100% ownership of
              Magento). So maybe you should too as well.{" "}
            </p>
          </section>
          <section>
            <p className="text-gray-700">
              There is more to e-commerce than just boring financial data that
              make your eyes glaze over. A website devoted to e-commerce wants
              to know what its customers are thinking and Magento can do that
              through its Magento Mobile service. With Magento Mobile, your
              business will be able to develop your own apps that can work for
              hand in glove with your online retail operations. So what does
              that mean? It means these native apps can help your customers gain
              a better online e-commerce experience while you get more data on
              what customers are buying and what are being ignored. You can
              create retail business apps that will run on Android gadgets as
              well as iPads and iPhones. This is a big advantage if you want to
              shave off losing products and stick to products that you know your
              customers are willing to pay for.{" "}
            </p>
          </section>
          <section>
            <p className="text-gray-700 mt-5">
              With Magento Mobile service, your new apps may help your retail
              business become a well-known and well-loved retail brand.
              Developing a stable brand is how retailers survive a cut-throat
              e-commerce world so the retailer with the strongest brand recall
              in the minds of customers is usually the one who will win. If you
              want to win with Magento, try contactingRytsense Technologies
              today. We can help you adapt Magento Mobile to your purposes even
              if you have to deploy your apps on multiple device platforms. With
              Rytsense Technologies on your side, adapting to Magento e-commerce
              solutions will be easier plus you can always ask us to explain any
              aspects of the Magento system that can be confusing to a
              non-developer. You provide the retail experience and we provide
              the techie knowledge and skills. Together we can make your retail
              business survive and thrive where others are doomed to fail.
            </p>
          </section>
        </div>
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
