import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function UIUX() {
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
          Find Out Our UI UX Design Services
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Information Architecture Supportive UI
            </h1>{" "}
            For a creative UI/UX design, hire our designers from Rytsense
            Technologies. Our professional UI/UX designers give context to users
            natural behavior to create a unified effect on target audiences.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">User Testing</h1>
            Here, we provide skilled UI/UX designers to perform user testing
            sessions that gain important feedback and analytical capabilities on
            UI/UX. More, It makes necessary modifications and design
            improvements.
          </li>
          <li className="p-4 shadow-md">
            {" "}
            <h1 className="text-2xl font-bold mb-4 ">IA & Wireframes</h1>
            Hire UI/UX designers to help you in creating and displaying data
            structure through wireframes. On initial workflow, data structure,
            and navigation testing implies UI patterns and features.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Cross-Platform Compatibility
            </h1>
            To develop essential features and functionalities, you can hire
            UI/UX designers from Rytsense Technologies. To produce
            platform-dependent and responsive design, our designers follow
            standard UI/UX design guidelines.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Custom Design Solutions
            </h1>
            Dedicated UI/UX designers can build unique web solutions for your
            companys needs. Using advanced tools and technology, we customize
            your product design to fit your requirements. This is why hiring
            UI/UX designers from us is the ideal option for your project.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Website Design Services
            </h1>
            We place a strong emphasis on interactive website design solutions
            that help your company grow. Rytsense Technologies can provide you
            with UI UX specialists and a user-friendly website design solution
            suited to your companys demands.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Our Expertise</h1>
            <span className="font-bold">Tools:</span> Adobe Flash, Adobe
            Illustrator, Adobe Photoshop, Axure, Corel Draw, Dreamweaver,
            InDesign, InVision, MS Visio, Sketch, Justinmind, Zeplin <br />
            <span className="font-bold">Technologies:</span>HTML / HTML 5,
            Javascript / Jquery, CSS/CSS 3, Bootstrap, AngularJS, ReactJS, Sass,
            Vue JS
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
          Why Should You Hire UI/UX Designers From Rytsense Technologies?
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Dedicated Team</h1> We have
            a qualified UI UX designer who is experienced in providing superior
            design solutions for almost all prominent industrial areas.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Flexibility In Time Zones
            </h1>
            We are always available to work in your countrys time zone. Hire one
            of our talented designers to accomplish the work in your time zone.
          </li>
          <li className="p-4 shadow-md">
            {" "}
            <h1 className="text-2xl font-bold mb-4 ">On-Time Service</h1>
            Our website and mobile app designers use cutting-edge techniques and
            technology, and we complete 97% of projects on time.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Security</h1>
            Here we guarantee complete data security. To prevent any errors, we
            make systems and channels secured. As we follow standard security
            procedures, our designers use methodologies to maintain the online
            and mobile app solutions free of security concerns.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">24/7 Support</h1>
            Our engineers are always available to assist you both during and
            after the development process. In addition, we are always available
            to answer your questions.
          </li>
        </ul>
      </div>
    </div>
  );
}
