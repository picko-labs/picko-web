"use client";

import { LOCALE_LABELS, LOCALES, type Locale } from "@/lib/i18n/locale";
import { useLocale, useDictionary } from "@/components/providers/LocaleProvider";

export function LanguageSelector() {
  const { locale, setLocale } = useLocale();
  const { profile } = useDictionary();

  return (
    <div className="language-selector">
      <div className="language-selector-label">{profile.language}</div>
      <div className="language-selector-options" role="radiogroup" aria-label={profile.language}>
        {LOCALES.map((code) => (
          <label key={code} className="language-selector-option">
            <input
              type="radio"
              name="locale"
              value={code}
              checked={locale === code}
              onChange={() => setLocale(code as Locale)}
            />
            <span>{LOCALE_LABELS[code]}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
