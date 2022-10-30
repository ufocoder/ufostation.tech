---
layout: "src/pages/ru/_layouts/_with-browser-security-navigation.astro"
title: "Same Origin Policy"
language: "ru"
pubDate: "Jan 02 2021"
series: "browser-security"
description: "Рассмотрим политику безопасности, связанную со значением origin — Same Origin Policy (или сокращенно SOP). Концепция, [созданная Netscape еще в далеком 1995 году](https://web.archive.org/web/20020808153106/http://wp.netscape.com:80/eng/mozilla/3.0/handbook/javascript/advtopic.htm#1009533), теперь реализована во всех современных веб-браузерах. Также существует [RFC 6454. The Web Origin Concept](https://tools.ietf.org/html/rfc6454) от декабря 2011, который описывает основные термины и принципы, стоящие за origin."
---

Рассмотрим политику безопасности, связанную со значением origin — Same Origin Policy (или сокращенно SOP). Концепция, [созданная Netscape еще в далеком 1995 году](https://web.archive.org/web/20020808153106/http://wp.netscape.com:80/eng/mozilla/3.0/handbook/javascript/advtopic.htm#1009533), теперь реализована во всех современных веб-браузерах. Также существует [RFC 6454. The Web Origin Concept](https://tools.ietf.org/html/rfc6454) от декабря 2011, который описывает основные термины и принципы, стоящие за origin.  
  
Политика базируется на доверии к ресурсам, которое определяется на основе URI. Ресурсы группируются по значению origin. Далее политика ограничивает взаимодействие между документами и скриптами из одного origin с ресурсами из другого origin.  
  
Например, если мы открыли документ [http://evil.com/index.html](http://evil.com/index.html) со встроенным iframe:  
  
```
<iframe id="iframe" src="https://bank.com/secret.html"></iframe>
```

и внутри [evil.com](http://evil.com/) присутствует следующий код, который пытается получить текст из [bank.com/secret.html](http://bank.com/secret.html):  
  
```
const iframe = document.getElementById('iframe');   
const message = iframe.contentDocument.getElementById('message').innerText;
```

то браузер запретит такую операцию.  
  
Для лучшего понимания рекомендую пройти двухминутную лабораторную [Same Origin Policy & iframe](https://web.dev/codelab-same-origin-iframe/).  
  
Как правило, встраивание ресурсов (CSS файлов, шрифтов, изображений, аудио, видео, скриптов, iframe) из разных источников в документ разрешено, а чтение из ресурсов с отличающимися значениями origin заблокировано.  
  
Также большинство WebAPI, предоставляемых браузером, доступны только внутри одного origin. Однако существует некоторые объекты, которые работают между несколькими origin, например, методы объекта window: blur, close, focus, postMessage; или location.replace.  
  
Браузеры используют политику SOP для обеспечения безопасности доступа к ресурсам. Возможно, вы никогда не узнаете, что происходит за кулисами, когда вы посещаете вредоносные сайты. Политика SOP не препятствует выполнению потенциально зловредных действий (отправке запросов), но гарантирует, что злоумышленники не смогут увидеть результаты этих действий: прочитать ответ от сетевого запроса, получить доступ к Cookies или получить доступ к DOM.  
  
**Дополнительный материал**

- [MDN. Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) 
- [W3C. Same Origin Policy](https://www.w3.org/Security/wiki/Same_Origin_Policy) 
- [web.dev. Same-origin policy](https://web.dev/same-origin-policy/) 
- [Web security unknowns: Same-origin Policy](https://dev.to/merictaze/web-security-unknowns-same-origin-policy-3l6) 
