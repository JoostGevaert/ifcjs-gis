"use client";

import { ContextProvider } from "@/lib/context";
import { AuthProvider } from "@/lib/auth";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ContextProvider>
      <AuthProvider>{children}</AuthProvider>
    </ContextProvider>
  );
}
