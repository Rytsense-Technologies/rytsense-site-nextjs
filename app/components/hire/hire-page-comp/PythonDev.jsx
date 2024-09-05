import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function PythonDev() {
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
          Expertise You Can Leverage If You Hire Python Developers From Rytsense
          Technology
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Python Desktop Application Development
            </h1>
            Need to build a desktop application that offers a smooth user
            experience? Hire a Python programmer with extensive years of
            knowledge and experience.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Python Web Development</h1>
            Hire dedicated Python developers that help with the development
            phase and ensure you get the perfect web design, framework and
            top-quality web solutions.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Python Machine Learning Services
            </h1>{" "}
            Hire programmers with experience in Python-based machine learning
            development that can be there for you to integrate advanced features
            in web apps using Machine Learning.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Enterprise App Development
            </h1>
            Get an enterprise mobile application enriched with the latest Python
            tools and technologies that ensure your business stays on top of the
            competition.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">IoT Development</h1>
            Hire Python developers that ensure you get the IoT device ready to
            use, leveraging Python�s syntax to achieve adaptability with fewer
            development efforts.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Cloud Base Python Development
            </h1>
            Hire dedicated Python programmers to help you build an application
            with extensive cloud support. Our Python developers are proficient
            at setting up a stable and secure Python cloud development
            environment.
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
          Why Hire Python Developers From Rytsense Technologies?
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            Daily Updates with Full Transparency
          </li>

          <li className="p-4 shadow-md">Dedicated Engagement Model</li>
          <li className="p-4 shadow-md">NDA & Security</li>
          <li className="p-4 shadow-md">End-to-end Services</li>

          <li className="p-4 shadow-md">Client Satisfaction</li>
        </ul>
      </div>
    </div>
  );
}
