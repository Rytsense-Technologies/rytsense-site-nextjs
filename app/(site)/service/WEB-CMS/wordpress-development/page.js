import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/service-img/wordpress-banner.png";
import Link from "next/link";
import { fadeIn } from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Wordpress Web DevelopmentCompany"}
        subTitle={"Let's Build Amazing WordPress Website Together!"}
        heroImage={bannerImage}
      />
      <div className=" min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
            <div className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4">
              Why You Should Consider Setting Up A WordPress Website
            </div>
            <p className="text-gray-700">
              If you are thinking of putting up a blog site but don’t know any
              coding languages (or even what a code is) then your next best
              option could be signing up for a WordPress website. WordPress is
              used by many bloggers throughout the world which may be why some
              consider it to be the most popular blogging tool on the Internet.
              You can easily sign up for a free WordPress blog account if you
              are just starting out but once you get the hang of it might want
              to delve further into blogging by getting a for-pay WordPress blog
              account later on.{" "}
            </p>
          </section>
          <section>
            <p className="text-gray-700">
              WordPress is really very user-friendly so beginners will not find
              it hard to cope with setting up their new blog account. You just
              need to give the right information about yourself and choose the
              blog theme for your site from the list WordPress will give you.
              Interestingly, if you find that there are themes that you want to
              change you can get an experienced developer like Rytsense
              Technology to tweak the HTML, CSS and PHP code of the theme until
              we deliver what you were looking for. Take note that there are
              some sites on the Web that offer customized and customizable
              themes applicable for use on WordPress.{" "}
            </p>
          </section>
          <section>
            <p className="text-gray-700 mt-5">
              Many business owners recognize the benefits of getting a WordPress
              account for SEO purposes. If this sounds like you, you can ask
              Rytsense Technologies - Leading WordPress Web Development Company
              to help you find the right plugins in the WordPress database.
              Plugins are useful for changing the content or appearance of your
              blog site to make it more SEO friendly. In addition, your blog
              site on WordPress is very friendly to search engines - which is
              another reason business users like it so much.
            </p>
          </section>
          <section>
            <p className="text-gray-700 mt-5">
              Partly because of its features and partly because bloggers love it
              so much, WordPress has won multiple awards over the years.
              Although there is a criticism of its security features, you can
              still rely on security plugins to keep your WordPress more secure.
              You should also update any plugins, themes or installation codes
              to protect you from new Web attacks. Refrain from getting themes
              and plugins from sites that have doubtful security issues. You
              should also take steps to change your default admin account and
              the. Access file itself so that your blog site stays secure even
              when faced with SQL injection attacks of any kind or if intruders
              want to steal your sensitive files. Connect with us profile Your
              Full Name* email Your Email* call + 91 Contact No.* message Your
              Message* Please enter sum: 8 + 7 = Write Answer... We sign NDA for
              all our projects. Send
            </p>
          </section>
        </div>
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
