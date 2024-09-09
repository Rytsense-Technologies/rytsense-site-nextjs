"use client";
import Image from "next/image";
import React, { useState } from "react";

const techStacks = {
  androidLanguages: [
    { src: "/images/service-img/android.png", alt: "Android" },
    { src: "/images/service-img/ios.png", alt: "iOS" },
    { src: "/images/service-img/flutter.png", alt: "Flutter" },
    { src: "/images/service-img/react-native.png", alt: "React Native" },
    { src: "/images/service-img/kotlin.jfif", alt: "Kotlin" },
    { src: "/images/service-img/ionic.png", alt: "Ionic" },
    { src: "/images/service-img/swift.png", alt: "Swift" },
    { src: "/images/service-img/xamarin.png", alt: "Xamarin" },
    { src: "/images/service-img/ipad.png", alt: "iPad" },
    { src: "/images/service-img/windos.png", alt: "Windows" },
    { src: "/images/service-img/phonegap.png", alt: "PhoneGap" },
    { src: "/images/service-img/augment-reality.png", alt: "Augmented Reality" },
    { src: "/images/service-img/virtual-reality.jfif", alt: "Virtual Reality" },
    { src: "/images/service-img/beacon.jfif", alt: "Beacon" },
    { src: "/images/service-img/wearabless.webp", alt: "Wearables" },
    { src: "/images/service-img/aperavle-titnum.png", alt: "Wearable Tech" },
  ],
  frontEndLanguages: [
    { src: "/images/service-img/senchattouch.jfif", alt: "Sencha Touch" },
    { src: "/images/service-img/typescript.png", alt: "TypeScript" },
    { src: "/images/service-img/javascript.png", alt: "JavaScript" },
    { src: "/images/service-img/reactjs.png", alt: "React.js" },
    { src: "/images/service-img/golang.jfif", alt: "GoLang" },
    { src: "/images/service-img/angularjs.png", alt: "AngularJS" },
  ],
  backEndLanguages: [
    { src: "/images/service-img/php.png", alt: "PHP" },
    { src: "/images/service-img/yii.png", alt: "Yii" },
    { src: "/images/service-img/cakephp.png", alt: "CakePHP" },
    { src: "/images/service-img/java.png", alt: "Java" },
    { src: "/images/service-img/dotnet.jfif", alt: ".NET" },
    { src: "/images/service-img/csharp.png", alt: "C#" },
    { src: "/images/service-img/rails.png", alt: "Ruby on Rails" },
    { src: "/images/service-img/codeignter.png", alt: "CodeIgniter" },
    { src: "/images/service-img/python.png", alt: "Python" },
    { src: "/images/service-img/laravel.png", alt: "Laravel" },
    { src: "/images/service-img/scala.png", alt: "Scala" },
    { src: "/images/service-img/symfony.png", alt: "Symfony" },
    { src: "/images/service-img/zend.png", alt: "Zend" },
    { src: "/images/service-img/nodejs.png", alt: "Node.js" },
    { src: "/images/service-img/django.png", alt: "Django" },
    { src: "/images/service-img/graphql.png", alt: "GraphQL" },
    { src: "/images/service-img/parse.png", alt: "Parse" },
  ],
  cmsLanguages: [
    { src: "/images/service-img/wordpress.png", alt: "WordPress" },
    { src: "/images/service-img/mangeto.png", alt: "Magento" },
    { src: "/images/service-img/prestashop.jfif", alt: "PrestaShop" },
    { src: "/images/service-img/joomla.png", alt: "Joomla" },
    { src: "/images/service-img/bigcommerce.png", alt: "BigCommerce" },
    { src: "/images/service-img/drupal.png", alt: "Drupal" },
    { src: "/images/service-img/virtumart.jfif", alt: "VirtueMart" },
    { src: "/images/service-img/cscart.jfif", alt: "CS-Cart" },
    { src: "/images/service-img/sitecore.png", alt: "Sitecore" },
  ],
};

const TechnologyStack = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const renderImages = (images) => {
    return (
      <div className="flex flex-wrap gap-6 max-w-full place-items-center p-4 justify-center">
        {images.map((img, idx) => (
          <Image
            key={idx}
            className="hover:opacity-75 h-20"
            src={img.src}
            alt={img.alt}
            width={40}
            height={40}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="tabs rounded-xl mx-4 md:mx-24 mt-20">
      <h2 className="font-bold text-xl md:text-3xl lg:text-3xl text-center mb-6 mt-6">
        Technology Stack That Makes Your Software Secure and Exceptional
      </h2>

      {/* Responsive Tabs */}
      <nav className="flex flex-wrap justify-center space-x-2 md:space-x-12 pt-10" role="tablist">
        <button
          type="button"
          className={`px-3 py-2 rounded w-full sm:w-auto ${
            activeTab === 1 ? "bg-sky-500 text-white" : "border border-gray-800 text-gray-700"
          }`}
          onClick={() => handleTabClick(1)}
        >
          Android Languages
        </button>
        <button
          type="button"
          className={`px-3 py-2 rounded w-full sm:w-auto ${
            activeTab === 2 ? "bg-sky-500 text-white" : "border border-gray-800 text-gray-700"
          }`}
          onClick={() => handleTabClick(2)}
        >
          FrontEnd Languages
        </button>
        <button
          type="button"
          className={`px-3 py-2 rounded w-full sm:w-auto ${
            activeTab === 3 ? "bg-sky-500 text-white" : "border border-gray-800 text-gray-700"
          }`}
          onClick={() => handleTabClick(3)}
        >
          BackEnd Languages
        </button>
        <button
          type="button"
          className={`px-3 py-2 rounded w-full sm:w-auto ${
            activeTab === 4 ? "bg-sky-500 text-white" : "border border-gray-800 text-gray-700"
          }`}
          onClick={() => handleTabClick(4)}
        >
          CMS Languages
        </button>
      </nav>

      <div className="mt-3">
        {activeTab === 1 && renderImages(techStacks.androidLanguages)}
        {activeTab === 2 && renderImages(techStacks.frontEndLanguages)}
        {activeTab === 3 && renderImages(techStacks.backEndLanguages)}
        {activeTab === 4 && renderImages(techStacks.cmsLanguages)}
      </div>
    </div>
  );
};

export default TechnologyStack;
