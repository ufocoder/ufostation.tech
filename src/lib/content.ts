import { getLocale } from "src/locales";

export const formatFullDate = (datetime: string) => new Date(datetime).toLocaleDateString(getLocale(), {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
});

export const formatShortDate = (datetime: string) => new Date(datetime).toLocaleDateString(getLocale(), {
    month: 'short',
    day: 'numeric',
});

export const processHeroImage = (prefix: string = '', path: string = ''): string => {
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path;
    }    
    return prefix.replace(/\/$/, '') + '/' + path.replace(/^\//, '')
}
