import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

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
