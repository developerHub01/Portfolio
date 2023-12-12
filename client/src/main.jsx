import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RootRoute from "./Routers/RootRoute.jsx";
import ProjectImgPreviewProvider from "./CustomProvider/ProjectImgPreviewProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProjectImgPreviewProvider>
      <RootRoute />
    </ProjectImgPreviewProvider>
  </React.StrictMode>
);
