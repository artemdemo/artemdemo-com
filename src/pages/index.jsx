import { graphql } from 'gatsby';
import PostsList from '../templates/PostsList';

class BlogIndex extends PostsList {}

export default BlogIndex

// Notice, that this query should be the same as in `/templates/PostsList.jsx`
// ToDo: Find the way to keep both queries in one place
export const pageQuery = graphql`
  query IndexQuery($skip: Int!, $limit: Int!) {
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
