import React from "react";

const Section = ({ style, className = "", children }) => {
  return (
    <div
      className={`overflow-hidden w-full flex justify-center items-center ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Section;
