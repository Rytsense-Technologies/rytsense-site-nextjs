import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function WordpressDev() {
  return (
    <div>
      <div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="bg-gray-200 p-4 md:p-8 lg:flex lg:flex-col lg:text-left"
      >
        <h1 className="text-2xl font-bold mb-4 ">
          Is It Necessary To Hire Wordpress Developer?
        </h1>
        <p className="text-gray-700 p-5">
          WordPress is said to be one of the top blogs hosting and content
          management service (CMS) applications out on the Internet today, if
          not the top one. One major reason it is a popular CMS application is
          that it is relatively simple to use, attractive to look at, and is
          very useful even for inexperienced bloggers and CMS users. That being
          said, is it actually necessary to Hire WordPress Developer if it is so
          user-friendly? One good reason to hire WordPress Developer is that you
          may eventually need someone who is skilled in PHP language coding to
          work on your WordPress site for you. WordPress itself is based on both
          PHP and MySQL so that puts an additional burden on you when searching
          for the right WordPress programmer for the job. The reason you need
          someone with those skills is that PHP is a very popularly used and
          supported website application language. Thus, you need to make sure
          that your WordPress site can be accessed on most servers and operating
          systems that accommodate PHP. The right WordPress Developer such as
          Rytsense Technologies can do this for you.
        </p>
        <p className="text-gray-700 p-5">
          Another reason you may need to hire WordPress Developer is that you
          need someone who fully understands how you can benefit from the
          popularity of the WordPress system. WordPress version 3.6 has already
          experienced 6 million downloads as of September 2013 – and it doesn’t
          show any signs of stopping yet. If you yourself are new to using
          WordPress then the Developer you hire should give you good advice on
          how your WordPress site can be optimized to give you the results you
          want (monetary or otherwise). In addition, a good WordPress Developer
          like Rytsense Technologies should know how you can make your site
          available on multiple operating systems – and this really means
          knowing what operating systems those are. Try asking the Developer
          just off the top of his head what operating systems can accept the PHP
          system of WordPress. This alone may give you a clear idea of his
          capabilities at this point in the history of WordPress.
        </p>
      </div>
    </div>
  );
}
