import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/service-img/iotdash-banner.png";
import Link from "next/link";
import varients from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"IOT Dashboard And Analyst DevelopmentCompany"}
        subTitle={"Compelling Your Data With IoT Dashboard And Analytics"}
        heroImage={bannerImage}
      />
      <section className="p-10">
        <p className="text-gray-700">
          IoT Dashboards is an appealing way to analyse data with visualisation.
          IoT integrated with embedded analytics on the Dashboard. IoT Dashboard
          and Analytics is quite helpful to visualise data and information with
          charts, graphs, tables, and maps. IoT analytics allows companies to
          extract actionable insights from data produced by the connected
          devices to the IoT cloud. The data is received from IoT devices which
          will appear on the mobile device or computer. Using Machine Learning,
          Artificial Intelligence, and the Internet of Things, users can access
          processes, manage, and monitor. Dashboards enable the control of every
          aspect of connected devices and perspective through the visualisation
          of data devices.
        </p>
      </section>
      <section className="p-10">
        <p className="text-gray-700">
          Dashboards are easily customised without any disruptions and process
          device data for further process. Every aspect of connected devices,
          complexity, everything has been made simpler with IoT Dashboard and
          Analytics. User interference helps users interact with other connected
          devices, and IoT dashboards are the primary function of IoT platforms.
          IoT Analytics has benefits of IoT insights which help to obtain
          analytics solutions. It is applied with IoT Analytics tools and needs
          to set up the launch, after-launch, and evolution way.
        </p>
      </section>

      <div className=" rounded-2xl ml-30 mr-30 p-20">
        <h1 className="font-bold text-xl text-gray-800 mb-5">
          Benefits Of Using IoT Dashboard And Analytics:
        </h1>
        <h1 className="font-bold text-xl text-gray-800"> Real-time Data</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          The IoT Dashboard and Analytics solutions are provided in real-time.
          It helps get quick and efficient data and information, and the
          analytics helps collect relevant information and insights. The
          real-time data enables one to react to occurred developments or
          problems and take real-time decisions.
        </p>
        <h1 className="font-bold text-xl text-gray-800">Powerful Monitoring</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          The IoT tools provide a powerful monitor which helps to obtain insight
          data. Controlling support to monitor and make necessary changes. The
          technology monitors the inside and outside by using a variety of IoT
          devices and sensors.
        </p>{" "}
        <h1 className="font-bold text-xl text-gray-800">
          Make Complicated Simpler
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          The IoT technology makes things simpler and connected most
          effectively. With any complex issues, IoT Dashboard and Analytics
          helps to unsolve the problem and bring the easiest form of the
          objective. With analysing, track, and report the data to make
          complicated things more manageable.
        </p>{" "}
        <h1 className="font-bold text-xl text-gray-800">
          Unfolds Opportunities
        </h1>
        <p className=" text-gray-800 mt-1 mb-3">
          The IoT technology and devices uncover several opportunities. With the
          simplest objective, the IoT Dashboards and Analytics brings the data
          to many ways. By classifying the data and analysis, the Dashboard
          shows how the data is used appropriately.
        </p>{" "}
        <h1 className="font-bold text-xl text-gray-800">Notify Trends</h1>
        <p className=" text-gray-800 mt-1 mb-3">
          The IoT Analytics and Dashboard notify about the latest trends in the
          market. Moreover, it helps to run and create new trends for the
          industry. The trends will help the company to sustain itself in the
          present market and operate the business efficiently.
        </p>
      </div>
      <section className="p-2 ml-10">
        {" "}
        <h1 className="font-bold text-xl text-gray-800">
          Why Choose Rytsense Technologies For IoT Dashboards And Analytics?
        </h1>
        <p className="text-gray-700">
          The skilled team ofRytsense Technologies helps to customise dashboards
          and make them to the top. They ensure that the user can operate it
          without any flaws or disruption in the IoT processor device. We gather
          tons of data from the device within a minute and manage the data in
          IoT Analytics. Meanwhile, allow IoT dashboards to access with a simple
          URL through any standard browser globally. Our proficient developers
          with insight knowledge help to visualise the data with efficiency and
          make the process effortless.Rytsense Technologies is always there to
          solve queries or complexity and help to accomplish the clients goal.
        </p>
      </section>
      <TechnologyStack />
    </>
  );
};

export default page;
