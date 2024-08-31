import React from "react";

const IndustryFeatures = ({title, subTitle, data}) => {
  return (
    <div className="lg:px-20 py-20">
      <div>
        <h1 className="text-4xl font-semibold">{title}</h1>
        <p className="text-md text-gray-600 mt-5">{subTitle}</p>
      </div>
      <div class="grid grid-cols-5 gap-4 mt-8">
        {data.map((fea, i) => (
          <div key={i} className="border border-gray-600 p-5 text-center rounded-xl text-sky-600 font-semibold">
            {fea}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryFeatures;
