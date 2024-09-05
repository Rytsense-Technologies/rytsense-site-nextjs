import React  from "react";
import { fadeIn } from "../../../mock/varients";

export default function FlutterDev() {
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
          Explore The Expertise Of Flutter Programmers
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Flutter App Development & Consultation
            </h1>{" "}
            Confused about how effective Flutter app development can be for you?
            Get advice and development assistance from top Flutter app
            developers to make sure your application gets the much-anticipated
            development outcomes.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Flutter Web Developers</h1>
            Leverage the expertise of the Flutter app development company to own
            intuitive, scalable web solutions to offer a mobile-like user
            experience for your web and desktop-based applications.
          </li>
          <li className="p-4 shadow-md">
            {" "}
            <h1 className="text-2xl font-bold mb-4 ">
              Flutter Developers for IoT Development
            </h1>
            Hire Flutter developers with exceptional experience to develop a
            centrally accessible system, connected with IoT devices to make them
            browsable through cloud platforms and mobile applications.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Custom Widget Development
            </h1>
            Get a custom Widget designed for your custom app development
            requirements by hiring flutter developers to offer exceptional user
            experience with an alluring mobile app UI.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Swift App Development</h1>
            Leverage the innovative offering of our Flutter development
            professionals to work with Swift programming language to get the
            application enriched with top-notch features.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Flutter Game Developers
            </h1>
            Our top Flutter app developers will help you own a feature-rich 2D
            multiplayer gaming application understanding your development
            requirements thoroughly.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Flutter Developers for App Migration
            </h1>
            Hire Flutter developers to enhance your existing mobile application
            through the offering of the Flutter platform to gain more app users,
            business value, ROI, and more.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Flutter Developers for Support & Maintenance
            </h1>
            Get enhanced app support and maintenance to make sure your mobile
            application stays relevant to every development update and stays
            safe from glitches and malware attacks while offering enhanced app
            performance.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Flutter Developers for Dart Development
            </h1>
            Hire Flutter app developers with a thorough understanding of Dart
            programming language to execute codes with minimum effort, and
            create amazing app UIs leveraging the Flutter development libraries.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Flutter Developers for UI/UX Design
            </h1>
            A Flutter app UI widgets are widely famous for their app design to
            develop effectively amazing, aesthetically beautiful, and engaging
            mobile applications that can enhance the user experience.
          </li>
        </ul>
      </div>
    </div>
  );
}
