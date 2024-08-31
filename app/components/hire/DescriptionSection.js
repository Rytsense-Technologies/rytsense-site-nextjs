import React from 'react'

const DescriptionSection = ({desc}) => {
  return (
    <div className='bg-gray-100 px-20 py-20'>
        {desc.map((des, i) => (
            <p key={i} className='text-gray-800 py-5'>{des}</p>
        ))}
    </div>
  )
}

export default DescriptionSection