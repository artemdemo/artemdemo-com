import { graphql } from 'gatsby';
import PostsList from './PostsList';

class PostsListByTag extends PostsList {}

export default PostsListByTag;

// Notice, that this query should be the same as in `/templates/PostsList.jsx`
// ToDo: Find the way to keep both queries in one place
export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 50
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
