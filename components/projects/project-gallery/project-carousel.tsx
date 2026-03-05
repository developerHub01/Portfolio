"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useProjectGallery } from "@/context/project-gallery-prodiver";
import ProjectCarouselControls from "@/components/projects/project-gallery/project-carousel-controls";

const ProjectCarousel = () => {
  const { images, title, selectedIndex, handleChangeSelectedIndex } =
    useProjectGallery();

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full relative"
    >
      <CarouselContent className="p-1 overflow-visible">
        {images.map((img, idx) => (
          <CarouselItem
            key={idx}
            className="basis-1/4 md:basis-1/5"
            onClick={() => handleChangeSelectedIndex(idx)}
          >
            <AspectRatio
              ratio={16 / 9}
              className={cn(
                "relative w-full border transition-all duration-200 shadow-awesome-light",
                selectedIndex === idx
                  ? "border-primary opacity-100 scale-105"
                  : "border-border/50 opacity-50 hover:opacity-100",
              )}
            >
              <Image
                src={img}
                alt={`${title} thumbnail ${idx + 1}`}
                fill
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
      <ProjectCarouselControls />
    </Carousel>
  );
};

export default ProjectCarousel;
