import React from "react";
import Section from "./Common/Section";
import Container from "./Common/Container";
import AboutImg from "./AboutImg";
import AboutDetails from "./AboutDetails";

const AboutUs = () => {
  return (
    <Section className={`bg-primaryColor min-h-screen h-full`}>
      <Container className="z-10">
        <div className="w-full grid md:grid-cols-2 gap-x-5 gap-y-10 items-center">
          <AboutImg />
          <AboutDetails />
        </div>
      </Container>
    </Section>
  );
};

export default AboutUs;
