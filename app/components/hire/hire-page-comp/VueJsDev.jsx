import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function VueJsDev() {
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
          Why VueJS Are Gaining Fame?
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Simple To Understand</h1>
            This framework is simple to understand and can be easily
            implemented. Vue JS does not require additional knowledge of Java,
            Angular, or libraries to begin coding, as is the situation with
            other front-end technologies.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Lightweight</h1>
            The VueJS framework is approximately approx 18 KB in size when
            downloaded as a zip file. Because the library is lightweight, it is
            extremely user-friendly. It also has a good result on your UX and
            Search engine optimization.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Flexibility And Integration
            </h1>{" "}
            The flexibility to connect with existing applications is a necessary
            aspect of any new technology. Its a lot simpler with Vue JS because
            it only uses JS frameworks and doesnt need any other software.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Advanced API Development and Integration
            </h1>
            If you have an application that needs to be improved in terms of
            reliability, redrafting it in VueJS is the best option. With its
            advanced functionality, this framework may be gradually integrated
            into your code database, eliminate the need to rewrite the entire
            item.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">High-Efficiency</h1>
            VueJS is incredibly fast. It is not only the quickest framework, but
            it also has all the necessary features to provide perfect UX in SPAs
            and Uis. Vue.js builds apps quicker than Angular and React in the
            area of mobile apps.
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
          Why Should You Hire VueJS App Developers From Rytsense Technologies?
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              100% Client Satisfaction
            </h1>
            We provide post-development support and maintenance 24/7. Using
            booking solutions and affordable maintenance packages we ensure that
            our clients feel completely satisfied.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Lightweight</h1>
            The VueJS framework is approximately approx 18 KB in size when
            downloaded as a zip file. Because the library is lightweight, it is
            extremely user-friendly. It also has a good result on your UX and
            Search engine optimization.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Security & Scalability</h1>{" "}
            To ensure high-level reliability and flexibility for your
            application, we deploy cutting-edge security methods like powerful
            data encryption and a secure admin panel.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Integrity & Transparency
            </h1>
            We work in a private method because we understand privacy! When your
            project objectives require transparency then our specialist
            resources are the ideal option for you.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Years of Expertise</h1>
            Many of our clients have relied on our Vue.Js developers for years
            to offer excellent software solutions. Awards, honors, and
            recognition are given in for teams’ dedication and hard work. Our
            VueJS developers are skilled and well experienced who provide
            excellent custom web application services that fit your needs.
          </li>
        </ul>
      </div>
    </div>
  );
}
