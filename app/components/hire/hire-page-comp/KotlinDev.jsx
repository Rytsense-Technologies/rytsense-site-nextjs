import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function KotlinDev() {
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
          Hire Kotlin Developers for Following Services,
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">Kotlin App Development</li>

          <li className="p-4 shadow-md">Kotlin App Upgradation</li>
          <li className="p-4 shadow-md">Migration to Kotlin Platform</li>

          <li className="p-4 shadow-md">Kotlin App Optimization</li>
          <li className="p-4 shadow-md">Kotlin App Testing</li>
          <li className="p-4 shadow-md">Kotlin App Migration</li>
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
          Why You Should Hire Kotlin Developers From Rytsense Technologies?
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            Experienced and certified developers
          </li>

          <li className="p-4 shadow-md">Dedicated team for every project</li>
          <li className="p-4 shadow-md">
            {" "}
            Agile approach to mobile app development
          </li>
          <li className="p-4 shadow-md">Strong focus on UI/UX design</li>

          <li className="p-4 shadow-md">
            Long Years of Professional Experience
          </li>
          <li className="p-4 shadow-md">Periodic Reports</li>
          <li className="p-4 shadow-md">On Demand Devoted Resources</li>
          <li className="p-4 shadow-md">Strict NDA terms</li>
          <li className="p-4 shadow-md">Source Code Authorization</li>
          <li className="p-4 shadow-md">Domain Expertise</li>
        </ul>
      </div>
    </div>
  );
}
