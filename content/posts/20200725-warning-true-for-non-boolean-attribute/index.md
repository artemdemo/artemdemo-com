---
title: Styled-components "Warning Received `true` for non-boolean attribute"
date: "2020-07-25T09:05:00.000Z"
tags: ["styled-components"]
---

IMO styled-components library has only one problematic warning.
It's "Warning: Received `true` for non-boolean attribute".
When I encountered it for the first time it took me some time to figure out what was the problem.
Because it's somehow counterintuitive, and the official documentation doesn't really help to solve it.

![Warning: Received `true` for non-boolean attribute](warning-true-for-non-boolean-attribute.png)

Ok, first of all, what does this error mean.
It means that you passed boolean value for the property of a DOM element.
I will rephrase in order to make it crystal-clear - you took native DOM element
and passed boolean value to its standard attribute.

For example, you passed `true` to `alt=` attribute of the `<p>` tag.

It usually happens, when you creating styled component like this:

```js
const Text = styled.p`
  color: ${props => props.alt ? "orange" : "black"};
`;

const Foo = (props) => (
  <Text alt={props.warning}>
    {props.children}
  </Text>
);
```

In order to get rid of the error, you need to rename the `alt` attribute to something else. Name should be different from standard attributes of the `<p>` tag.
