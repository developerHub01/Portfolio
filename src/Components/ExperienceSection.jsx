import React from "react";
import Section from "./Common/Section";
import Container from "./Common/Container";
import Heading from "./Heading";

const ExperienceSection = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-10">
          <Heading text="My Experience" key="center" />
          <div className="block bg-primaryDarkColor px-2 py-1 leading-loose rounded-xl font-headingFont">
            <p className="font-primaryFont text-lightWhiteColor text-center">
              <span className="text-secondaryColor">git commit -m</span>
              <span className="text-yellow-500"> " </span>Abdus Shohid Shakil, a
              passionate programmer and front-end developer from Bangladesh, is
              currently studying Computer Science and Engineering. With two
              years of coding experience, he has focused intensely on web
              development in the past year. Eager to stay at the forefront of
              technology, Shakil is dedicated to mastering the intricacies of
              front-end development, poised to contribute meaningfully to the
              field.
              <span className="text-yellow-500">"</span>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ExperienceSection;
