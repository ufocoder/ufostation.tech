import { toString } from 'mdast-util-to-string';

const calculateReadingTime = (content) => {
    if (!content) {
        return 0;
    }

    const WORDS_PER_MINUTE = 150;
    const clean = content.trim();
    const numberOfWords = clean.split(/\s/g).length;

    return Math.ceil(numberOfWords / WORDS_PER_MINUTE);
}

export function remarkReadingTime() {
    return function (tree, { data }) {
        const textOnPage = toString(tree);
        const readingTime = calculateReadingTime(textOnPage);

        data.astro.frontmatter.minutesRead = readingTime;
    };
}