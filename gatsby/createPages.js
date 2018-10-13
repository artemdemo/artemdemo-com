const _ = require('lodash');
const path = require('path');
const utils = require('../src/services/utils');

// Path in `path.resolve` should be relative to `gatsby-node.js`
const blogPost = path.resolve('./src/templates/BlogPost.jsx');
const postsList = path.resolve('./src/templates/PostsList.jsx');
const PostsListByTag = path.resolve('./src/templates/PostsListByTag.jsx');

const paginationPath = (page, totalPages) => {
    if (page === 0) {
        return utils.prefixBlog();
    } else if (page < 0 || page >= totalPages) {
        return ''
    }

    return utils.prefixBlog(page + 1);
};

const createBlogPages = (posts, createPage) => new Promise((resolve) => {
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
            path: paginationPath(index, paginatedPagesCount),
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
            }
        });
    });

    resolve();
});

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

const createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    let posts = [];

    return new Promise((resolve, reject) => {
        // Now we're seeding GraphQL “database” that we can then query against via page-level GraphQL queries.
        //
        graphql(
            `
              {
                allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 2000) {
                  edges {
                    node {
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        tags
                      }
                    }
                  }
                }
              }
            `
        )
            .then((result) => {
                if (result.errors) {
                    console.log(result.errors);
                    reject(result.errors);
                }

                posts = result.data.allMarkdownRemark.edges;
            })
            .then(() => {
                return createBlogPages(posts, createPage);
            })
            .then(() => {
                return createBlogPosts(posts, createPage);
            })
            .then(() => {
                return createTagsPages(posts, createPage, graphql);
            })
            .then(() => {
                resolve();
            });
    })
};

exports.default = createPages;