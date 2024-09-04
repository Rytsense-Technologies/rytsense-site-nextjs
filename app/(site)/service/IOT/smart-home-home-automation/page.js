import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/service-img/smarthome-banner.png";
import Link from "next/link";
import varients from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Smart Home Home-Automation DevelopmentCompany"}
        subTitle={
          "Make Your Smart Home - Home Automation More Skillful With Us"
        }
        heroImage={bannerImage}
      />
      <section className="p-10">
        <p className="text-gray-700">
          Smart Home is the element of IoT solution and one of the most used for
          the home and businesses. Smart homes are virtual assistants that
          manage and operate through the Internet. It is the advanced technology
          that has transformed the home and made every day more convenient.
          Smart home technology enhances the automation of your home and enables
          you to control every aspect of the home with the help of the Internet
          of Things (IoT). Smart home applications include light, door,
          security, applications, and much more. Smart home applications are
          often used to command and control household activities.
        </p>{" "}
      </section>
      <section className="p-10">
        <p className="text-gray-700">
          One of the best methods to use home automation is controlling
          applications, home security, and more. Home automation is like your
          personal assistant who reminds you, searches for you, handles, and
          all. It is one of the biggest markets of the Internet of Things, and
          the process is less complicated and easy to understand. It saves time
          and is cost-effective, and features are significant for IoT
          applications. The new technology is an adequate method for the home
          and businesses.
        </p>{" "}
      </section>

      <div className=" rounded-2xl ml-30 mr-30 p-20">
        <h1 className="font-bold text-xl text-gray-800 mb-5">
          Factors of Smart Home and Home Automation
        </h1>
        <h1 className="font-bold text-xl text-gray-800"> 1) Energy System</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Smart home-home automation provides you with splendid energy and
          lighting systems. The system is quite valuable for the consumer as
          with one command or guides over the voice assistant light or energy
          system obtained. The energy and lighting system empowers the IoT
          devices and network, and IoT helps save energy, time, and cost.
        </p>

        <h1 className="font-bold text-xl text-gray-800">
          2) Enterprise IoT Systems
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Enterprise IoT systems have taken resources, capital, and other
          factors to a different level. The network has services and solutions
          on a large scale. It reduces the risk in the system and warns the
          system about threats and cyber attacks. The systems are implemented in
          such a way that they notify you about the near menace. In the
          enterprise, IoT is in the design of sensors, tablets, and connected
          SaaS platforms.
        </p>
        <h1 className="font-bold text-xl text-gray-800">3) FoodTech</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Many times, we kept food and completely forgot about it. For such
          situations, Food tech powered by IoT comes to the rescue. The
          technology helps keep a record of food, and it reminds you about the
          food and all. It reduces waste management, and record helps to save
          necessary and unnecessary food items. With a command, users can
          discover multiple recipes.{" "}
        </p>
        <h1 className="font-bold text-xl text-gray-800">4) Healthcare</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          Healthcare and smart automation go hand-in-hand. It helps to remind
          about the healthy charts to follow; Healthcare is associated with IoT.
          The system helps to give you accurate results in the form of a report
          or anything. Healthcare is a vivid concept, and the smart home has a
          different approach towards it.
        </p>
        <h1 className="font-bold text-xl text-gray-800">
          5) Smart Warehousing
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          A smart warehouse system is to provide companies real-time visibility.
          It allows the optimization of processes and the capability to make
          immediate changes to increase operation speed. Smart warehouses can
          also eliminate the majority of human error and enhance safety and
          security with ease. It helps to keep track of all management
          activities occurring within home automation.
        </p>
      </div>
      <section className="p-2 ml-10">
        <h1 className="font-bold text-xl text-gray-800">
          Why Choose Rytsense Technologies For Smart Home - Home Automation?
        </h1>
        <p className="text-gray-700">
          We are the leading Internet of Things company, which provides
          brilliant smart home and home automation. Our professionals who hold
          expertise have years of experience in it and are proficient in it. We
          have the latest and intelligent tools and technology that helps to
          make home automation and smart homes more efficient. With the pool of
          experience, our experts have the best solution and service to provide
          for home automation and smart home. We help to maintain and enhance
          the smart home and home automation system.
        </p>{" "}
      </section>
      <TechnologyStack />
    </>
  );
};

export default page;
