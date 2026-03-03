"use client";

import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-background text-white">
      <div className="text-3xl font-bold animate-pulse">MyBrand</div>
    </div>
  );
};

export default SplashScreen;
