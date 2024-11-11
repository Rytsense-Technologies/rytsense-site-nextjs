import React from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote:
      "A heartfelt thanks to the Rytsense team for their exceptional work and unwavering commitment to excellence in developing customized fintech apps.",
    name: "Code Brew Labs Clients-Helmi Hamzah",
    role: "Founder, Do-option.",
  },
  {
    id: 2,
    quote:
      "I am grateful to Rytsense for developing a remarkable customized real estate app that raises the bar in Dubai. Rytsense has truly crafted a game-changer app.",
    name: "Muhammad Altaf",
    role: "CEO, MySpace",
  },
  {
    id: 3,
    quote:
      "I think Rytsense is passionate enough about what we’re doing and really wants to help grow and support that. I think that’s why our relationship has lasted as long as it has and continues to do so.",
    name: "Rameender",
    role: "Co-founder, Shiv.ai",
  },
];

const TestimonialCard = ({ quote, name, role, flag }) => {
  return (
    <div className="bg-slate-100 text-white rounded-xl shadow-lg p-4 sm:p-6">
      <div className="bg-blue-500 p-4 rounded-xl">
        <div className="text-4xl sm:text-5xl font-bold mb-4 text-lime-400">“</div>
        <p className="mb-4 sm:mb-6 text-sm sm:text-base font-semibold">{quote}</p>
        <div className="flex items-center">
          <div className="ml-4">
            <p className="font-semibold">{name}</p>
            <p className="text-xs sm:text-sm text-gray-100">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DubaiTestimonials = () => {
  return (
    <section className="py-8 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="container mx-auto">
        <h2 className="text-start text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">
          We are A Super-Loved <br /> Mobile App Development Company UAE
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map(({ id, quote, name, role, flag }) => (
            <TestimonialCard
              key={id}
              quote={quote}
              name={name}
              role={role}
              flag={flag}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DubaiTestimonials;
