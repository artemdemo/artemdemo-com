---
title: How to mock components with jest
date: "2019-05-03T18:43:00.000Z"
tags: ["jest", "test", "mocks"]
---

I have already written a post about [mocking moment.js for tests](https://artemdemo.com/blog/20181105-test-code-with-momentjs/). Today let's talk about how to use mocks in a specific tests framework - [Jest](https://jestjs.io/). Jest was developed by Facebook and was based on another tests library called Jasmine. It meant that Jest used widely popular test syntax and could be adapted very easily.

<!-- end -->

The main reason why Facebook decided to write its own tests framework was to create a good tool that would serve it's main UI framework - React. Therefore Jest had specific methods that were suited to testing React components. I won't talk about it in this post since Jest is well suited for testing any javascript code.

First, we need to define the problem that we're facing. Let's say we have some class that we need to test (this is the whole goal of this post, right?):

```javascript
import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

class DateComponent extends React.PureComponent {
  render() {
    const { timeStamp, formatStr } = this.props;
    return (
      <div>
        {format(timeStamp, formatStr)}
      </div>
    )
  }
}

SomeClass.propTypes = {
  timeStamp: PropTypes.number.isRequired,
  formatStr: PropTypes.string,
}

SomeClass.defaultProps = {
  formatStr: 'HH:mm:ss, YYYY-MM-DD',
}
```

First of all, if you say, that this call can be a function, you'll be right. I just want to define it as a class for now. But good catch, I already like you!

So, what do we have here? DateComponent is a very simple component that takes 2 properties: timeStamp and formatStr. When the first one is required and the second is optional, that means it has a default value. This is obvious enough, so let's continue. In the render method, we're displaying timeStamp in the defined format. Nothing fancy, pretty basic stuff.

In the previous post, we already talked about [how to test code that uses moment.js](https://artemdemo.com/blog/20181105-test-code-with-momentjs/) - this one is very similar, we just need to mock date-fns, so let's write the solution right away:

```javascript
// __mocks__/date-fns.js
export const format = (date, formatStr) => `${+date} [${formatStr}]`;

// __tests__/DateComponent.test.jsx
import renderer from 'react-test-renderer';
import DateComponent from '../DateComponent';

jest.mock('date-fns');

const timeStamp = 1540035262000;

describe('DateComponent', () => {
  it('should render with default format', () => {
    const tree = renderer.create(
      <DateComponent timeStamp={timeStamp} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render with custom format', () => {
    const tree = renderer.create(
      <DateComponent timeStamp={timeStamp} formatStr='YYYY/MM/DD' />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
```

Ok, that's was easy. Now, let's start using `DateComponent` somewhere. In this case, we'll need to mock it too. The reason is simple - each unit test should test only one component, not all of them, including all dependencies, but only one specific component.

Let's say we have `ViewComponent` component that is using `DateComponent` in some places. If I will write a test for `ViewComponent` in a straight forward way, without mocking `DateComponent`, I will be testing not only `ViewComponent`, but also all his children, which is undesirable.

```javascript
// ViewComponent.jsx
import React from 'react';
import DateComponent from '../DateComponent';

const ViewComponent = () => {
  const startTimestamp = 1540035262000;
  const endTimestamp = 1540036000000;
  return (
    <React.Fragment>
      <p>
        Start date: <DateComponent timeStamp={startTimestamp} />
      </p>
      <p>
        End date: <DateComponent timeStamp={endTimestamp} />
      </p>
    </React.Fragment>
  );
}
```

Therefore we'll need to add mocks for `DateComponent`, so we can test `ViewComponent` disconnected from its child components. This mock file will need to be added in the same directory where `DateComponent` is stored and should be placed in `__mocks__` directory:

```javascript
// __mocks__/DateComponent.test.jsx

import React from 'react';

const DateComponent = props => (
    <div data-mock='DateComponent'>
        timeStamp: {props.timeStamp}
    </div>
);

export default DateComponent;
```

As you can see above - there is no logic in the mocked component. The whole point is to display the incoming data and we need it only to test how the parent component is using the public API of the DateComponent.

The final step will be to create a test for `ViewComponent` itself:

```javascript
// __tests__/ViewComponent.test.jsx
import renderer from 'react-test-renderer';
import ViewComponent from '../ViewComponent;

describe(ViewComponent, () => {
  it('should render without data', () => {
    const tree = renderer.create(
      <ViewComponent />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
```