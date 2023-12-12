import React, { useContext } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { ProjectImgPreviewContext } from "../CustomProvider/ProjectImgPreviewProvider";

const ProjectPreview = () => {
  const { previewImgLink, setPreviewImgLink } = useContext(
    ProjectImgPreviewContext
  );
  return (
    <section className="fixed top-0 left-0 z-[9999] w-full h-screen p-5 grid place-items-center bg-black/50">
      <span
        className="text-white absolute top-5 right-5 text-2xl w-10 h-10 rounded-full grid place-items-center hover:bg-whiteColor/50 cursor-pointer"
        onClick={() => setPreviewImgLink((prev) => "")}
      >
        <HiMiniXMark />
      </span>
      <div className="w-full max-w-3xl max-h-[90%] border-[20px] border-primaryColor bg-primaryDarkColor rounded-lg overflow-y-auto">
        <img src={previewImgLink} alt="" className="w-full overflow-scroll" />
      </div>
    </section>
  );
};

export default ProjectPreview;
