import React from "react";
const IconWithText = ({ icon, content }) => {
  return (
    <span className="w-fit flex-grow-0 rounded-full bg-primaryColor flex items-center gap-1 p-1 border-2 border-secondaryColor">
      <span className="block rounded-full overflow-hidden w-8 aspect-square cursor-pointer bg-whiteColor">
        <img src={icon} alt="" className="w-full h-full object-contain" />
      </span>
      <span className="block text-base px-2 text-lightWhiteColor">{content}</span>
    </span>
  );
};

export default IconWithText;
