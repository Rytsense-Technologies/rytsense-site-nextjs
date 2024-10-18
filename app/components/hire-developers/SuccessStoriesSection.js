import React from "react";
import { FaStar, FaStarHalfAlt, FaQuoteLeft } from "react-icons/fa";

const SuccessStoriesSection = () => {
  const testimonials = [
    {
      quote: "Our dedicated developers at Rytsense Tech helped XYZ company launch their innovative software ahead of schedule.",
      stars: 5,
    },
    {
      quote: "With Rytsense Tech, our freelance developers delivered clean, high-quality code, exceeding our expectations and allowing us to meet our goals faster.",
      stars: 4.5,
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} className="text-yellow-500 text-xl" />
        ))}
        {[...Array(halfStars)].map((_, index) => (
          <FaStarHalfAlt key={index} className="text-yellow-500 text-xl" />
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <FaStar key={index} className="text-gray-300 text-xl" />
        ))}
      </>
    );
  };

  return (
    <section className=" py-16">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaQuoteLeft className="text-sky-500 text-3xl mb-4" />
              <p className="text-lg text-gray-800 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                {renderStars(testimonial.stars)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
