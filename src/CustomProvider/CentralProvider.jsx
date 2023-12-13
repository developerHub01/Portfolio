import React, { createContext, useEffect, useState } from "react";
export const CentralContext = createContext({});
const CentralProvider = ({ children }) => {
  const [navBarState, setNavBarState] = useState(false);
  const [navBarRef, setNavBarRef] = useState(null);
  const [scrollTopState, setScrollTopState] = useState(false);
  const [scrollTopRef, setScrollTopRef] = useState(null);
  const hadleMainBodyClick = (e) => {
    if (!navBarRef) return;
    if (navBarRef?.current?.contains(e.target)) return;

    setNavBarState((prev) => false);
  };

  useEffect(() => {
    const handleScoll = (e) => {
      if (window.scrollY > 200) setScrollTopState((prev) => true);
      else setScrollTopState((prev) => false);
    };
    window.addEventListener("scroll", handleScoll);

    return () => window.removeEventListener("scroll", handleScoll);
  }, [scrollTopRef, navBarState]);

  const values = {
    navBarState,
    setNavBarState,
    hadleMainBodyClick,
    setNavBarRef,
    setScrollTopRef,
    scrollTopState,
  };
  return (
    <CentralContext.Provider value={values}>{children}</CentralContext.Provider>
  );
};

export default CentralProvider;
