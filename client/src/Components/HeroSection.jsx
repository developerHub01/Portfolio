import React from "react";
import MainAvatar from "./MainAvatar";
import Container from "./Common/Container";
import Section from "./Common/Section";
import HeroContent from "./HeroContent";

const HeroSection = () => {
  return (
    <Section className={`bg-primaryDarkColor min-h-screen h-full`}>
      <Container className="z-10">
        <div className="w-full grid lg:grid-cols-2 gap-x-5 gap-y-10 items-center">
          <MainAvatar />
          <HeroContent />
        </div>
      </Container>
    </Section>
  );
};

export default HeroSection;
