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
    path: "https://www.linkedin.com/in/md-abdus-shohid-shakil",
    element: <FaLinkedinIn />,
    color: "#0a66c2",
  },
  {
    path: "https://github.com/developerHub01",
    element: <FaGithub />,
    color: "#333333",
  },
  {
    path: "https://www.facebook.com/abdusshohid.shakil.5",
    element: <FaFacebookF />,
    color: "#1877f2",
  },
  {
    path: "https://codepen.io/shakil102043",
    element: <FaCodepen />,
    color: "#131417",
  },
  {
    path: "https://www.youtube.com/@DeveloperHub1",
    element: <FaYoutube />,
    color: "#ff0000",
  },
  {
    path: "https://leetcode.com/shakil102043",
    element: <SiLeetcode />,
    color: "#F89E1B",
  },
  {
    path: "https://codeforces.com/profile/abdusShohidShakil",
    element: <SiCodeforces />,
    color: "#B11712",
  },
];
const Footer = () => {
  return (
    <Section className="bg-primaryDarkColor">
      <Container>
        <div className="w-full grid lg:grid-cols-2 gap-5 items-center">
          <p className="pb-0 text-lightWhiteColor text-center lg:text-left">
            All &copy;right reserved to Shakil(DeveloperHub)
          </p>
          <div className="w-full flex justify-center lg:justify-end">
            <Social01 socialLinks={socialLinks} />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
