import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function DartDev() {
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
          Why Hire Dart Developers from Rytsense Technologies?
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Expertise</h1>
            Rytsense Technologies has gained immense experience in the last some
            years in web and mobile app development. We have the finest experts
            to build and support web and mobile apps by providing the exact
            potential of Dart to get the perks that your project rates.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Quality Delivered On-Time
            </h1>
            It’s an obvious fact that all clients want their project on time.
            Therefore, we make sure and undertake projects to get things done
            easily and on time. Every project that we take is developed and
            examined on a priority basis without any bugs and errors. A client
            gets the final output comprised of best functionality, pleasant user
            experience, and professionalism.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Strategic Dart Solution
            </h1>{" "}
            At Rytsense Technologies, our clients experience the highest class
            of work that has been performed professionally. Every Dart
            development project that we make is established through accurate
            testing to check the quality. Your project advances through
            different strategies and implementations before it comes to you.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Expert Dart Developers</h1>
            Our Dart development experts are reliable professionals with the
            best industry knowledge. They are always ready to face new
            challenges. At Rytsense Technologies, our experts consider tasks in
            such as manner that propels you ahead of your competitors.
          </li>
        </ul>
      </div>
    </div>
  );
}
