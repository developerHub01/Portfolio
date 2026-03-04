import { cn } from "@/lib/utils";
import { IconProps } from "@/components/icons";

export const Icon = ({
  children,
  color = "currentColor",
  size = 24,
  strokeWidth = 2,
  className,
  fill="none",
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      color={color}
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("shrink-0 overflow-visible", className)}
      {...props}
    >
      {children}
    </svg>
  );
};
