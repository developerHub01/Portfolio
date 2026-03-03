import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const MainHeading = ({
  children,
  className = "",
  ...props
}: ComponentProps<"h1">) => {
  return (
    <h1
      className={cn(
        "text-2xl sm:text-3xl md:text-4xl font-primary font-black pl-2 border-l-6 border-primary leading-none capitalize",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export default MainHeading;
