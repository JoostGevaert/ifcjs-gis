"use client";

import React, { createContext, useContext, useState } from "react";

interface ISharedState {
  name: string
}

const context = createContext<ISharedState | null>(null);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState("Joop Gevaar");
  
  let sharedState = {
    name,
    setName
  };

  return (
    <context.Provider value={sharedState}>{children}</context.Provider>
  );
}

export function useAppContext() {
  return useContext(context);
}
