import React from "react";
import HeroSection from "../Components/HeroSection";
import MySkills from "../Components/MySkills";
import AboutMe from "../Components/AboutMe";
import Education from "../Components/Education";
import ContactWithMe from "../Components/ContactWithMe";
import ProjectSection from "../Components/ProjectSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <MySkills />
      <Education />
      <ProjectSection />
      <ContactWithMe />
    </>
  );
};

export default Home;
