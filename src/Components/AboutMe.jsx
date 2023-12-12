import React, { useContext } from "react";
import Section from "./Common/Section";
import Container from "./Common/Container";
import AboutImg from "./AboutImg";
import AboutDetails from "./AboutDetails";
const AboutMe = () => {
  return (
    <div id="aboutMe">
      <Section className={`bg-primaryColor min-h-screen h-full`} speed={10}>
        <Container className="z-10">
          <div className="w-full grid md:grid-cols-2 gap-x-5 gap-y-10 items-center">
            <AboutImg />
            <AboutDetails />
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default AboutMe;
