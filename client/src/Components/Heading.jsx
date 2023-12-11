import React from "react";

const Heading = ({ text, align = "left" }) => {
  return (
    <div>
      <h2
        className={`w-fit mx-auto mb-4 text-secondaryColor text-2xl md:text-3xl font-black font-headingFont py-2 border-b-4 border-secondaryColor shadow-xl shadow-secondaryColor capitalize text-${align}`}
      >
        <span className="lowercase">{`<h2>`}</span>
        {text}
        <span className="lowercase">{`</h2>`}</span>
      </h2>
    </div>
  );
};

export default Heading;
