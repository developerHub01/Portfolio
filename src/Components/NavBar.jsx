import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { logo } from "../Constant/constant";
const navList = [
  {
    text: "Home",
    id: "heroSection",
  },
  {
    text: "About Me",
    id: "aboutMe",
  },
  {
    text: "My Skills",
    id: "mySkills",
  },
  {
    text: "My Education",
    id: "myEducation",
  },
  {
    text: "My Projects",
    id: "myProjects",
  },
  {
    text: " Contact With Me",
    id: "contactWithMe",
  },
];
const NavBar = () => {
  const [navActive, setNavActive] = useState(false);
  return (
    <div
      className={`fixed z-[999] w-[250px] h-screen bg-secondaryColor shadow-lg transition-all duration-150 shadow-primaryDarkColor/20 grid place-items-center px-5 py-10 ${
        navActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
      style={{
        clipPath: navActive ? "circle(200% at 0 0)" : "circle(60px at 0 0)",
      }}
      onMouseOver={() => setNavActive((prev) => true)}
      onMouseLeave={() => setNavActive((prev) => false)}
    >
      <span
        className="fixed top-0 left-0 w-[60px] h-[60px] grid place-items-center text-3xl text-whiteColor cursor-pointer pointer-events-auto shadow-2xl shadow-primaryDarkColor"
        style={{
          borderRadius: "0 0 100% 0",
        }}
      >
        <FaBars className="absolute top-2 left-2" />
      </span>

      <div className="w-full flex flex-col gap-2">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <span className="inline-block text-yellow-500 text-2xl bg-primaryColor p-2 rounded-md font-bold">
          <span className="text-red-700">const</span>{" "}
          <span className="text-whiteColor">List = </span>[
        </span>
        <div className="w-full h-full flex flex-col justify-center items-center gap-2 py-2 pl-5">
          {navList.map(({ text, id }, i) => (
            <ScrollLink
              key={i}
              className="w-full block bg-primaryColor hover:bg-secondaryColor transition-all duration-100 shadow-md shadow-primaryDarkColor/50 border-2 border-primaryDarkColor text-lightWhiteColor p-2 rounded-md cursor-pointer"
              activeClass="active"
              to={id}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              {text}
            </ScrollLink>
          ))}
        </div>
        <span className="inline-block text-yellow-500 text-2xl bg-primaryColor p-2 rounded-md font-bold">
          ]
        </span>
      </div>
    </div>
  );
};

export default NavBar;
