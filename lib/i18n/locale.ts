/** Default product locale. Extend with locale routing when i18n ships. */
export const DEFAULT_LOCALE = "en" as const;

export type Locale = typeof DEFAULT_LOCALE;
