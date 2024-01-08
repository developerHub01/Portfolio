import React from "react";
import { avatarImg2 } from "../Constant/constant";
import TypingAnimator from "react-typing-animator";

const AboutImg = () => {
  return (
    <div className="w-full flex justify-center items-center select-none">
      <div className="relative w-full max-w-sm rounded-xl overflow-hidden border-4 border-secondaryColor shadow-lg p-2 flex flex-col gap-2">
        <span className="absolute -z-10 w-full h-full bg-secondaryColor left-0 top-0"></span>
        <div className="w-full">
          <img src={avatarImg2} alt="" className="w-full rounded-xl" />
        </div>
        <h2 className="typingEffet text-center text-whiteColor text-base md:text-2xl py-5 p-2 bg-white/20 font-semibold rounded-lg">
          <TypingAnimator
            textArray={[`console.log("About Me")`]}
            cursorColor="#ffffff"
            textColor="#ffffff"
            loop
            typingSpeed={60}
            delaySpeed={1000}
            backspace
          />
        </h2>
      </div>

      <style>
        {` .typingEffet span{
            font-size: 20px;
        } `}
      </style>
    </div>
  );
};

export default AboutImg;
