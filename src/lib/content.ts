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

export const addUrlPrefix = (prefix: string = '', path: string = ''): string => {
    if (isExternal(path)) {
        return path;
    }    
    return prefix.replace(/\/$/, '') + '/' + path.replace(/^\//, '')
}

export const isExternal = (url: string) => url.startsWith('http://') || url.startsWith('https://');

export const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
