---
title: Simple template engine in JavaScript
date: "2020-10-24T10:27:00.000Z"
tags: ["regex","template"]
---

Recently I had a task, that included creating simple templates.
Nothing special, just using JavaScript replace placeholders with provided values.
Obviously it's better to have some general solution in place, so next time any change wouldn't be painful.

<!-- end -->

Examples of some strings with placeholders:
* "Hello, {name}!"
* "The answer is {value}"
* etc

There is no complicated logic inside of the template.
Therefore, I need just an object with values to replace,
and some mechanism to find correlation between placeholder name and keys in the values object.

So I came up with following solution:

```typescript
export type TTemplateData = {
    [key: string]: string,
};

export const templateEngine = (inputString: string, data: TTemplateData) => {
    return inputString
        .replace(
            /{\s*(\w*)\s*}/g,
            (match, key) => {
                return data.hasOwnProperty(key) ? data[key] : '';
            }
        );
};
```
