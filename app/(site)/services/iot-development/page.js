import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import ClientReviews from "../../../components/services/ClientReviews";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/services/iot.png";

const introContent = [
  "IoT presents a powerful mechanism to connect various objects with the internet and take advantage of smart technology. It allows devices to connect and transfer information, which can be used for a variety of purposes. IoT is changing the way businesses work. IoT data can be connected with advanced analytics to help businesses gain valuable insights to make their operations smoother. For example, sensors can be used in parking to help drivers find vacant parking lots. The Internet of Things is all set to transform your whole business processes.",
  "Machine learning is a part of Artificial Intelligence and is considered the most evolving technology for business. With real-world insight, AI & ML help to build frameworks that support businesses in gaining profit. Organizations that leverage Machine Learning and Artificial Intelligence have witnessed transformations in every aspect of their company. It has helped them reshape multiple industries and support enterprises with strategic management. The implementation of projects becomes easier with these tools and research analytics.",
];

const iotBenefits = [
  "Real-time effective decision making",
  "Optimized use of resources",
  "Personalize offering",
  "Automated & optimized processes",
  "Improved marketing automation",
  "Increased sales",
  "Enhanced processes in complex scenarios",
  "Smart and enhanced supply chain",
  "Better revenue generation",
];

const iotServices = [
  {
    title: "IoT Development Consultancy",
    description:
      "At Rytsense, we offer internet of things development consulting service by our skilled IoT app experts.",
  },
  {
    title: "IoT App Development",
    description:
      "Our IoT mobile app programmers & developers will help you to get the right IoT development solution. Here, we deliver flexible strategies, blended with high-security to manage new and different IoT devices.",
  },
  {
    title: "Backend & API Development",
    description:
      "To develop a successful IoT app backend team must be required. Our team of expert internet of things programmers and coders give full backend and API development solutions for our valuable clients.",
  },
  {
    title: "App Development for IoT Devices",
    description:
      "Rytsense team helps you to make a specific app for various devices, helping you to reach your business goal and make the most of IoT development technology.",
  },
  {
    title: "IoT Gateway Development",
    description:
      "Our team is always ready for IoT development related requirements, therefore, we build IoT gateway for your app.",
  },
  {
    title: "IoT Implementation & Support",
    description:
      "By providing internet of things app development services we also provide complete support & maintenance services to our prestigious clients.",
  },
  {
    title: "Data Analytics",
    description:
      "Our developed IoT mobile apps can perform an advanced level of data analysis that suits best to your business demands.",
  },
  {
    title: "BLE Technology",
    description:
      "Rytsense excels in iBeacon-enabled mobile app development for retailers, entrepreneurs and others to raise their brand efficiently.",
  },
  {
    title: "Wearable Technology",
    description:
      "At Rytsense we deliver best-in-class services for Android and iOS compatible wearable mobile app development at affordable prices.",
  },
  {
    title: "Voice-Enabled Technology",
    description:
      "Our internet of things app development company always tries to provide advance IoT mobile app development solutions & provide Voice-Enabled Technology Solutions.",
  },
  {
    title: "Raspberry Pi Solutions",
    description:
      "Rytsense has completed several proof-of-concept (POC) development projects offering IoT solutions.",
  },
];

const industrySolutions = [
  {
    title: "Manufacturing",
    description:
      "Connects Machines, Monitors Activities Remotely, Offers Real-Time Analysis, Keeps a Close Eye on Production Data.",
  },
  {
    title: "Retail",
    description:
      "Optimizes Operations, Engages Better with Customers, Lowers Costs, Accelerates Innovation.",
  },
  {
    title: "Agriculture",
    description:
      "Makes Room for Precision Farming, Supports Agricultural Drones, Creates Smart Greenhouses, Improves Livestock Monitoring.",
  },
  {
    title: "Healthcare",
    description:
      "Improves Hand Hygiene, Offers Real-Time Insights regarding Services & Location, Tracks Usage of Equipment, Remote Patient Monitoring.",
  },
  {
    title: "Energy",
    description:
      "Improves Production, Accelerates Decision-Making, Minimizes Costs, Increases Worker Safety.",
  },
  {
    title: "Warehouse & Logistics",
    description:
      "Helps Cut Down Costs, Helps Identify Potential Threats, Provides Improved and Real-Time Traceability, Improves Forecasting.",
  },
  {
    title: "Transportation",
    description:
      "Optimizes Operations of Fleets, Minimizes Service Costs, Increases Real-Time Visibility across Roads, Oceans, and Air, Improves Preventative Maintenance, Fleet Management & Monitoring, Amplifies the Capabilities of Transit Systems and Connected Cars.",
  },
  {
    title: "Education",
    description:
      "Enhances Student Outcomes, Improves Campus Monitoring, Increases Security.",
  },
];

const techStack = {
  dataAnalytics: ["Data Process and Analytics", "BIGDATA", "Machine Learning"],
  connectivity: [
    "Wireless",
    "Ethernet",
    "Bluetooth",
    "4G LTE",
    "NFC",
    "GSM Network",
  ],
  protocols: [
    "HTTP",
    "HTTPS",
    "TCS",
    "CoAP",
    "UDPC",
    "MQTT",
    "XMPP",
    "AllJoyn",
    "AMQP",
    "SNMP",
    "Weave",
    "MODBUS",
  ],
  cloudPlatforms: [
    "AWS",
    "Google Cloud",
    "IBM Bluemix",
    "ThingWorx",
    "Windows Azure",
  ],
  webServices: [
    "OAuth Authorization services",
    "RestFul service",
    "SOAP services",
    "Thing API",
  ],
  hardwareBoards: [
    "Arduino",
    "Dragon Board",
    "Esp32",
    "STM Controllers",
    "Esp8266",
    "RaspberryPI",
  ],
  sensors: [
    "Temperature sensor",
    "Humidity Sensor",
    "Pressure Sensor",
    "Level Sensor",
    "IR Sensor",
    "Ultrasonic Sensor",
    "Touch Sensor",
    "Proximity Sensor",
    "Smoke & Gas Sensor",
    "Hall effect Sensor",
    "PIR",
    "Reed Switch",
    "LSM303",
    "Light Sensor",
    "GAS Sensor",
    "Fingerprint Sensor",
  ],
};

const whyChooseUs = [
  "Highly skilled team of IoT experts",
  "Faster time to market delivery",
  "Own research & development team",
  "Industry-specific IoT ecosystem",
  "Flexible & reliable services",
  "Dedicated data analytics laboratory",
  "End-to-End IoT solutions",
  "IoT Technical Support, 24/7",
];

const page = () => {
  return (
    <>
      <HeroSection
        title={"Internet OF Things(IOT) Development Company"}
        subTitle={
          "Connect, Communicate, Control & Manage your Scattered Devices With Our IoT Solutions"
        }
        heroImage={bannerImage}
      />
      <div className="bg-gray-100 p-8">
        {/* Introduction Section */}
        <section className="mb-8 p-10 bg-white rounded-lg shadow-md ml-10 mr-10">
          {introContent.map((paragraph, index) => (
            <div key={index} className="p-10 my-4 mb-4">
              <p className="text-gray-600">{paragraph}</p>
            </div>
          ))}
        </section>

        {/* IoT Benefits Section */}
        <section className="p-10 bg-white rounded-lg shadow-md ml-10 mr-10">
          <h1 className="font-bold text-2xl text-gray-800 mb-5">
            Why Should You Go For IoT Application Development?
          </h1>
          <ul className="flex flex-wrap list-disc ml-10">
            {iotBenefits.map((benefit, index) => (
              <li key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        {/* IoT Services Section */}
        <section className="mt-8 p-10 bg-white rounded-lg shadow-md ml-10 mr-10">
          <h1 className="font-bold text-2xl mb-5">
            Our IoT App Development Services
          </h1>
          <ul className="space-y-4 text-gray-800 list-disc list-inside">
            {iotServices.map((service, index) => (
              <li key={index} className="font-bold">
                {service.title}
                <ol className="ps-5 mt-2 space-y-1 list-inside text-gray-600 font-normal">
                  <li>{service.description}</li>
                </ol>
              </li>
            ))}
          </ul>
        </section>

        {/* Industry Solutions Section */}
        <section className="mt-8 p-10 bg-white rounded-lg shadow-md ml-10 mr-10">
          <h2 className="font-bold text-2xl mt-5 mb-5">
            Our Industry-Focused IoT Solutions
          </h2>
          <ul className="flex flex-wrap list-disc list-inside">
            {industrySolutions.map((solution, index) => (
              <li key={index} className="w-full sm:w-1/2 p-4 font-bold">
                {solution.title}
                <h2 className="text-gray-600 font-normal">
                  {solution.description}
                </h2>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack Sections */}
        <section className="p-5 bg-white rounded-lg shadow-md ml-10 mr-10">
          <h2 className="font-bold text-2xl mb-5">
            Tech Stack For IoT at Rytsense
          </h2>

          {Object.entries(techStack).map(([key, value], index) => (
            <div key={index} className="mt-8">
              <h3 className="font-bold ml-5 mt-4">
                {key.replace(/([A-Z])/g, " $1")}
              </h3>
              <ul className="flex flex-wrap list-disc p-5">
                {value.map((item, idx) => (
                  <li key={idx} className="w-full sm:w-1/2 md:w-1/3 p-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Why Choose Us Section */}
        <section className="p-5 bg-white rounded-lg shadow-md ml-10 mr-10">
          <h3 className="font-bold text-2xl mb-5">
            Rytsense Technology – The Right Solution For Internet of Things
            Development
          </h3>
          <p>
            Rytsense Technologies does business transformation through Internet
            of Things (IoT) software. We provide ideas and insights to
            businesses on the right IoT solutions that build new business models
            and improve operational efficiency. We help you develop an IoT
            strategy, build a roadmap to implement it, and offer more customized
            end-to-end solutions to get you from IoT pilot stage to production
            stage fast and effectively.
          </p>
          <ul className="flex flex-wrap list-disc p-5">
            {whyChooseUs.map((item, index) => (
              <li key={index} className="w-full sm:w-1/2 p-4">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <ClientReviews />
      <TechnologyStack />
    </>
  );
};

export default page;
