import React from "react";
import { FaCodepen, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Social01 = ({ socialLinks }) => {
  return (
    <ul
      className={`flex md:justify-start items-center flex-wrap gap-4 justify-center`}
    >
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
  );
};

export default Social01;
