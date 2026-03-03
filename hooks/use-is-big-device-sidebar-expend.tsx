"use client";

import { useMemo } from "react";
import { useSidebar } from "@/context/sidebar-prodiver";
import { useIsMobile } from "@/hooks/use-mobile";

const useIsBigDeviceSidebarExpend = () => {
  const isMobile = useIsMobile();
  const { isOpen } = useSidebar();

  return useMemo(() => isOpen && !isMobile, [isOpen, isMobile]);
};

export default useIsBigDeviceSidebarExpend;
