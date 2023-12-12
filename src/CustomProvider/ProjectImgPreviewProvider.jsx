import React, { createContext, useEffect, useState } from "react";
export const ProjectImgPreviewContext = createContext(null);

const ProjectImgPreviewProvider = ({ children }) => {
  const [previewImgLink, setPreviewImgLink] = useState("");

  useEffect(() => {
    if (previewImgLink) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [previewImgLink]);

  const values = { previewImgLink, setPreviewImgLink };
  return (
    <ProjectImgPreviewContext.Provider value={values}>
      {children}
    </ProjectImgPreviewContext.Provider>
  );
};

export default ProjectImgPreviewProvider;
