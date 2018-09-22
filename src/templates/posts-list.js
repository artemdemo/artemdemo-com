import React from 'react';
import { graphql } from 'gatsby';
import _get from 'lodash/get';
import Bio from '../containers/Bio';
import Layout from '../components/Layout/Layout';
import Posts from '../components/Posts/Posts';

class PostsList extends React.Component {
    render() {
        const siteTitle = _get(this.props, 'data.site.siteMetadata.title');
        const siteDescription = _get(this.props, 'data.site.siteMetadata.description');
        const posts = _get(this.props, 'data.allMarkdownRemark.edges');

        return (
            <Layout
                title={siteTitle}
                metaTitle={siteTitle}
                description={siteDescription}
                location={this.props.location}
            >
                <Bio />
                <Posts list={posts} />
            </Layout>
        )
    }
}

export default PostsList

export const pageQuery = graphql`
  query BlogQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
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
