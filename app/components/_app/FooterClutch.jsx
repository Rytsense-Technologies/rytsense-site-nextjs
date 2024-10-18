"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const FooterClutch = () => {
  return (
    <div className="footer">
      {/* Top Section: Locations */}
      <div className="bg-[#092947] firstfooter text-white flex justify-center items-center">
        <div className="pb-10 flex flex-wrap gap-10 md:gap-16 lg:gap-36 w-full bg-[#092947] bg-opacity-30 justify-center text-center items-center">
          <Link href="/software-development-company-india">
            <div className="flex flex-col text-center justify-center items-center md:text-left mt-12 sm:mt-20 lg:mt-28">
              <Image
                src="/images/address/hq-india 3.webp"
                alt="HQ India"
                className="h-20 mb-2 hover:text-white"
                width={80}
                height={80}
              />
              <div className="flex justify-start items-center text-zinc-500 text-center font-semibold hover:text-white">
                <span>
                  Phase 1, Greeta Techpark, <br />
                  Rajiv Gandhi Industrial Estate,
                  <br />
                  Perungudi, Chennai, India 600096
                </span>
              </div>
            </div>
          </Link>

          <Link href="/software-development-company-usa">
            <div className="flex flex-col justify-center items-center text-center md:text-left mt-12 sm:mt-20 lg:mt-28 cursor-pointer">
              <Image
                src="/images/address/hq-usa 2.webp"
                alt="HQ USA"
                className="h-20 mb-2"
                width={80}
                height={80}
              />
              <div className="flex justify-start items-center text-zinc-500 text-center font-semibold hover:text-white">
                <span>
                  334 Pioneer Way, Mountain View, <br />
                  California <br /> 94041, USA
                </span>
              </div>
            </div>
          </Link>

          <div className="flex flex-col text-center justify-center items-center md:text-left mt-12 sm:mt-20 lg:mt-28">
            <Image
              src="/images/address/hq-uae 2.webp"
              alt="HQ UAE"
              className="h-20 mb-2"
              width={80}
              height={80}
            />
            <div className="flex justify-start items-center text-zinc-500 text-center font-semibold hover:text-white">
              <span>
                338A, Kingston Road, <br />
                Wimbledon, London <br />
                SW20 8LR, UK
              </span>
            </div>
          </div>

          <div className="flex flex-col text-center justify-center items-center md:text-left mt-12 sm:mt-20 lg:mt-28">
            <Image
              src="/images/address/hq-australia 2.webp"
              alt="HQ Australia"
              className="h-20 mb-2"
              width={80}
              height={80}
            />
            <div className="flex justify-start items-center text-zinc-500 text-center font-semibold hover:text-white">
              <span>
                4 Matisse Street. <br />
                Cranbourne West <br />
                Vic 3977, AUSTRALIA
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Content and Links */}
      <div className="bg-[#092947] text-white flex flex-col items-center">
        <div className="flex flex-wrap mx-auto lg:flex-nowrap justify-between w-full max-w-6xl p-6 sm:p-8 lg:space-x-8 space-y-6 lg:space-y-0">
          {/* Brand Info and Socials */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
            <div className="relative flex flex-col items-center justify-center hover:cursor-pointer">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  className="w-14 h-16"
                  src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705587642/blue_logo_nloixw.png"
                  alt="Rytsense Technologies logo"
                  width={56}
                  height={64}
                />
                <div>
                  <h4 className="text-2xl poppins whitespace-nowrap">
                    Rytsense Technologies
                  </h4>
                  <p className="text-sm flex justify-center gap-1 poppins">
                    <span>Driving</span>
                    <span>Intelligent</span>
                    <span>Businesses</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-5 mt-4 text-xl">
                <FontAwesomeIcon
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/rytsense?mibextid=LQQJ4d",
                      "_blank"
                    )
                  }
                  icon={faFacebook}
                  className="hover:text-indigo-500"
                />
                <FontAwesomeIcon
                  onClick={() =>
                    window.open("https://x.com/rytsensetech", "_blank")
                  }
                  icon={faXTwitter}
                  className="hover:text-indigo-500"
                />
                <FontAwesomeIcon
                  onClick={() =>
                    (window.location.href = "mailto:hey@rytsensetech.com")
                  }
                  icon={faEnvelope}
                  className="hover:text-indigo-500"
                />
                <FontAwesomeIcon
                  onClick={() =>
                    window.open("https://www.youtube.com/@rytsense", "_blank")
                  }
                  icon={faYoutube}
                  className="hover:text-indigo-500"
                />
                <FontAwesomeIcon
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/rytsense/",
                      "_blank"
                    )
                  }
                  icon={faLinkedin}
                  className="hover:text-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap lg:flex-nowrap justify-between w-full lg:w-2/3">
            {/* About Links */}
            <FooterLinks
              title="About"
              links={[
                { href: "/company/who-we-are", text: "Who We Are" },
                { href: "/company/career", text: "Career" },
                { href: "/company/event", text: "Events" },
                { href: "/company/service", text: "Services" },
                { href: "/case-studies", text: "Case Study" },
                { href: "/", text: "Sitemap" },
                { href: "/contact-us", text: "Contact Us" },
              ]}
            />
            {/* Services Links */}
            <FooterLinks
              title="Services"
              links={[
                { href: "/ai-development-company-usa", text: "AI & ML" },
                { href: "/services/iot-development", text: "IOT" },
                { href: "/services/ecommerce-development", text: "ECOMMERCE" },
                {
                  href: "/services/blockchain-development",
                  text: "BLOCKCHAIN",
                },
                {
                  href: "/service/MOBILE-APP/react-native-app-development",
                  text: "React Native",
                },
              ]}
            />
            {/* Resources Links */}
            <FooterLinks
              title="Resources"
              links={[
                {
                  href: "/service/ECOMMERCE/magento-development",
                  text: "Magento",
                },
                {
                  href: "/service/ECOMMERCE/shopify-development",
                  text: "Shopify",
                },
                {
                  href: "/service/ECOMMERCE/ubercart-development",
                  text: "Ubercart",
                },
                { href: "/service/ECOMMERCE/prestashop", text: "Prestashop" },
                {
                  href: "/service/ECOMMERCE/cs-cart-development",
                  text: "CS Cart",
                },
                {
                  href: "/service/ECOMMERCE/virtuemart-development",
                  text: "VirtueMart",
                },
                {
                  href: "/service/ECOMMERCE/bigcommerce-development",
                  text: "BigCommerce",
                },
                {
                  href: "/service/ECOMMERCE/woocommerce-development",
                  text: "WooCommerce",
                },
              ]}
            />
          </div>
        </div>

        {/* Footer Bottom */}
        <span className="text-white text-sm w-full flex justify-center items-center p-8">
          © Rytsense Technologies 2014-2024. All rights reserved. Privacy |
          Disclaimer
        </span>
      </div>
    </div>
  );
};

// Sub-component for Footer Links
const FooterLinks = ({ title, links }) => (
  <div className="w-full lg:w-1/3 mb-8 lg:mb-0 px-4">
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href} className="hover:text-indigo-500">
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterClutch;
