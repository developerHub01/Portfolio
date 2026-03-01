"use client";

import React, { createContext, useCallback, useContext, useState } from "react";

interface SidebarContext {
  isOpen: boolean;
  handleToggleIsOpen: (value?: boolean) => void;
}

const SidebarContext = createContext<SidebarContext | null>(null);

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
};

interface SidebarProviderProps {
  children: React.ReactNode;
}

const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleToggleIsOpen = useCallback(
    (value?: boolean) => setIsOpen((prev) => value ?? !prev),
    [],
  );

  return (
    <SidebarContext.Provider value={{ isOpen, handleToggleIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
