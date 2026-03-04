"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import FrameV1 from "@/components/ui/frame-v1";
import BackgroundV1 from "@/components/ui/background-v1";

interface SplashScreenProps {
  mode?: "intro" | "loading";
  durationMs?: number;
}

const SplashScreen = ({
  mode = "intro",
  durationMs = 2200,
}: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    if (mode !== "intro") return;

    const timer = setTimeout(() => setIsVisible(false), durationMs);

    return () => clearTimeout(timer);
  }, [durationMs, mode]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-background"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        <BackgroundV1 className="absolute inset-0" />

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative px-4"
        >
          <FrameV1 className="opacity-100">
            <div className="relative w-[min(92vw,560px)] border-2 border-border/30 bg-sidebar/90 backdrop-blur-sm px-6 py-8 sm:px-8 sm:py-10 shadow-awesome-dark overflow-hidden">
              <motion.div
                className="pointer-events-none absolute -inset-x-12 top-0 h-px bg-linear-to-r from-transparent via-primary/70 to-transparent"
                animate={{ x: [-140, 140] }}
                transition={{
                  duration: 1.8,
                  ease: "linear",
                  repeat: Infinity,
                }}
              />

              <span className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.35em] text-primary/90">
                Portfolio
              </span>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-primary font-black leading-none text-foreground">
                Abdus Shohid <span className="text-primary">Shakil</span>
              </h1>

              <p className="mt-3 text-sm sm:text-base font-display text-muted-foreground">
                Software Developer | Frontend Focused | Web & Desktop
              </p>

              <div className="mt-8 h-1.5 w-full bg-secondary border border-border/50 overflow-hidden">
                {mode === "intro" ? (
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: durationMs / 1000,
                      ease: "easeInOut",
                    }}
                  />
                ) : (
                  <motion.div
                    className="h-full w-1/3 bg-primary"
                    initial={{ x: "-100%" }}
                    animate={{ x: "300%" }}
                    transition={{
                      duration: 1.1,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                  />
                )}
              </div>
            </div>
          </FrameV1>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
