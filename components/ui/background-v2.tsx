import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const BackgroundV2 = ({
  className,
  style = {},
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={cn(className)}
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(67,97,238,0.045) 0%, rgba(67,97,238,0.012) 35%, transparent 72%), radial-gradient(circle at 50% -20%, rgba(67,97,238,0.08) 0%, transparent 56%), linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)",
        backgroundSize: "auto, auto, 32px 32px, 32px 32px",
        // backgroundSize: "auto",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default BackgroundV2;
