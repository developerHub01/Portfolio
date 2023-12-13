import React from "react";

const SkillCard = ({ icon, title }) => {
  return (
    <div className="w-full bg-primaryColor rounded-md p-5 flex gap-3 justify-center items-center flex-wrap shadow-lg border-2 border-secondaryColor hover:bg-secondaryColor cursor-pointer transition-all duration-100 flex-col sm:flex-row select-none">
      <div className="flex-shrink-0 flex-grow-0 w-10 h-10">
        <img src={icon} alt="" className="w-full h-full object-contain" />
      </div>
      <h5 className="text-white text-2xl font-semibold capitalize">{title}</h5>
    </div>
  );
};

export default SkillCard;
