"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";
import addressImage1 from "../../../public/images/address/hq-india 3.webp";
import addressImage2 from "../../../public/images/address/INDIA.webp";
import addressImage3 from "../../../public/images/address/hq-usa 2.webp";
import addressImage4 from "../../../public/images/address/USA.webp";
import addressImage5 from "../../../public/images/address/hq-uae 2.webp";
import addressImage6 from "../../../public/images/address/UK.webp";
import addressImage7 from "../../../public/images/address/hq-australia 2.webp";
import addressImage8 from "../../../public/images/address/Australia.webp";

const Footer = () => {
  const handleButtonClick = () => {
    window.open("https://calendly.com/ramkumar_p/call-schedule", "_blank");
  };
  return (
    <div className="footer">
      <div className="mx-auto max-w-screen-md text-center border border-gray-300 rounded-2xl  h-auto p-10 bg-indigo-700 -mb-24 relative z-1  shadow-2xl">
        <h2 className="mb-4 text-2xl tracking-tight font-bold leading-tight text-white">
          Lets Create Big Stories Together
        </h2>
        <p className="mb-6 text-white md:text-lg">
          We create Brands <br /> choosing us will be your decision
        </p>
        <div
          className="flex justify-center items-center animated-outline-button"
          onClick={handleButtonClick}
        >
          <div className="box relative w-[200px] h-[55px]  overflow-hidden">
            <Link
              href="https://calendly.com/ramkumar_p/call-schedule"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  bg-rose-600 text-white shadow  hover:transition-all mb-7"
            >
              Book A Call
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-neutral-900 text-white mx-auto  min-h-screen">
        <div className="grid ss:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 flex justify-center ">
          <div className="flex flex-col items-center   md:items-start text-center md:text-left mt-28">
            <Image
              src={addressImage1}
              alt="Description"
              width={200}
              height={200}
            />
            <Image
              src={addressImage2}
              alt="India address"
              width={200}
              height={200}
            />
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left mt-28">
            <Image
              src={addressImage3}
              alt="Description"
           
              width={200}
              height={200}
            />
            <Image
              src={addressImage4}
              alt="India address"
            
              width={200}
              height={200}
            />
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left mt-28">
            <Image
              src={addressImage5}
              alt="Description"
          
              width={200}
              height={200}
            />
            <Image
              src={addressImage6}
              alt="India address"
       
              width={200}
              height={200}
            />
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left mt-28">
            <Image
              src={addressImage7}
              alt="Description"
      
              width={200}
              height={200}
            />
            <Image
              src={addressImage8}
              alt="India address"
         
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 lg:ml-24 md:ml-16 sm:ml-12 ss:ml-12 st:ml-12 ml-12 relative">
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4 relative">
            <h3 className="mb-2.5 text-2xl font-bold uppercase sm:mt-7 ss:mt-5 relative">
              {" "}
              About
            </h3>
            <h1
              className="text-4xl font-bold absolute lg:bottom-72 md:bottom-72 sm:bottom-80 sm:top-0 ss:bottom-80 ss:top-0 top-0 bottom-5"
              style={{
                WebkitTextStroke: "2px #F0F0F0",
                WebkitTextStrokeColor: "#F0F0F0",
                color: "transparent",
                opacity: "0.5", // Adjust for visibility
                zIndex: "0", // Ensure it's in the background
              }}
            >
              About
            </h1>
            <ul className="mb-0 list-none">
              <li>
                <Link
                  href="/company/who-we-are"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="/company/career"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/company/event"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/company/service"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Services
                </Link>
              </li>
              {/* <li>
                  <Link
                    href="/industry"
                    className="  dark:text-neutral-200  hover:text-rose-500"
                  >
                    Industries
                  </Link>
                </li> */}
              <li>
                <Link
                  href="/case-studies"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Case Study
                </Link>
              </li>
              <li>
                <Link
                  href="/company/service"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Services
                </Link>
              </li>
              {/* <li>
                  <Link
                    href=""
                    className="  dark:text-neutral-200  hover:text-rose-500"
                  >
                    Porfolio
                  </Link>
                </li> */}
              <li>
                <Link
                  href="/sitemap"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Sitemap
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Contact US
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
            <h3 className="mb-2.5 text-2xl font-bold uppercase lg:mt-7 md:mt-7 sm:mt-7 ss:mt-5 sf:mt-10">
              {" "}
              Mobile
            </h3>
            <h1
              className="text-4xl font-bold absolute lg:bottom-72 md:bottom-72 sm:bottom-80 sm:top-0 ss:bottom-80 ss:top-72 mobile"
              style={{
                WebkitTextStroke: "2px #F0F0F0",
                WebkitTextStrokeColor: "#F0F0F0",
                color: "transparent",
                opacity: "0.5", // Adjust for visibility

                zIndex: "0", // Ensure it's in the background
              }}
            >
              Mobile
            </h1>
            <ul className="mb-0 list-none">
              <li>
                <Link
                  href="/service/MOBILE-APP/android-app-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Android Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/service/MOBILE-APP/iphone-application-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  iPhone Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/service/MOBILE-APP/hybrid-app-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Hybrid Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/service/MOBILE-APP/flutter-app-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Flutter
                </Link>
              </li> 
              
              <li>
                <Link
                  href="/service/MOBILE-APP/react-native-app-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  React Native
                </Link>
              </li>
              <li>
                <Link
                  href="/service/MOBILE-APP/kotlin-app-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Kotlin
                </Link>
              </li>
              <li>
                <Link
                  href="/service/MOBILE-APP/ionic-app-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Ionic
                </Link>
              </li>
              <li>
                <Link
                  href="/service/MOBILE-APP/swift-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Swift
                </Link>
              </li>
              <li>
                <Link
                  href="/service/MOBILE-APP/xamarin-app-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Xamrin
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4 relative">
            <h3 className="mb-2.5 text-2xl font-bold uppercase sm:mt-5 mt-5">
              Ecommerce
            </h3>
            <h1
              className="text-4xl font-bold absolute lg:left-auto lg:right-auto lg:bottom-64 md:bottom-64 sm:bottom-64 ss:bottom-60 top-auto bottom-auto"
              style={{
                WebkitTextStroke: "2px #F0F0F0",
                WebkitTextStrokeColor: "#F0F0F0",
                color: "transparent",
                opacity: "0.5", // Adjust for visibility

                zIndex: "0",
                // Ensure it's in the background
              }}
            >
              Ecommerce
            </h1>
            <ul className="mb-0 list-none">
              <li>
                <Link
                  href="/service/ECOMMERCE/magento-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Magento
                </Link>
              </li>
              <li>
                <Link
                  href="/service/ECOMMERCE/shopify-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Shopify
                </Link>
              </li>
              <li>
                <Link
                  href="/service/ECOMMERCE/ubercart-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Ubercart
                </Link>
              </li>
              <li>
                <Link
                  href="/service/ECOMMERCE/prestashop-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Prestashop
                </Link>
              </li>
              <li>
                <Link
                  href="/service/ECOMMERCE/cs-cart-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  CS Cart
                </Link>
              </li>
              <li>
                <Link
                  href="/service/ECOMMERCE/virtuemart-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  VirtueMart
                </Link>
              </li>
              <li>
                <Link
                  href="/service/ECOMMERCE/bigcommerce-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  BigCommerce
                </Link>
              </li>
              <li>
                <Link
                  href="/service/ECOMMERCE/woocommerce-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  WooCommerce
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
            <h3 className="mb-2.5 text-2xl font-bold uppercase sm:mt-5 lg:mt-5">
              Web
            </h3>
            <h1
              className="text-4xl font-bold absolute lg:left-auto lg:right-auto lg:bottom-72 lg:top-1 md:bottom-72 md:top-1 sm:bottom-72 sm:top-72 ss:bottom-64 sf:bottom-72"
              style={{
                WebkitTextStroke: "2px #F0F0F0",
                WebkitTextStrokeColor: "#F0F0F0",
                color: "transparent",
                opacity: "0.5", // Adjust for visibility

                zIndex: "0", // Ensure it's in the background
              }}
            >
              Web
            </h1>
            <ul className="mb-0 list-none">
              <li>
                <Link
                  href="/service/WEB-CMS/php-web-application-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  PHP
                </Link>
              </li>
              <li>
                <Link
                  href="/service/WEB-CMS/python-web-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Python
                </Link>
              </li>
              <li>
                <Link
                  href="/service/WEB-CMS/wordpress-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Wordpress
                </Link>
              </li>
              <li>
                <Link
                  href="/service/WEB-CMS/drupal-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Drupal
                </Link>
              </li>
              <li>
                <Link
                  href="/service/WEB-CMS/laravel-development"
                  className="  dark:text-neutral-200  hover:text-rose-50"
                >
                  Laravel
                </Link>
              </li>
              <li>
                <Link
                  href="/service/WEB-CMS/codeigniter-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  CodeIgniter
                </Link>
              </li>
              <li>
                <Link
                  href="/service/WEB-CMS/cakephp-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  CakesPHP
                </Link>
              </li>
              <li>
                <Link
                  href="/service/WEB-CMS/typescript-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  TypeScript
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-wrap -mx-4 lg:ml-24 md:ml-16 sm:ml-12 ss:ml-12 st:ml-12 ml-12">
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4 relative">
            <h3 className="mb-2.5 text-2xl font-bold uppercase sm:mt-5 ss:mt-3">
              AI & ML
            </h3>
            <h1
              className="text-4xl font-bold absolute lg:bottom-72 md:bottom-72 sm:bottom-80 sm:top-0 ss:top-0"
              style={{
                WebkitTextStroke: "2px #F0F0F0",
                WebkitTextStrokeColor: "#F0F0F0",
                color: "transparent",
                opacity: "0.5", // Adjust for visibility
                zIndex: "0", // Ensure it's in the background
              }}
            >
              AI & ML
            </h1>
            <ul className="mb-0 list-none">
              <li>
                <Link
                  href="/service/AI-ML/text-to-speech"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Text to Speech
                </Link>
              </li>
              <li>
                <Link
                  href="/service/AI-ML/business-intelligence"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/service/AI-ML/data-forecasting"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Data Forecasting
                </Link>
              </li>
              <li>
                <Link
                  href="/service/AI-ML/natural-language-processing"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Natural LAnguage Processing
                </Link>
              </li>
              <li>
                <Link
                  href="/service/AI-ML/data-analytics"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/service/AI-ML/object-recognition"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Object Recognition
                </Link>
              </li>
              <li>
                <Link
                  href="/service/AI-ML/sentimental-analysis"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Semitimental Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/service/AI-ML/alexa-skills-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Alexa SKill Development
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4 relative">
            <h3 className="mb-2.5 text-2xl font-bold uppercase sm:mt-5 ss:mt-3">
              IOT
            </h3>
            <h1
              className="text-4xl font-bold absolute lg:bottom-72 md:bottom-72 sm:bottom-72 sm:top-0  ss:top-0"
              style={{
                WebkitTextStroke: "2px #F0F0F0",
                WebkitTextStrokeColor: "#F0F0F0",
                color: "transparent",
                opacity: "0.5", // Adjust for visibility
                // Position it right below the "Our Key Features" text
                // Align it to the left
                zIndex: "0", // Ensure it's in the background
              }}
            >
              IOT
            </h1>
            <ul className="mb-0 list-none">
              <li>
                <Link
                  href="/service/IOT/iot-app-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  IOT App
                </Link>
              </li>
              <li>
                <Link
                  href="/service/IOT/embedded-software"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Embedded Software
                </Link>
              </li>
              <li>
                <Link
                  href="/service/IOT/iot-hardware-prototyping"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  IOT Hardware Prototyping
                </Link>
              </li>
              <li>
                <Link
                  href="/service/IOT/iot-dashboard-and-analytics"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  IOT Dashboard and Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/service/IOT/smart-home-home-automation"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Smart Home -Home Automation
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4 relative">
            <h3 className="mb-2.5 text-2xl font-bold uppercase sm:mt-5 ss:mt-3">
              Blockchain
            </h3>
            <h1
              className="text-4xl font-bold absolute lg:bottom-72 md:bottom-72 sm:bottom-72 sm:top-0  ss:top-0"
              style={{
                WebkitTextStroke: "2px #F0F0F0",
                WebkitTextStrokeColor: "#F0F0F0",
                color: "transparent",
                opacity: "0.5", // Adjust for visibility
                // Position it right below the "Our Key Features" text
                // Align it to the left
                zIndex: "0", // Ensure it's in the background
              }}
            >
              Blockchain
            </h1>
            <ul className="mb-0 list-none">
              <li>
                <Link
                  href="/service/BLOCKCHAIN/cryptocurrency-wallet-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Wallet
                </Link>
              </li>
              <li>
                <Link
                  href="/service/BLOCKCHAIN/cryptocurrency-exchange-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Exchange
                </Link>
              </li>
              <li>
                <Link
                  href="/service/BLOCKCHAIN/ethereum-app-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Ethereum{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/service/BLOCKCHAIN/hyperledger-blockchain-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  HyperLedger
                </Link>
              </li>
              <li>
                <Link
                  href="/service/BLOCKCHAIN/smart-contracts-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Smart Contracts
                </Link>
              </li>
              <li>
                <Link
                  href="/service/BLOCKCHAIN/private-blockchain-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Private Blockchains
                </Link>
              </li>
              <li>
                <Link
                  href="/service/BLOCKCHAIN/nft-marketplace-development-company"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  NFT Marketplace
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4 relative">
            <h3 className="mb-2.5 text-2xl font-bold uppercase ss:mt-3">
              Games
            </h3>
            <h1
              className="text-4xl font-bold absolute lg:top-0 md:top-0 sm:top-0 ss:top-0"
              style={{
                WebkitTextStroke: "2px #F0F0F0",
                WebkitTextStrokeColor: "#F0F0F0",
                color: "transparent",
                opacity: "0.5", // Adjust for visibility

                zIndex: "0", // Ensure it's in the background
              }}
            >
              Game
            </h1>
            <ul className="mb-0 list-none">
              <li>
                <Link
                  href="/service/GAME/unity3d-game-development"
                  className=" dark:text-neutral-200  hover:text-rose-500"
                >
                  Unity 3D
                </Link>
              </li>
              <li>
                <Link
                  href="/service/GAME/unreal-engine-game-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Unreal Engine
                </Link>
              </li>
              <li>
                <Link
                  href="/service/GAME/augmented-reality-app-development-company"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Augmented Reality
                </Link>
              </li>
              <li>
                <Link
                  href="/service/GAME/virtual-reality-mobile-game-application-development-company"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Virtual Reality
                </Link>
              </li>
              <li>
                <Link
                  href="/service/GAME/casual-game-development"
                  className="  dark:text-neutral-200  hover:text-rose-500"
                >
                  Casual Games
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;