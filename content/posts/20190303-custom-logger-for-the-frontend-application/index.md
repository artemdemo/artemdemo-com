---
title: Custom logger for the FrontEnd application
date: '2019-03-03T21:29:00.000Z'
tags: ['logger', 'console']
---

Let's talk for a moment about logging in the FrontEnd application. Yes, we can use standard `console.log` or any other `console[method]` that is available to us, but what we really want to have is some way to have a log available, when it's allowed and to hide the logging, when we're not interested in it. So let's review this.

<!-- end -->

Here are the required features:

- Should be based on a standard `console` object.
- Should show 3 methods: `log`, `warn`, `error` - behind the scenes they should use methods from the standard `console` object.
- For each log message it should print the actual browser time in the format `'MM-DD HH:mm:ss'`.
- Log in browsers console should show the actual line where it was used by the user.
- A user should be able to disable it:
  - By setting the `LOGGER` variable in `localStorage` to `false`.
  - It's must be enough to check whether logging is disabled only once, at the start of the program. No need to perform it on each log.

Actually, this problem has 3 features that make it a very good candidate for a whiteboard question during the interview. These features are:

- The resultant code is short, it will not take a long time to write.
- It has real-world usage and is not some abstract question regarding a problem that doesn't exist.
- And it addresses some language aspects that are not widely used but are very interesting and critical in certain use-cases.

Let's talk about these aspects.

First, we need to create a separate file, that will provide the API of our library. At least it should expose 3 methods: log, warn and error. The simplest way to do it will be the following:

```javascript
export const log = console.log.bind(window.console);

export const warn = console.warn.bind(window.console);

export const error = console.error.bind(window.console);
```

This approach will allow us to use methods from our library but get all the benefits of the system's `console` object. The browser will print the line of usage in the code and not from our library. Now we need to somehow prevent logging if it is not allowed.

First, let's create a function that will check whether log can be displayed or not:

```javascript
const showLog = () => {
  const LOGGER = localStorage.getItem('LOGGER');
  return LOGGER === 'true';
};
```

Now we need to utilize this function. If we allow the use of logging we will pass it to our public methods. In the case where we do not allow - we will pass an empty function.

```javascript
export const log = showLog() ? console.log.bind(window.console) : () => {};

export const warn = showLog() ? console.warn.bind(window.console) : () => {};

export const error = showLog() ? console.error.bind(window.console) : () => {};
```

Empty function is a good solution in this case since it allows us not to care about how the user will use our methods. A user doesn't need to check whether public methods can or can't be used.

Now, the most interesting part. How to print the time on each usage. Let's do it in reverse order. If we already have some variable that has a timestamp value, we could do it in the following way:

```javascript
export const log = showLog()
  ? console.log.bind(window.console, getTime)
  : () => {};

export const warn = showLog()
  ? console.warn.bind(window.console, getTime)
  : () => {};

export const error = showLog()
  ? console.error.bind(window.console, getTime)
  : () => {};
```

In the example above `getTime` should provide a timestamp each time one of the methods was called. But it means that `getTime` should be some kind of function and this looks weird since `console[method]` doesn't accept callbacks. It will try to print each variable that has been provided, and here is the hint, when we provide a function to the `console.log`, then the whole function body will be printed - it means that the built-in method `toString` has been called. What is interesting is that we can override this method:

```javascript
const getTime = function () {};
getTime.toString = () => {
  return `[${moment(new Date()).format('MM-DD HH:mm:ss')}]`;
};
```

The whole code will look like this:

```javascript
/* eslint-disable no-console, prefer-spread */
import moment from 'moment';

const showLog = () => {
  const LOGGER = localStorage.getItem('LOGGER');
  return LOGGER === 'true';
};

const getTime = function () {};
getTime.toString = () => {
  return `[${moment(new Date()).format('MM-DD HH:mm:ss')}]`;
};

export const log = showLog()
  ? console.log.bind(window.console, getTime)
  : () => {};

export const warn = showLog()
  ? console.warn.bind(window.console, getTime)
  : () => {};

export const error = showLog()
  ? console.error.bind(window.console, getTime)
  : () => {};
```
