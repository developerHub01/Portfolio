"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { HamburgerIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/context/sidebar-prodiver";
import { AnimatePresence, motion } from "motion/react";
import { SIDEBAR_MENU_LIST } from "@/constant";
import { useIsMobile } from "@/hooks/use-mobile";
import SidebarMenuWrapper from "@/components/sidebar/sidebar-menu-wrapper";
const MobileMenu = dynamic(() => import("@/components/sidebar/mobile-menu"), {
  ssr: false,
});

const Sidebar = () => {
  const pathname = usePathname();
  const { isOpen, handleToggleIsOpen } = useSidebar();
  const isMobile = useIsMobile();

  const isFull = isOpen && !isMobile;

  return (
    <>
      <motion.aside
        className={cn(
          "w-60 grow-0 shrink-0 flex flex-col bg-sidebar border-r-2",
          {
            "w-15": !isFull,
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
            "w-full px-5 py-4 text-xl font-black font-primary leading-none flex justify-start items-center gap-4",
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
          <ul className="flex flex-col select-none h-full">
            {SIDEBAR_MENU_LIST.map(({ id, title, url, Icon }) => {
              const isActive = pathname === url;
              return (
                <li key={id} className="w-full">
                  <Link
                    href={url}
                    className={cn(
                      "flex px-5 py-4 gap-4 items-center text-sm relative",
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
                </li>
              );
            })}
          </ul>
        </SidebarMenuWrapper>
        <MobileMenu />
      </motion.aside>
    </>
  );
};

export default Sidebar;
