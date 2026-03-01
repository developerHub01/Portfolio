import { SVGProps } from "react";
import { cn } from "@/lib/utils";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
  color?: string;
}

export const Icon = ({
  children,
  color = "currentColor",
  size = 24,
  strokeWidth = 2,
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("shrink-0", className)}
    {...props}
  >
    {children}
  </svg>
);
