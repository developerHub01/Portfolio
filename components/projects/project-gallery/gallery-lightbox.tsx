"use client";

import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
} from "@/components/icons";
import { motion, AnimatePresence } from "motion/react";
import { useProjectGallery } from "@/context/project-gallery-prodiver";

const GalleryLightbox = () => {
  const {
    images,
    title,
    isLightboxOpen,
    selectedIndex,
    handleChangeIsLightboxOpen,
    handlePrevImage,
    handleNextImage,
  } = useProjectGallery();

  return (
    <AnimatePresence>
      {isLightboxOpen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onClick={() => handleChangeIsLightboxOpen(false)}
          className="fixed inset-0 z-100 bg-background/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10"
        >
          <button
            type="button"
            title="close"
            onClick={() => handleChangeIsLightboxOpen(false)}
            className="absolute top-6 right-6 p-2 bg-accent hover:bg-secondary hover:text-secondary-foreground transition-colors z-110"
          >
            <CloseIcon size={24} />
          </button>

          {images.length && (
            <>
              <button
                type="button"
                title="previous"
                onClick={handlePrevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-2 bg-secondary/50 hover:bg-secondary hover:text-secondary-foreground transition-colors z-110"
              >
                <ChevronLeftIcon size={25} />
              </button>
              <button
                type="button"
                title="next"
                onClick={handleNextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-2 bg-secondary/50 hover:bg-secondary hover:text-secondary-foreground transition-colors z-110"
              >
                <ChevronRightIcon size={25} />
              </button>
            </>
          )}
          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
            }}
            className="relative w-full max-w-5xl aspect-video shadow-2xl overflow-hidden border border-border/50"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={images[selectedIndex]}
              alt={title}
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalleryLightbox;
