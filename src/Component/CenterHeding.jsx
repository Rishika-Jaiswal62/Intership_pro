import React from "react";

const CenterHeading = ({ title }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center   sm:pb-16">
      {/* Dynamic Heading */}
      <h2 className="text-5xl font-bold mb-3">{title}</h2>

      {/* Blue line below heading */}
      <div className="w-24 h-1.5 bg-blue-300 rounded-full"></div>
    </div>
  );
};

export default CenterHeading;






