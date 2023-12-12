import React from "react";

const Section = ({ style, className = "", id = "", children }) => {
  return (
    <div
      id={id}
      className={`overflow-hidden w-full flex justify-center items-center ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Section;
