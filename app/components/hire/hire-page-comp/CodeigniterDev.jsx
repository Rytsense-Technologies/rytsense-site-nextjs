import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function CodeIgniterDev() {
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
          About Codeigniter Developers From Rytsense Technologies
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            Rytsense Technologies is one of the leading web development company
            with 7+ years of experience in software and web development.
          </li>

          <li className="p-4 shadow-md">
            We offer the best CodeIgniter development services that are
            tailor-made for the demands by our expert CodeIgniter developers.
          </li>
          <li className="p-4 shadow-md">
            By using the excellent features of CodeIgniter our team provides the
            most reliable CodeIgniter web development services within least
            duration and affordable price.
          </li>
          <li className="p-4 shadow-md">
            We can also boost up your business by offering the best website by
            using various CodeIgniter modules for strong CodeIgniter e-commerce
            development.
          </li>

          <li className="p-4 shadow-md">
            Hire CodeIgniter web developers to get the most out of this super
            fast and secure framework with full dedication and customized
            development of your ideas.
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
          Why Hire Dedicated Developers from Rytsense Technologies?
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Scalable & Robust Solutions
            </h1>
            Rytsense Technologies is Leading company who are always ready to
            help global businesses with their scalable & robust websites and
            apps.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Technical knowledge</h1>
            You can CodeIgniter solution more creative, unique and innovative as
            we have very skilled and experienced dedicated CodeIgniter
            developer�s team.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Cost-effective solution
            </h1>{" "}
            You dont need to spend thousands of dollars on your basic
            requirements. We provide best CodeIgniter solutions and applications
            in your budget.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Years of Experience</h1>
            Being top CodeIgniter Development Company, we have delivered
            CodeIgniter Services and solutions by allowing customers to turn
            into high-performance business units.
          </li>
        </ul>
      </div>
    </div>
  );
}
