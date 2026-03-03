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
    className={cn(
      "bg-secondary p-8 sm:p-10 flex flex-col gap-6 shadow-awesome1",
      className,
    )}
    {...props}
  >
    {Boolean(title) && <SecondaryHeading>{title}</SecondaryHeading>}
    {children}
  </div>
);

export default SetWrapper;
