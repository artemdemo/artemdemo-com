import _get from 'lodash/get';
import { graphql } from 'gatsby';
import PostsList from './PostsList';
import * as utils from '../services/utils';

class PostsListByTag extends PostsList {
    constructor(props) {
        super(props);
    }

    renderPagination() {
        const tag = _get(this.props, 'pageContext.tag', '');
        return super.renderPagination(utils.prefixTag.bind(null, tag))
    }
}

export default PostsListByTag;

// Notice, that this query should be the same as in `/templates/PostsList.jsx`
// ToDo: Find the way to keep both queries in one place
export const pageQuery = graphql`
  query($tag: String, $skip: Int!, $limit: Int!) {
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
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
