import React from 'react';
import { Link, graphql } from 'gatsby';
import _get from 'lodash/get';
import Helmet from 'react-helmet';

import Bio from '../containers/Bio';
import Layout from '../components/layout';

class BlogIndex extends React.Component {
    render() {
        const siteTitle = _get(this.props, 'data.site.siteMetadata.title');
        const siteDescription = _get(this.props, 'data.site.siteMetadata.description');
        const posts = _get(this.props, 'data.allMarkdownRemark.edges');

        return (
            <Layout location={this.props.location}>
                <Helmet
                    htmlAttributes={{lang: 'en'}}
                    meta={[{name: 'description', content: siteDescription}]}
                    title={siteTitle}
                />
                <Bio />
                {posts.map((post) => {
                    const { node } = post;
                    const title = _get(node, 'frontmatter.title') || node.fields.slug;
                    return (
                        <div key={node.fields.slug}>
                            <h3>
                                <Link to={node.fields.slug}>
                                    {title}
                                </Link>
                            </h3>
                            <small>{node.frontmatter.date}</small>
                            <p dangerouslySetInnerHTML={{__html: node.excerpt}}/>
                        </div>
                    )
                })}
            </Layout>
        )
    }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
