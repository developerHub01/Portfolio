"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface ProjectVideoContextValue {
  videoUrl: string;
  videoTitle: string;
  isLightboxOpen: boolean;
  handleChangeIsLightboxOpen: (value?: boolean) => void;
}

const ProjectVideoContext = createContext<ProjectVideoContextValue | null>(
  null,
);

export const useProjectVideo = () => {
  const context = useContext(ProjectVideoContext);

  if (!context) {
    throw new Error(
      "useProjectVideo must be used within a ProjectVideoProvider.",
    );
  }

  return context;
};

interface ProjectVideoProviderProps {
  videoUrl: string;
  videoTitle: string;
  children: React.ReactNode;
}

const ProjectVideoProvider = ({
  videoUrl,
  videoTitle,
  children,
}: ProjectVideoProviderProps) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const handleChangeIsLightboxOpen = useCallback(
    (value?: boolean) => setIsLightboxOpen(prev => value ?? !prev),
    [],
  );

  useEffect(() => {
    if (!isLightboxOpen || !videoUrl) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setIsLightboxOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, videoUrl]);

  return (
    <ProjectVideoContext.Provider
      value={{
        videoUrl,
        videoTitle,
        isLightboxOpen,
        handleChangeIsLightboxOpen,
      }}
    >
      {children}
    </ProjectVideoContext.Provider>
  );
};

export default ProjectVideoProvider;
