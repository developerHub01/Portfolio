"use client";

import { createPortal } from "react-dom";
import Link from "next/link";
import { ArrowDownTrayIcon, CloseIcon } from "@/components/icons";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/context/sidebar-prodiver";
import { AnimatePresence, motion } from "motion/react";
import { useIsMobile } from "@/hooks/use-mobile";
import { RESUME_HREF, SIDEBAR_MENU_LIST } from "@/constant";
import SidebarMenuWrapper from "@/components/sidebar/sidebar-menu-wrapper";

const MobileMenu = () => {
  const { isOpen, handleToggleIsOpen } = useSidebar();
  const isMobile = useIsMobile();
  const pathname = usePathname();

  const show = isOpen && isMobile;

  const portalNode =
    typeof window !== "undefined"
      ? document.getElementById("portal-root")
      : null;

  if (!portalNode) return null;

  return createPortal(
    <AnimatePresence>
      {show && (
        <motion.div
          key="overlay"
          className="bg-background/50 fixed inset-0 z-999 backdrop-blur-md"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: show ? 1 : 0,
          }}
          exit={{
            opacity: 0,
            transition: {
              delay: 0.2,
            },
          }}
          onClick={() => handleToggleIsOpen(false)}
        />
      )}
      <motion.aside
        key="sidebar"
        className="fixed top-0 left-0 h-full w-60 grow-0 shrink-0 flex flex-col bg-sidebar border-r-2 z-999"
        initial={{
          x: "-100%",
        }}
        animate={{
          x: show ? 0 : "-100%",
          transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.2,
            delay: 0.2,
          },
        }}
        exit={{
          x: "-100%",
        }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.3,
        }}
      >
        <div className="w-full px-4.75 py-4 text-xl font-black font-primary leading-none flex justify-center items-center gap-4 select-none">
          <Link href={"/"} className="flex-1 select-none" aria-label="Home">
            Shakil
          </Link>
          <button
            title="toggle"
            type="button"
            aria-label="close sidebar"
            className="cursor-pointer"
            onClick={() => handleToggleIsOpen(false)}
          >
            <CloseIcon size={25} />
          </button>
        </div>
        <SidebarMenuWrapper>
          {SIDEBAR_MENU_LIST.map(({ id, title, url, Icon }) => {
            const isActive = pathname === url;
            return (
              <li key={id} className="w-full">
                <Link
                  aria-label={title}
                  href={url}
                  className={cn(
                    "flex px-4.75 py-4 gap-4 items-center text-sm relative",
                    "hover:bg-secondary/40",
                    "before:absolute before:inset-0 before:bg-transparent before:border-x-3  before:border-transparent before:pointer-events-none transition-all duration-100",
                    {
                      "bg-secondary before:border-primary": isActive,
                    },
                  )}
                >
                  <Icon size={20} />
                  {title}
                </Link>
              </li>
            );
          })}
        </SidebarMenuWrapper>
        <div className="mt-auto border-t border-border/30">
          <Link
            href={RESUME_HREF}
            aria-label="Download Resume"
            download
            className="flex items-center gap-4 px-4.75 py-4 text-sm font-primary uppercase tracking-wider bg-secondary/50 hover:bg-secondary/80 transition-colors duration-75"
          >
            <ArrowDownTrayIcon size={18} />
            <span className="flex-1">Download Resume</span>
          </Link>
        </div>
      </motion.aside>
    </AnimatePresence>,
    portalNode,
  );
};

export default MobileMenu;
