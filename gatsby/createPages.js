const createBlogPages = require('./pageCreators/createBlogPages').default;
const createBlogPosts = require('./pageCreators/createBlogPosts').default;
const createTagsPages = require('./pageCreators/createTagsPages').default;

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