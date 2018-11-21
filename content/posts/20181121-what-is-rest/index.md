---
title: What is REST?
date: "2018-11-21T19:33:20.100Z"
tags: ["rest"]
---

This is one of those rare occasions when disambiguation will not lead to a better understanding.
We can safely use REST as a word on its own, without even considering the meaning of each letter.
It’s just been decided to write it in capital letters, it doesn’t matter why.

**So, why do you need to know what REST is?**

Well, if you’re a web developer and you’re working with external API’s,
or writing your own service to provide a way of communication with the external world, then you, probably,
need to know what tools are at your disposal.
REST is a base for most API’s in the world, and a lot of programmers rely on those concepts.
In addition, because of its popularity, it provides a methodology not only for the API itself,
but also for client applications as well. This is because, in the end,
the client will use the provided API and will organize its code accordingly.

**Methodology**

As I mentioned before, REST is a methodology for writing API. It’s not a framework and not a language,
it’s a set of general rules. Those rules provide a way of creating endpoints for your service,
and it's doing so by incorporating HTTP specifications. As a result, it gives us a compact,
and self-explanatory, list of API endpoints that are easy for clients of the service to use.
As a bonus, since we’re using an industry standard methodology -
it’s easier for a new developer to understand the logic behind it.

**REST - main parts**

Each RESTful endpoint is built from basic building blocks:

* REST verb
* URL
* Headers
* Data (may or may not be provided)

![REST schema](./rest-schema.png)

Blocks with an asterisk are required.

**REST verbs**

* GET - retrieve data from a specific resource
* POST - submit data to be processed to a specific resource
* PUT - update a specific resource
* DELETE - delete a specific resource
* PATCH - update a partial resource
* HEAD - request only for headers, does not return a body
* OPTIONS - return the supported HTTP methods

**Headers**

Headers are metadata about the request or response.
They provide information about the status of the requests, content of it, authorizations and more.
Let's describe some of them:

* Status - describes the status of the request. It's an integer number, that defines what happened in the request:
  * 200 - Ok
  * 201 - Created
  * 400 - Bad request
  * 401 - Unauthorized
  * 500 - Internal Server Error
  * [more examples of statuses](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)  
* Authorization - carries credentials containing the authentication information of the client.
* Content-Type - defines the media type of the response sent to the client by the server.

**Data**

REST does not define, by default, what are the data contracts between the server and the client.
However part of the methodology lies in using the correct media types that define sent and received types of data.
Developers can use an existing one or invent one of their own,
but the rule of thumb is - you should use an existing one and extend it if needed.

Where you can find a list of existing media types? No worries, there is a solution.
IANA holds a list of registered media types:
[https://www.iana.org/assignments/media-types/media-types.xhtml](https://www.iana.org/assignments/media-types/media-types.xhtml).
The most used media-type is obviously application/json,
because it's general for all JSON data structures you will send or receive in communication with the server.

Those are the main parts of RESTful API. There are additional things to research and study, such as: 

* What are the best data structures for certain use cases? For example, what if you need to introduce filtering, sorting and pagination? - What data will the endpoint accept? What will the response look like?
* How to define the endpoint for combined data from different services.
* etc.

As always there is no silver bullet solution, we just need to find the right way for our set of requirements.
