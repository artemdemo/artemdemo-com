const _ = require('lodash');
const path = require('path');

// Path in `path.resolve` should be relative to `gatsby-node.js`
const PostsListByTag = path.resolve('./src/templates/PostsListByTag.jsx');

// Creating Tags Pages for Blog Posts
// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/
//
const createTagsPages = (posts, createPage) => new Promise((resolve) => {
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, (edge) => {
        tags = tags.concat(_.get(edge, 'node.frontmatter.tags', []));
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach(tag => {
        createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: PostsListByTag,
            context: {
                tag,
            },
        })
    });

    resolve();
});

exports.default = createTagsPages;