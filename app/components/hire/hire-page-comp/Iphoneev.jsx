import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function Iphoneev() {
  return (
    <div>
      <div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="p-10"
      >
        <h1 className="text-2xl font-bold mb-4 ">
          Explore The Expertise Of Our IPhone Programmers
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Custom iPhone App Development
            </h1>{" "}
            Have complex mobile app development requirements? Dont worry!!! Our
            iPhone application development team can be the perfect choice for
            you. Hire iPhone mobile app developers that you think are the most
            suitable for you.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Wearable App Development
            </h1>
            Smartwatches to smart rings, and various smart wearables have become
            an integral part of our daily lives. Get assistance from a top
            iPhone mobile app development company to get wearables apps with the
            most user-friendly app features.
          </li>
          <li className="p-4 shadow-md">
            {" "}
            <h1 className="text-2xl font-bold mb-4 ">iPhone App Migration</h1>
            Hiring iPhone app developers can be fruitful if you want your
            existing mobile application to rule the app store as well. Hire
            iPhone application developers with enough years of experience and
            expertise to migrate your existing Android or web application to the
            iOS platform to make it browsable for iPhone users.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              API Development and Integration
            </h1>
            Integrate your iPhone application with 3rd party APIs to make them
            more browsable and user-friendly, leveraging the experience and
            expertise of our iPhone mobile app developers.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Swift App Development</h1>
            Leverage the innovative offering of our iPhone app development
            professionals to work with Swift programming language to get the
            application enriched with top-notch features.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              iPhone Game Development
            </h1>
            Get the visually appealing gaming application to offer mesmerizing
            user experience to global iOS users by hiring iPhone app experts
            with the expertise to bring the power of Metal program and Swift
            programming language together for your custom game development
            requirements.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">iPhone UI/UX Design</h1>
            Need a user-pleasing app design that not only just lures more app
            users but makes sure to keep them glued to the iPhone application?
            All you have to do is Hire iPhone app designers from Rytsense
            Technology.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              iPhone App Maintenance and Support
            </h1>
            Hire iPhone developers to get all the much-needed support and
            assistance to make sure your iPhone application stays at the
            forefront of every iOS app development update and trend and keeps on
            offering top-notch user experience.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Native iPhone App Development
            </h1>
            Bring the best of the iOS platform and get all the designated
            advantages of iOS by hiring iPhone app developers for your next
            Native app development requirements to rule the Apple app store.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              iPhone M-Commerce App Development
            </h1>
            Hire iPhone App Developers to own an e-commerce application enriched
            with exceptional app features ranging anywhere from multilanguage
            support to VR accessibility that can help you enhance your business
            ROI.
          </li>
        </ul>
      </div>
    </div>
  );
}
