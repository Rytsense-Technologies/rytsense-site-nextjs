import Image from 'next/image'
import React from 'react'

const Perks = ({ perks }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {perks.map((perk, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        <Image
          src={perk.imgSrc}
          className="h-12"
          alt={perk.title}
          title={perk.title}
          width={50}
          height={50}
        />
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          {perk.title}
        </h2>
        <p className="text-gray-700">
          {perk.description}
        </p>
      </div>
    ))}
  </div>
  )
}

export default Perks