import { resolve } from 'node:path';
import { GITHUB_URL, TWITTER_ACCOUNT } from 'src/config';

const cwd = resolve('.'); // @TODO: find better way

export function getGithubSourceURL (filepath: string = '') {
  return filepath.replace(cwd, GITHUB_URL + '/edit/main');
};

import { getLocale } from 'src/locales';

export function formatFullDate (datetime: string) {
  return new Date(datetime).toLocaleDateString(getLocale(), {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatShortDate(datetime: string) {
  return new Date(datetime).toLocaleDateString(getLocale(), {
    month: 'short',
    day: 'numeric',
  });
}

export function addUrlPrefix(prefix: string = '', path: string = ''): string {
  if (isExternal(path)) {
    return path;
  }
  return prefix.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
};

export function isExternal(url: string) {
  return url.startsWith('http://') || url.startsWith('https://');
}

export function shuffleArray (array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

export function createTwitterShareURL(title: string, url: URL) {
  const text = encodeURI(title) + ', ' + TWITTER_ACCOUNT + ' ' + url;

  return 'https://twitter.com/intent/tweet?text=' + text;
};

export function createFacebookShareURL(title: string, url: URL) {
  return (
    'http://www.facebook.com/share.php?u=' + url + '&title=' + encodeURI(title)
  );
};
