import React from "react";
import Section from "./Common/Section";
import Container from "./Common/Container";
import Heading from "./Heading";
import ProjectList from "./ProjectList";

const ProjectSection = () => {
  return (
    <Section id="myProjects" className={`bg-primaryDarkColor min-h-screen`}>
      <Container>
        <div className="w-full flex flex-col gap-10">
          <Heading text="My Projects" align="center" theme="light" />
          <ProjectList />
        </div>
      </Container>
    </Section>
  );
};

export default ProjectSection;
