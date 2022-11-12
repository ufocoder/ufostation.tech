import en from "./en.json";
import ru from "./ru.json";

type Locale = "en" | "ru";
type TranslationKey = string;
type TranslationMap = Record<TranslationKey, string>;

let locale: Locale = "en";

const translations: Record<Locale, TranslationMap> = {
  en,
  ru,
};

export const setLocale = (newLocale: Locale) => {
  locale = newLocale;
};

export const getLocale = (): Locale => {
  return locale;
};

export const t = (
  key: TranslationKey
): string | [string, string] | [string, string, string] => {
  return translations[locale][key];
};

// declination of numbers
export const declOfNum = (n: number, titles: [string, string, string]) => {
  return titles[
    n % 10 === 1 && n % 100 !== 11
      ? 0
      : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
      ? 1
      : 2
  ];
};

export const readingTime = (minutes: number) => {
  const tMinutes = declOfNum(minutes, t("minutes") as [string, string, string]);

  return `${minutes} ${tMinutes} ${t("read")}`;
};
