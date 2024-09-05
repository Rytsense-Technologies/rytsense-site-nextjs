
import React from "react";

import { fadeIn } from "../../../mock/varients";
import Link from "next/link";

export default function AppDev() {
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
          Benefits of Hiring App Developers From Rytsense Technologies
        </h1>
        <p className="mb-2">
          Our skilled mobile app developers have great experience in providing
          end to end solutions. Below are the benefits and values that you will
          get by hiring mobile app developers from Rytsence Technology:
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
          <li className=" p-4 shadow-md">Dedicated Teams</li>
          <li className=" p-4 shadow-md">Comprehensive Reporting</li>
          <li className=" p-4 shadow-md">NDA Security</li>
          <li className=" p-4 shadow-md">24x7 Support</li>
          <li className=" p-4 shadow-md">Resilient Environment</li>
          <li className=" p-4 shadow-md">Security and IP Protection</li>
          <li className=" p-4 shadow-md">Quick Team Scaling</li>
          <li className=" p-4 shadow-md">QA Tested & Bug-Free Solution</li>
          <li className=" p-4 shadow-md">Source Code Authorization</li>
          <li className=" p-4 shadow-md">No Hidden Cost</li>
          <li className=" p-4 shadow-md">Technical Support</li>
          <li className=" p-4 shadow-md">On-Time Delivery</li>
        </ul>
      </div>

      <div className="p-10">
        <h1 className="text-2xl font-bold mb-4 ">
          Hire App Developers at Rytsense Technologies for Some Diverse
          Services:
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
          <li className=" p-4 shadow-md">Hire iPhone App Developers</li>
          <li className=" p-4 shadow-md">Hire Unity3d App Developers</li>
          <li className=" p-4 shadow-md">Hire Android App Developers</li>
          <li className=" p-4 shadow-md">Hire Game Developers</li>
          <li className=" p-4 shadow-md">Hire Flutter Developers</li>
          <li className=" p-4 shadow-md">Hire AR/VR App Developers</li>
        </ul>
      </div>

      <div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="p-10"
      >
        <h1 className="text-2xl font-bold mb-4 ">
          Apps We Developed For Our Clients - Hire App Developers
        </h1>
        <p className="mb-2">
          Till Now, app developers from Rytsense Technologies have developed
          some extraordinary, custom mobile apps for unique domains and industry
          verticals.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
          <li className=" p-4 shadow-md">Social Networking Apps</li>
          <li className=" p-4 shadow-md">Music Streaming Apps</li>
          <li className=" p-4 shadow-md">Fitness Tracking Apps</li>
          <li className=" p-4 shadow-md">Beauty and Health Apps</li>
          <li className=" p-4 shadow-md">Financial Service Apps</li>
          <li className=" p-4 shadow-md">Live Streaming Apps</li>
          <li className=" p-4 shadow-md">Social Networking Apps</li>
          <li className=" p-4 shadow-md">Music Streaming Apps</li>
          <li className=" p-4 shadow-md">Fitness Tracking Apps</li>
          <li className=" p-4 shadow-md">Beauty and Health Apps</li>
          <li className=" p-4 shadow-md">Financial Service Apps</li>
          <li className=" p-4 shadow-md">Live Streaming Apps</li>
        </ul>
      </div>

      <div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="p-10"
      >
        <h1 className="text-2xl font-bold mb-4 ">
          Why Should You Hire App Developers From Rytsense Technologies?
        </h1>
        <p className="mb-2 text-left">
          Your dream will be fulfilled with our core expertise and experienced
          dedicated developer services. You can expect the best experience with
          our skilled mobile app developers. Rytsence Technology delivers the
          best level of customer service by developing innovative and
          collaborative project management systems.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left">
          <li className="p-4 shadow-md">Highly Cost-effective</li>
          <li className="p-4 shadow-md">Well Established Infrastructure</li>
          <li className="p-4 shadow-md">Quick Turnaround Time</li>
          <li className="p-4 shadow-md">
            Skilled Developers For Every Platform
          </li>
          <li className="p-4 shadow-md">
            Skilled Developers For Every Platform
          </li>
          <li className="p-4 shadow-md">Reliable Support</li>
        </ul>
      </div>
    </div>
  );
}
