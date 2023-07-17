---
title: Replacing moment.js with date-fns
date: '2018-11-04T08:11:00.121Z'
tags: ['moment.js', 'date-fns']
---

It's known that [moment.js](https://momentjs.com/) is a widely used library for date and time manipulations.
Obviously it is the case because of the limitations of standard JavaScript API,
but today we're not going to judge standard language features.
Let's accept the insufficiency of built-in tools and
investigate whether or not I can replace moment.js with a smaller library.

Addy Osmani [suggested in the recent video](https://youtu.be/i5R7giitymk?t=379) called "The State of JavaScript",
using [date-fns.js](https://date-fns.org/) as a replacement for moment.js.
It's not the first time I'm hearing this advice,
so I decided to give it a try and see how easy it will be and how much I gain in this replacement.

First of all let's compare full library size (without localizations), so we will have good starting point:

- [date-fns.min.js](https://cdnjs.cloudflare.com/ajax/libs/date-fns/1.29.0/date_fns.min.js) - 68 Kb
- [moment.min.js](https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js) - 50 Kb

Interesting - it looks like date-fn.js is bigger than moment.js -
so why are so many people recommending it as a smaller replacement for moment?

The thing is, these sizes are not correct in a real world scenario.
I took these libraries from CDN and they include all functionality even though I probably don't need all of it.
And these functionalities can probably be removed in the build process. So let's create a small project and check it.

Usually I use moment.js for all date/time manipulations,
therefore I will base this project on the functionality of this library and then will try to recreate it with date-fns.
At the end I will compare bundle size and will see which one is smaller.

So what will be most used functions (in my case) of moment.js - actually not that many,
I can sum them up in one code example:

```javascript
// moment-example.js
import moment from 'moment';
import { timestamp, diffTimestamp, formatStr } from '../constants';

const momentExample = ($el) => {
  $el.html(
    `<div>
            <p>Regular: ${moment(timestamp).format(formatStr)}</p>
            <p>UTC: ${moment.utc(timestamp).format(formatStr)}</p>
            <p>Duration in days: ${moment.duration(diffTimestamp).asDays()}</p>
            <p>Duration human readable: ${moment
              .duration(diffTimestamp)
              .humanize()}</p>
            <p>Timestamp: ${moment(timestamp).format('x')}</p>
        </div>`,
  );
};

export default momentExample;
```

Constants will be similar in both examples, therefore I extracted them into a separate file:

```javascript
// constants.js
export const timestamp = 1540035262000;
export const diffTimestamp = 1200000000;
export const formatStr = 'HH:mm:ss, YYYY-MM-DD';
```

Not anything unusual, right?
Well this is the case for most libraries - there are only a handful methods that are used.
All others are there only for edge cases and for real hardcore developers.
So let's see what I'm using here:

- `format()` - obviously one of the most used method of any library that help deal with date/time representations.
- `utc()` - in some cases (especially for tests) I want to be sure that time is presented in UTC.
- `duration()` - how much time was spent on something.
- `humanize()` - useful in charts of time spending representation.

This is pretty much it, as I said - not anything unusual.

Let's see what can be done with date-fns.

**format()**

First of all formatting - this one is easy. There is a specific function that helps with this one:

```javascript
import { format } from 'date-fns';
format(timestamp, formatStr);
```

But there is the problem with returning it in UTC.
There is no built-in method for it. The authors are saying that they are working on a solution,
but it will take time. Currently we can use a workaround that I found in issues on their repo:

```javascript
/**
 * Convert given date to UTC
 * @link https://github.com/date-fns/date-fns/issues/556#issuecomment-391048347
 * @param date | plain JS date object
 * @return {Date | *}
 */
export function toUTC(date) {
  const offset = date.getTimezoneOffset();

  return Math.sign(offset) !== -1
    ? addMinutes(date, offset)
    : subMinutes(date, Math.abs(offset));
}
```

And this function will help us to print the date in UTC:

```javascript
format(+toUTC(new Date(timestamp)), formatStr);
```

**duration()**

There is a built-in function for this kind of manipulation:

```javascript
import { differenceInDays } from 'date-fns';
differenceInDays(diffTimestamp, 0);
```

`differenceInDays` will return the difference between 2 dates.
In the example above it will return the amount of days in a given timestamp.

But there is a catch, `differenceInDays` is returning a result in full days,
when `duration()` from moment.js will return a fraction.
This is inconvenient I know, but in my case, not a problem at all.

**humanize()**

In case we need to print duration in human readable format we can use `distanceInWords`.

```javascript
import { distanceInWords } from 'date-fns';
distanceInWords(diffTimestamp, 0);
```

Works exactly like `humanize()`, very conveniently.

Now, let's see the full example of all methods we used in one piece:

```javascript
import { format, differenceInDays, distanceInWords } from 'date-fns';
import { timestamp, diffTimestamp, formatStr } from '../constants';
import { toUTC } from '../utils';

const dateFnsExample = ($el) => {
  $el.html(
    `<div>
            <p>Regular: ${format(timestamp, formatStr)}</p>
            <p>UTC: ${format(+toUTC(new Date(timestamp)), formatStr)}</p>
            <p>Duration in days: ${differenceInDays(
              diffTimestamp,
              0,
            )} (provides difference in <strong>full</strong> days)</p>
            <p>Duration human readable: ${distanceInWords(diffTimestamp, 0)}</p>
            <p>Timestamp: ${format(timestamp, 'x')}</p>
        </div>`,
  );
};

export default dateFnsExample;
```

Now let's talk ~~money~~ bits. After uglification and tree-shaking, these are the results:

- Chunk with date-fns.js - 29.3 Kb
- Chunk with moment.js - 57.1 Kb

Build with moment.js is twice as big as with date-fns. Pretty impressive. Looks like it's worth a try.

By the way, the whole code is in my github account.
You can check sizes by yourself as well as see all code examples: https://github.com/artemdemo/date-fns-vs-moment
