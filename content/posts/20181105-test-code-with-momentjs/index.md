---
title: How to test code that uses moment.js
date: "2018-11-05T08:00:20.100Z"
tags: ["moment.js", "test", "mocks"]
---

I'm going to talk about unit tests here, not any other kind of tests.
And unit tests have, in my opinion, the following list of criteria that they have to meet.
This list makes it hard to write tests for code that use external libraries, especially ones that manipulate time:

* Unit tests should be able to run on the developer’s machine as well as on the remote server
* Unit tests shouldn't relate to timezone
* Each tested class (or component) should be tested independently from external libraries
* Clarification: All external dependencies should be mocked-up

With this in mind, let's see what we can do.

First of all, regardless of what your code is -
you don't want to test 3rd party libraries as well as other components outside of the current unit.
This means that we don't want to test, for example, how `format()` or `duration()` methods work.
We should assume that moment is a well tested library and go with it.
(In case we aren’t sure, we can create separate test files, that will check moment.js only)

What does it tell us?
Well first of all it defines our approach - we need to mock-up the 3rd party library,
instead of using original code.

Should our code reproduce exact functionality?
Absolutely not, we only need to be sure that the methods receive properties that it should receive and that's all.
But in the case of moment we'll need to create some wrapper, that will act like an authentic library.
Let's see an example of how we use the `format()` method:

```javascript
import moment from 'moment';
const timeMoment = moment(1540500979000);
timeMoment.format('HH:mm:ss, YYYY-MM-DD');
```

Another example will be usage of the `duration()` method:

```javascript
import moment from 'moment';
moment.duration(diffTimestamp).asDays();
```

So now we need a file that will reproduce this API, but return only parameters.
The solution could be the following code:

```javascript
function MomentMock(time) {
    if (this instanceof MomentMock) {
        this._time = time;
    } else {
        return new MomentMock(time);
    }
    this._time = time;

    this.format = format => `${this._time} [${format}]`;

    this.utc = MomentMock;
}

MomentMock.duration = time => ({
    asDays: () => `${time} asDays`,
});

export default MomentMock;
```

It's especially helpful if the time parameter is primitive that represents time, like a timestamp.
This way we're testing only that we used the right timestamp and format string.
Also, we don't need to care about the timezone of the machine where we run tests,
since we're not dealing with `Date()` objects.

