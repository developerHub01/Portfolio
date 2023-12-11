import React from "react";
import HeroSection from "../Components/HeroSection";
import MySkills from "../Components/MySkills";
import AboutMe from "../Components/AboutMe";
import Education from "../Components/Education";
import ContactWithMe from "../Components/ContactWithMe";
import ContactInfo from "../Components/ContactInfo";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <MySkills />
      <Education />
      <ContactWithMe />
      <ContactInfo />
      <Footer />
    </>
  );
};

export default Home;
