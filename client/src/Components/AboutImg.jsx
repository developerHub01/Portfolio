import React from "react";
import { avatarImg } from "../Constant/constant";

const AboutImg = () => {
  return (
    <div className="w-full flex justify-center items-center select-none">
      <div className="relative w-full max-w-sm rounded-xl overflow-hidden border-4 border-secondaryColor shadow-2xl shadow-secondaryColor p-2 flex flex-col gap-2">
        <span className="absolute -z-10 w-full h-full bg-secondaryColor left-0 top-0"></span>
        <div className="w-full">
          <img src={avatarImg} alt="" className="w-full rounded-xl" />
        </div>
        <h2 className="text-center text-whiteColor text-2xl p-2 bg-white/20 font-bold rounded-lg">console.log("About Me")</h2>
      </div>
    </div>
  );
};

export default AboutImg;
