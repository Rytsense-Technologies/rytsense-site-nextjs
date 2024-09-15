import React from 'react';

const benefits = [
  {
    title: "Flexibility of usage",
    description: "Through our educational mobile app development, learners can learn with ease on devices of their choice. The top benefit of our education tech apps is they can also be offline once the course is downloaded.",
    icon: "✔️",
  },
  {
    title: "Greater push notification reach",
    description: "Mass notification of relevant information and new updates can be gained through our education app development services. Push notifications keep your learners updated and informed, and notify them of the next steps in the course, deadlines, and assessments to ensure learning stays on track.",
    icon: "✔️",
  },
  {
    title: "Higher course completion rate",
    description: "Our mobile app development solutions provide assistance to achieve higher course completion rates. Since learners can access the courses anytime and through their handheld devices, they can complete the course more efficiently.",
    icon: "✔️",
  },
  {
    title: "Adaptability to latest teaching methodology",
    description: "From developing existing courses to learning approaches for interactive job aids, our mobile eLearning application development has varied users. Our scalable, well-designed apps can easily be upgraded with newer teaching methodologies so that learners can derive the maximum benefit out of them.",
    icon: "✔️",
  },
  {
    title: "Greater engagement & interactiveness",
    description: "As an educational app development company, we focus on understanding how education apps work effectively. We make learning courses, assessments, presentations, FAQs interactive and engaging for users.",
    icon: "✔️",
  },
  {
    title: "Better adaptation to training needs",
    description: "Our education app development services can be combined with training modules to better convey concepts. It can be used for aiding in the scope of technical and job-related application of skills. In combination with blended learning and classroom-based training and education apps for learning and development, learners can create education mobility solutions that serve as powerful training and assessment tools.",
    icon: "✔️",
  },
  {
    title: "Support of performance analysis tools",
    description: "Team learning and virtual projects, along with performance analysis tools are utilized in tracking the learning process. These e-learning services track each method, device and step taken by the learner, and provide a detailed report. Our eLearning application development solutions can be used as performance support tools such as quick referencing systems, SOPs, wikis, flowcharts, FAQs that can be used by learners in any environment.",
    icon: "✔️",
  },
  {
    title: "Real-time interaction",
    description: "Through our database integration and cloud services, our education app developers can give the learning app a built-in platform for live instructions, learners, staff and managers can be connected 24*7. This feature can track learner’s performance details and course content can be modified online. Our education technology solutions can also deliver a new piece of content that can be accessed by learners according to the redefined need and level of need.",
    icon: "✔️",
  },
  {
    title: "Increased cost effectiveness",
    description: "Investment in advanced education technology with a deep focus on student-driven and development enhances growth. We have made it possible to partner with digitally aligned content suppliers, publishers, and other service providers to provide even more service to your users.",
    icon: "✔️",
  },
];

const EducationWhyHire = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
          Heres Why You Should Hire Rytsense Technologies as Your Education App Development Company
        </h2>
        <p className="mt-2 sm:mt-4 text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12">
          Our solutions make education mobile app development synonymous with comfort and ease. Our education app development incorporates a broader span of varied edtech features and functionalities to turn your learning business global.
        </p>
        <div className="space-y-8 sm:space-y-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-10">
              <div className="text-2xl lg:text-3xl text-blue-500">{benefit.icon}</div>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-500 dark:text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationWhyHire;
