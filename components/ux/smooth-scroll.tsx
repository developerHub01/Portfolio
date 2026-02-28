"use client";

import { ReactLenis } from "lenis/react";

interface Props {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: Props) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
