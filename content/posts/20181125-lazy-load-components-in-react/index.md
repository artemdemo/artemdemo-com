---
title: Lazy load components in React
date: "2018-11-25T21:29:00.000Z"
tags: ["react", "lazy load", "React.lazy", "React.Suspense"]
---

Lazy loading in React was always possible.
It wasn't so clear how to do it properly and how to handle all edge cases, as well as how to find all of them,
because, like many things in life, we need first to encounter the problems,
and only then can we be ready to handle them properly.

Since React version 16.6 we have had `React.lazy` and `React.Suspense` -
helper function and helper component that have come to the rescue,
and which promise to make it easier to deal with the lazy load.
But first, let's see what is the problem with asynchronous load and how it was handled "the old way".
It will help us better understand what new features React are bringing to the table.

In general asynchronous loading of a script is handled not by React (or any other library),
but by webpack (I'm assuming we are using it, as our main task manager).
In order to load some code we need to use dynamic `import()`
which will return a promise and as soon as the code is loaded, it will be resolved. Something like this:

```javascript
import('./examples/some-script).then((e) => {
    e.someFunction();
});
```

Webpack will handle all the loading process, we don't need to worry about it.
We only need to write the code. There is no difference in the case of React,
we still will need to use `import()`, but this time we'll wrap it in the component.

The main catch in this process is where to place `import()`.
This method can't be generalized and encapsulated inside some component, like this:

```javascript
class LazyLoader extends React.Components {
  componentDidMount() {
    const { pathToScropt } = props;
    import(pathToScropt).then((component) => {
      // what to do with loaded component
    });
  }
  // ...code
}
```

`import()` should be written with the exact path to the component (or, at least to the directory) otherwise,
it won't work. This is exactly the case with the new features as well.

However, we still want to write a wrapper,
because there are additional general issues with asynchronous components that I want to solve in one place.
Such as, what should be rendered in place of a component that has been loaded.
I want to use some general loader in most cases and have the option to change it sometimes.
For this reason, by the way, we have `React.Suspense` component.

Therefore the solution could be something like this:

```javascript
import React from 'react';

const lazify = loader => (props) => {
    const Component = React.lazy(loader);

    const loadingFallback = (() => {
        if (React.Children.count(props.children) > 0) {
            return props.children;
        }
        return (
            <span>Loading...</span>
        );
    })();

    return (
        <React.Suspense fallback={loadingFallback}>
            <Component />
        </React.Suspense>
    );
};

export default lazify;
```

And the usage:

```javascript
// SomeComponent.async.jsx

export default lazify(() =>
  import(/* webpackChunkName: "SomeComponent" */ './SomeComponent)
);
```

I'm using magic comment `/* webpackChunkName: "SomeComponent" */`
in order to hint to the webpack what name to use for the chunk it will create.
This name will be used in development only and it will make it
much easier to keep track of the files that will be created.

In my implementation, I also use a general loading message as well as give the option to override it.
If the user uses the component "as is", then it will be rendered "Loading…" until the component is ready.
If you want to render something else, you should provide children to the component and they will be rendered
until the component is ready:

```javascript
import React from "react";
import SomeComponent from "./SomeComponent.async";

class RootComponent extends React.Component {
  render() {
    return (
      <SomeComponent>
        <span>Another loading…</span>
      </SomeComponent>
    );
  }
}
```

And this is it. You can now write and use lazy components.