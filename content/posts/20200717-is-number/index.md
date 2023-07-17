---
title: Test whether variable is a number
date: '2020-07-18T09:05:00.000Z'
tags: ['number', 'vanilla js']
---

The post title "Test whether variable is a number" looks like a trivial question,
but let's dig deeper and try to cover all edge cases.
I will split it into two problems and will cover them separately.

## isNumber

First I'll start with the simple problem.
You have variable that may or may not be a number.
Write a function `isNumber()` that will return `true` if it is in fact 'number' or `false` otherwise.

Here I only need to check the type of given variable.
In this situation I have two edge cases.

The first one is `NaN`, which has a `number` type, but is not a meaningful number,
since I can't use it in any calculation.
And it's up to the developer to decide how to handle this situation.
By the way `lodash/isNumber` is not covering `NaN` case and will return `true` for `NaN`.
Which is technically correct, but still I prefer not to call it a number.

The second edge case is not frequent, but since JS allows it, we will cover it as well.
User has additional way to define a number, by using `Number` as a constructor, like this:

```js
const num = new Number(2);
```

In this case the type of `num` variable will be an `object`, when in fact it will act as a number in all other cases.
So we need to check for that as well.

```js
function isNumber(value) {
  // `isNaN` is build in global function, that is supported since IE6
  // (Since ES6, we also have `Number.isNaN` method which make more since, then global function)
  if (isNaN(value)) {
    return false;
  }
  if (value instanceof Number) {
    return true;
  }
  return typeof value === 'number';
}
```

Ok, now let's see the test cases:

```js
console.assert(isNumber(2) === true, 'should validate regular number');
console.assert(isNumber('true') === false, 'should validate string');
console.assert(isNumber('7') === false, 'should validate string as number');
console.assert(isNumber(NaN) === false, 'should validate NaN');
console.assert(isNumber(Number(10)) === true, 'should validate Number');
console.assert(
  isNumber(new Number(5)) === true,
  'should validate Number constructor',
);
console.assert(isNumber(true) === false, 'should validate boolean');
```

## couldBeNumber

Now let's solve a more complicated case, that is related to types magic of JS.

You have a variable that may or may not be a number, but it can be converted to a number in the meaningful way.
For example string '2' can be converted to number 2, but boolean `true` cannot.
Write a function `couldBeNumber()` that will return `true` if it is in fact number or `false` otherwise.

```js
function couldBeNumber(value) {
  // First lets check whether given value is a string.
  // Here I'm also covering the case when value defined via constructor `new String()`.
  const isString = typeof value === 'string' || value instanceof String;
  // If the user gave us a string, then we need to check whether it's empty.
  // Since string can be created with `String` constructor I need to cast it to the regular string,
  // therefore I'm doing `value + ''` (otherwise I can't compare it to an empty string).
  // By the way, I need to check for an empty string, since `Number('')` will return `0`.
  // And I'm using `Number` in the first place since this way I can cover integers
  // and floats with one conversion method.
  if (isString && value + '' !== '') {
    // `Number()` of something that can't be converted to number will return `NaN` and
    // by specification of ECMAScript `NaN` not equal to `NaN`.
    // Therefore I can just compare it to itself.
    return Number(value) === Number(value);
  }
  // In the end I can just use the previously defined `isNumber()` function.
  return isNumber(value);
}
```

Now let's see the test cases.
Half of them are covered in the first part of this post, but I prefer to copy them over here as well.

```js
console.assert(
  couldBeNumber('1') === true,
  'should validate string as a number (integer)',
);
console.assert(
  couldBeNumber('1.2') === true,
  'should validate string as a number (float)',
);
console.assert(
  couldBeNumber('-1.2') === true,
  'should validate string as a number (negative float)',
);
console.assert(
  couldBeNumber(new String('5')) === true,
  'should validate string as a number (String constructor)',
);
console.assert(couldBeNumber('') === false, 'should validate empty string');
console.assert(couldBeNumber('a') === false, 'should validate string');
console.assert(couldBeNumber(2) === true, 'should validate regular number');
console.assert(couldBeNumber(NaN) === false, 'should validate NaN');
console.assert(couldBeNumber(Number(10)) === true, 'should validate Number');
console.assert(
  couldBeNumber(new Number(5)) === true,
  'should validate Number constructor',
);
console.assert(couldBeNumber(true) === false, 'should validate boolean');
```
