import { ComponentProps } from "react";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";

const PageWrapper = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div className="w-full h-full p-3 sm:p-5 lg:p-10">
      <Container
        className={cn(
          "flex flex-col gap-8 sm:gap-12 pb-8 sm:pb-10 md:pb-16",
          className,
        )}
        {...props}
      >
        {children}
      </Container>
    </div>
  );
};

export default PageWrapper;
