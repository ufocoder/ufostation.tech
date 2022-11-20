import { resolve } from "node:path";
import { GITHUB_URL, TWITTER_ACCOUNT } from "src/config";

const cwd = resolve("."); // @TODO: fix better way

export const getGithubSourceURL = (filepath: string = "") => {
  return filepath.replace(cwd, GITHUB_URL + "/edit/main");
};

import { getLocale } from "src/locales";

export const formatFullDate = (datetime: string) =>
  new Date(datetime).toLocaleDateString(getLocale(), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const formatShortDate = (datetime: string) =>
  new Date(datetime).toLocaleDateString(getLocale(), {
    month: "short",
    day: "numeric",
  });

export const addUrlPrefix = (
  prefix: string = "",
  path: string = ""
): string => {
  if (isExternal(path)) {
    return path;
  }
  return prefix.replace(/\/$/, "") + "/" + path.replace(/^\//, "");
};

export const isExternal = (url: string) =>
  url.startsWith("http://") || url.startsWith("https://");

export const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

export const createTwitterShareURL = (title: string, url) => {
  const text = encodeURI(title) + ", " + TWITTER_ACCOUNT + " " + url;

  return 'https://twitter.com/intent/tweet?text=' + text;
}