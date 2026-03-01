import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
  ...props
}: ComponentProps<"section">) => {
  return (
    <section className={cn("container px-2 mx-auto", className)} {...props}>
      {children}
    </section>
  );
};

export default Container;
