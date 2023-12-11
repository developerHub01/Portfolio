import React from "react";
import { Link } from "react-router-dom";
import { FaCodepen, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Heading from "./Heading";

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
];

const AboutDetails = () => {
  return (
    <div className="text-lightWhiteColor text-base flex flex-col justify-center items-center md:items-start text-center md:text-left gap-4">
      <Heading text="About Me" />
      <div className="block bg-primaryDarkColor px-2 py-1 leading-loose rounded-xl font-headingFont">
        <p className="font-primaryFont">
          <span className="text-secondaryColor">git commit -m</span>
          <span className="text-yellow-500"> " </span>I am Abdus Shohid Shakil,
          a programmer and front-end developer with a deep passion for web
          technology. Currently studying Computer Science and Engineering (CSE)
          in Bangladesh, I have accumulated approximately two years of coding
          experience, with a specific focus on web development for the past
          year.
          <span className="text-yellow-500">"</span>
        </p>
      </div>
      <ul className="flex justify-start items-center gap-4">
        {socialLinks.map(({ path, element, color }, i) => (
          <li key={i}>
            <Link
              to={path}
              className={`w-10 h-10 text-whiteColor rounded-md shadow-md grid place-items-center text-xl`}
              style={{
                background: color,
              }}
            >
              {element}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutDetails;
