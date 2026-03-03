"use client";

import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import useIsBigDeviceSidebarExpend from "@/hooks/use-is-big-device-sidebar-expend";

const ProjectFeaturesWrapper = ({
  className,
  children,
  ...props
}: ComponentProps<"ul">) => {
  const isCollapsedMain = useIsBigDeviceSidebarExpend();

  return (
    <ul
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-2",
        {
          "sm:grid-cols-1": isCollapsedMain,
        },
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  );
};

export default ProjectFeaturesWrapper;
