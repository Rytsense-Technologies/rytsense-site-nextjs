const services = [
  {
    title: "Corporate Training Apps",
    description:
      "Our educational app development services consist of an easy-to-follow design concept for corporate learning apps. When we combine our design with Client’s Learned Content, we are able to create a training module that helps the team boost their present skillset.",
    icon: "📘",
  },
  {
    title: "Induction and Orientation Apps",
    description:
      "Our team of educational app developers specialize in the development of custom, brand-specific apps which makes it easy for the HR to onboard new employees and for the candidate to feel right at home with the first swipe, zoom, and click.",
    icon: "📱",
  },
  {
    title: "Employee Engagement Apps",
    description:
      "As a leading educational app development company, we also focus on employee engagement-based educational mobile apps. Our apps have been used by Fortune 500 corporations as a platform to bring and connect all the employees together.",
    icon: "👥",
  },
  {
    title: "Skill Boosting Apps",
    description:
      "Backed by AR/VR and AI, our skill-enhancing apps are concentrated on enhancing the employee’s skills through the medium of gamification. As part of our eLearning app development services, our skill boosting apps are available on all required platforms.",
    icon: "🚀",
  },
  {
    title: "Tuition Apps",
    description:
      "Our tuition app development solutions are devised to make accessibility of education real-time and non-geography bound. Our educational mobile app developers offer customized applications loaded with engaging features such as homework section, to-do list, etc. for efficient learning.",
    icon: "📚",
  },
  {
    title: "E2C eLearning App Development",
    description:
      "Our education app development services also include creating apps for large scale education ventures. Our educational app developers understand the details of enterprise-level eLearning apps, so you don’t have to worry about deploying your educational apps on a grand scale.",
    icon: "🏫",
  },
  {
    title: "Virtual Classrooms and Video Conferencing",
    description:
      "With the continuous advancement in educational app development process, screen learning is a daily norm. We also develop video conferencing apps and virtual classrooms for your educational business. Our educational mobile app developers can integrate features such as presentations, participation control, and homework management, etc. for more engagement.",
    icon: "🎥",
  },
  {
    title: "LMS Development",
    description:
      "As a leading educational software development company, our services also consist of LMS platform design and development that can effectively track online learning and training activities. Your users can easily access the entire study material within the platform.",
    icon: "💻",
  },
  {
    title: "eLearning Apps for Disabled",
    description:
      "As a renowned educational app development company, we also focus on education application development for our differently abled audience. New knowledge can be accessible to all through our advanced education learning solutions and app development work based on 3D and AR-based technologies.",
    icon: "♿",
  },
  {
    title: "On-demand eLearning Apps",
    description:
      "Our educational app development services also include enabling apps for large scale education ventures. Our educational app developers understand the details of enterprise-level eLearning apps, so you don’t have to worry about deploying your educational apps on a grand scale.",
    icon: "📲",
  },
];

const EducationDevelopmentService = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Our Suite of Educational App Development Services
        </h2>
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600">
          We offer an integrated set of eLearning elements, tools and resources
          that support knowledge delivery and management. Our suite of solution
          makes us one of the leading education application development
          companies in the world.
        </p>
        <div className="mt-12 grid gap-10 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-4 md:gap-8">
              <div className="text-3xl sm:text-4xl text-blue-600 mb-4">
                {service.icon}
              </div>
              <div className="font-medium dark:text-white">
                <div className="text-lg sm:text-xl lg:text-2xl mb-2">
                  {service.title}
                </div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationDevelopmentService;
