const _ = require('lodash');
const path = require('path');
const utils = require('../../src/services/utils');

// Path in `path.resolve` should be relative to `gatsby-node.js`
const blogPost = path.resolve('./src/templates/BlogPost.jsx');

const createBlogPosts = (posts, createPage) => new Promise((resolve) => {
    _.each(posts, (post, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node;
        const next = index === 0 ? null : posts[index - 1].node;

        createPage({
            path: utils.prefixBlog(post.node.fields.slug),
            component: blogPost,
            context: {
                slug: post.node.fields.slug,
                previous,
                next,
            },
        })
    });

    resolve();
});

exports.default = createBlogPosts;