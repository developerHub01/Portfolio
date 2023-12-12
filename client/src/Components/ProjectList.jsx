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
} from "../Constant/constant";

const allProjects = [
  {
    previewImg: autoMobPreview,
    title: "AutoMob",
    liveLink: "https://automob-786c8.web.app/",
    codeLink: "https://github.com/developerHub01/AutoMob-Client",
    technologies: [
      "html",
      "css",
      "tailwind",
      "js",
      "react",
      "firebase",
      "nodejs",
      "express",
      "mongodb",
    ],
  },
  {
    previewImg: ELibPreview,
    title: "ELib",
    liveLink: "https://elib-16499.web.app/",
    codeLink: "https://github.com/developerHub01/ELib-Client",
    technologies: [
      "html",
      "css",
      "tailwind",
      "js",
      "react",
      "firebase",
      "nodejs",
      "express",
      "mongodb",
    ],
  },
  {
    previewImg: eventMasterPreview,
    title: "EventMaster",
    liveLink: "https://event-management-26e83.web.app/",
    codeLink: "https://github.com/developerHub01/Event-Management-React",
    technologies: ["html", "css", "tailwind", "js", "react", "firebase"],
  },
  {
    previewImg: imageMatchingGamePreview,
    title: "Image Matching Game",
    liveLink: "https://developerhub01.github.io/matchImageGame/",
    codeLink: "https://github.com/developerHub01/matchImageGame",
    technologies: ["html", "css", "js"],
  },

  {
    previewImg: CRCMPreview,
    title: "CRCM Creative Result Card Maker",
    liveLink: "https://developerhub01.github.io/CRCM/",
    codeLink: "https://github.com/developerHub01/CRCM",
    technologies: ["html", "css", "js"],
  },
  {
    previewImg: Schedular2_oChromeExtensionPreview,
    title: "Schedular-2.o-Chrome-Extension",
    liveLink: "",
    codeLink:
      "https://github.com/developerHub01/Schedular-2.o-Chrome-Extension",
    technologies: ["html", "css", "js", "chrome"],
  },
  {
    previewImg: CFDarkPreview,
    title: "CF Dark | Chrome Extension",
    liveLink: "",
    codeLink: "https://github.com/developerHub01/CF_Dark",
    technologies: ["html", "css", "js", "chrome"],
  },
  {
    previewImg: weatherForecastPreview,
    title: "Weather-Forecast-Chrome-Extension",
    liveLink: "",
    codeLink:
      "https://github.com/developerHub01/Weather-Forecast-Chrome-Extension",
    technologies: ["html", "css", "js", "chrome"],
  },
];

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
        <div className="grid lg:grid-cols-2 gap-5 py-5 pl-7">
          {filteredCards.map((item, i) => (
            <ProjectCard key={i} {...item} />
          ))}
        </div>
        <span className="inline-block text-yellow-500 text-2xl bg-primaryColor p-2 rounded-md font-bold">
          ]
        </span>
      </div>

      <button
        className="py-2 px-5 bg-secondaryColor text-whiteColor rounded-lg capitalize"
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
