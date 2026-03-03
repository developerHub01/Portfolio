"use client";

import { ComponentProps, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
} from "@/components/icons";
import { motion, AnimatePresence } from "motion/react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { buttonVariants } from "@/components/ui/button";

interface Props extends ComponentProps<"div"> {
  images: Array<string>;
  title: string;
}

const ProjectGallery = ({ className, images, title, ...props }: Props) => {
  const [activeImage, setActiveImage] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImage(prev => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImage(prev => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!isLightboxOpen || !images.length) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsLightboxOpen(false);
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveImage(prev => (prev - 1 + images.length) % images.length);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveImage(prev => (prev + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, images.length]);

  if (!images || !images.length) return null;

  return (
    <>
      <div
        className={cn("flex flex-col gap-3 w-full shrink-0", className)}
        {...props}
      >
        {/* Main Image */}
        <AspectRatio
          ratio={16 / 9}
          onClick={() => setIsLightboxOpen(true)}
          className="relative w-full overflow-hidden bg-accent/20 border border-border/50 shadow-awesome1 group/img cursor-zoom-in"
        >
          <Image
            src={images[activeImage]}
            alt={`${title} - image ${activeImage + 1}`}
            fill
            className="object-cover transition-transform duration-500 group-hover/img:scale-105"
          />
        </AspectRatio>

        {/* Thumbnails */}
        {images.length > 1 && (
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full relative"
          >
            <CarouselContent className="p-1 overflow-visible">
              {images.map((img, idx) => (
                <CarouselItem
                  key={idx}
                  className="basis-1/4 md:basis-1/5"
                  onClick={() => setActiveImage(idx)}
                >
                  <AspectRatio
                    ratio={16 / 9}
                    className={cn(
                      "relative w-full border transition-all duration-200 shadow-awesome1",
                      activeImage === idx
                        ? "border-primary opacity-100 scale-105"
                        : "border-border/50 opacity-50 hover:opacity-100",
                    )}
                  >
                    <Image
                      src={img}
                      alt={`${title} thumbnail ${idx + 1}`}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className={cn(
                buttonVariants({
                  variant: "secondary",
                }),
                "absolute top-1/2 left-0 -translate-1/2",
              )}
            />
            <CarouselNext
              className={cn(
                buttonVariants({
                  variant: "secondary",
                }),
                "absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2",
              )}
            />
          </Carousel>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-100 bg-background/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10"
          >
            <button
              type="button"
              title="close"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 p-2 bg-accent hover:bg-primary hover:text-primary-foreground transition-colors z-110"
            >
              <CloseIcon size={24} />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  title="previous"
                  onClick={prevImage}
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-colors z-110 hidden sm:block"
                >
                  <ChevronLeftIcon size={32} />
                </button>
                <button
                  type="button"
                  title="next"
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-colors z-110 hidden sm:block"
                >
                  <ChevronRightIcon size={32} />
                </button>
              </>
            )}

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video shadow-2xl overflow-hidden border border-border/50"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={images[activeImage]}
                alt={title}
                fill
                className="object-contain"
              />

              {/* Mobile controls */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:hidden">
                <button
                  type="button"
                  title="previous"
                  onClick={prevImage}
                  className="p-2 bg-secondary/80"
                >
                  <ChevronLeftIcon size={24} />
                </button>
                <span className="text-xs font-mono text-foreground font-bold bg-secondary/80 px-3 py-1">
                  {activeImage + 1} / {images.length}
                </span>
                <button
                  type="button"
                  title="next"
                  onClick={nextImage}
                  className="p-2 bg-secondary/80"
                >
                  <ChevronRightIcon size={24} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectGallery;
