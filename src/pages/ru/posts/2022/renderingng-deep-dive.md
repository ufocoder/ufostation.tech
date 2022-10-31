---
layout: "src/layouts/ru/Post.astro"
title: "RenderingNG deep-dive: BlinkNG"
pubDate: "May 07 2022"
heroImage: "/assets/posts/2022/renderingng-deep-dive/blinkng.jpg"
description: "В прошлом году на канале делал акцент на тему рендеринга в браузере, и в прошлом же году в блоге Google разработчиков появилась [небольшая серия статей](https://developer.chrome.com/tags/rendering/), изучая которые можно приблизится к пониманию браузерного рендеринга. Так вот, несколько недель назад, 19 апреля 2022, в блоге Google разработчиков появилась новая статья про [BlinkNG](https://developer.chrome.com/blog/blinkng/)."
---
В прошлом году на канале делал акцент на тему рендеринга в браузере, и в прошлом же году в блоге Google разработчиков появилась [небольшая серия статей](https://developer.chrome.com/tags/rendering/), изучая которые можно приблизится к пониманию браузерного рендеринга. Так вот, несколько недель назад, 19 апреля 2022, в блоге Google разработчиков появилась новая статья про [BlinkNG](https://developer.chrome.com/blog/blinkng/).

Браузерный движок Blink появился как форк [WebKit](https://en.wikipedia.org/wiki/WebKit), который в свою очередь является форком [KHTML](https://en.wikipedia.org/wiki/KHTML), появившегося еще в далеком 1998 году. Теперь спустя годы работы текущая версия движка Blink заметно отличается от первых релизов в 2008/2009 годах и приобрела новое имя. У ранних версий Blink были архитектурные недостатки, например, связанные с генерацией стилей или рекурсивным обходом внутренних структур (DOM деревом, деревом стилей, деревом макетов (layout) и прочих деревьев).

В новой версии движка BlinkNG, который, напомню, является часть проекта RenderingNG, который состоит из множества других проектов [LayoutNG](https://developer.chrome.com/blog/layoutng/), [VideoNG](https://developer.chrome.com/blog/videong/) и прочих, эти недостатки разрешены. Каким образом и как, читайте в статье, URL: [https://developer.chrome.com/blog/blinkng/](https://developer.chrome.com/blog/blinkng/)