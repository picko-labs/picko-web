"use client";

import { AuthSessionProvider } from "@/components/providers/AuthSessionProvider";
import { QueryProvider } from "@/components/providers/QueryProvider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthSessionProvider>
      <QueryProvider>{children}</QueryProvider>
    </AuthSessionProvider>
  );
}
