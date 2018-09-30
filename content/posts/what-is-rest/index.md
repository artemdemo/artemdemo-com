---
title: What is REST?
date: "2018-09-29T23:46:37.121Z"
---

This is one of rare occasions when disambiguation will not lead better understanding.
Or, probably, it's not so rare. We can safely use REST as word on it's own, without even considering meaning of each letter.
It's just decided to be written in capital letters, doesn't matter why.

So, why you should consider knowing what is REST?

Well, if you're web developer and you're working with external API's or writing one of your own, then you, probably,
need to know what are you doing.
REST is base for the most API's in the world and a lot of programmers relay on those concepts.
In addition, because of it's popularity - it provides methodology not only for API itself, but also for client application as well.
And this is because in the end client will use provided API and will organise its code accrodingly.

Methodology

As I mentioned before, REST is methodology for writing API.
It's not framework and not a language, it's set of general rules.
Those rules are providing way of creating end points for your server, in a way that incorporate http specififcations.
As a result it gives us compact and self explanatory list of end points, that are easy to use by the clients of the API.
As a bonus, since we're using industry standard methodology - it's easier for new developer to understand the logic behind it.

General rules

REST has handful rules that providing base for each end point of the API:

* Each end point contains from verb and URI
* Each call is stateless

As you can see, it's not a lot rules to follow and remember. Let's see what each one of them means.

REST verbs

GET, POST, PUT, DELETE, PATCH, HEADER, OPTIONS

Data flow

REST is not defining by default what are data contracts between server and client.
However part of the methodology lies in using correct media types, that define sent and received data-types.
Developer can use existing one or invent one of its own, but the rule of thumb is - you should use existing one and extend it if needed.

[IANA](https://www.iana.org/) is holding [list of registered media types](https://www.iana.org/assignments/media-types/media-types.xhtml) 