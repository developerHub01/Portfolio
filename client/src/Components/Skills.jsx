import React from "react";
import Container from "./Common/Container";
import {
  htmlIcon,
  cssIcon,
  javascriptIcon,
  reactjsIcon,
  tailwindIcon,
  nodejsIcon,
  expressIcon,
  mongodbIcon,
  figmaIcon,
  pythonIcon,
} from "../Constant/constant";
import SkillCard from "./SkillCard";

const Skills = () => {
  const skill = [
    { icon: htmlIcon, title: "Expert" },
    { icon: cssIcon, title: "Expert" },
    { icon: javascriptIcon, title: "Proficient" },
    { icon: tailwindIcon, title: "Skilled" },
    { icon: reactjsIcon, title: "Intermediate" },
    { icon: nodejsIcon, title: "Entry-level" },
    { icon: expressIcon, title: "Entry-level" },
    { icon: mongodbIcon, title: "Entry-level" },
    { icon: figmaIcon, title: "Intermediate" },
    { icon: pythonIcon, title: "Basic" },
  ];

  return (
    <div className="w-full">
      <span className="inline-block text-yellow-500 text-2xl bg-primaryColor p-2 rounded-md font-bold">
        <span className="text-red-700">const</span>{" "}
        <span className="text-whiteColor">skills = </span>[
      </span>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        {skill.map((item, i) => (
          <SkillCard key={i} {...item} />
        ))}
      </div>
      <span className="inline-block text-yellow-500 text-2xl bg-primaryColor p-2 rounded-md font-bold">
        ]
      </span>
    </div>
  );
};

export default Skills;
