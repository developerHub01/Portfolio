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
        "text-lg md:text-xl font-primary font-bold leading-none capitalize pb-3 relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-8 before:bg-primary",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export default SecondaryHeading;
