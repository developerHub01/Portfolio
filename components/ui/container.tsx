import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
  ...props
}: ComponentProps<"section">) => {
  return (
    <section className={cn("container mx-auto", className)} {...props}>
      {children}
    </section>
  );
};

export default Container;
