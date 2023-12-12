import React from "react";
import { Link as ScrollLink } from "react-scroll";
import TypingAnimator from "react-typing-animator";
import IconWithText from "./Common/IconWithText";
import {
  authorEmail,
  authorPhone,
  cvPdfFile,
  gmailIcon,
  phoneIcon,
} from "../Constant/constant";
const textArray = [
  "Front-end developer",
  "MERN Developer",
  "Programmer",
  "Content Creator",
];

const HeroContent = () => {
  return (
    <div className="w-full text-center lg:text-left flex flex-col justify-center items-center lg:items-start gap-2">
      <h3 className="text-whiteColor text-lg md:text-2xl font-bold font-headingFont pb-2">
        Hello I am -
      </h3>
      <h1 className="text-whiteColor text-2xl md:text-5xl font-black font-headingFont pb-4">
        Abdus Shohid&nbsp;
        <span className="text-secondaryColor border-b-8 border-secondaryColor shadow-lg shadow-secondaryColor px-2 rounded-tl-lg">
          Shakil
        </span>
      </h1>
      <h2 className="capitalize font-bold">
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
      <div className="flex flex-wrap gap-2 pb-2 justify-center lg:justify-start items-center">
        <IconWithText icon={gmailIcon} content={authorEmail} />
        <IconWithText icon={phoneIcon} content={authorPhone} />
      </div>
      <div className="flex flex-wrap gap-2 pb-2 justify-center lg:justify-start items-center">
        <a href={cvPdfFile} download>
          <button className="outlineButton">Download CV</button>
        </a>
        <ScrollLink
          activeClass="active"
          to="contactWithMe"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <button className="outlineButton" data-to-scrollspy-id="aboutMe">
            About Me
          </button>
        </ScrollLink>
      </div>
    </div>
  );
};

export default HeroContent;
