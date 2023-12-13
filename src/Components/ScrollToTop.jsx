import React, { useContext, useEffect, useRef } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";
import { CentralContext } from "../CustomProvider/CentralProvider";
const ScrollToTop = () => {
  const { scrollTopState, setScrollTopRef } = useContext(CentralContext);
  const scrollToTopRef = useRef(null);
  useEffect(() => {
    setScrollTopRef((prev) => scrollToTopRef);
  }, [scrollToTopRef]);
  return (
    <>
      {scrollTopState && (
        <ScrollLink
          className="relative z-[9999]"
          activeClass="active"
          to="heroSection"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          ref={scrollToTopRef}
        >
          <span className="fixed bottom-5 right-5 bg-secondaryColor text-primaryColor w-10 h-10 rounded-full grid place-items-center text-4xl cursor-pointer shadow-2xl shadow-primaryDarkColor animate-bounce">
            <IoIosArrowUp />
          </span>
        </ScrollLink>
      )}
    </>
  );
};

export default ScrollToTop;
