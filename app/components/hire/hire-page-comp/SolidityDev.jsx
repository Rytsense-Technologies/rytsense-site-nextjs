import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function SolidityDev() {
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
          Why You Should Hire Solidity Developers From Rytsense Technologies
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Experienced Developers</h1>
            Hire experienced Solidity developers with experience in the field
            who give the best in class services.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Best Technical Competence
            </h1>
            Hire top Solidity Developers with profound technical knowledge of
            Solidity Development.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">On-Time Delivery</h1> Hire
            the best Solidity developers who guarantee on-time delivery with
            quality of work.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Guaranteed Success</h1>
            Hire Solidity Developers who are extremely skilled to produce
            success with new challenging work.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Software Quality Assurance
            </h1>
            Hire top Solidity Developers who follow the best software
            development methods to maintain high-quality bug-free code. As a Top
            Solidity Development Company, Rytsense Technologies provides
            customized, cost-effective Solidity Development services.
          </li>
        </ul>
      </div>
    </div>
  );
}
