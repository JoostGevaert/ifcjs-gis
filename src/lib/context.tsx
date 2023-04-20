"use client";

import React, { createContext, useContext } from "react";

interface IContext {
  name: string
}

const context = createContext<IContext | null>(null);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  let sharedState = {
    name: "Joop Gevaar"
  };

  return (
    <context.Provider value={sharedState}>{children}</context.Provider>
  );
}

export function useAppContext() {
  return useContext(context);
}
