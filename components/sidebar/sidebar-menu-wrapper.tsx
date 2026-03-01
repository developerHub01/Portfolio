import { ComponentProps } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const SidebarMenuWrapper = ({
  className,
  children = "",
  ...props
}: ComponentProps<"ul">) => {
  return (
    <ScrollArea className="w-full h-full flex-1 min-h-0">
      <ul
        className={cn("flex flex-col select-none h-full", className)}
        {...props}
      >
        {children}
      </ul>
    </ScrollArea>
  );
};

export default SidebarMenuWrapper;
