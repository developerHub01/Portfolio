import React, { useContext, useRef } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { ProjectImgPreviewContext } from "../CustomProvider/ProjectImgPreviewProvider";

const ProjectPreview = () => {
  const { previewImgLink, setPreviewImgLink } = useContext(
    ProjectImgPreviewContext
  );
  const closeBtnRef = useRef(null);
  const previewPopupRef = useRef(null);
  const handleProjectPreviewAll = (e) => {
    console.log(closeBtnRef.current);
    console.log(previewPopupRef.current);
    console.log(previewPopupRef.current);

    if (
      closeBtnRef.current.contains(e.target) ||
      previewPopupRef.current.contains(e.target)
    )
      return;
    setPreviewImgLink((prev) => "");
  };
  return (
    <section
      className="fixed top-0 left-0 z-[9999] w-full h-screen p-5 grid place-items-center bg-black/50"
      onClick={(e) => handleProjectPreviewAll(e)}
    >
      <span
        className="projectImgPreviewClose text-white absolute top-5 right-5 text-2xl w-10 h-10 rounded-full grid place-items-center hover:bg-whiteColor/50 cursor-pointer"
        onClick={() => setPreviewImgLink((prev) => "")}
        ref={closeBtnRef}
      >
        <HiMiniXMark />
      </span>
      <div
        className="projectImgPreview w-full max-w-3xl max-h-[90%] border-[20px] border-primaryColor bg-primaryDarkColor rounded-lg overflow-y-auto"
        ref={previewPopupRef}
      >
        <img src={previewImgLink} alt="" className="w-full overflow-scroll" />
      </div>
    </section>
  );
};

export default ProjectPreview;
