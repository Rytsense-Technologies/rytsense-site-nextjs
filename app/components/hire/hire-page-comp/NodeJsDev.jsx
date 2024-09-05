import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function NodeJsDev() {
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
          Explore The Expertise Of Our Node JS Programmers
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Node.js System Architecture Development
            </h1>
            Hire dedicated Nodejs developers from Rytsense Technologies to
            enrich your back-end solution with well-defined, high-quality, and
            scalable Node.js architecture.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Serverless MicroService Implementation
            </h1>
            Hire NodeJS developers who can take advantage of the event-driven
            architecture of Node.JS to build microservices-based solutions to
            manage the server load and offer a smooth user experience.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Node.js Plugin Development
            </h1>{" "}
            Get the custom plugin development and integration leveraging our
            years of Node.js development experience and expertise to enhance the
            offering of web solutions.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              API Development and Integration
            </h1>
            Starting from Payment APIs to social media APIs, our team of Node.js
            developers holds expertise for every one of them. Hire Node JS
            developers to get the API of your choice.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Custom Node.js Development
            </h1>
            Whether you need a real-time mobile application or want to develop
            an IoT solution with Node-Red; Hire Node js developers from Rytsense
            Technology to get justified outcomes of your investment.
          </li>
        </ul>
      </div>
    </div>
  );
}
