import { ComponentProps } from "react";
import Container from "@/components/ui/container";
import BackgroundV2 from "@/components/ui/background-v2";
import { cn } from "@/lib/utils";

const PageWrapper = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div className="w-full h-full p-3 sm:p-5 lg:p-10 relative">
      <BackgroundV2 className="absolute inset-0 pointer-events-none" />
      <Container
        className={cn(
          "relative z-10 flex flex-col gap-8 sm:gap-12 pb-8 sm:pb-10 md:pb-16",
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
