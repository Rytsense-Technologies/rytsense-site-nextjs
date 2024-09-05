import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function YiiDev() {
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
          Why You Should Choose Yii Development
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Highly Extensible</h1>
            If you see it virtually, you will find that all the parts of the Yii
            framework are extremely extensible. Also, its customizable enough to
            suit business requirements.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Rapid Development</h1>
            Framework Yii makes all the basic CRUD operations and provides
            fast-running apps. It also assures higher security of the
            applications.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Easy Installation</h1> With
            Yii, you dont have to waste much time in the installation process as
            its very simple to install.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Huge Community Support</h1>
            Due to the excellent features of Yii like forums, discussion groups,
            news, hall of fame, and live chat, the framework has more
            comprehensive support among developers.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Easy Data Migration</h1>
            Yii migration utility allows reasonable control over the database
            changes that aids to upgrade and download app versions on various
            installations.
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
          Why You Should Hire a Yii Developer From Rytsense Technologies?
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Experienced Resource</h1>
            We provide you Yii developers who have the best skills and
            experience required for the project.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Fluient Communication Lightweight
            </h1>
            Our Yii developers talk in your language. This guarantees a clear
            and on-point communication process to get and deliver exactly what
            you need.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Assurance of Quality</h1>{" "}
            We assure you 100% Quality standards and Client satisfaction are
            what we promise and when we deliver.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Life-Time Support</h1>
            We give you Life-Time support post the delivery of the project. This
            involves fixing bugs, resolving issues, and training on the system.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Data Security</h1>
            To protect the confidential information of clients to the top
            priority. We keep updated with the most advanced data security best
            methods, compliance, and regulations.
          </li>
        </ul>
      </div>
    </div>
  );
}
