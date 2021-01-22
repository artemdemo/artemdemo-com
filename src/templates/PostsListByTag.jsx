import React from 'react';
import _get from 'lodash/get';
import {graphql} from 'gatsby';
import PostsList from '../pages/PostsList/PostsList';
import * as utils from '../services/utils';

class PostsListByTag extends PostsList {
  constructor(props) {
    super(props);
  }

  renderBeforeContent() {
    const tagName = _get(this.props, 'pageContext.tagName', '')
    return (
      <p>
        <strong>Tag:</strong>
        &nbsp;&nbsp;{tagName}
      </p>
    );
  }

  renderPagination() {
    const tagName = _get(this.props, 'pageContext.tagName', '');
    return super.renderPagination(utils.prefixTag.bind(null, tagName))
  }
}

export default PostsListByTag;

// Notice, that this query should be the same as in `/templates/PostsList.jsx`
// ToDo: Find the way to keep both queries in one place
export const pageQuery = graphql`
  query($tagName: String, $skip: Int!, $limit: Int!) {
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
      filter: { frontmatter: { tags: { in: [$tagName] } } }
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
