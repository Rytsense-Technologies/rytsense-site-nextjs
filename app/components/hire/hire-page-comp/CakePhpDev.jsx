import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function CakePhpDev() {
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
          Top-most Benefits of CakePHP Development
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Simple Code</h1>
            CakePHP developers can change the structure of URLs by modifying a
            single set of scripts.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Open Source Platform</h1>
            CakePHP is an open-source platform that is great for rapid
            application development and bespoke website development.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Features of CakePHP MVC (Model View Controller) Architecture
            </h1>{" "}
            CakePHP is built on the MVC framework, which allows our CakePHP
            developers to store every query to the database. The data remains
            appropriate for end-users, and the data presentation layer is kept
            separate from the business layer.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Object-Oriented Programming
            </h1>
            If a model object is just not found in a related file, CakePHP
            creates it dynamically. As a matter of fact, our programmers are
            well-versed in CakePHP and object-oriented programming.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Object Relational Mapping
            </h1>
            CakePHP has a good capacity for in-built ORM that makes it simpler
            for the CakePHP developers to pre-define callbacks.
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
          Why Hire CakePHP Developers From Rytsense Technologies?
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Years Of Good Experience
            </h1>
            At Rytsense Technologies, our CakePHP developers are experienced &
            have proficient knowledge of this framework.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Integrity & Transparency
            </h1>
            Your idea is secure with us as we care about your privacy. Our teams
            work transparently and follow the strict NDAs policy.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Hassle-free Project Management
            </h1>{" "}
            We keep you update about complex project management concerns if it
            happens as our experienced project managers constantly work on your
            project.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Flexible Engagement Models
            </h1>
            Hire CakePHP developers online on a monthly, part-time, hourly, or
            full-time basis as per your needs.
          </li>
        </ul>
      </div>
    </div>
  );
}
