import React from "react";
import Section from "./Common/Section";
import Container from "./Common/Container";
import Heading from "./Heading";
import { AiFillSafetyCertificate } from "react-icons/ai";
const Education = () => {
  return (
    <Section className="bg-primaryColor">
      <Container>
        <div className="w-full flex flex-col gap-10 justify-center items-center">
          <Heading text="My Education" align="center" />
          <div className="w-full grid md:grid-cols-2 rounded-md border-2 border-secondaryColor p-2 gap-2 text-lightWhiteColor">
            <div className="w-full p-5 border-r-2 border-secondaryColor bg-primaryDarkColor min-h-[300px] flex justify-center items-start flex-col">
              <AiFillSafetyCertificate className="text-5xl mb-3" />
              <h3 className="text-2xl font-bold text-white pb-3">BSc in CSE</h3>
              <p>North East University, Bangladesh</p>
              <p>Session: 2021-2025</p>
            </div>
            <div className="w-full p-5 border-r-2 border-secondaryColor bg-primaryDarkColor min-h-[300px] flex justify-center items-start flex-col">
              <AiFillSafetyCertificate className="text-5xl mb-3" />

              <h3 className="text-2xl font-bold text-white pb-3">
                Higher Secondary Cirtificate (HSC)
              </h3>
              <p>Shahaporan Govt. College</p>
              <p>Session: 2018-2020</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Education;
