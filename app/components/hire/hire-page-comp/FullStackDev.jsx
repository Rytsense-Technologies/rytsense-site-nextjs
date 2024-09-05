import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function FullStackDev() {
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
          Full-Stack Developer Service We Follow:
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              1) Full-stack Web Development
            </h1>{" "}
            Our full-stack developer provides dynamic, reliable web developments
            using the latest front-end and back-end technologies. We also
            provide a personalization design for full-stack web development.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">2) Database Management</h1>
            We provide accurate database management in real-time. We deliver the
            database according to the data flow diagram rules. Our professionals
            manage and handle database management.
          </li>
          <li className="p-4 shadow-md">
            {" "}
            <h1 className="text-2xl font-bold mb-4 ">
              3) Full Stack Front-end Development
            </h1>
            Our developer used HTML, JavaScript, MEAN stack, and CSS for the
            front-end development. We deliver excellent quality and follow all
            principles to perform front-end development. Our developers ensure
            that the font, text, color, and others are coordinating and are
            adequate for the website.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              4) Full Stack Back-end Development
            </h1>
            Our full-stack back-end development uses JavaScript, Laravel,
            Node.Js, PHP, Ruby, Python, etc. We ensure that code is executed
            accurately and well, and we provide reliable and secure full-stack
            back-end development.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              5) Full Stack Full Stack Developement
            </h1>
            We provide scalable and high-quality development. Our developer
            verifies it and tests it till it becomes a seamless application.
            Matching the business needs of our clients is what we want, and we
            work hard for it. The latest technology makes the work more
            efficient.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              6) Full Stack Application Development
            </h1>
            One of the famous full-stack services is full-stack application
            development. Our experts create cross-platform, native, and hybrid
            mobile applications. We used Flutter, Ionic, React Native, and many
            others for building mobile applications with full-stack application
            development.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              7) Full-Stack JavaScript Development
            </h1>
            Our full-stack developers know JavaScript. They create dynamic web
            applications, interactive web pages, mobile apps, and software
            applications by applying their versatility and superb functionality.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              8) API Development And Integration
            </h1>
            Our full-stack developers are skilled in implementing API
            integration services to connect shipping tracking apps, IoT devices,
            third-party payment gateways, B2B Integrations, and SaaS platforms.
            We provide high-quality and scalable API development.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              9) Full Stack PHP Development
            </h1>
            Rytsense Technologies used PHP development for creating websites and
            web apps. Our developers used Linux for the operating system and
            ensured that it operated error-free. It can be operated through
            third-party API development.
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
          Why Hire Rytsense Technologies Full-Time Stack Developers?
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">1) Highly Skilled</h1> Our
            full-time stack developers have proficient knowledge about software,
            coding, technology, and much more. With out-of-box solution
            thinking, we provide the best and unique results. Our developers
            have insight into the current trends, latest market, etc. We
            maintain a highly professional attitude and deliver quality to match
            the clients needs.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">2) On-time Delivery</h1>
            We value time and know-how precious it is. More than that, we
            understand the importance of the given word, and thus Rytsense
            Technology developers deliver development in a given time. We
            maintain transparency, so there is clear communication between the
            client and us.
          </li>
          <li className="p-4 shadow-md">
            {" "}
            <h1 className="text-2xl font-bold mb-4 ">3) Defined Approach</h1>
            Our developers are clear about the objective and have a defined
            approach toward full-stack development. We ensure that customers do
            not face any technical problems, and if there are any, we are
            happily here to solve them.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              4) Cost And Time Effective
            </h1>
            With our skilled developers, we are aware of what to deliver. Their
            insightful knowledge contributes to the development, and thus it
            becomes cost-effective and less time-consuming. To match client
            business needs, we have different factors and powerful aspects.
          </li>
        </ul>
      </div>
    </div>
  );
}
