import React, { useContext, useState } from "react";
import { FaChrome, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandNodejs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { RiFullscreenFill } from "react-icons/ri";
import ProjectPreview from "./ProjectPreview";
import { ProjectImgPreviewContext } from "../CustomProvider/ProjectImgPreviewProvider";
import { SiPuppeteer } from "react-icons/si";

const ProjectCard = ({
  previewImg,
  title,
  liveLink,
  codeLink,
  technologies,
}) => {
  const { previewImgLink, setPreviewImgLink } = useContext(
    ProjectImgPreviewContext
  );
  return (
    <>
      <div className="w-full p-5 flex flex-col gap-3 bg-primaryColor rounded-lg group">
        <div className="w-full relative aspect-video overflow-hidden rounded-md">
          <img src={previewImg} alt="" className="w-full" />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-3 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-100">
            {liveLink && (
              <Link
                to={liveLink}
                target="_blank"
                className="projectPreviewIcons"
              >
                <FaEye />
              </Link>
            )}
            {codeLink && (
              <Link
                to={codeLink}
                target="_blank"
                className="projectPreviewIcons"
              >
                <FaCode />
              </Link>
            )}
            <button
              className="projectPreviewIcons"
              onClick={() =>
                setPreviewImgLink((prev) => (prev ? "" : previewImg))
              }
            >
              <RiFullscreenFill />
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <h3 className="text-lightWhiteColor font-bold text-lg sm:text-xl">
            {title}
          </h3>
          <ul className="flex justify-start items-center gap-2 flex-wrap">
            {technologies.map((item, i) => {
              switch (item) {
                case "html":
                  return (
                    <div key={i} className="projectTechnologyIcons">
                      <ImHtmlFive className="text-[#DD4B25]" title="HTML" />
                    </div>
                  );
                case "css":
                  return (
                    <div key={i} className="projectTechnologyIcons">
                      <SiCss3 className="text-[#254BDD]" title="CSS" />
                    </div>
                  );
                case "js":
                  return (
                    <div key={i} className="projectTechnologyIcons">
                      <IoLogoJavascript
                        className="text-[#E9D44D]"
                        title="JavaScript"
                      />
                    </div>
                  );
                case "tailwind":
                  return (
                    <div key={i} className="projectTechnologyIcons">
                      <SiTailwindcss
                        className="text-[#38BDF8]"
                        title="Tailwind"
                      />
                    </div>
                  );
                case "react":
                  return (
                    <div key={i} className="projectTechnologyIcons">
                      <FaReact className="text-[#00D6FD]" title="React.js" />
                    </div>
                  );
                case "firebase":
                  return (
                    <div key={i} className="projectTechnologyIcons">
                      <IoLogoFirebase
                        className="text-[#F57F17]"
                        title="Firebase"
                      />
                    </div>
                  );
                case "nodejs":
                  return (
                    <div key={i} className="projectTechnologyIcons">
                      <TbBrandNodejs
                        className="text-[#529C44]"
                        title="Nodejs"
                      />
                    </div>
                  );
                case "express":
                  return (
                    <div key={i} className="projectTechnologyIcons">
                      <SiExpress
                        className="text-[#828282]"
                        title="Express.js"
                      />
                    </div>
                  );
                case "mongodb":
                  return (
                    <div key={i} className="projectTechnologyIcons">
                      <SiMongodb className="text-[#429933]" title="Mongodb" />
                    </div>
                  );
                case "chrome":
                  return (
                    <div key={i} className="projectTechnologyIcons">
                      <FaChrome className="text-[#D7342A]" title="Chrome" />
                    </div>
                  );
                case "puppeteer":
                  return (
                    <div key={i} className="projectTechnologyIcons">
                      <SiPuppeteer
                        className="text-[#018b69]"
                        title="Puppeteer"
                      />
                    </div>
                  );
              }
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
