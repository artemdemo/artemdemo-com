const title = 'Artem Demo, web dev.';
const author = 'Artem Demo';

module.exports = {
    siteMetadata: {
        title,
        author,
        description: 'Blog about web development',
        siteUrl: 'https://artemdemo.com',
    },
    pathPrefix: '/',
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/posts`,
                name: 'posts',
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                // You can also manually mark in your markdown where to stop excerpting.
                // Any file that does not have the given `excerpt_separator` will fall back to the default pruning method.
                // @link https://using-remark.gatsbyjs.org/excerpts/
                excerpt_separator: '<!-- end -->',
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants',
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-38910005-10',
            },
        },
        `gatsby-plugin-feed`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: title,
                short_name: author,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                // icon: `src/assets/gatsby-icon.png`,
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
    ],
};
