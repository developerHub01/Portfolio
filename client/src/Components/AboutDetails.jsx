import React from "react";
import { Link } from "react-router-dom";
import { FaCodepen, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

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
    <div className="text-lightWhiteColor text-base flex flex-col justify-center items-center md:items-start text-center md:text-left">
      <h2 className="text-whiteColor text-2xl md:text-3xl font-black font-headingFont pb-4">
        Who am I?
      </h2>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, iure
          molestias. Amet reiciendis, est reprehenderit voluptatibus doloribus
          pariatur totam nemo eum tempore tempora quidem, provident obcaecati
          laudantium veritatis qui ullam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, iure
          molestias. Amet reiciendis, est reprehenderit voluptatibus doloribus
          pariatur totam nemo eum tempore tempora quidem, provident obcaecati
          laudantium veritatis qui ullam!
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
