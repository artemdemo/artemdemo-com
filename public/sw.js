/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-f656df417dcb3193b709.js"
  },
  {
    "url": "app.9cf010db93d95489dc33.css"
  },
  {
    "url": "app-1add6fda5677f11139a6.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-522368172786ddb388ef.js"
  },
  {
    "url": "index.html",
    "revision": "f8a3aff575a70e3b737ba2b0131c837d"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "01e7d9e7956afa4a81c6edfbfa5212ea"
  },
  {
    "url": "component---src-pages-posts-list-posts-list-jsx-4a5742a4ff130e2b81fe.js"
  },
  {
    "url": "component---src-pages-index-jsx-ef093acdaaffa45c7c7f.js"
  },
  {
    "url": "1-c6af95b25eee149ac7bb.js"
  },
  {
    "url": "0-91f4da6208ad4062b898.js"
  },
  {
    "url": "static/d/330/path---index-6a9-1Ov7wm2KqFw1hKZ3U98adaNWvfY.json",
    "revision": "4e1952cbc7816838ad55dd0908f67abf"
  },
  {
    "url": "component---src-pages-404-jsx-f9160a37f0d4a969e4ce.js"
  },
  {
    "url": "static/d/385/path---404-html-516-62a-7v82ZsOSeuUAe8HJVjiQLrp7w.json",
    "revision": "7a556e6d0dd08fd9f2ee110b756a6f68"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "3435901834b88a2def90ccbdf3c28302"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});