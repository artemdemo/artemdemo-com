---
title: ImgReview announce
date: '2020-10-09T11:27:00.000Z'
tags: ['imgreview']
---

I started this project some time ago, just to test an idea and now I want to share it with everyone :)

It all started with my frustration of not being able to mark areas on the images. Usually I need it in order to better illustrate my point. The idea is simple - mark areas on screenshots, or images to better illustrate your point. When I'm sending an email or adding an image to a jira ticket, I usually want to add a marker, like an arrow or circle, in order to emphasize the exact issue.

It's very easy when you use Mac, the built-in image editor has this functionality.

But not every OS is coming with built-in tools that can provide this functionality and installing additional software is not always what you want to do. So when I moved to Linux, this was the exact functionality that I missed. Therefore, I decided to build my own app that will be available no matter the OS you're using.

Besides that I had one additional goal in mind - to make it easy to make "notes" on the image. This is it. No image editing, no level controls, just making notes and pointing to things.

Well I couldn't resist and added some basic editing functionality - cropping and resizing, but this was necessary, since it's required if the image is relatively big and the user wants only to discuss specific areas.

![ImgReview example](imgreview-example.png)

The code is open source, you can [check it out](https://github.com/artemdemo/imgreview) and report bugs or request features (usual open source stuff :) By the way I recommend starting with the [documentation](https://github.com/artemdemo/imgreview/tree/master/documentation), it will make it easier to understand the concept.

And here is the link to app itself: https://artemdemo.github.io/imgreview/

[![ImgReview functionality](imgreview-functionality.gif)](https://artemdemo.github.io/imgreview/)
