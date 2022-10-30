---
layout: "src/pages/ru/_layouts/_with-http-navigation.astro"
title: "HTTP 1.1."
subtitle: "Краткая история развития HTTP протокола. Серия заметок"
language: "ru"
pubDate: "Sep 25 2022"
tags: ["http", "history"]
series: "http"
description: "Спустя год после появления на свет HTTP 1.0, [RFC](https://tools.ietf.org/html/rfc1945) [1945](https://tools.ietf.org/html/rfc1945), в январе 1997 года выходит новая версия протокола HTTP 1.1, [RFC](https://datatracker.ietf.org/doc/html/rfc2068) [2068](https://datatracker.ietf.org/doc/html/rfc2068). На самом деле нововведений, особенно если спускаться до деталей, много, ниже мы отметим некоторые важные из них."
---

_Спустя год после появления на свет HTTP 1.0,_ [_RFC_](https://tools.ietf.org/html/rfc1945) [_1945_](https://tools.ietf.org/html/rfc1945)_, в январе 1997 года выходит новая версия протокола HTTP 1.1,_ [_RFC_](https://datatracker.ietf.org/doc/html/rfc2068) [_2068_](https://datatracker.ietf.org/doc/html/rfc2068)_. На самом деле нововведений, особенно если спускаться до деталей, много, ниже мы отметим некоторые важные из них._  
  
**HTTP 1.1 Стабильная версии**  
  
В стандарте HTTP 1.1, правда в уже обновленной версии [RFC 2616](https://www.w3.org/Protocols/HTTP/1.1/rfc2616.pdf) от июня 1999 года, прямым текстом описывается необходимость (или мотивация) новой версии. Как выяснилось, прошлая версия протокола HTTP/1.0 недостаточно учитывала влияние иерархических прокси-серверов, кэширования, необходимости постоянных подключений и виртуальных хостов.  
  
К тому же существовала еще одна проблема, не все веб-приложения стремились реализовывать полноценную поддержку нового протокола. Некоторые веб-приложения, можно сказать, по-прежнему называли себя «HTTP/1.0». Это потребовало некоторых дополнительных изменений в протоколе, чтобы два взаимодействующих приложения могли определить истинные возможности друг друга.  
  
Кэширование  
  
Версия HTTP 1.0 уже поддерживала кэширование, но имелись несовершенства. Например, заголовок If-Modified-Since использовал абсолютные метки времени, поэтому возможны были проблемы из-за несоответствий с синхронизацией времени. Чтобы решить эту проблему, был добавлен новый заголовок [ETag](https://datatracker.ietf.org/doc/html/rfc2616#section-14.19) для валидации кеша. Это потянуло за собой добавление других условных заголовков: If-None-Match, If-Match, If-Unmodifed-Since и If-Range.  
  
Появился HTTP-заголовок Vary, который отправлялся в ответ клиенту и давал указание любым промежуточным кешам кэшировать отдельный экземпляр.  
  
Также был добавлен механизм [Cache-control](https://datatracker.ietf.org/doc/html/rfc2068#section-14.9), который определял политику кэширования.  
  
Виртуальные хосты  
  
Хотя заголовок Host появился еще в НТТР 1.0, тогда официально он не требовался, в то время как версия HTTP 1.1 требует этого по спецификации. Заголовок Host важен для маршрутизации сообщений через прокси-серверы, позволяет различать домены, которые указывают на один и тот же IP-адрес.  
  
Однако вместе с таким улучшением добавились и некоторые проблемы безопасности, например, Host header injection может привести к Web Cache Poisoning, ложные перенаправлениям URL и [другим](https://www.briskinfosec.com/blogs/blogsdetail/Host-Header-Attack) [последствия](https://www.briskinfosec.com/blogs/blogsdetail/Host-Header-Attack).  
  
Постоянные соединения  
  
Переиспользование TCP-соединения дает множество преимуществ, например: открывая и закрывая меньше TCP-соединений, экономится время работы процессора, память, используемая для блоков управления протоколом TCP; снижается нагрузка на сеть за счет уменьшения количества пакетов, вызванных открытием TCP; и [прочее](https://datatracker.ietf.org/doc/html/rfc2616#section-8.1.1).  
  
HTTP-заголовок [Keep-Alive](https://datatracker.ietf.org/doc/html/rfc2068#section-19.7.1.1), позволяет переиспользовать текущие открытое соединение для отправки HTTP запросов и получения ответов, а не создавать новое соединение каждый раз.  
  
HTTP-запросы и ответы могут быть конвейеризированы по соединению. Эта особенность называется [HTTP](https://datatracker.ietf.org/doc/html/rfc2068#section-8.1.2.2) [Pipelining](https://datatracker.ietf.org/doc/html/rfc2068#section-8.1.2.2). Конвейерная обработка позволяет клиенту делать несколько запросов, не дожидаясь каждого ответа, что позволяет использовать одно TCP-соединение гораздо эффективнее и с гораздо меньшими затратами времени.  
  
**Сопроводительный материал**  
  
— [HTTP Caching – HTTP 1.0 vs HTTP 1.1](https://www.fir3net.com/Networking/Protocols/http-caching-http-1-0-vs-http-1-1.html)  
— [Understanding The Vary Header](https://www.smashingmagazine.com/2017/11/understanding-vary-header/)  
— [Cache Control](https://www.imperva.com/learn/performance/cache-control/)  
— [Difference Between HTTP 1.0 and HTTP 1.1](https://askanydifference.com/difference-between-http-1-0and-http-1-1-with-table/)  
— [HTTP Host Header Attack: Explanation and Examples](https://crashtest-security.com/invalid-host-header/)  
— [HTTP Keep-Alive, Pipelining, Multiplexing and Connection Pooling](https://www.haproxy.com/blog/http-keep-alive-pipelining-multiplexing-and-connection-pooling/)  
