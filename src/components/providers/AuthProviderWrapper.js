"use client";

import { AuthProvider } from "@/contexts/AuthContext";

export default function AuthProviderWrapper({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
