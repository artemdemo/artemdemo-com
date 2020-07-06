---
title: Google Drive API - Script initialization
date: "2020-07-06T19:30:00.000Z"
tags: ["gapi"]
---

The [basic example](https://developers.google.com/drive/api/v3/quickstart/js) from the official documentation is very informative (this is not a sarcasm). I just want to add my 2 cents in order to make it more es6 like, then it is now. Plus I want one function of initialization that will take care of everything. I want to be able to run it from anywhere in the code and be sure that app will be authorized.

First I need to load the script. I want to do it dynamically from the code and not to attach it to the index.html Also this method could be called multiple times and obviously I don't want to attach google script more than once.

```js
import { createNanoEvents } from "nanoevents";
const emitter = createNanoEvents();

const GOOGLE_SCRIPT_ID = `apis-google-client-${getRandom(5)}`;
const DATA_LOADED_ATTR_NAME = 'data-gapi-loaded';
const SCRIPT_GAPI_LOADED = 'SCRIPT_GAPI_LOADED';

export const _load = () => new Promise((resolve) => {
    let scriptEl = <HTMLScriptElement> document.getElementById(GOOGLE_SCRIPT_ID);
    if (scriptEl) {
        if (scriptEl.getAttribute(DATA_LOADED_ATTR_NAME) !== 'true') {
            const unbind = emitter.on(SCRIPT_GAPI_LOADED, () => {
                resolve();
                // This event should be called only once.
                // Since the script is loaded only at the start of the app.
                // Therefore I'm unbounding here
                unbind();
            })
        } else {
            resolve();
        }
    } else {
        scriptEl = document.createElement('script');
        scriptEl.setAttribute('id', GOOGLE_SCRIPT_ID);
        scriptEl.setAttribute(DATA_LOADED_ATTR_NAME, 'false');
        scriptEl.src = 'https://apis.google.com/js/client.js';

        scriptEl.onload = () => {
            gapi.load('client:auth2', () => {
                scriptEl.setAttribute(DATA_LOADED_ATTR_NAME, 'true');
                emitter.emit(SCRIPT_GAPI_LOADED);
                resolve();
            });
        };

        document.body.appendChild(scriptEl);
    }
});
```

Next step will be gapi client initialization. The same criteria here as well - this method could be called more than once, but initialised only once:

```js
export const _init = () => new Promise((resolve, reject) => {
    if (!gapi.client.getToken()) {
        gapi.client
            .init({
                apiKey: getApiKey(),
                clientId: getClientId(),
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES
            })
            .then(
                resolve,
                reject,
            );
    } else {
        resolve();
    }
});
```

And in the end I can combine everything in one function and use it everywhere:

```js
export const loadAndInit = () => {
    return _load()
        .then(_init)
};
```