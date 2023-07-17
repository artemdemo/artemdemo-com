const _ = require('lodash');
const path = require('path');
const utils = require('../../src/services/utils');

// Path in `path.resolve` should be relative to `gatsby-node.js`
const PostsList = path.resolve('./src/pages/index.jsx');

const paginationPath = (page, totalPages) => {
  if (page === 0) {
    return utils.prefixBlog();
  } else if (page < 0 || page >= totalPages) {
    return '';
  }

  return utils.prefixBlog(page + 1);
};

const createBlogPages = (posts, createPage) =>
  new Promise((resolve) => {
    const postsAmount = posts.length;
    // How many paginated pages do we need?
    //
    const paginatedPagesCount = Math.ceil(
      postsAmount / utils.getPostsPerPageAmount(),
    );

    // Create each paginated page
    //
    _.times(paginatedPagesCount, (index) => {
      createPage({
        // Calculate the path for this page like `/blog`, `/blog/2`
        //
        path: paginationPath(index, paginatedPagesCount),
        // Set the component as normal
        //
        component: PostsList,
        // Pass the following context to the component
        //
        context: {
          // Skip this number of posts from the beginning
          //
          skip: index * utils.getPostsPerPageAmount(),
          // How many posts to show on this paginated page
          //
          limit: utils.getPostsPerPageAmount(),
        },
      });
    });

    resolve();
  });

exports.default = createBlogPages;
