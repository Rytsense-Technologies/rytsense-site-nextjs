import React from 'react';

const basicFeatures = [
  { title: "Lecture Scheduling", icon: "📅" },
  { title: "Sign Up and Log In", icon: "🔑" },
  { title: "Employee-User Interface", icon: "💼" },
  { title: "Classroom Forum", icon: "🏫" },
  { title: "Assignments", icon: "📝" },
  { title: "Integrated Leaderboards", icon: "🏆" },
  { title: "Video Conferencing", icon: "🎥" },
  { title: "Audio Streaming", icon: "🎧" },
  { title: "Push Notifications", icon: "🔔" },
  { title: "Document Sharing", icon: "📂" },
];

const advancedFeatures = [
  { title: "Multi-Lingual Support", icon: "🌐" },
  { title: "AI Personalization", icon: "🤖" },
  { title: "Progress Tracking Dashboard", icon: "📊" },
  { title: "Chat Support", icon: "💬" },
  { title: "Gamification", icon: "🎮" },
  { title: "Data Analytics", icon: "📈" },
  { title: "Performance Tracker", icon: "🏅" },
  { title: "Payment", icon: "💳" },
  { title: "Interactive Graphics", icon: "📊" },
  { title: "Offline and Online Mode", icon: "📡" },
];

const EducationFeatures = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-8">
          Features You Get in Modern Education App Development
        </h2>
        <p className="mt-2 sm:mt-4 text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
          All our eLearning application development solutions are loaded with features that ensure maximum learning and manageability, with a super friendly interface.
        </p>
        
        <div className="mb-8 sm:mb-12">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-6">Basic Features</h3>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {basicFeatures.map((feature, index) => (
              <div key={index} className="p-4 sm:p-6 rounded-lg border border-gray-300 flex flex-col items-start gap-3 sm:gap-5">
                <div className="text-3xl sm:text-4xl text-blue-500">{feature.icon}</div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-800">{feature.title}</h4>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-6">Advanced Features</h3>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {advancedFeatures.map((feature, index) => (
              <div key={index} className="p-4 sm:p-6 rounded-lg border border-gray-300 flex flex-col items-start gap-3 sm:gap-5">
                <div className="text-3xl sm:text-4xl text-blue-500">{feature.icon}</div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-800">{feature.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationFeatures;
