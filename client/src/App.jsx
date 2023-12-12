import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NavBar from "./Components/NavBar";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer";
import { ProjectImgPreviewContext } from "./CustomProvider/ProjectImgPreviewProvider";
import ProjectPreview from "./Components/ProjectPreview";

const App = () => {
  const { previewImgLink } = useContext(ProjectImgPreviewContext);
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      <ScrollToTop />
      <Toaster />
      {previewImgLink && <ProjectPreview />}
    </>
  );
};

export default App;
