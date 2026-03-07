"use client";

import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import useIsBigDeviceSidebarExpend from "@/hooks/use-is-big-device-sidebar-expend";

const PersonalInfoWrapper = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  const isCollapsedMain = useIsBigDeviceSidebarExpend();

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6",
        {
          "lg:grid-cols-2": isCollapsedMain,
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default PersonalInfoWrapper;
