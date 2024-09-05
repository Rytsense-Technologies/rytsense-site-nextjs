import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function SpringBootDev() {
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
          Services You Will Get by Hiring a Spring Developers From Hyperlink
          InfoSystem
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">Spring App Development</li>

          <li className="p-4 shadow-md">Custom App Development</li>
          <li className="p-4 shadow-md">Spring Application QA/Testing</li>
          <li className="p-4 shadow-md">Spring App Upgradation</li>
          <li className="p-4 shadow-md">Spring App Support/Maintenance</li>
          <li className="p-4 shadow-md">
            Spring Application Consulting Services
          </li>
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
          Why You Should Choose Rytsense Technologies For Spring Development
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">Dedicated Team</li>

          <li className="p-4 shadow-md">24/7 Support</li>
          <li className="p-4 shadow-md">Good Client Retention Rate</li>
          <li className="p-4 shadow-md">On-Time Delivery</li>
          <li className="p-4 shadow-md">Non-disclosure Agreement</li>
          <li className="p-4 shadow-md">Progressive Roadmap</li>
        </ul>
      </div>
    </div>
  );
}
