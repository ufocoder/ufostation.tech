---
layout: "src/pages/ru/_layouts/_with-http-navigation.astro"
title: "HTTP 1.0. Расширяемость как основа"
pubDate: "Sep 11 2022"
series: "http"
description: "Период с 1991 по 1995 год характеризуется быстрым развитием спецификации HTML, появлением нового поколения программного обеспечения, известного как 'веб-браузер', а также появлением и быстрым ростом ориентированной на потребителя публичной инфраструктуры Интернета."
---

_Период с 1991 по 1995 год характеризуется быстрым развитием спецификации HTML, появлением нового поколения программного обеспечения, известного как "веб-браузер", а также появлением и быстрым ростом ориентированной на потребителя публичной инфраструктуры Интернета._

В 1996 году появился стандарт HTTP 1.0, [RFC](https://tools.ietf.org/html/rfc1945) [1945](https://tools.ietf.org/html/rfc1945).

Самым важным нововведением в протоколе было то, что теперь и HTTP-запросы и HTTP-ответы содержали заголовки. В частности, стандарт определил [16](https://www.rfc-editor.org/rfc/rfc1945#section-10) [HTTP](https://www.rfc-editor.org/rfc/rfc1945#section-10)\-[заголовков](https://www.rfc-editor.org/rfc/rfc1945#section-10): Allow, Authorization, Content-Encoding, Content-Length, Content-Type, Date, Expires, From, If-Modified-Since, Last-Modified, Location, Pragma, Referer, Server, User-Agent, WWW-Authenticate

Заголовки позволили передавать метаданные, протокол стал чрезвычайно гибким и расширяемым. Например, теперь можно передавать документы, отличные от обычных HTML-файлов, благодаря заголовку Content-Type. Также протокол привнес возможности аутентификации пользователя, сжатия передаваемых данных, кэширование ресурсов и прочие.

Несколько видоизменились запросы. Для обратной совместимости в запросах теперь добавляется версия протокола HTTP/1.0 после названия метода и адреса запроса.

```
GET /rfc/rfc1945.txt HTTP/1.0
User-Agent: CERN-LineMode/2.15 libwww/2.17b3
Accept: */*
```

Кстати, несмотря на то, что появилась возможность передавать документы с указанием их кодировки, HTTP-заголовки и запроса и ответа по прежнему используют ASCII кодировку.

На запрос выше сервер мог ответить так:

```
HTTP/1.0 200 OK
Content-Type: text/plain
Content-Length: 137582
Expires: Thu, 01 Dec 1997 16:00:00 GMT
Last-Modified: Wed, 1 May 1996 12:45:26 GMT
Server: Apache 0.84

**plain-text response here**
```

Как видно выше, в ответах появились [статус коды](https://www.rfc-editor.org/rfc/rfc1945#section-9), которые находятся в конце первой строки. Статус коды могли сообщать не только об успешном ответе на запрос, но также об ошибках как на стороне сервера, так и в запросе клиента, или могли сигнализировать то, что необходимо перенаправить пользователя на другую страницу.

Помимо всего прочего другим важным нововведением было использование дополнительных методов: POST, HEAD. В особенности большую роль сыграл метод POST. С этого момента веб-страницы используются не только для просмотра гипертекста, но и для передачи данных на сервер, которые сервер мог превратить в новое сообщение на доске объявлений, в новость в группе новостей, или сервер мог ответить каким-нибудь блоком данных на отправленную ранее форму запроса.

```
POST /~hy556/cgi-bin/post-query HTTP/1.0
Accept: text/html,video/mpeg,image/gif,application/postscript
User-Agent: Lynx/2.8.4 libwww/5.4.0
From: giannak@csd.uoc.gr
Content-Type: application/x-www-form-urlencoded
Content-Length: 150

org=Distributed%20Systems&professor=Marazakis&browsers=lynx
```

**Сопроводительный материал**

— [HyperText Transfer Protocol: A Short Course](https://condor.depaul.edu/dmumaugh/readings/handouts/SE435/HTTP/), John Yannakopoulos, 2003  
— [Brief History of HTTP](https://hpbn.co/brief-history-of-http/), High Performance Browser Networking
