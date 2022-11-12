---
layout: "src/pages/ru/_layouts/_with-http-navigation.astro"
title: "HTTP State Managent Mechanism"
pubDate: "Oct 08 2022"
series: "http"
description: "Впервые Cookies появились в браузере [Netscape Navigator](https://en.wikipedia.org/wiki/Netscape_(web_browser)) в 1994 году, поэтому не удивительно, что одним из авторов спецификации был разработчик из [Netscape Communications](https://en.wikipedia.org/wiki/Netscape), [Лу](https://en.wikipedia.org/wiki/Lou_Montulli) [Монтули](https://en.wikipedia.org/wiki/Lou_Montulli). Кстати Лу на тот момент было всего 23 года, и он также являлся одним из авторов браузера [Lynx](https://en.wikipedia.org/wiki/Lynx_(web_browser))"
---

_Спустя месяц после публикации_ [_RFC1945_](https://tools.ietf.org/html/rfc1945)_, в феврале 1997 года выходит в свет спецификация_ [_RFC2109_](https://www.rfc-editor.org/rfc/rfc2109)_, в которой описывается механизм управления состоянием для HTTP протокола_, _или проще говоря_, _она вводит всем известные Cookies. Теперь протокол имеет постоянное соединение и состояние, а версию HTTP/1.0 с этих пор можно называть connectionless и stateless._  
  
  
Впервые Cookies появились в браузере [Netscape Navigator](https://en.wikipedia.org/wiki/Netscape_(web_browser)) в 1994 году, поэтому не удивительно, что одним из авторов спецификации был разработчик из [Netscape Communications](https://en.wikipedia.org/wiki/Netscape), [Лу](https://en.wikipedia.org/wiki/Lou_Montulli) [Монтули](https://en.wikipedia.org/wiki/Lou_Montulli). Кстати Лу на тот момент было всего 23 года, и он также являлся одним из авторов браузера [Lynx](https://en.wikipedia.org/wiki/Lynx_(web_browser)).  
  
В феврале 1997 года появилась спецификация [RFC2109](https://www.rfc-editor.org/rfc/rfc2109)_._ Она вводила два дополнительных HTTP заголовка Cookie и Set-Cookie, которые помогали обмениваться информацией о состоянии между клиентом и сервером. Также спецификация описывала их синтаксис, вводила лимиты на количество сохраняемых значений Cookies и их размер (4kb), описывала возможные проблемы передачи заголовков через proxy-сервера.  
  
С помощью Cookies можно было имплементировать пользовательские сессии или реализовать какую-то персонализацию, то есть хранить некоторые значения, от которых будет зависеть поведение или интерфейс веб-страницы.  
  
Однако существовали некоторые концептуальные недостатки, о которых прямым текстом заявляется еще в самой первой версии спецификации. Например, [вопрос](https://www.rfc-editor.org/rfc/rfc2109#section-8.1) [безопасности](https://www.rfc-editor.org/rfc/rfc2109#section-8.1): любая информация может стать доступной для злоумышленников; любой злоумышленник-посредник может изменить Cookies по мере их продвижения по сети; злоумышленник может напрямую подделать значение Cookies, организовать [спуфинг](https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D1%83%D1%84%D0%B8%D0%BD%D0%B3).  
  
Чтобы хоть как-то обезопасить себя от этих проблем, спецификация описывает аттрибут Secure, Cookies в таком случае отсылаются на сервер только тогда, когда запрос отправляется через HTTPS протокол.  
  
### Развитие технологии и новые проблемы  
  
Следующая версия спецификации [RFC2965](https://www.rfc-editor.org/rfc/rfc2965), вышедшая в октябре 2000, ввела дополнительные заголовки Cookie2 и Set-Cookie2, а спецификация [RFC6265](https://www.rfc-editor.org/rfc/rfc6265) 2011 года эти заголовки с двойкой на конце [переводит в статус obsolete](https://www.rfc-editor.org/rfc/rfc6265#section-9.2), то есть с этого момента эти заголовки не должны использоваться. Сейчас спустя десятилетие возникает вопрос, что это было?  
  
Функционально заголовок Set-Cookie2 позволял ограничить использование Cookies для указанного списка портов. [RFC2965](https://www.rfc-editor.org/rfc/rfc2965) принуждала поддерживать одновременно два синтаксиса, которые некоторые браузеры не реализовывали полноценно, что [откровенно бесило](https://www.mnot.net/blog/2006/10/27/cookie_fun) некоторых разработчиков. По итогу все вернулись к использованию одного имени, прежних двух заголовков.  
  
Напомню, что страницы могут включать в себя ресурсы, находящиеся на отличных доменах от домена текущей страницы, соответственно HTTP-запросы к ним могут также содержать свои Cookies, и это не говоря о том, что запросы можно слать напрямую с помощью JavaScript. Такие запросы называются межсайтовые, а Cookies в запросах Third-Party Cookies. И вся эта ситуация порождает ряд новых проблем.  
  
Например, если злоумышленник встроит вредоносный код в веб-страницу, то даже описанный выше аттрибут Secure не убережет от [воровства Cookies](https://github.com/R0B1NL1N/WebHacking101/blob/master/xss-reflected-steal-cookie.md). Для решения этой проблемы в [RFC6265](https://www.rfc-editor.org/rfc/rfc6265) от 2011 года был введен аттрибут httpOnly, который предотвращал доступ к document.cookie из JavaScript.  
  
Так называемый межсайтовый скриптинг может привести к уязвимости [CSRF](https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B6%D1%81%D0%B0%D0%B9%D1%82%D0%BE%D0%B2%D0%B0%D1%8F_%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D0%BB%D0%BA%D0%B0_%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%D0%B0), при которой будут использованы Cookies пользователя. Эту проблему решили с помощью другого аттрибуту — SameSite, он описан в новом черновике спецификации [rfc6265bis](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-10), работа над которым ведется с [октября 2017](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-01) года.  
  
Существуют и другие проблемы, например, приватность и трекинг пользователей и прочие, каждая из которых имеет свое развитие и свои варианты решений. Так или иначе, вы стали свидетелем того, как безобидные дополнительные 4kb в HTTP-заголовках впоследствии привели к немалому числу сложностей.  
  
**Сопроводительный материал**  

— [The magic cookie: How Lou Montully cured the Web's Amnesia](https://hiddenheroes.netguru.com/lou-montulli)  
— [MDN. HTTP Cookies](https://developer.mozilla.org/ru/docs/Web/HTTP/Cookies)  
— [Steal Cookies with Reflected XSS](https://github.com/R0B1NL1N/WebHacking101/blob/master/xss-reflected-steal-cookie.md)  
— [SameSite cookies explained](https://web.dev/samesite-cookies-explained/)  
