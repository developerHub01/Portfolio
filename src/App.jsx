import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NavBar from "./Components/NavBar";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer";
import { ProjectImgPreviewContext } from "./CustomProvider/ProjectImgPreviewProvider";
import ProjectPreview from "./Components/ProjectPreview";
import { CentralContext } from "./CustomProvider/CentralProvider";

const App = () => {
  const { previewImgLink } = useContext(ProjectImgPreviewContext);
  const { hadleMainBodyClick } = useContext(CentralContext);

  return (
    <div onClick={(e) => hadleMainBodyClick(e)}>
      <NavBar />
      <Outlet />
      <Footer />
      <ScrollToTop />
      <Toaster />
      {previewImgLink && <ProjectPreview />}
    </div>
  );
};

export default App;
