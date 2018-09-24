const _ = require('lodash');
const path = require('path');
const utils = require('../src/services/utils');

// Path in `path.resolve` should be relative to `gatsby-node.js`
const blogPost = path.resolve('./src/templates/BlogPost.jsx');
const postsList = path.resolve('./src/templates/PostsList.jsx');

const paginationPath = (path, page, totalPages) => {
    if (page === 0) {
        return path
    } else if (page < 0 || page >= totalPages) {
        return ''
    } else {
        return `${path}/${page + 1}`
    }
};

const createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        resolve(
            // Now we're seeding GraphQL “database” that we can then query against via page-level GraphQL queries.
            graphql(
                `
              {
                allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
                  edges {
                    node {
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                      }
                    }
                  }
                }
              }
            `
            ).then((result) => {
                if (result.errors) {
                    console.log(result.errors);
                    reject(result.errors);
                }

                const posts = result.data.allMarkdownRemark.edges;

                const postsAmount = posts.length;
                // How many paginated pages do we need?
                //
                const paginatedPagesCount = Math.ceil(postsAmount / utils.POSTS_PER_PAGE);

                // Create each paginated page
                //
                _.times(paginatedPagesCount, (index) => {
                    createPage({
                        // Calculate the path for this page like `/blog`, `/blog/2`
                        //
                        path: paginationPath('/blog', index, paginatedPagesCount),
                        // Set the component as normal
                        //
                        component: postsList,
                        // Pass the following context to the component
                        //
                        context: {
                            // Skip this number of posts from the beginning
                            //
                            skip: index * utils.POSTS_PER_PAGE,
                            // How many posts to show on this paginated page
                            //
                            limit: utils.POSTS_PER_PAGE,
                            // How many paginated pages there are in total
                            //
                            paginatedPagesCount,
                            // The path to the previous paginated page (or an empty string)
                            //
                            prevPath: paginationPath('/blog', index - 1, paginatedPagesCount),
                            // The path to the next paginated page (or an empty string)
                            //
                            nextPath: paginationPath('/blog', index + 1, paginatedPagesCount),
                        }
                    });
                });

                _.each(posts, (post, index) => {
                    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
                    const next = index === 0 ? null : posts[index - 1].node;

                    createPage({
                        path: `/blog${post.node.fields.slug}`,
                        component: blogPost,
                        context: {
                            slug: post.node.fields.slug,
                            previous,
                            next,
                        },
                    })
                })
            })
        )
    })
};

exports.default = createPages;