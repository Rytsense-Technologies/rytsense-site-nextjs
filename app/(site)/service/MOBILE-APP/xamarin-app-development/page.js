import React from "react";
import TechnologyStack from "../../../components/services/TechnologyStack";
import HeroSection from "../../../components/services/HeroSection";
import bannerImage from "../../../../public/images/service-img/mobiletab.png";
import Link from "next/link";
import { fadeIn } from "../../../../mock/varients";

const page = () => {
  return (
    <>
      <HeroSection
        title={"Xamarin App DevelopmentCompany"}
        subTitle={
          "Hire A Skilled Team Of Expert Xamarin Developers For Your Next Project"
        }
        heroImage={bannerImage}
      />
  <div className=" min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <section>
            <p className="text-gray-700">
              Xamarin allows you to create cross-platform iOS and Android mobile
              apps using the powerful C# language and common code. With the
              usage of a hybrid mobile application, companies may interact with
              their workers, valued clients, and physical assets at any time and
              from any location. Creating best-in-class apps for several mobile
              platforms, on the other hand, saves a lot of time and money.
            </p>
          </section>
          <section>
            <p className="text-gray-700 mt-5">
              Clients and workers may benefit from a real-time business
              environment created by integrating Xamarin apps with cloud, IoT,
              and analytics technologies. It has the ability to reuse code from
              other applications. To reach more people it uses net libraries and
              creates cross-platform tablet and smartphone apps.
            </p>
          </section>
        </div>

        <div className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4 p-6 text-center">
          Advantages Of Xamarin Cross-platform App Development
        </div>
        <div className="h-full min-h-screen w-full bg-gray-100 p-4">
          <div className="grid gap-14 md:grid-cols-3 md:gap-5">
            <div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="rounded-xl bg-white p-6 text-center shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-yellow-600 shadow-lg shadow-teal-500/40 text-4xl font-bold">
                01
              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
                High-Performance Compile Code
              </h1>
              <p className="px-4 text-gray-500">
                All apps are written in C# using Xamarin, and the code can be
                shared across all mobile development platforms.
              </p>
            </div>

            <div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              data-aos-delay="150"
              className="rounded-xl bg-white p-6 text-center shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40 text-4xl font-bold">
                02
              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14 ">
                Automated Testing
              </h1>
              <p className="px-4 text-gray-500">
                A Xamarin app can be tested using the Xamarin Test Cloud. It
                saves time and effort for developers who would otherwise have to
                perform manual testing.
              </p>
            </div>
            <div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              data-aos-delay="300"
              className="rounded-xl bg-white p-6 text-center shadow-xl"
            >
              <modiv className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40 text-4xl font-bold">
                03
              </modiv>
              <h1 className="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">
                Native User Interfaces
              </h1>
              <p className="px-4 text-gray-500">
                Native UI controls used in Xamarin app development. This allows
                developers to construct native apps that make use of a variety
                of device-specific experiences.
              </p>
            </div>

            <div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="rounded-xl bg-white p-6 text-center shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-yellow-600 shadow-lg shadow-teal-500/40 text-4xl font-bold">
                04
              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
                Fewer Bugs
              </h1>
              <p className="px-4 text-gray-500">
                Xamarin helps developers to create applications with the fewest
                possible problems. Furthermore, it offers a wide variety of
                protection to the apps.
              </p>
            </div>
            <div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              data-aos-delay="150"
              className="rounded-xl bg-white p-6 text-center shadow-xl"
            >
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40 text-4xl font-bold">
                05
              </div>
              <h1 className="text-darken mb-3 text-xl font-medium lg:px-14 ">
                Reduced Time-to-Market
              </h1>
              <p className="px-4 text-gray-500">
                Using Xamarin to create a cross-platform app eliminates the need
                for several apps for different operating systems. It also
                eliminates the need for a high learning curve.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4 p-10 text-left">
        Top-Notch Xamarin App Development Company - Rytsense Technology
      </div>
      <p className="text-gray-700 p-6 text-left">
        We have a skilled team of Xamarin engineers, designers, developers, and
        QA Engineers that accomplish Xamarin app development using Visual Studio
        for diverse user interfaces as an experienced Xamarin mobile app
        development business. Furthermore, we provide the best Xamarin
        development solutions that always fit with your company objectives and
        allow us to deliver cross-platform mobile apps for multiple Base Class
        Libraries by using our deep understanding of Xamarin. We at Rytsense
        Technology are proud of our excellent Xamarin development process, which
        allows us to meet the expectations of a wide range of corporate app
        development projects.
      </p>
      <p className="text-gray-700 p-6 text-left">
        We create apps that appear the same across platforms and have a native
        feel in a short amount of time. We provide comprehensive Xamarin mobile
        app solutions thanks to our tight collaboration of product managers,
        business architects, designers, developers, server engineers, and
        marketers.
      </p>
      <p className="text-gray-700 p-6 text-left">
        We also develop custom Xamarin Mobile App Services for our customers, as
        we recognize the relevance of their requirements. We have a strong
        technical Xamarin development team that understands the clients needs
        and helps them achieve their projects goals. You contact us with your
        ideas, and we will create great apps tailored to your needs.
      </p>
      <div className="my-4 font-bold text-3xl text-gray-800 sm:text-4xl mb-4 p-6 text-center">
        Why You Should HireRytsense Technology For Xamarin App Development?{" "}
      </div>
      <div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-wrap justify-between p-10"
      >
        <div className="max-w-sm rounded overflow-hidden shadow-2xl mb-4">
          <h1 className="text-darken mb-3 pt-3 text-xl font-bold lg:h-14 lg:px-14">
            Expert Team
          </h1>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Rytsense Technology is one of the finest Xamarin app development
              firms, has a team of professionals who build Xamarin apps that are
              faster and more cost-effective while supporting all mobile devices
              and platforms.
            </span>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
          <h1 className="text-darken mb-3 pt-3 text-xl font-bold lg:h-14 lg:px-14">
            In-depth Knowledge
          </h1>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Our experts have extensive experience in Xamarin cross-platform
              app development, as well as C#, Java, and Objective-C, and can
              therefore efficiently design an app that operates on a variety of
              platforms and devices.
            </span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
          <h1 className="text-darken mb-3 pt-3 text-xl font-bold lg:h-14 lg:px-14">
            Adhere Manage
          </h1>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              We do not leave our client and project just like that; we believe
              in long-term relations and manage the project with quality and
              relevant information.
            </span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-2xl    mb-4">
          <h1 className="text-darken mb-3 pt-3 text-xl font-bold lg:h-14 lg:px-14">
            On-Time Delivery
          </h1>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              We do not like to waste our clients unnecessary time; we believe
              in punctuality and deliver the project on time. Our discipline and
              dedication towards work are what the client loved the most, and we
              tend to sustain it.
            </span>
          </div>
        </div>
      </div>
      <TechnologyStack />
    </>
  );
};

export default page;
