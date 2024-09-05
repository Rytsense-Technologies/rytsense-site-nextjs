import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function ReactNativeDev() {
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
          Explore The Expertise Of React Native Programmers
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Custom App Development</h1>{" "}
            Want your mobile application to offer the most unique user
            experience? No worries!!! Hire dedicated React native developers
            from Rytsense Technologies with custom app development requirements
            to get top-notch solutions.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Full-stack App Development
            </h1>
            Need assistance from industry experts for your full-stack app
            development requirements? Look no further and hire top React native
            developers from Rytsense Technologies to get exceptional web app
            solutions.
          </li>
          <li className="p-4 shadow-md">
            {" "}
            <h1 className="text-2xl font-bold mb-4 ">
              React native iOS App Development
            </h1>
            Rule the Apple app store with your react-native iPhone application
            and get the assistance of the developers of a top app development
            company by Hiring React Native app developers from Rytsense
            Technology.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              React Native Android App Development
            </h1>
            Own a feature-rich Android application catered considering your
            unique development requirements with the help of React Native
            experts of Rytsense Technologies to get all the assistance you need
            to reach your broad target audience base.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              React Native Game Development
            </h1>
            Get 2D gaming applications with a more realistic gaming environment
            offering a more specific gaming experience with outstanding
            rendering experience.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">API Integration</h1>
            Enhance the offering of your React Native solution by integrating
            different third-party APIs that can help the React Native developers
            minimize the development efforts while enhancing the performance of
            the application.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Native App Development</h1>
            Want your application to extract everything that your preferred
            platform has to offer? Hire React Native developer from Rytsense
            Technology and get the advantage of Native app development enriched
            with our app development proficiency.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              React Native Team Augmentation
            </h1>
            Need a helping hand from experts with long-term involvement in
            Flutter to enhance the development capability of your existing
            Flutter app development team? Hire developers from Rytsense
            Technology to deliver exceptional app solutions.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              React Native UI/UX Development
            </h1>
            Hire React Native app developers and take a step forward towards
            success with the user-pleasing app design that makes your mobile
            application more approachable and browsable for your target
            audience.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              React Native MVP Development
            </h1>
            Get an MVP of your mobile application through the help of React
            Native app experts that can be there for you through the app
            ideation process to deployment that can make the codebase more
            adaptable and stable.
          </li>
        </ul>
      </div>
    </div>
  );
}
