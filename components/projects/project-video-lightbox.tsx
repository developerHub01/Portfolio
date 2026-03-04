"use client";

import { AnimatePresence, motion } from "motion/react";
import { CloseIcon } from "@/components/icons";
import { useProjectVideo } from "@/context/project-video-provider";

const ProjectVideoLightbox = () => {
  const { isLightboxOpen, videoUrl, videoTitle, handleChangeIsLightboxOpen } =
    useProjectVideo();

  return (
    <AnimatePresence>
      {isLightboxOpen && videoUrl && (
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
          className="fixed inset-0 z-100 bg-background/50 backdrop-blur-md flex items-center justify-center p-4 sm:p-10"
        >
          <button
            type="button"
            title="close"
            onClick={() => handleChangeIsLightboxOpen(false)}
            className="absolute top-6 right-6 p-2 bg-accent hover:bg-secondary hover:text-secondary-foreground transition-colors z-110"
          >
            <CloseIcon size={24} />
          </button>
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
            className="relative w-full max-w-full max-h-full aspect-video overflow-hidden border border-border/50 bg-secondary p-5 shadow-awesome-dark"
            onClick={event => event.stopPropagation()}
          >
            <iframe
              src={videoUrl}
              title={videoTitle || "Project video demo"}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectVideoLightbox;
