import React from "react";
import { fadeIn } from "../../../mock/varients";

export default function BackDev() {
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
          Service We Provide By Our Backend Developers:
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Database Programming</h1>{" "}
            Our database developers have worked with Microsoft SQL Server,
            MongoDB, DB2, PostgreSQL, MariaDB, SAP HANA, MySQL, and many more.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Service Scripting</h1>
            Our backend developer provides a seamless scripting service. Without
            the right script, nothing can go right, and we ensure that it never
            happens. The projects backend developers work is required to satisfy
            business needs with a faster server.
          </li>
          <li className="p-4 shadow-md">
            {" "}
            <h1 className="text-2xl font-bold mb-4 ">
              API Programming And Integration
            </h1>
            Hiring our backend developers will help you easily integrate with
            third-party. We accomplish integrating any appropriate application
            with the existing backend without any trouble.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Application Re-Engineering
            </h1>
            Our skilled backend developers ensure supreme customization by
            effectively using the present methods of the applications. We apply
            cutting-edge re-engineering methods to affect aspects, screens, and
            processes.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Refactoring Backend</h1>
            The backend developers are refactoring the backend, which enables
            them to restore the existing backend system of web applications
            without losing elements of Back-end development. It is vital when an
            error is detected after a long time or if you want to make some
            changes. It also helps enhance performance; there is no need to
            change the backed code if not necessary.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">AMP App Development</h1>
            The Back-end development service is obtained for web browsing and
            optimization, and it helps pages load faster and provide better
            operation. The AMP app development is quite effective and effortless
            to use.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Cloud Migration</h1>
            Our Backend developers service includes cloud migration, and it
            enables migrant backend systems to the cloud. The computer services
            offer extensive support for the migration of the backend systems.
            Successful cloud migration depends on the backend systems, and the
            cloud migration could be private, public, and hybrid.
          </li>
        </ul>
      </div>
      <div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="p-10 ml-22"
      >
        <div class="p-4 md:p-6 lg:p-8 xl:p-10 text-left">
          <h1 className="text-xl font-bold mb-4 ">
            Technologies Our Backend Developers Use:
          </h1>
          <ul>
            <li> - PHP</li>
            <li>- Ruby on Rails</li>
            <li>- Python</li>
            <li>- NodeJs</li>
            <li>- Rackspace</li>
            <li>- Heroku</li>
            <li>- Google Cloud</li>
          </ul>
        </div>
        <div class="p-4 md:p-6 lg:p-8 xl:p-10 text-left">
          <h1 className="text-xl font-bold mb-4 ">Databases We Use:</h1>
          <ul>
            <li> - Amazon EC2</li>
            <li>- Azure</li>
            <li>- IBM Bluemix</li>
            <li>- Apprenda</li> <li>- MongoDB</li>
            <li>- Oracle</li>
            <li>- PostgreSQL</li>
            <li>- SQLite</li>
            <li>- MySQL</li>
            <li>- MSSQL</li>
            <li>- Databases</li>
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
          Why Should Hire Back-end Developers From Rytsense Technologies?
        </h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-4 text-left p-10">
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              Highly Qualified Developers
            </h1>{" "}
            Our professionals are highly qualified in Back-end development. The
            team understands the frame structure, models, and more. The skilled
            developers have knowledgeable insight, which reflects in their work
            also. We have the best team of Back-end developers who contribute
            and bring the best result.
          </li>

          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">
              New Technologies And Tools
            </h1>
            Rytsense Technologies is known for using the most trustworthy and
            latest technology and tools. Our developers use the same for the
            Back-end development, and our Back-end developer strives to deliver
            highly optimized web applications and websites. The Back-end
            developers write codes without any bugs and deliver the best.
          </li>
          <li className="p-4 shadow-md">
            {" "}
            <h1 className="text-2xl font-bold mb-4 ">
              Interactive Communication
            </h1>
            Our Back-end developers understand the needs of the customers and
            fulfill the model. We maintain transparency and interact with them
            about the development process and update them with every detail. The
            purpose is to deliver an excellent outcome with great quality.
          </li>
          <li className="p-4 shadow-md">
            <h1 className="text-2xl font-bold mb-4 ">Seamless Experience</h1>
            By providing the best, we also ensure that the experience is
            seamless. Our Back-end developers follow all the rules and ensure
            that the development operates flawlessly. If there is any small bug
            or error, our team is ready to modify it soon. With effective
            communication skills, our Back-end developers provide seamless
            factors in Back-end development.
          </li>
        </ul>
      </div>
    </div>
  );
}
