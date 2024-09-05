import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function FrontEndDev() {
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
          Front End Development Services We Offer:
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Front-end Architecture & Design
            </h1>{" "}
            Front-end development services are intended to build dynamic and
            sustainable applications with front-end architecture, a collection
            of tools and processes to improve front-end code quality.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">UI/UX App Development</h1>
            UI/UX development is an essential part of a website or web
            application. The UI/UX development services provide highly scalable,
            data-driven applications with a smooth user interface. The design
            needs to be compelling.
          </li>
          <li className="p-4 shadow-md">
            {" "}
            <h1 className="text-2xl font-bold mb-4 ">PWA App Development</h1>
            Progressive Web Application Development is a powerful service for
            website and mobile applications. It is hybrid and used for native
            websites and mobile apps, and it is a great combination of easy use
            and rich interference.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">HTML5/CSS Development</h1>
            It is an efficient service for enhancing applications and websites.
            HTML/CSS53 service provides an exceptional tool that helps to
            improve quality. It is easy to use and used for several purposes in
            front-end development.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Single Page Application Development
            </h1>
            Several websites opt for single-page application development
            services because of their quick scalability. The front-end web tools
            are quite valuable for the development, and it is based on
            JavaScript.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">AMP App Development</h1>
            The front-end development service is obtained for web browsing and
            optimization, and it helps pages load faster and provide better
            operation. The AMP app development is quite effective and effortless
            to use.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Full-stack Web Development
            </h1>
            Full-stack web development plays a key role in front-end
            development. The development service we provide is interactive with
            front-end users and reliable, and it provides the essence of both
            front-end development and back-end development.
          </li>
        </ul>
        <div class="p-4 md:p-6 lg:p-8 xl:p-10 text-left">
          <h1 className="text-xl font-bold mb-4 ">
            Technologies We Use for Front-End Development:
          </h1>
          <ul>
            <li> - AngularJs</li>
            <li>- Vue.Js</li>
            <li>- React Native</li>
            <li>- React</li> <li>- MEAN</li>
            <li>- Next</li>
            <li>- Flutter</li>
            <li>- HTML</li>
            <li>- CSS</li>
            <li>- Ionic</li>
          </ul>
        </div>
      </div>

      <div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="p-10"
      >
        <h1 className="text-2xl font-bold mb-4 ">
          Why Should Hire Front-end Developers From Rytsense Technologies?
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Highly Qualified Developers
            </h1>{" "}
            Our professionals are highly qualified in front-end development. The
            team understands the frame structure, models, and more. The skilled
            developers have knowledgeable insight, which reflects in their work
            also. We have the best team of front-end developers who contribute
            and bring the best result.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              New Technologies And Tools
            </h1>
            Rytsense Technologies is known for using the most trustworthy and
            latest technology and tools. Our developers use the same for the
            front-end development, and our front-end developer strives to
            deliver highly optimized web applications and websites. The
            front-end developers write codes without any bugs and deliver the
            best.
          </li>
          <li className="p-4 shadow-md">
            {" "}
            <h1 className="text-2xl font-bold mb-4 ">
              Interactive Communication
            </h1>
            Our front-end developers understand the needs of the customers and
            fulfill the model. We maintain transparency and interact with them
            about the development process and update them with every detail. The
            purpose is to deliver an excellent outcome with great quality.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Seamless Experience</h1>
            By providing the best, we also ensure that the experience is
            seamless. Our front-end developers follow all the rules and ensure
            that the development operates flawlessly. If there is any small bug
            or error, our team is ready to modify it soon. With effective
            communication skills, our front-end developers provide seamless
            factors in front-end development.
          </li>
        </ul>
      </div>
    </div>
  );
}
