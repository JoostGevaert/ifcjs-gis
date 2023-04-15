"use client";

import React, { createContext, useContext } from "react";

interface IContext {
  name: string
}

const Context = createContext<IContext | undefined>(undefined);

export function ContextWrapper({ children }: { children: React.ReactNode }) {
  let sharedState = {
    name: "Joop Gevaar"
  };

  return (
    <Context.Provider value={sharedState}>{children}</Context.Provider>
  );
}

export function useAppContext() {
  return useContext(Context);
}
