---
title: Theming with styled-components
date: '2020-07-31T15:27:00.000Z'
tags: ['styled-components']
---

Theme can be stored (or generated) in a js file.
For instance, we can keep all of them, in `./themes` folder and load, while bootstrapping the application.

```js
const loadTheme = (themeName) =>
  new Promise((resolve, reject) => {
    const resolveResponse = (response) => resolve(response.default);
    import(`./themes/${themeName}Theme`)
      .then(resolveResponse)
      .catch((err) => {
        const defaultThemeName = 'default';
        if (themeName !== defaultThemeName) {
          console.warn(`Can't load "${themeName}" theme`);
          console.warn(err);
          console.warn(`Trying to load the default theme`);
          return import(`./themes/${defaultThemeName}Theme`).then(
            resolveResponse,
          );
        }
        throw new Error(err);
      })
      .catch((err) => {
        console.error(err);
        reject(new Error("Theme can't be loaded"));
      });
  });
```

Provide theme to the app.

```js
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

// ...

const bootstrapApp = () => {
  loadTheme(configs.theme).then((theme) => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
      document.getElementById('app'),
    );
  });
};
```

Now your theme will be available via `this.props.theme` of styled-components.
Theme property can be anything you defined it to be.
In the example below, it's an object with two properties: `infoButtonBgColor` and name.

```js
import styled, { withTheme } from 'styled-components';

const InfoButton = styled.button`
  background-color: ${(props) => props.theme.infoButtonBgColor};
`;

const InfoArea = (props) => {
  const { theme } = props;
  return (
    <div>
      {theme.name}
      <InfoButton>Ok</InfoButton>
    </div>
  );
};

export default withTheme(InfoArea);
```
