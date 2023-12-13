import React from "react";

const Heading = ({ text, align = "left", theme = "dark" }) => {
  return (
    <div>
      <h2
        className={`w-fit mx-auto mb-4 ${
          theme == "dark" ? "bg-primaryDarkColor" : "bg-primaryColor"
        } text-secondaryColor text-2xl md:text-3xl font-black font-headingFont px-2 rounded-tl-lg rounded-tr-lg py-2 border-b-8 border-secondaryColor shadow-md capitalize text-${align}`}
      >
        {text}
      </h2>
    </div>
  );
};

export default Heading;
