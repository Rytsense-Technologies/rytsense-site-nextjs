import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function PhpDev() {
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
          When Should I Hire PHP Developers For My Website?
        </h1>
        <p className="text-gray-700 p-5">
          Before you set about creating any website, it is important to know
          what PHP code is and how a PHP developers can help you with it. PHP is
          known as the code you need to create a web page so that your website
          can be accommodated on a PHP-based web server. In formal terms, PHP is
          called a server-side scripting language. The commands of PHP code may
          be embedded within the HTML source document itself, compared to the
          traditional data processing system of relying on an external file. So
          what does the PHP code itself do? When you have the right PHP code
          within a file, your website will be able to show the right image or
          text content that you wanted to be displayed. The great thing about
          relying on PHP is that multiple web hosting providers provide
          sufficient support to web pages dependent on PHP. This simply means
          that your content on your website has a better chance of being
          accessed by your key demographic if the server and the web host both
          permit PHP based code. That is the biggest value when you Hire PHP
          Developer to make your website for you.
        </p>
        <p className="text-gray-700 p-5">
          Another advantage with the PHP language is that it is open-source so
          you don’t have to pay royalties or licensing fees to use it. There are
          also many PHP developers out there (like Rytsense Technologies) that
          are ready to assist you with PHP website development so this part
          shouldn’t be a problem. What will be a problem is weeding out the true
          experts in PHP web page development from the also-rans. One problem
          that may crop up as you engage a developer to make a PHP based website
          is that you need a developer that can work around the weaknesses of
          the PHP language itself. For instance, PHP is believed to have up to
          30% of the vulnerabilities identified in the National Vulnerability
          Database. These vulnerabilities crop up because best-practice
          programming protocols were not followed. So you may have to search for
          a PHP Developer that will create PHP code that does not have such
          vulnerabilities. If you do decide to Hire PHP Developers to make your
          web pages, be sure to conduct dry runs of the web pages so that you
          can spot problems right away. This is very important so you get a
          quality website for the price you pay a PHP Developer such as Rytsense
          Technology.
        </p>
      </div>
    </div>
  );
}
