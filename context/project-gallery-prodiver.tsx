"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface ProjectGalleryContext {
  images: Array<string>;
  title: string;
  selectedIndex: number;
  isLightboxOpen: boolean;
  handleChangeSelectedIndex: (value: number) => void;
  handleChangeIsLightboxOpen: (value?: boolean) => void;
  handlePrevImage: (
    e?: React.MouseEvent<Element, MouseEvent> | undefined,
  ) => void;
  handleNextImage: (
    e?: React.MouseEvent<Element, MouseEvent> | undefined,
  ) => void;
}

const ProjectGalleryContext = createContext<ProjectGalleryContext | null>(null);

export const useProjectGallery = () => {
  const context = useContext(ProjectGalleryContext);

  if (!context) {
    throw new Error(
      "useProjectGallery must be used within a ProjectGalleryProvider.",
    );
  }

  return context;
};

interface ProjectGalleryProviderProps {
  images: Array<string>;
  title: string;
  children: React.ReactNode;
}

const ProjectGalleryProvider = ({
  images,
  title,
  children,
}: ProjectGalleryProviderProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const handleChangeSelectedIndex = useCallback(
    (value: number) => {
      if (selectedIndex + 1 > images.length) return;
      setSelectedIndex(value);
    },
    [images.length, selectedIndex],
  );

  const handleChangeIsLightboxOpen = useCallback(
    (value?: boolean) => setIsLightboxOpen(prev => value ?? !prev),
    [],
  );

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex(prev => (prev + 1) % images.length);
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
        setSelectedIndex(prev => (prev - 1 + images.length) % images.length);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setSelectedIndex(prev => (prev + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, images.length]);

  return (
    <ProjectGalleryContext.Provider
      value={{
        images,
        title,
        selectedIndex,
        isLightboxOpen,
        handleChangeSelectedIndex,
        handleChangeIsLightboxOpen,
        handlePrevImage,
        handleNextImage,
      }}
    >
      {children}
    </ProjectGalleryContext.Provider>
  );
};

export default ProjectGalleryProvider;
