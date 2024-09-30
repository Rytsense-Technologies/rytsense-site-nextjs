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
      <div className="bg-[#092947] firstfooter text-white flex justify-center items-center">
        <div className="pb-10 flex flex-row gap-36 firstfootermain w-full bg-[#092947] bg-opacity-30 justify-center text-center items-center">
          <Link href="/software-development-company-india">
            <div className="flex flex-col text-center justify-center items-center md:text-left mt-28">
              <Image
                src="/images/address/hq-india 3.webp"
                alt="HQ India"
                className="h-20 mb-2 justify-center items-center hover:text-white"
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
            <div className="flex flex-col justify-center items-center text-center md:text-left mt-28 cursor-pointer">
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

          <div className="flex flex-col text-center justify-center items-center md:text-left mt-28">
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

          <div className="flex flex-col text-center justify-center items-center md:text-left mt-28">
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

      <div className="bg-[#092947] text-white flex justify-start items-center flex-col">
        <div className="flex flex-wrap mx-auto lg:flex-nowrap justify-between w-full max-w-6xl p-8 lg:space-x-8 space-y-4 lg:space-y-0">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
            <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4 relative">
              <div className="flex flex-col items-center justify-center hover:cursor-pointer w-full">
                <div className="flex items-center gap-2">
                  <Image
                    className="w-14 h-16"
                    src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705587642/blue_logo_nloixw.png"
                    alt="Rytsense Technologies logo"
                    width={56}
                    height={64}
                  />
                  <div>
                    <h4 className="lg:text-2xl md:text-xl sm:text-2xl ss:text-xl text-sm poppins whitespace-nowrap">
                      Rytsense Technologies
                    </h4>
                    <p className="submenu2 lg:text-sm text-sm sl:gap-1 flex justify-center gap-2 poppins">
                      <span>Driving</span>
                      <span>Intelligent</span>
                      <span>Businesses</span>
                    </p>
                  </div>
                </div>

                <div className="flex ml-20 gap-7 mt-4 text-xl">
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
                    onClick={() => {
                      window.open("https://x.com/rytsensetech", "_blank");
                    }}
                    icon={faXTwitter}
                    className="hover:text-indigo-500"
                  />
                  <FontAwesomeIcon
                    onClick={() => {
                      window.location.href = "mailto:hey@rytsensetech.com";
                    }}
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

                <div className="flex flex-col text-xl">
                  <div className="flex gap-5">
                    <Image
                      className="h-24 w-28"
                      src="/images/clutch/goodfirms-footer3.png"
                      alt="clutch"
                      width={112}
                      height={96}
                    />
                    <Image
                      className="h-16 w-20 mt-4"
                      src="/images/clutch/clutch-footer4.svg"
                      alt="clutch"
                      width={80}
                      height={64}
                    />
                  </div>

                  <div className="h-5 w-32">
                    <Image
                      src="/images/clutch/dmca-footer.png"
                      alt="clutch"
                      width={128}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full footerlast uppercase">
            <h3 className="mb-2.5 text-2xl font-bold uppercase">About</h3>
            <ul className="mb-0 list-none space-y-2">
              <li>
                <Link
                  href="/company/who-we-are"
                  className="hover:text-indigo-500"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/company/career" className="hover:text-indigo-500">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/company/event" className="hover:text-indigo-500">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/company/service" className="hover:text-indigo-500">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-indigo-500">
                  Case Study
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-indigo-500">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-indigo-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full footerlast">
            <h3 className="mb-2.5 text-2xl font-bold uppercase">Services</h3>
            <ul className="mb-0 list-none space-y-2">
              <li>
                <Link
                  href="/ai-development-company-usa"
                  className="hover:text-indigo-500"
                >
                  AI & ML
                </Link>
              </li>
              <li>
                <Link
                  href="/services/iot-development"
                  className="hover:text-indigo-500"
                >
                  IOT
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ecommerce-development"
                  className="hover:text-indigo-500"
                >
                  ECOMMERCE
                </Link>
              </li>
              <li>
                <Link
                  href="/services/blockchain-development"
                  className="hover:text-indigo-500"
                >
                  BLOCKCHAIN
                </Link>
              </li>
              <li>
                <Link
                  href="/service/MOBILE-APP/react-native-app-development"
                  className="hover:text-indigo-500"
                >
                  React Native
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full footerlast">
            <h3 className="mb-2.5 text-2xl font-bold uppercase">Resources</h3>
            <ul className="mb-0 list-none space-y-2">
              <li>
                <Link
                  href="/service/ECOMMERCE/magento-development"
                  className="hover:text-indigo-500"
                >
                  Magento
                </Link>
              </li>
              <li>
                <Link
                  href="/service/ECOMMERCE/shopify-development"
                  className="hover:text-indigo-500"
                >
                  Shopify
                </Link>
              </li>
              <li>
                <Link
                  href="/service/ECOMMERCE/ubercart-development"
                  className="hover:text-indigo-500"
                >
                  Ubercart
                </Link>
              </li>
              <li>
                <Link
                  href="/service/ECOMMERCE/prestashop"
                  className="hover:text-indigo-500"
                >
                  Prestashop
                </Link>
              </li>
              <li>
                <Link
                  href="/service/ECOMMERCE/cs-cart-development"
                  className="hover:text-indigo-500"
                >
                  CS Cart
                </Link>
              </li>
              <li>
                <Link
                  href="/service/ECOMMERCE/virtuemart-development"
                  className="hover:text-indigo-500"
                >
                  VirtueMart
                </Link>
              </li>
              <li>
                <Link
                  href="/service/ECOMMERCE/bigcommerce-development"
                  className="hover:text-indigo-500"
                >
                  BigCommerce
                </Link>
              </li>
              <li>
                <Link
                  href="/service/ECOMMERCE/woocommerce-development"
                  className="hover:text-indigo-500"
                >
                  WooCommerce
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <span className="text-white text-sm w-full flex justify-center items-center p-8">
          © Rytsense Technologies 2014-2024. All rights reserved. Privacy |
          Disclaimer
        </span>
      </div>
    </div>
  );
};

export default FooterClutch;
