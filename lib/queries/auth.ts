"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut } from "next-auth/react";
import { routes } from "@/lib/routes";

/** NextAuth signOut (backend revoke runs in auth events.signOut). */
export function useLogoutMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => signOut({ callbackUrl: routes.map }),
    onSettled: () => {
      queryClient.clear();
    },
  });
}
