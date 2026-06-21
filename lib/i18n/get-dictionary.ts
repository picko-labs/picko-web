import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/locale";
import { en, type Dictionary } from "@/lib/i18n/en";
import { ko } from "@/lib/i18n/ko";

const dictionaries: Record<Locale, Dictionary> = { en, ko };

/** Resolve UI strings for a locale. Defaults to English. */
export function getDictionary(locale: Locale = DEFAULT_LOCALE): Dictionary {
  return dictionaries[locale] ?? en;
}
