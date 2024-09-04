import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/service-img/drupal-banner.png";
import Link from "next/link";
import { fadeIn } from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Drupal Web DevelopmentCompany"}
        subTitle={
          "Drupal Is An Open-source Framework Plus It Is Easy To Install Windows"
        }
        heroImage={bannerImage}
      />
      <div className=" min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
            <div className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4">
              Why Many Organizations Are Dependent On The Drupal Content
              Management System
            </div>
            <p className="text-gray-700">
              When you get the Drupal open-source CMS (content management
              system), you are actually following the footsteps of many
              well-known websites including those run by the US government and
              many corporations. However, even if you just want for your
              personal blog site it is possible to get this free CMS as a GNU
              General Public Licensed download.
            </p>
          </section>
          <section>
            <p className="text-gray-700">
              If you have used other CMS before, you may find that the Drupal
              core features have some aspects in common with other CMS. Some
              examples are the user account registration, user account
              maintenance, RSS feed, menu management, a method for customizing
              page layout, and even system administration. This means you might
              find it easy to adapt the Drupal for your needs no matter how
              simple or complex. A simple application of Drupal could be making
              a blog site with multiple users while a more complex application
              is developing a community discussion forum. This may be why this
              CMS is useful for important institutions like the US government.{" "}
            </p>
          </section>
          <section>
            <p className="text-gray-700 mt-5">
              As a free CMS, the system is improved upon by the open-source
              community itself. Thus, you can get support from the community of
              users when there are aspects of the CMS that you want to amend or
              are puzzled about. It should be relatively easy to install it on
              your website as well as to manage it over time – but if you do
              encounter problems it may make sense to hire Rytsense Technologies
              to do the CMS installation and management for you. By
              hiringRytsense Technology you get the assurance that your CMS will
              function more smoothly thus preventing you from encountering
              downtime due to technical delays.
            </p>
          </section>
          <section>
            <p className="text-gray-700 mt-5">
              It is important that if you want to rely on Drupal as your CMS
              that you have the right computing platform. This means you will
              need a PHP-based web server and a related database for your
              settings and content. You have to get the PHP 4.4.0 for the Drupal
              6 version, and at least a PHP 5.2.5 for the Drupal 7 version. Take
              note that Drupal is a multi-awarded CMS even if it is open source
              and continuously being developed by the Drupal user community. It
              is now used by over 910,000 websites as of August 2013. If you
              want to stay ahead of the pack, stay tuned for when the Drupal 8
              will be released – for now, that CMS version is still being
              developed.{" "}
            </p>
          </section>
        </div>
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
