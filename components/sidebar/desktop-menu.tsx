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
import { SidebarMenuItemInterface } from "@/types";

const DesktopMenu = () => {
  const pathname = usePathname();
  const { isOpen, handleToggleIsOpen } = useSidebar();
  const isMobile = useIsMobile();

  const isFull = isOpen && !isMobile;

  return (
    <motion.aside
      className={cn(
        "w-60 grow-0 flex flex-col bg-sidebar select-none border-r-2",
        {
          "w-15.5": !isFull,
        },
      )}
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
              className={cn("whitespace-nowrap overflow-hidden", {
                "hidden opacity-0 pointer-events-none": isMobile,
              })}
            >
              <Link href={"/"} className="flex-1 select-none">
                Shakil
              </Link>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      {/* <div className="flex-1 min-h-0 h-full"></div> */}
      <SidebarMenuWrapper>
        {SIDEBAR_MENU_LIST.map(menuItem => {
          const isActive = pathname === menuItem.url;
          return (
            <li key={menuItem.id} className="w-full">
              {isFull ? (
                <MenuItem
                  isActive={isActive}
                  isFull={isFull}
                  isMobile={isMobile}
                  {...menuItem}
                />
              ) : (
                <Tooltip>
                  <TooltipTrigger className="w-full">
                    <MenuItem
                      isActive={isActive}
                      isFull={isFull}
                      isMobile={isMobile}
                      {...menuItem}
                    />
                  </TooltipTrigger>
                  <TooltipContent side="right" align="center">
                    <p>{menuItem.title}</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </li>
          );
        })}
      </SidebarMenuWrapper>
      <div className="mt-auto border-t border-border/30">
        {isFull ? (
          <ResumeButton isFull={isFull} />
        ) : (
          <Tooltip>
            <TooltipTrigger className="w-full">
              <ResumeButton isFull={isFull} />
            </TooltipTrigger>
            <TooltipContent
              side="right"
              align="center"
              className={cn("pointer-events-none", {
                "opacity-0": isFull,
              })}
            >
              <p>Download Resume</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    </motion.aside>
  );
};

interface MenuItemProps extends SidebarMenuItemInterface {
  isActive: boolean;
  isFull: boolean;
  isMobile: boolean;
}

const MenuItem = ({
  isActive,
  isFull,
  isMobile,
  id,
  title,
  url,
  Icon,
}: MenuItemProps) => {
  return (
    <Link
      id={id}
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
            className={cn("overflow-hidden", {
              "hidden opacity-0 pointer-events-none": isMobile,
            })}
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
  );
};

interface ResumeButtonProps {
  isFull: boolean;
}

const ResumeButton = ({ isFull }: ResumeButtonProps) => {
  return (
    <Link
      href={RESUME_HREF}
      download
      className={cn(
        "flex items-center gap-4 rounded-sm px-4.75 py-4 text-sm font-primary uppercase tracking-wider bg-secondary/50 hover:bg-secondary/80 transition-colors duration-75",
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
  );
};

export default DesktopMenu;
