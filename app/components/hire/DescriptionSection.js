import React from 'react'

const DescriptionSection = ({ desc }) => {
  return (
    <div className="bg-gray-100 px-6 py-10 md:px-12 lg:px-20 lg:py-20">
      {desc.map((des, i) => (
        <p key={i} className="text-gray-800 py-4 text-sm md:text-base lg:text-lg">
          {des}
        </p>
      ))}
    </div>
  );
};

export default DescriptionSection;
