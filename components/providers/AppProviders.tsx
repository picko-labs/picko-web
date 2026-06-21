"use client";

import { LocaleProvider } from "@/components/providers/LocaleProvider";
import { AuthSessionProvider } from "@/components/providers/AuthSessionProvider";
import { QueryProvider } from "@/components/providers/QueryProvider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <AuthSessionProvider>
        <QueryProvider>{children}</QueryProvider>
      </AuthSessionProvider>
    </LocaleProvider>
  );
}
