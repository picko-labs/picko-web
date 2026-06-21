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

/** Locale-agnostic dictionary shape (string values, same keys as en). */
export type Dictionary = {
  [Section in keyof typeof en]: {
    [Key in keyof (typeof en)[Section]]: (typeof en)[Section][Key] extends (
      ...args: infer A
    ) => infer R
      ? (...args: A) => R
      : (typeof en)[Section][Key] extends object
        ? {
            [SubKey in keyof (typeof en)[Section][Key]]: string;
          }
        : string;
  };
};
