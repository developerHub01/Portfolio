import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import {
  CFDarkPreview,
  CRCMPreview,
  ELibPreview,
  Schedular2_oChromeExtensionPreview,
  autoMobPreview,
  eventMasterPreview,
  imageMatchingGamePreview,
  weatherForecastPreview,
  allProjects,
} from "../Constant/constant";

const ProjectList = () => {
  const [filteredCards, setFilteredCards] = useState(allProjects.slice(0, 4));
  const handleFilterProject = () => {
    if (filteredCards.length === 4) setFilteredCards((prev) => allProjects);
    else setFilteredCards((prev) => allProjects.slice(0, 4));
  };
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <div className="w-full">
        <span className="inline-block text-yellow-500 text-2xl bg-primaryColor p-2 rounded-md font-bold">
          <span className="text-red-700">const</span>{" "}
          <span className="text-whiteColor">myProjects = </span>[
        </span>
        <div className="grid md:grid-cols-2 gap-5 py-5 pl-7">
          {filteredCards.map((item, i) => (
            <ProjectCard key={i} {...item} />
          ))}
        </div>
        <span className="inline-block text-yellow-500 text-2xl bg-primaryColor p-2 rounded-md font-bold">
          ]
        </span>
      </div>

      <button
        className="py-2 px-5 bg-secondaryColor text-whiteColor rounded-lg capitalize font-semibold text-lg"
        onClick={handleFilterProject}
      >
        {allProjects.length > 4 && filteredCards.length === 4
          ? "See more"
          : "See Less"}
      </button>
    </div>
  );
};

export default ProjectList;
