import React from 'react';

const processSteps = [
  {
    title: "Consulting",
    description: "As a leading education app development company, we begin with what, why, and how eLearning software and apps can benefit your business and bring sustainable solutions to the system. We also deliver a roadmap for app implementation.",
    icon: "💼",
  },
  {
    title: "Requirement Analysis",
    description: "We analyze your requirements to understand the features and functionalities to be integrated in your project. This helps us draw an effective development plan for you.",
    icon: "📋",
  },
  {
    title: "UI/UX Design",
    description: "Our education app development team creates cutting-edge intuitive UI designs that are simple and convenient for the end users. Simultaneously, our designers work on the blueprint designs, user designs and database designs.",
    icon: "🎨",
  },
  {
    title: "Prototype",
    description: "We develop a prototype of what your education app or software would look like. Further, we test the prototype for convenient UI and UX designs.",
    icon: "🛠️",
  },
  {
    title: "Education Software and App Development",
    description: "Our education development team architects a high-quality digital product for your organization based on the initial feedback.",
    icon: "💻",
  },
  {
    title: "Quality Assurance",
    description: "Our developers carefully test every product to ensure client satisfaction and excellent user experience.",
    icon: "✅",
  },
  {
    title: "Deployment",
    description: "We follow the standard protocols while deploying software and learning mobile apps on various platforms where they are easily accessible to the potential audience.",
    icon: "🚀",
  },
  {
    title: "Support and Maintenance",
    description: "All digital solutions require improvement with time. We support our clients by offering post-maintenance services.",
    icon: "🔧",
  },
];

const EducationDevelopmentProcess = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
          Our Education Application Development Process
        </h2>
        <div className="space-y-8 sm:space-y-10">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
              <div className="text-3xl sm:text-4xl lg:text-5xl text-blue-500">{step.icon}</div>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-500 dark:text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationDevelopmentProcess;
