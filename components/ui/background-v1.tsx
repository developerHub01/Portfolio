import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const BackgroundV1 = ({
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
          "radial-gradient(circle at 20% 20%, rgba(67,97,238,0.18) 0%, transparent 45%), radial-gradient(circle at 80% 75%, rgba(67,97,238,0.12) 0%, transparent 45%), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
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

export default BackgroundV1;
