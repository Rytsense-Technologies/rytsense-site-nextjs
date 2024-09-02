import React from 'react'

const HeadingStyle = ({heading, bgtext}) => {
  return (
    <div>
    <div className="max-w-7xl p-5 mx-auto py-28">
      <div className="relative flex justify-center">
        <h1 className={`mt-7 text-3xl font-bold md:text-5xl md:mt-10`}>
          {heading}
        </h1>
        <h1
          className={`text-5xl font-bold top-0 md:text-7xl`}
          style={{
            WebkitTextStroke: "2px",
            WebkitTextStrokeColor: "#F0F0F0",
            color: "white",
            position: "absolute",
            zIndex: "-1",
          }}
        >
          {bgtext}
        </h1>
      </div>
    </div>
  </div>
  )
}

export default HeadingStyle