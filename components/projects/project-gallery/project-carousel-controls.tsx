"use client";

import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { useCarousel } from "@/components/ui/carousel";

const controlButtonClass =
  "pointer-events-auto absolute top-1/2 z-20 flex size-6 -translate-y-1/2 items-center justify-center border border-border/60 bg-secondary text-foreground shadow-awesome1 backdrop-blur-sm transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-0 disabled:hover:bg-secondary/85 disabled:hover:text-foreground sm:size-7 md:size-8";

const ProjectCarouselControls = () => {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarousel();

  return (
    <div className="pointer-events-none absolute inset-0">
      <button
        type="button"
        className={cn(controlButtonClass, "left-0 -translate-x-1/2")}
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Previous thumbnails"
      >
        <ChevronLeftIcon size={16} />
        <span className="sr-only">Previous thumbnails</span>
      </button>

      <button
        type="button"
        className={cn(controlButtonClass, "right-0 translate-x-1/2")}
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Next thumbnails"
      >
        <ChevronRightIcon size={16} />
        <span className="sr-only">Next thumbnails</span>
      </button>
    </div>
  );
};

export default ProjectCarouselControls;
