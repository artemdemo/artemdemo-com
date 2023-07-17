---
title: Hide or disable a feature?
date: '2020-05-15T12:34:00.000Z'
tags: ['ui', 'ux', 'hide', 'disable']
---

More than once I argued with my fellow developers on whether we should hide or disable some feature or functionality. I decided to write down my opinion to be sure the internet knows.

<!-- end -->

Disable feature if at some point the user will be able to interact with this feature.

**Timecosuming process**

When the browser will finish uploading or requesting the server - the user will be able to click on the "Next" button (in this scenario you should also show some loading animation).

**Marketing**

If management wants to promote some functionality. And in case a user will buy an upgraded plan, he will have desired buttons and inputs. In this scenario you'll need to add an explanation in the UI why the feature is disabled.

Side note: Do not disable the submit button! Usually it is an easy solution to be sure all fields are validated. Users can't guess where the mistake is. Especially if form is long and he is already at the bottom of the page. Instead allow the user to click on the submit button. It should trigger validation and scroll the page to the problematic field.

Hide features that are not available to the user and he can't access them in his current status.

Hiding IMO should be the default choice.
