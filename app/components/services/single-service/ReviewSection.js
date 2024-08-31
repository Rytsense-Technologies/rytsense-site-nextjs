import React from 'react'

const statsData = [
    { value: '4500+', label: 'App Developed' },
    { value: '2200+', label: 'Website Designed' },
    { value: '2700+', label: 'Happy Clients' },
    { value: '1000+', label: 'Developers' },
    { value: '120+', label: 'AI & IOT Solution' },
    { value: '140+', label: 'Game Developed' },
    { value: '120+', label: 'Salesforce Solutions' },
    { value: '40+', label: 'Data Science' },
  ];

const ReviewSection = () => {
  return (
    <div className="review">
    <div
      className="rounded-lg md:p-8"
      id="stats"
      role="tabpanel"
      aria-labelledby="stats-tab"
    >
      <h1 className="pt-10 mb-10 text-3xl font-bold text-gray-900 text-center">
        Glimpse Of Our Work And Presence..
      </h1>

      <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 lg:grid-cols-4 sm:p-8 ml-22">
        {statsData.slice(0, 4).map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <dt className="mb-2 text-3xl font-extrabold">{stat.value}</dt>
            <dd className="text-gray-500 dark:text-gray-400">{stat.label}</dd>
          </div>
        ))}
      </dl>

      {/* Second Row */}
      <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 lg:grid-cols-4 sm:p-8 ml-22">
        {statsData.slice(4).map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <dt className="mb-2 text-3xl font-extrabold">{stat.value}</dt>
            <dd className="text-gray-500 dark:text-gray-400">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
  )
}

export default ReviewSection