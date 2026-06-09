import { auth } from "@/lib/i18n/en/auth";
import { common } from "@/lib/i18n/en/common";
import { map } from "@/lib/i18n/en/map";
import { profile } from "@/lib/i18n/en/profile";

export const en = {
  auth,
  common,
  map,
  profile,
} as const;

export type Dictionary = typeof en;
