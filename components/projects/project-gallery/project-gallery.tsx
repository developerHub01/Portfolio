"use client";

import { ComponentProps } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ProjectCarousel from "@/components/projects/project-gallery/project-carousel";
import { useProjectGallery } from "@/context/project-gallery-prodiver";
import GalleryLightbox from "@/components/projects/project-gallery/gallery-lightbox";

interface Props extends ComponentProps<"div"> {
  images: Array<string>;
  title: string;
}

const ProjectGallery = ({ className, images, title, ...props }: Props) => {
  const { selectedIndex, handleChangeIsLightboxOpen } = useProjectGallery();

  if (!images || !images.length) return null;

  return (
    <>
      <div
        className={cn("flex flex-col gap-3 w-full shrink-0", className)}
        {...props}
      >
        <AspectRatio
          ratio={16 / 9}
          onClick={() => handleChangeIsLightboxOpen(true)}
          className="relative w-full overflow-hidden bg-accent/20 border border-border/50 shadow-awesome-dark group/img cursor-zoom-in"
        >
          <Image
            src={images[selectedIndex]}
            alt={`${title} - image ${selectedIndex + 1}`}
            fill
            className="object-cover transition-transform duration-500 group-hover/img:scale-105"
          />
        </AspectRatio>
        {images.length && <ProjectCarousel />}
      </div>
      <GalleryLightbox />
    </>
  );
};

export default ProjectGallery;
