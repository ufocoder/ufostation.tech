import en from './en.json'
import ru from './ru.json'

type Locale = 'en' | 'ru';
type TranslationKey = string;
type TranslationMap = Record<TranslationKey, string>

let locale: Locale = 'en';

const translations: Record<Locale, TranslationMap> = {
    en,
    ru
}

export const setLocale = (newLocale: Locale) => {
    locale = newLocale
}

export const getLocale = (): Locale => {
    return locale;
}

export const t = (key: TranslationKey): string => {
    return translations[locale][key];
}