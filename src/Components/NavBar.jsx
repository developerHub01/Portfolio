import React, { useContext, useEffect, useRef, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { logo } from "../Constant/constant";
import { CentralContext } from "../CustomProvider/CentralProvider";
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
  const { navBarState, setNavBarState, setNavBarRef, setNavBarHover } =
    useContext(CentralContext);
  const navBarRef = useRef(null);
  useEffect(() => {
    setNavBarRef((prev) => navBarRef);
  }, [navBarRef]);

  return (
    <div
      className={`fixed z-[999] w-[250px] h-screen bg-secondaryColor shadow-lg transition-all duration-150 shadow-primaryDarkColor/20 grid place-items-center px-3 pt-16 pb-5 ${
        navBarState ? "pointer-events-auto" : "pointer-events-none"
      }`}
      style={{
        clipPath: navBarState ? "circle(200% at 0 0)" : "circle(60px at 0 0)",
      }}
      ref={navBarRef}
      onMouseEnter={() => setNavBarHover((prev) => true)}
      onMouseOver={() => setNavBarHover((prev) => true)}
      onMouseLeave={() => setNavBarHover((prev) => false)}
    >
      <span
        className="fixed top-0 left-0 w-[60px] h-[60px] grid place-items-center text-3xl text-whiteColor cursor-pointer pointer-events-auto shadow-2xl shadow-primaryDarkColor"
        style={{
          borderRadius: "0 0 100% 0",
        }}
        onClick={(e) => setNavBarState((prev) => !prev)}
      >
        {navBarState ? (
          <FaXmark className="absolute top-2 left-2" />
        ) : (
          <FaBars className="absolute top-2 left-2" />
        )}
      </span>

      <div className="w-full h-full flex flex-col justify-center gap-2 overflow-hidden">
        <Link
          to="/"
          className="text-center bg-primaryColor text-whiteColor font-headingFont rounded-md p-2 text-2xl font-bold"
        >
          Shakil
        </Link>
        <div className="flex h-full flex-col gap-2 overflow-hidden justify-center">
          <span className="inline-block flex-grow-0 text-yellow-500 text-2xl bg-primaryColor px-2 py-1 md:p-2 rounded-md font-bold">
            <span className="text-red-700">const</span>{" "}
            <span className="text-whiteColor">List = </span>
            {"["}
          </span>
          <div className="navBarMenuList overflow-auto">
            <div className="w-full h-full flex-grow-0 flex-shrink-0 flex flex-col gap-2 pr-1 overflow-auto">
              {navList.map(({ text, id }, i) => (
                <div className="pl-5" key={i}>
                  <ScrollLink
                    className="w-full block bg-primaryColor hover:bg-secondaryColor transition-all duration-100 shadow-md shadow-primaryDarkColor/50 border-2 border-primaryDarkColor text-lightWhiteColor px-2 py-1 md:p-2 rounded-md cursor-pointer"
                    activeClass="active"
                    to={id}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    {text}
                  </ScrollLink>
                </div>
              ))}
            </div>
          </div>
          <span className="inline-block text-yellow-500 text-2xl bg-primaryColor px-2 py-1 md:p-2 rounded-md font-bold">
            {"]"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
