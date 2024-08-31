import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServiceBanner = () => {
  return (
    <section className="font-sans text-black py-28 px-40">
      <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
        <div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60"
        >
          <div className="h-full">
            <article className="h-full">
              <div className="h-full">
                <Image
                  className="h-full object-cover"
                  src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705588867/banner-img_k0dqgb.webp"
                  width={733}
                  height={412}
                  alt="Rytesensetech Software Development"
                  title="App development company in Bangalore"
                />
              </div>
            </article>
          </div>
        </div>
        <div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="p-6 bg-grey"
        >
          <div className="leading-relaxed">
            <h2 className="leading-tight text-4xl font-bold">
              {" "}
              Services: Because We Believe In Delivering Excellence!
            </h2>
            <p className="mt-4">
              Our team of skilled professionals is passionate about leveraging
              the latest advancements in technology to deliver customized
              solutions that meet the unique needs of our clients.
            </p>
            <p className="mt-4">
              {" "}
              We specialize in crafting custom software solutions that are
              designed to address your specific business requirements. Our
              development process involves in-depth analysis, to ensure that the
              final product aligns perfectly with your vision.
            </p>
            <p>
            
                <Link href="/contact" className="mt-4 button button--secondary hover:text-pink-700">
                  Explore
                </Link>
             
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
