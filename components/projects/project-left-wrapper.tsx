"use client";

import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import useIsBigDeviceSidebarExpend from "@/hooks/use-is-big-device-sidebar-expend";

const ProjectLeftWrapper = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  const isCollapsedMain = useIsBigDeviceSidebarExpend();

  return (
    <div
      className={cn(
        "flex flex-col gap-8 w-full lg:max-w-md xl:max-w-lg shrink-0",
        {
          "lg:max-w-xs": isCollapsedMain,
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default ProjectLeftWrapper;
