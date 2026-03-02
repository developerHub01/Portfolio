"use client";

import dynamic from "next/dynamic";
import DesktopMenu from "@/components/sidebar/desktop-menu";
const MobileMenu = dynamic(() => import("@/components/sidebar/mobile-menu"), {
  ssr: false,
});

const Sidebar = () => {
  return (
    <>
      <DesktopMenu />
      <MobileMenu />
    </>
  );
};

export default Sidebar;
