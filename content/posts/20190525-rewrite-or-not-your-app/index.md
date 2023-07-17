---
title: Rewrite or not your app
date: '2019-05-25T14:36:00.000Z'
tags: ['refactoring', 'rewrite', 'product management']
---

_"Rewriting almost always feels a lot more appealing then gradual refactoring, but remember, that you're comparing reality to a fictitious concept."_ [Always rewrite EVERYTHING!](https://www.youtube.com/watch?v=XcUUY8ziTuk)

Sometimes I have a feeling that there is a tradition, in the developers' community, that whenever you arrive at a new workplace, one of the first things you'll do is to say that all this old code should be rewritten. This is rarely the case, but traditional ways are hard to stop or be replaced by something else, right?

<!-- end -->

Recently I found a fantastic article that talked about this issue: "[Lessons from 6 software rewrite stories](https://medium.com/@herbcaudill/lessons-from-6-software-rewrite-stories-635e4c8f7c22)". Here is my summary, but I strongly encourage you to read the whole thing.

So, let's assume you can't grow without adding new features and rewriting old ones in your app. You need to find a way to manage it so that you will stay relevant, stay ahead of competitors, and keep your developers happy by letting them write new cool stuff. Companies have tried to solve this in different ways, so let's see some examples of how it was done in the past.

**Netscape**

The plan was to rewrite the product and get the same functionality, but with a better code base. The whole goal was to make the code easier to read and understand, so it would attract more developers to participate, and so they open-sourced the entire app. The result: they failed to implement critical features, and no one wanted to use it. This was when IE6 became an industry leader.

**Basecamp**

The product was working fine, but developers couldn't introduce new features, they would conflict with the old functionality. Developers had to decide whether to please existing customers by not changing key features, or change the product to meet the latest requirements. They decided to go with the second option, and it was the right choice.

However, what about the people who didn't want to change to a new version? Basecamp decided to solve it, by saying, that they could continue to use the current version. They launched Basecamp2 and promised to support the first version indefinitely. The exciting thing is that later on, they did it all over again and released Basecamp3 with the same promises for the two previous versions.

**Visual Studio & VS Code**

VS Code is the way Microsoft can reach an audience outside of its home platform. For decades there was a wall between Windows and the other world of operating systems. We also saw this in the products that Microsoft developed - you never were able to use them on Linux (I mean without hacks). VS Code was an attempt to change, to open up and reach a new modern sector of "cool kids" that were using JS and node.js.

Microsoft did it by adding a new product for the new audience and not by rewriting the old one. It successfully created an active open source community around VS Code, something that Netscape failed to do.

**Gmail & Inbox**

When Google introduced Inbox, it wasn't as a replacement for Gmail, at least not in the near feature. It was an attempt to try a different approach and to see whether users would like it more. Inbox provided a new interface (and some new features) with the same back end. In the end, when Google decided to shutdown Inbox, many of its features moved to the new Gmail, which got a new updated look before Inbox stopped working. Of course, many users were annoyed by that, but on the other hand, the company succeeded in testing a new interface and not losing their existing base of clients.

**FogBugz & Trello**

FogBugz was one of the first web-based task management systems. It was launched long before Jira but didn't stay ahead of the Atlassian product. The idea that rewriting would make the product worse was deeply rooted in the CEO's mind, and they hadn't succeeded against the competition. At some point, it was clear that keeping the same codebase, without introducing new features and new approaches, would not only keep customers away but also would make developers unhappy.

The decision was to test new ideas for a new product. After brainstorming new products, they decided to stick with the Kanban board and implement it on the web. This is how they started to work on Trello. While FogBugz appealed to a narrow niche, Trello was focused on one thing and therefore could be used by anyone for anything.

**FreshBooks & BillSpring**

FreshBooks had an old codebase that was very hard to manage and almost impossible to rewrite without totally rewriting it. Also, at the time, the founders didn't want to make drastic changes in order not to lose existing customers. So they decided to create a competitor, a separate company that would be developed from scratch, and all decisions would be based on the feedback from real customers.

They succeeded when it was clear that the second company (they called it BillSpring) was making money and the customers were happy, so they merged them both. Old customers could use the previous version, but they were encouraged to test the new solution. It wasn't an easy way, but it was the safest.
