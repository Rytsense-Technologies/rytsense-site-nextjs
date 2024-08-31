import React from 'react';

const technologies = [
  {
    title: "Artificial Intelligence",
    description: "With prominent educational mobile app development services, our AI solutions help in tracking progress reports, enhancing video recognition, and a lot more.",
    icon: "🤖", 
  },
  {
    title: "Big Data",
    description: "With incorporation of Big Data analytics, you can make learning more insightful through performance tracking, data reports, etc.",
    icon: "📊",
  },
  {
    title: "Blockchain",
    description: "Blockchain integration to our eLearning app development solutions helps in secure and authenticated content flow. This also alleviates data threats and other cybersecurity issues.",
    icon: "🔗",
  },
  {
    title: "AR/VR",
    description: "While offering education mobile app development solutions, our educational app developers follow directives such as SCORM, AICC and XAPI to support virtual solutions.",
    icon: "🕶️",
  },
  {
    title: "Gamification",
    description: "As a renowned education mobile app development company, we hold years of experience in creating game-based learning environments for an extensive base of students worldwide.",
    icon: "🎮",
  },
];

const EducationTechnologies = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
          Modern Edge Technologies We Use to Develop eLearning Apps
        </h2>
        <p className="mt-2 sm:mt-4 text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12">
          We are a leading education app development company that holds expertise in providing eLearning solutions integrated with the latest technologies.
        </p>
        <div className="space-y-8 sm:space-y-10">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
              <div className="text-3xl sm:text-4xl lg:text-5xl text-blue-500">{tech.icon}</div>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">{tech.title}</h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-500 dark:text-gray-400 leading-relaxed">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTechnologies;
