const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const utils = require('./src/services/utils');
const blogPost = path.resolve('./src/templates/blog-post.js');
const postsList = path.resolve('./src/templates/posts-list.js');

const paginationPath = (path, page, totalPages) => {
    if (page === 0) {
        return path
    } else if (page < 0 || page >= totalPages) {
        return ''
    } else {
        return `${path}/${page + 1}`
    }
};

exports.createPages = ({ graphql, actions }) => {
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

/**
 * Implement the Gatsby API “onCreatePage”.
 * This is called after every page is created.
 * @link https://www.gatsbyjs.org/docs/creating-and-modifying-pages/#modifying-pages-created-by-core-or-plugins
 */
exports.onCreatePage = ({ page, actions }) => {
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
                    limit: utils.POSTS_PER_PAGE,
                },
            });
            resolve();
        });
    }
};

exports.onCreateNode = ({node, actions, getNode}) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({node, getNode});
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
};
