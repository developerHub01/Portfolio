import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import SecondaryHeading from "@/components/headings/SecondaryHeading";

interface SetWrapperProps extends ComponentProps<"div"> {
  title?: string;
}

const SetWrapper = ({
  title,
  children,
  className = "",
  ...props
}: SetWrapperProps) => (
  <div
    className={cn("bg-secondary p-5 flex flex-col gap-3", className)}
    {...props}
  >
    {Boolean(title) && <SecondaryHeading>{title}</SecondaryHeading>}
    {children}
  </div>
);

export default SetWrapper;
