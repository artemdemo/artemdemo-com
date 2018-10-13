const _ = require('lodash');
const path = require('path');
const utils = require('../../src/services/utils');

// Path in `path.resolve` should be relative to `gatsby-node.js`
const PostsListByTag = path.resolve('./src/templates/PostsListByTag.jsx');

const paginationPath = (tag, page, totalPages) => {
    if (page === 0) {
        return utils.prefixTag(tag);
    } else if (page < 0 || page >= totalPages) {
        return ''
    }

    return utils.prefixTag(tag, page + 1);
};

// Creating Tags Pages for Blog Posts
// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/
//
const createTagsPages = (posts, createPage) => new Promise((resolve) => {
    const tagsMap = {};

    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, (edge) => {
        const edgeTags = _.get(edge, 'node.frontmatter.tags', []);
        edgeTags.forEach((tag) => {
            tagsMap[tag] ? tagsMap[tag]++ : tagsMap[tag] = 1;
        });
    });

    // Make tag pages
    Object.keys(tagsMap).forEach(tag => {
        const postsAmount = tagsMap[tag];
        const paginatedPagesCount = Math.ceil(postsAmount / utils.POSTS_PER_PAGE);

        _.times(paginatedPagesCount, (index) => {
            createPage({
                path: paginationPath(tag, index, paginatedPagesCount),
                // Set the component as normal
                //
                component: PostsListByTag,
                // Pass the following context to the component
                //
                context: {
                    tag,
                    // Skip this number of posts from the beginning
                    //
                    skip: index * utils.POSTS_PER_PAGE,
                    // How many posts to show on this paginated page
                    //
                    limit: utils.POSTS_PER_PAGE,
                }
            });
        });
    });

    resolve();
});

exports.default = createTagsPages;