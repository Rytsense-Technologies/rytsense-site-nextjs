import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/service-img/reactnative_banner.png";
import Link from "next/link";
import { fadeIn } from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"React Native App DevelopmentCompany"}
        subTitle={
          "Develop Powerful Mobile Cross-Platform Apps With React Native"
        }
        heroImage={bannerImage}
      />
    <div className=" min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <section className="mb-8">
          
            <p
             
              className="text-gray-700"
            >
             React Native is a new framework - developed by Facebook that helps the hybrid app developers to develop react native apps using the same UI building blocks which are used by Android and iOS. It helps you to develop native applications in JavaScript while still giving a real native user interface that allows reuse of code over the web and mobile. React native is the most preferred language in the industry as it is a single answer to the Enigma of Android and iOS. 
            </p>
          </section>
          <section
            
          >
            <p className="text-gray-700">
            React Native framework provides a fast track to completion, performs well on targeted platforms, and is simple to debug. It has gained massive popularity, community support, and market share within the few years since it was introduced. The best part about using this technology over others is that it’s neither a mobile web app nor is it a hybrid app.
            </p>
          </section>
          <section
            
          >
            <p className="text-gray-700 mt-5">
            As one of the well experienced React Native development company in India, USA, and UAE, our software solutions have been making classic React Native Apps. A team of  Rytsense Technology not only develop HTML5 or hybrid apps but are also experienced enough to develop real-time mobile applications using objective C or java. With this new technology, the whole mobile app development industry has been transformed and has become more efficient and faster in their development processes.
            </p>
          </section>
          <section
            
          >
            <p className="text-gray-700 mt-5">
            Our mobile app developers make sure that they can identify client unique requirements and can deliver the result driven react native apps which can set you apart from the rest of the market. Our focus lies on proper communication, transparency and QA services.  Rytsense Technology has the top mobile app developers, who can easily and cost-effectively develop an application that can adapt to your business goals.            </p>
          </section>
        </div>
        <div
         
          className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4 p-6 text-center"
        >
        Why React Native?        </div>
      <div className="h-full min-h-screen w-full bg-gray-100 p-4">
        <div className="grid gap-14 md:grid-cols-3 md:gap-5">
          <div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-yellow-600 shadow-lg shadow-teal-500/40 text-4xl font-bold">
              01
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
            Component-Based
            </h1>
            <p className="px-4 text-gray-500">
            React native enables you to develop enclosed components using Javascript which can manage their own state and so it can be assembled together to make complex Uis.
 
            </p>
          </div>

          <div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            data-aos-delay="150"
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40 text-4xl font-bold">
              02
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14 ">
            The Virtual DOM
            </h1>
            <p className="px-4 text-gray-500">
            The virtual DOM allows developers to view changes in a virtual memory rather than on the real screen that gives higher performance and a cleaner user experience all around.
 
            </p>
          </div>
          <div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            data-aos-delay="300"
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <modiv className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40 text-4xl font-bold">
              03
            </modiv>
            <h1 className="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">
            Maximum Code Re-usability
            </h1>
            <p className="px-4 text-gray-500">
            React Native runs on JavaScript that enables code re-usability for mobile as well as web platforms. With reusable components, it makes possible for a hybrid app to perform natively just by compiling to native. So it reduces enough time of the app development process.
 
            </p>
          </div>

          <div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-yellow-600 shadow-lg shadow-teal-500/40 text-4xl font-bold">
              04
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
            Performance Obsessed
            </h1>
            <p className="px-4 text-gray-500">
            The React Native framework makes use of the GPU of the mobile device, while other native languages are CPU centric. So it boosts the whole performance.
 .
            </p>
          </div>
          <div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            data-aos-delay="150"
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40 text-4xl font-bold">
              05
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14 ">
            Live Updates
            </h1>
            <p className="px-4 text-gray-500">
            React Native framework allows push updates directly to the users application without waiting for app store approvals, hence decreasing the go-to-market time.
 
            </p>
          </div>
          <div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            data-aos-delay="300"
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40 text-4xl font-bold">
              06
            </div>
            <h1 className="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">
            Efficiency
            </h1>
            <p className="px-4 text-gray-500">
            React Native framework allows rich ecosystem, open source, excellent community support, efficiency in terms of responsiveness, high speed and agility of the overall development process.
            </p>
          </div>
        </div>
      </div>
      </div>
     
      <div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4 p-6 text-center"
      >
    Our React Native Development Services
      </div>
      <p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="text-gray-700 p-6 text-center"
      >
        At  Rytsense Technology, we offer a complete range of React Native Development Services for different industry verticals like healthcare, e-learning, travel and much more. Our services cover:
      </p>
      <div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-wrap justify-between p-10"
      >
        <div className="max-w-sm rounded overflow-hidden shadow-2xl mb-4">
         
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            React Native Mobile App (Android & iOS) Development
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            React Native UI/UX for App
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Hybrid Mobile App Development
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            App Migration Services From Other Platform to React Native
            </span>
          
          </div>
        </div>
  
        <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
         
         <div className="px-6 pt-4 pb-2">
         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Hybrid Mobile App Development
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            App Migration Services From Other Platform to React Native
            </span>
          
           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
           React Native Code Development
           </span>
        
         </div>
       </div>
       
        <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
         
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            React Native App Maintenance
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            React Plugin Development
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            React Native Team Augmentation
            </span>
           
         
          </div>
        </div>
        
        
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
