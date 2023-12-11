import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { avatarImg, githubLink } from "../Constant/constant";
const MainAvatar = () => {
  const numberOfSteps = 80;
  const wrapperRef = useRef(null);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const steps = new Array(numberOfSteps).fill(0);

  useEffect(() => {
    setWrapperWidth((prev) => wrapperRef.current.clientWidth + 30);
  }, []);
  return (
    <div className="grid place-items-center p-3 lg:order-2">
      <div
        className={`w-[90%] max-w-sm aspect-square rounded-full border-[30px] border-primaryColor relative grid place-items-center shadow-lg shadow-secondaryColor`}
        ref={wrapperRef}
      >
        <div className="w-full h-full overflow-hidden rounded-full border-8 border-secondaryColor group">
          <img src={avatarImg} alt="" className="w-full h-full object-cover" />
          <Link
            to={githubLink}
            target="_blank"
            className="absolute p-3 bg-white/50 rounded-full translate-y-[40px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-100 left-1/2 -translate-x-1/2 bottom-5"
          >
            <FaGithub className="text-4xl" />
          </Link>
        </div>
        <div className="absolute w-full h-full grid place-items-center pointer-events-none">
          {steps.map((_, i) => (
            <span
              key={i}
              style={{
                transform: `rotate(calc(${
                  360 / numberOfSteps
                }deg * ${i})) translateY(${wrapperWidth / 2}px) `,
              }}
              className={`avaterAnim block w-2 h-[30px] absolute `}
            >
              <span
                style={{
                  transform: `scale(0)`,
                  animation: `avaterAnim 1s linear ${i * 0.04}s infinite`,
                }}
                className="block w-full h-full rounded-full bg-secondaryColor shadow-2xl shadow-secondaryColor"
              ></span>
            </span>
          ))}
        </div>
        <style>
          {`
          @keyframes avaterAnim {
            0% {
              transform: scale(0);
            }
            50% {
              transform: scale(1);
            }
          }
        `}
        </style>
      </div>
    </div>
  );
};

export default MainAvatar;
