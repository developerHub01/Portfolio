import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface Props extends ComponentProps<"div"> {
  wrapperClass?: string;
}

const FrameV1 = ({
  className = "",
  wrapperClass = "",
  children,
  ...props
}: Props) => {
  return (
    <div className={cn("relative group", wrapperClass)} {...props}>
      {children}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none [&>span]:data-[type='bar']:absolute [&>span]:data-[type='bar']:size-5 [&>span]:data-[type='bar']:bg-transparent [&>span]:data-[type='bar']:pointer-events-none [&>span]:data-[type='bar']:border-2 transition-opacity duration-100",
          className,
        )}
      >
        <span
          data-type="bar"
          className="top-0 left-0 border-t-primary border-l-primary border-r-transparent border-b-transparent"
        />
        <span
          data-type="bar"
          className="top-0 right-0 border-t-primary border-r-primary border-l-transparent border-b-transparent"
        />
        <span
          data-type="bar"
          className="bottom-0 left-0 border-b-primary border-l-primary border-r-transparent border-t-transparent"
        />
        <span
          data-type="bar"
          className="bottom-0 right-0 border-b-primary border-r-primary border-l-transparent border-t-transparent"
        />
      </div>
    </div>
  );
};

export default FrameV1;
