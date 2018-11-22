---
title: Reducing boilerplate in React + Redux app
date: "2018-11-22T07:41:20.100Z"
tags: ["react", "redux", "boilerplate", "constants"]
---

First, let’s see what is the problem, then we'll discuss possible solutions and, in the end,
we'll compare the solutions that already exist in the market.
Why in this order and why not go straight to the last point?
Well, first you're more than welcome to jump right to the end and second,
I just don't think that the solution is so easy to grasp.

Anyway, as I said, let's see how we build a React-Redux application. Usually,
for each ajax call, we need 3-4 different files.
Those files that hold different types of data pieces that allow us to manage the application state:

* constants - unique data identifiers.
* actions - data transfer functions (in some cases they also make logic for async requests to the server).
* reducers - functions that define how stat should be changed.
* sagas - async calls (you use them if you want to keep async operations away from actions)

Let's see a simple example:

```javascript
// constants.js
const ADD_TODO = 'ADD_TODO';
const TODO_ADDED = 'TODO_ADDED';

// actions.js
const addTodo = function(data) {
  return {
    type: ADD_TODO,
    data,
  };
}

const todoAdded = function(data) {
  return {
    type: TODO_ADDED,
    data,
  };
}

// reducer.js
const initState = {
  data: [],
  adding: false,
};

const todoReducer = function(state = initState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        adding: true,
      };
    case TODO_ADDED:
      return {
        ...state,
        data: action.data,
        adding: false,
      };

    default:
      return state;
  }
}

// saga.js
function* addTodoSaga() {
    while (true) {
        try {
            const { data } = yield take(ADD_TODO);
            const result = yield request
                .post('/api/todo')
                .send(data)
                .promise();
            yield put(todoAdded(result.body));
        } catch (err) {}
    }
}
```

As you see - creating those 4 files is a lot of boilerplate and I am constantly thinking about how it could be reduced.
First of all, constants look a little redundant. They are only unique text identifiers,
why do we need to create a separate file for them? It looks like they can be part of the action itself.

We can define constants while defining an action and then use it in the reducer and in the sagas.
So the goal is to define the action in this way:

```javascript
export const someAction = createAction('SOME_ACTION');
```

Then we need a way to use this action in the reducer.
So it will be convenient if the created action could return a constant simply by converting it to the primitive,
for example:

```javascript
console.log(someAction); // will print "SOME_ACTION"
```

It can be done by overriding toString method. The full implementation of `createAction` could look like this:

```javascript
// actionCreator.js
export const createAction = (constant, actionFunc) => {
    const resultFunc = (...args) => {
        if (!actionFunc) {
            return {
                type: constant,
            };
        }
        const action = actionFunc(...args);
        return {
            type: constant,
            ...action,
        };
    };

    resultFunc.toString = () => constant;

    return resultFunc;
};
```

Now we need to write `reducerCreator`. I want to get rid of the same code structure that appears in each reducer:
`switch`, `case`, `default`.
It's very repetitive and it looks like we can just define the reducer with some object that will define each case and
also automatically add the default state. So it will look like this:

```javascript

const todoReducer = createReducer(initState, {
  [addTodo]: state => ({
    ...state,
    adding: true,
  }),
  [todoAdded]: (state, action) => ({
    ...state,
    data: action.data,
    adding: false,
  }),
});
```

The full implementation:

```javascript
// reducerCreator.js
import _get from 'lodash/get';
import _isObject from 'lodash/isObject';
import _isArray from 'lodash/isArray';
import _isFunction from 'lodash/isFunction';

export const createReducer = (initState, actionsHandler) => {
    return function(state = initState, action) {
        const type = _get(action, 'type');
        if (type && actionsHandler.hasOwnProperty(type)) {
            const handler = actionsHandler[action.type];
            if (_isFunction(handler)) {
                return handler(state, action);
            }
            throw new Error('action handler should be a function');
        }
        return state;
    }
};
```

This is the basic idea. We're simplifying actions and reducers and removing constants.
Now we can write the whole implementation,
but it's rarely a good idea because we could introduce errors that others have already fixed.

Therefore let's see what solutions we already have.
In the official Redux documentation is a chapter that talks exactly about that -
[how to reduce boilerplate](https://redux.js.org/recipes/reducingboilerplate) in Redux.
There are links to some libraries that solve it for us: redux-actions and redux-act

**redux-actions**

https://github.com/redux-utilities/redux-actions

Library creates actions with a different structure than in [classic Redux](https://redux.js.org/basics/actions):

```javascript
{
  type: 'UPDATE_ADMIN_USER',
  payload: { name: 'Foo' },
  meta: { admin: true },
}
```

This way payload is the only place to store data for the reducer.
This will make our life easier when creating an action.
In the case where the action is only passing data that doesn't have to be separated or reorganized,
we could define it in a very simple way:

```javascript
const increment = createAction('INCREMENT');
increment(); // { type: 'INCREMENT' }
increment(10); // { type: 'INCREMENT', payload: 10 }
```

API for creating reducers is `handleActions()` - while creating the developer should provide the constant himself.
For example, we will use the same action that increments state (see above).

Then the user will need to create a reducer, that will handle it:

```javascript
const reducer = handleActions(
  // Action handlers:
  //
  {
    INCREMENT: (state, action) => ({
      counter: state.counter + action.payload
    }),
  },
  // Default state:
  //
  { counter: 0 }
);
```

As you can see, the user expected to explicitly write the same constant that he used, when he created the action.
The author could have done it better and stored the constant in the action function.

In addition, I don't like the fact that the default state comes last.
Shouldn't we first define the default state and then the action handlers.
I think this way the code will be more readable.

**redux-act**

https://github.com/pauldijou/redux-act

This one stores the constants in the action itself and you don't need to explicitly write it when defining the reducer.
Also, the action creator function accepts any string as a constant, which is nice:

```javascript
import { createAction, createReducer } from 'redux-act';

const increment = createAction('increment the state');
const decrement = createAction('decrement the state');

const counterReducer = createReducer({
  [increment]: (state) => state + 1,
  [decrement]: (state) => state - 1,
}, 0); // <-- This is the default state
```

Similar to the previous library this one uses payload property to store data.
In the same way, it simplifies the way that we create actions and pass data through them.

The default state again is placed last, while creating the reducer. It looks like all libraries prefer it this way.

**Resume**

Out of these 2 libraries, I prefer the second one, redux-act.
It has fewer stars in GitHub, but has a much more interesting API,
encapsulates constants inside of the actions and suits me much better.








