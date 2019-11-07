const _ = require('lodash');
const path = require('path');
const utils = require('../../src/services/utils');

// Path in `path.resolve` should be relative to `gatsby-node.js`
const PostsListByTag = path.resolve('./src/templates/PostsListByTag.jsx');
const TagsList = path.resolve('./src/templates/TagsList.jsx');

const paginationPath = (tag, page, totalPages) => {
    if (page === 0) {
        return utils.prefixTag(utils.normalizeTag(tag));
    } else if (page < 0 || page >= totalPages) {
        return ''
    }

    return utils.prefixTag(utils.normalizeTag(tag), page + 1);
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
            const tagSlug = utils.normalizeTag(tag);
            tagsMap[tagSlug] ?
                tagsMap[tagSlug].amount++ :
                tagsMap[tagSlug] = {
                    name: tag,
                    amount: 1,
                };
        });
    });

    // Make tag pages
    Object.keys(tagsMap).forEach(tagSlug => {
        const tag = tagsMap[tagSlug];
        const paginatedPagesCount = Math.ceil(tag.amount / utils.getPostsPerPageAmount());

        _.times(paginatedPagesCount, (index) => {
            createPage({
                path: paginationPath(tagSlug, index, paginatedPagesCount),
                // Set the component as normal
                //
                component: PostsListByTag,
                // Pass the following context to the component
                //
                context: {
                    tagName: tag.name,
                    // Skip this number of posts from the beginning
                    //
                    skip: index * utils.getPostsPerPageAmount(),
                    // How many posts to show on this paginated page
                    //
                    limit: utils.getPostsPerPageAmount(),
                }
            });
        });
    });

    createPage({
        path: '/tags',
        // Set the component as normal
        //
        component: TagsList,
        // Pass the following context to the component
        //
        context: {
            tagsMap,
        }
    });

    resolve();
});

exports.default = createTagsPages;