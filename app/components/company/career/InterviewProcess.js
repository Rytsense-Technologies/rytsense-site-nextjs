import React from 'react'

const InterviewProcess = ({ steps }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-r border-gray-50">
    {steps.map((step, index) => (
      <div
        key={index}
        className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
      >
        <div className="relative space-y-8 py-12 p-8">
          {step.icon}
          <h5 className="text-xl font-semibold text-white transition">
            {step.title}
          </h5>
          <p className="text-gray-300">
            {step.description}
          </p>
        </div>
      </div>
    ))}
  </div>
  )
}

export default InterviewProcess