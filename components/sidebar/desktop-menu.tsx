"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowDownTrayIcon, HamburgerIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/context/sidebar-prodiver";
import { AnimatePresence, motion } from "motion/react";
import { RESUME_HREF, SIDEBAR_MENU_LIST } from "@/constant";
import { useIsMobile } from "@/hooks/use-mobile";
import SidebarMenuWrapper from "@/components/sidebar/sidebar-menu-wrapper";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const DesktopMenu = () => {
  const pathname = usePathname();
  const { isOpen, handleToggleIsOpen } = useSidebar();
  const isMobile = useIsMobile();

  const isFull = isOpen && !isMobile;

  return (
    <motion.aside
      className={cn("w-60 grow-0 flex flex-col bg-sidebar border-r-2", {
        "w-15.5": !isFull,
      })}
      animate={{
        width: isFull ? 240 : 60,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <motion.div
        layout
        className={cn(
          "w-full px-4.75 py-4 text-xl font-black font-primary leading-none flex justify-start items-center gap-4",
          {
            "px-2": !isFull,
          },
        )}
      >
        <motion.button
          title="toggle"
          type="button"
          layout
          className={cn("cursor-pointer", {
            "mx-auto": !isFull,
          })}
          onClick={() => handleToggleIsOpen()}
        >
          <HamburgerIcon size={25} />
        </motion.button>
        <AnimatePresence>
          {isFull && (
            <motion.span
              layout
              initial={{
                width: "100%",
              }}
              exit={{
                width: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="whitespace-nowrap overflow-hidden"
            >
              <Link href={"/"} className="flex-1 select-none">
                Shakil
              </Link>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      <SidebarMenuWrapper>
        {SIDEBAR_MENU_LIST.map(({ id, title, url, Icon }) => {
          const isActive = pathname === url;
          return (
            <li key={id} className="w-full">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={url}
                    className={cn(
                      "flex px-4.75 py-4 gap-4 items-center text-sm relative",
                      "hover:bg-secondary/40",
                      "before:absolute before:inset-0 before:bg-transparent before:border-x-3  before:border-transparent before:pointer-events-none transition-all duration-100",
                      {
                        "bg-secondary before:border-primary": isActive,
                        "flex-1": !isFull,
                      },
                    )}
                  >
                    <Icon size={20} />
                    <AnimatePresence>
                      {isFull && (
                        <motion.span
                          className="overflow-hidden"
                          initial={{
                            width: "100%",
                          }}
                          exit={{
                            width: 0,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                        >
                          {title}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Link>
                </TooltipTrigger>
                {isOpen || (
                  <TooltipContent side="right" align="center">
                    <p>{title}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </li>
          );
        })}
      </SidebarMenuWrapper>
      <div className="mt-auto border-t border-border/30">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={RESUME_HREF}
              download
              className={cn(
                "flex items-center gap-3 rounded-sm px-4.75 py-4 text-sm font-primary uppercase tracking-wider hover:bg-secondary/40 transition-colors",
                {
                  "justify-center px-2": !isFull,
                },
              )}
            >
              <ArrowDownTrayIcon size={18} />
              <AnimatePresence>
                {isFull && (
                  <motion.span
                    className="overflow-hidden whitespace-nowrap"
                    initial={{
                      width: "100%",
                    }}
                    exit={{
                      width: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    Resume
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </TooltipTrigger>
          {isOpen || (
            <TooltipContent side="right" align="center">
              <p>Download Resume</p>
            </TooltipContent>
          )}
        </Tooltip>
      </div>
    </motion.aside>
  );
};

export default DesktopMenu;
