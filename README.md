# artemdemo.com blog

Basic commands:

* `gatsby develop` - Gatsby will start a hot-reloading development environment accessible at localhost:8000
* `gatsby build` - Gatsby will perform an optimized production build for your site generating static HTML and per-route JavaScript code bundles.
* `gatsby serve` - Gatsby starts a local HTML server for testing your built site.

## How to start with gatsby

https://www.gatsbyjs.org/docs/

I'm using `gatsby@2.0.0`

## How to publish

```
$ npm run build
```

```
$ git add --all && git commit -m 'Build blog'
```

```
$ git subtree push --prefix public origin gh-pages
```

## Based on gatsby-starter-blog

https://github.com/gatsbyjs/gatsby-starter-blog
