"use client";

import { AuthProvider, useAuthContext } from "@/lib/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

export default function UseClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}
