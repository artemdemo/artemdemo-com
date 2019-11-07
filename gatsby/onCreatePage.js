const utils = require('../src/services/utils');

/**
 * Implement the Gatsby API “onCreatePage”.
 * This is called after every page is created.
 * @link https://www.gatsbyjs.org/docs/creating-and-modifying-pages/#modifying-pages-created-by-core-or-plugins
 */
const onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions;
    // Provide context to the index page
    //
    if (page.path === '/') {
        return new Promise(resolve => {
            deletePage({
                ...page,
            });
            createPage({
                ...page,
                context: {
                    skip: 0,
                    limit: utils.getPostsPerPageAmount(),
                },
            });
            resolve();
        });
    }
};

exports.default = onCreatePage;