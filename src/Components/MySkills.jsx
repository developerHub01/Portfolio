import React from "react";
import Section from "./Common/Section";
import Container from "./Common/Container";
import Skills from "./Skills";
import Heading from "./Heading";

const MySkills = () => {
  return (
    <Section id="mySkills" className={`bg-primaryDarkColor min-h-screen`}>
      <Container>
        <div className="w-full flex flex-col gap-10">
          <Heading text="My Skills" align="center" />
          <Skills />
        </div>
      </Container>
    </Section>
  );
};

export default MySkills;
