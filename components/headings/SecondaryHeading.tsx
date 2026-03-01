import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const SecondaryHeading = ({
  children,
  className = "",
  ...props
}: ComponentProps<"h2">) => {
  return (
    <h2
      className={cn(
        "text-2xl md:text-3xl font-primary font-bold leading-none capitalize pb-3 relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-1 before:w-10 before:bg-primary",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export default SecondaryHeading;
