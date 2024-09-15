import React from "react";
import TechnologyStack from "../../../../components/services/TechnologyStack";
import HeroSection from "../../../../components/services/HeroSection";
import bannerImage from "../../../../../public/images/service-img/augmented-banner.png";
import Link from "next/link";
import varients from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Agumented Reality Game DevelopmentCompany"}
        subTitle={"Convert Your Raw Idea into AR Featured Application!"}
        heroImage={bannerImage}
      />
      <div className=" min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
            <p className="text-gray-700">
              Augmented Reality has become one of the next big moves in the
              application sector. What we see surrounding us is the world in its
              most natural form and augmented Reality is exactly the opposite of
              the same. It is a dual mixture of digital and the real world that
              gives inception to the new world. What AR does is that it adds
              advancement to certain components like sound, picture & images,
              motion along with GPS data to make the view more alluring
              meanwhile informative. It lies in the phantom between VR and
              reality blotting the line that makes the difference about what is
              computer generated and what is real by improvising the users’
              senses. Generally, augmented reality represents a changed view of
              reality by augmenting the elements or components in context to the
              environment. With the help of AR technology, users find themselves
              in the middle of a digitally manipulating and interactive
              surrounding that can be masked into the real world.{" "}
            </p>
          </section>
          <section>
            <p className="text-gray-700">
              Rytsense Technologies leverages significant years of expertise in
              the latest trend of Augmented Reality app development for both the
              platforms. As one of the top AR application development company,
              Rytsense Technologies utilize latest techniques to speed up
              project delivery. We cling to the industry standards, to cater the
              best ever solutions that fit the clients requirements along with
              the business goals and objectives. At Rytsense Technologies, you
              have access to the dedicated team that works with proven
              development methodologies having a transparent working pattern
              which gives curves to your vision. You can be assured for the
              unmatched AR apps development solutions at quite affordable rates
              within your proposed time.{" "}
            </p>
          </section>
        </div>
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
