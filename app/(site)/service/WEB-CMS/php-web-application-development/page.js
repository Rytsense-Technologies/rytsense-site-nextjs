import React from "react";
import TechnologyStack from "../../../../components/services/TechnologyStack";
import HeroSection from "../../../../components/services/HeroSection";
import bannerImage from "../../../../../public/images/service-img/webtab.png";
import Link from "next/link";
import { fadeIn } from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"PHP Web DevelopmentCompany"}
        subTitle={
          "Rytsense Technologies Provides Best PHP Development For Our Customers"
        }
        heroImage={bannerImage}
      />
      <div className=" min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
            <div className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4">
              Why Your Business May Need A PHP Based Web Solution
            </div>
            <p className="text-gray-700">
              For the newbies among us, PHP is a web development language that
              has been widely adopted for multiple websites throughout the
              world. It also has its uses in general programming functions.
              Literally millions of websites are now running on the PHP language
              which means that your e-commerce business may need to be founded
              on the PHP language as well to facilitate smooth operations with
              other PHP based websites. If you are looking for a developer to
              make a PHP based web solution for you, Rytsense Technologies could
              be the right company for the job.
            </p>
          </section>
          <section>
            <p className="text-gray-700">
              One benefit of switching to PHP is that it is free software based
              on the PHP License. Most web servers can accommodate a site built
              on PHP so that eases one problem from your list of worries. Most
              operating systems or platforms will also accept the PHP as a
              standalone shell as well. So not only do you get it free of charge
              but you can use PHP without worrying much that it cannot be
              compatible with servers, operating systems or platforms. By
              assuring compatibility, it means your e-commerce site can function
              smoothly most of the time. If you do encounter any problems that
              need a technical solution, turn to Rytsense Technologies to
              provide that assistance.
            </p>
          </section>
          <section>
            <p className="text-gray-700 mt-5">
              Because PHP is an open-source code, you can actually have the
              source code for your site amended if necessary. You can do this
              code tweaking yourself or you can hire a more experienced
              developer for the job. Open source means any changes can be done
              without having to pay the owners of the PHP source code which is
              the PHP Group developer. You probably will easily be able to find
              a web hosting provider that can support your PHP-based website.
            </p>
          </section>
          <section>
            <p className="text-gray-700 mt-5">
              Another side benefit of switching to PHP code is that it can
              accommodate web content management systems founded on PHP. Your
              e-commerce system might be using Joomla! for example, so you will
              be pleased to know that Joomla! is compatible with your PHP-based
              site. Another commonly used web content management system is
              Moodle which also happens to work well with a PHP-based website.
              Many e-commerce businesses do need some kind of web content
              management system so it is best to choose one that will work
              smoothly on your PHP coded website for the long term. Otherwise,
              you may need help from a developer to figure out the technical
              issues that are in the way.
            </p>
          </section>
        </div>
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
