"use client";
import React, { useState } from "react";

import { fa1 } from "@fortawesome/free-solid-svg-icons/fa1";
import Image from "next/image";

const TechnologyStack = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className="tabs  rounded-xl ml-24 mr-24 mt-20">
      <h2
        className="font-bold text-2xl md:text-3xl lg:text-3xl text-center mb-6 mt-6"
    

      >
        Technology Stack That Makes Your Software Secure and Exceptional
      </h2>

      <div className="">
        <nav
          className="-mb-0.5 flex justify-center space-x-12 pt-10"
          aria-label="Tabs"
          role="tablist"
        >
          <button
            type="button"
            className={`px-3 py-2 sm:px-5 sm:py-3 mx-2 my-1 sm:my-0 rounded ${
              activeTab === 1
                ? "bg-sky-500 text-white"
                : "border border-gray-800 text-gray-700"
            }`}
            onClick={() => handleTabClick(1)}
            role="tab"
            aria-selected={activeTab === 1 ? "true" : "false"}
            aria-controls="horizontal-alignment-1"
            id="horizontal-alignment-item-1 "
          >
            Android  Languages
          </button>
          <button
            type="button"
            className={`px-3 py-2 sm:px-5 sm:py-3 mx-2 my-1 sm:my-0 rounded ${
              activeTab === 2
                ? "bg-sky-500 text-white"
                : "border border-gray-800 text-gray-700"
            }`}
            onClick={() => handleTabClick(2)}
            role="tab"
            aria-selected={activeTab === 2 ? "true" : "false"}
            aria-controls="horizontal-alignment-1"
            id="horizontal-alignment-item-1"
          >
            FrontEnd  Languages
          </button>
          <button
            type="button"
            className={`px-3 py-2 sm:px-5 sm:py-3 mx-2 my-1 sm:my-0 rounded ${
              activeTab === 3
                ? "bg-sky-500 text-white"
                : "border border-gray-800 text-gray-700"
            }`}
            onClick={() => handleTabClick(3)}
            role="tab"
            aria-selected={activeTab === 3 ? "true" : "false"}
            aria-controls="horizontal-alignment-1"
            id="horizontal-alignment-item-1"
          >
            BackEnd  Languages
          </button>
          <button
            type="button"
            className={`px-3 py-2 sm:px-5 sm:py-3 mx-2 my-1 sm:my-0 rounded ${
              activeTab === 4
                ? "bg-sky-500 text-white"
                : "border border-gray-800 text-gray-700"
            }`}
            onClick={() => handleTabClick(4)}
            role="tab"
            aria-selected={activeTab === 4 ? "true" : "false"}
            aria-controls="horizontal-alignment-1"
            id="horizontal-alignment-item-1"
          >
            CMS  Languages
          </button>
        </nav>
      </div>

      <div className="mt-3">
        <div
          id="horizontal-alignment-1"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-1"
          style={{ display: activeTab === 1 ? "block" : "none" }}
        >
          <div
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-wrap gap-10 max-w-full place-items-center p-10 justify-center"
          >
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\android.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\ios.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\flutter.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\react-native.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\kotlin.jfif"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\ionic.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
          </div>
          <div
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-wrap gap-10 max-w-full place-items-center p-10 justify-center"
          >
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\swift.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\xamarin.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\ipad.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\windos.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\phonegap.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\augment-reality.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
          </div>
          <div
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-wrap gap-10 max-w-full place-items-center p-10 justify-center"
          >
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\virtual-reality.jfif"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\beacon.jfif"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\wearabless.webp"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\aperavle-titnum.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
          </div>
        </div>
        <div
          id="horizontal-alignment-1"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-1"
          style={{ display: activeTab === 2 ? "block" : "none" }}
        >
          <div
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-wrap gap-10 max-w-full place-items-center p-10 justify-center"
          >
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\senchattouch.jfif"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\typescript.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\javascript.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\reactjs.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\golang.jfif"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\angularjs.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
          </div>
        </div>
        <div
          id="horizontal-alignment-1"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-1"
          style={{ display: activeTab === 3 ? "block" : "none" }}
        >
          <div
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-wrap gap-10 max-w-full place-items-center p-10 justify-center"
          >
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\php.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\yii.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\cakephp.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\java.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\dotnet.jfif"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\csharp.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
          </div>
          <div
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-wrap gap-10 max-w-full place-items-center p-10 justify-center"
          >
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\rails.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\codeignter.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\python.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\laravel.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\scala.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\symfony.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
          </div>
          <div
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-wrap gap-10 max-w-full place-items-center p-10 justify-center"
          >
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\zend.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\nodejs.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\django.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\graphql.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\parse.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
          </div>
        </div>
        <div
          id="horizontal-alignment-1"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-1"
          style={{ display: activeTab === 4 ? "block" : "none" }}
        >
          <div
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-wrap gap-10 max-w-full place-items-center p-10 justify-center "
          >
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\wordpress.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\mangeto.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\prestashop.jfif"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\joomla.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\bigcommerce.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
          </div>
          <div
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-wrap gap-10 max-w-full place-items-center p-10 justify-center"
          >
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\drupal.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\virtumart.jfif"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />

            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\cscart.jfif"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
            <img
              className="hover:opacity-75 h-20"
              src="\images\service-img\sitecore.png"
              alt="Rytesensetech Software Development"
              title="App development company in Bangalore"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;
