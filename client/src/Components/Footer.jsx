import React from "react";
import Section from "./Common/Section";
import Container from "./Common/Container";
import Social01 from "./Social01";
import {
  FaCodepen,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
const socialLinks = [
  {
    path: "/",
    element: <FaLinkedinIn />,
    color: "#0a66c2",
  },
  {
    path: "/",
    element: <FaGithub />,
    color: "#333333",
  },
  {
    path: "/",
    element: <FaFacebookF />,
    color: "#1877f2",
  },
  {
    path: "/",
    element: <FaCodepen />,
    color: "#131417",
  },
  {
    path: "/",
    element: <FaYoutube />,
    color: "#ff0000",
  },
  {
    path: "/",
    element: <SiLeetcode />,
    color: "#F89E1B",
  },
  {
    path: "/",
    element: <SiCodeforces />,
    color: "#B11712",
  },
];
const Footer = () => {
  return (
    <Section className="bg-primaryDarkColor">
      <Container>
        <div className="w-full grid md:grid-cols-2 gap-5 items-center">
          <p className="pb-0 text-lightWhiteColor text-center md:text-left">
            All &copy;right reserved to Shakil(DeveloperHub)
          </p>
          <div className="w-full flex justify-center md:justify-end">
            <Social01 socialLinks={socialLinks} />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
