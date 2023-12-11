import React from "react";
import TypingAnimator from "react-typing-animator";
import IconWithText from "./Common/IconWithText";
import { gmailIcon, phoneIcon } from "../Constant/constant";

const HeroContent = () => {
  const textArray = ["Front-end developer", "Programmer", "Content Creator"];
  return (
    <div className="w-full text-center lg:text-left flex flex-col justify-center items-center lg:items-start gap-2">
      <h3 className="text-whiteColor text-lg md:text-2xl font-bold font-headingFont pb-2">
        Hello I am -
      </h3>
      <h1 className="text-whiteColor text-2xl md:text-5xl font-black font-headingFont pb-4">
        Abdus Shohid&nbsp;<span className="text-secondaryColor">Shakil</span>
      </h1>
      <h2 className="capitalize">
        <TypingAnimator
          textArray={textArray}
          cursorColor="#0496ff"
          textColor="#0496ff"
          fontSize="30px"
          loop
          typingSpeed={60}
          delaySpeed={1000}
          backspace
          height="60px"
        />
      </h2>
      <div className="flex flex-wrap gap-2 pb-2">
        <IconWithText icon={gmailIcon} content="shakil102043@gmail.com" />
        <IconWithText icon={phoneIcon} content="01703374162" />
      </div>
      <div className="flex flex-wrap gap-2 pb-2">
        <button className="outlineButton">Download CV</button>
        <button className="outlineButton">About Me</button>
      </div>
    </div>
  );
};

export default HeroContent;
