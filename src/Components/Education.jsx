import React from "react";
import Container from "./Common/Container";
import Section from "./Common/Section";
import Heading from "./Heading";
import { educationData } from "../Constant/constant";

const Education = () => {
  return (
    <Section id="myEducation" className="bg-primaryColor">
      <Container>
        <div className="w-full flex flex-col gap-10 justify-center items-center">
          <Heading text="My Education" align="center" />
          <div className="w-full p-5 border-r-2 border-secondaryColor bg-primaryDarkColor min-h-[300px] flex justify-center items-start flex-col">
            <span className="inline-block text-yellow-500 text-2xl bg-primaryColor p-2 rounded-md font-bold">
              <span className="text-red-700">const</span>{" "}
              <span className="text-whiteColor">myEducation = </span>
              {"["}
            </span>
            <div className="w-full grid lg:grid-cols-2 gap-6 place-items-center py-5 pl-7">
              {educationData.map(({ type, institution, session }, i) => (
                <div key={i} className="w-full">
                  <span className="inline-block text-yellow-500 text-2xl bg-primaryColor p-2 rounded-md font-bold">
                    {"{"}
                  </span>
                  <div className="pl-5">
                    {Object.entries(educationData[i]).map(([key, value], i) => (
                      <div key={key}>
                        <span className="inline-block text-lightWhiteColor text-lg md:text-lg bg-primaryColor p-2 my-2 rounded-md font-bold capitalize">
                          {key} :
                        </span>
                        <span className="inline-block text-secondaryColor text-lg md:text-lg bg-primaryColor p-2 my-2 rounded-md font-semibold capitalize ml-4">
                          "{value}"{" "}
                          <span className="text-lightWhiteColor">,</span>
                        </span>
                      </div>
                    ))}
                  </div>
                  <span className="inline-block text-yellow-500 text-2xl bg-primaryColor p-2 rounded-md font-bold">
                    {`}${i < educationData.length - 1 ? " , " : ""} `}
                  </span>
                </div>
              ))}
            </div>
            <span className="inline-block text-yellow-500 text-2xl bg-primaryColor p-2 rounded-md font-bold">
              {"]"}
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Education;
