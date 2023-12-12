import React from "react";

const Heading = ({ text, align = "left" }) => {
  return (
    <div>
      <h2
        className={`w-fit mx-auto mb-4 bg-primaryDarkColor text-secondaryColor text-2xl md:text-3xl font-black font-headingFont px-2 rounded-tl-lg rounded-tr-lg py-2 border-b-8 border-secondaryColor shadow-md shadow-secondaryColor capitalize text-${align}`}
      >
        <span className="lowercase">{`<h2> `}</span>
        {text}
        <span className="lowercase">{` </h2>`}</span>
      </h2>
    </div>
  );
};

export default Heading;
