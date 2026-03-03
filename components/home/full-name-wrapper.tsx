"use client";

import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import useIsBigDeviceSidebarExpend from "@/hooks/use-is-big-device-sidebar-expend";

const FullNameWrapper = ({
  className,
  children,
  ...props
}: ComponentProps<"h1">) => {
  const isCollapsedMain = useIsBigDeviceSidebarExpend();

  return (
    <h1
      className={cn(
        "text-4xl sm:text-5xl lg:text-7xl font-primary font-bold text-foreground leading-[1.1] tracking-tight",
        {
          "md:text-5xl lg:text-[58px] xl:text:7xl": isCollapsedMain,
        },
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export default FullNameWrapper;
