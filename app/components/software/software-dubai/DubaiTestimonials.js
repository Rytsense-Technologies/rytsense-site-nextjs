import React from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote:
      "I think Code Brew Labs is passionate enough about what we’re doing and really wants to help grow and support that. I think that’s why our relationship has lasted as long as it has and continues to do so.",
    name: "Muhammad Asif",
    role: "Founder, Reon-Digital",
    flag: "🇦🇪",
  },
  {
    id: 2,
    quote:
      "Overall Code Brew Labs gave us what we wanted, albeit slightly over budget. They stayed on schedule most of the time, the work was well done and I would potentially use them again and refer them.",
    name: "Ahmad Hussain",
    role: "CTO, FHC-GOC",
    flag: "🇦🇪",
  },
  {
    id: 3,
    quote:
      "I think Code Brew Labs is passionate enough about what we’re doing and really wants to help grow and support that. I think that’s why our relationship has lasted as long as it has and continues to do so.",
    name: "Muhammad Asif",
    role: "Founder, Reon-Digital",
    flag: "🇦🇪",
  },
];

const TestimonialCard = ({ quote, name, role, flag }) => {
  return (
    <div className="bg-slate-100 text-white rounded-xl shadow-lg p-6">
      <div className="bg-blue-500 p-4 rounded-xl">
        <div className="text-5xl font-bold mb-4 text-lime-400">“</div>
        <p className="mb-6 text-sm font-semibold">{quote}</p>
        <div className="flex items-center">
          <div>
            <Image
              src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1705383202/samples/people/smiling-man.jpg"
              width={100}
              height={100}
              className="rounded-full mx-auto object-cover"
            />{" "}
          </div>
          <div className="ml-4">
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-100">{role}</p>
            <p className="text-sm">{flag}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DubaiTestimonials = () => {
  return (
    <section className="py-12 px-20">
      <div className="container mx-auto">
        <h2 className="text-start text-3xl font-bold mb-12">
          We are A Super-Loved <br /> Mobile App Development Company UAE
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
