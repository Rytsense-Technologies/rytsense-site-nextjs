import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function SwiftDev() {
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
          Hire Swift Developers From Rytsense Technologies For Following Swift
          Services
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Custom Swift App Development
            </h1>{" "}
            Our Swift developers are adept to render tailor-made app solutions
            as per the clients requirements. Our Swift developers make the best
            endeavors to aid clients goals
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Enterprise Swift Application
            </h1>
            At Rytsense Technologies, our team develops enterprise Swift and
            provides you with an award-winning application usable with devices
            like Mac, iPhone, iPad. Our dynamic and robust iOS apps help
            business methodology to breakthrough profits and income.
          </li>
          <li className="p-4 shadow-md">
            {" "}
            <h1 className="text-2xl font-bold mb-4 ">
              Swift App Consulting Services
            </h1>
            At Rytsense Technologies, you can have a well-qualified consultant
            who explains the pros and cons of each technology. That will help
            businesses to decide which tech is best for building the app.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Swift App Designing</h1>
            Our Swift app development team builds innate and highly pleasant
            Swift-based apps that stand out on App Store for different
            integrity.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              QA and Testing Services
            </h1>
            A team of Swift developers has experienced QA testers available. QA
            testers test every application to make sure it is bug-free.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Upgradation Services</h1>
            Our Swift developers manage and migrate apps from other development
            methods. Hire swift developers from Rytsense Technologies to migrate
            apps without obstructing its performance.
          </li>
        </ul>
      </div>
    </div>
  );
}
