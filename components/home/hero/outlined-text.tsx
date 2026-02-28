import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const OutlinedText = ({
  className,
  children,
  style = {},
  ...props
}: ComponentProps<"p">) => (
  <p
    className={cn(
      "font-brand text-[90px] sm:text-[160px] md:text-[190px] lg:text-[220px] font-black select-none leading-none! text-shadow-accent",
      className,
    )}
    style={
      {
        color: "transparent",
        "-webkit-text-strokeWidth": "2px",
        "-webkit-text-stroke-color": "var(--primary)",
        "-webkit-text-stroke": "2px var(--primary)",
        ...style,
      } as React.CSSProperties
    }
    {...props}
  >
    {children}
  </p>
);

export default OutlinedText;
