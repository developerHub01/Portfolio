import React from "react";

const Container = ({ className = "", children }) => {
  return (
    <div
      className={`w-[90%] max-w-6xl py-10 flex justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
