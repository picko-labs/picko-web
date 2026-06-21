/** Supported product locales. Default is English. */
export const DEFAULT_LOCALE = "en" as const;

export const LOCALES = ["en", "ko"] as const;

export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  ko: "한국어",
};

export const LOCALE_STORAGE_KEY = "picko-locale";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
