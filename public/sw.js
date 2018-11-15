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
    "url": "webpack-runtime-0e44cc0c15a9764f9ce7.js"
  },
  {
    "url": "app.9cf010db93d95489dc33.css"
  },
  {
    "url": "app-c73b1b7bbebac6daa741.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-522368172786ddb388ef.js"
  },
  {
    "url": "index.html",
    "revision": "51d0e5bb2e9a5a00e1be46ace0cfd9ef"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0446dc0aad8b935994e268b8b07ef300"
  },
  {
    "url": "component---src-pages-posts-list-posts-list-jsx-756276cb94dba1fa767f.js"
  },
  {
    "url": "component---src-pages-index-jsx-ef093acdaaffa45c7c7f.js"
  },
  {
    "url": "1-6d2cb3c1724d869fac5d.js"
  },
  {
    "url": "0-8b41504e77bf2669647c.js"
  },
  {
    "url": "static/d/446/path---index-6a9-NsTBnISzHC5e4BTYr3FuJTZNrY.json",
    "revision": "29d3b623ee42326f827cabb237fae336"
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