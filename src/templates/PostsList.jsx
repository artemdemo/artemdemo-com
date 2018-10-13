import React from 'react';
import { graphql } from 'gatsby';
import _get from 'lodash/get';
import Layout from '../components/Layout/Layout';
import Posts from '../components/Posts/Posts';
import Pagination from '../components/Pagination/Pagination';
import * as utils from '../services/utils';

class PostsList extends React.Component {
    renderPagination(prefixer = utils.prefixBlog) {
        const totalCount = _get(this.props, 'data.allMarkdownRemark.totalCount', 0);
        const skip = _get(this.props, 'pageContext.skip', 0);
        const limit = _get(this.props, 'pageContext.limit', 0);

        return (
            <Pagination
                skip={skip}
                limit={limit}
                totalPosts={totalCount}
                prefixer={prefixer}
            />
        );
    }

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
                <Posts list={posts} />
                {this.renderPagination()}
            </Layout>
        )
    }
}

export default PostsList;

// Notice, that this query should be the same as in `/pages/index.jsx`
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
      totalCount
      edges {
        node {
          excerpt(pruneLength: 500)
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
