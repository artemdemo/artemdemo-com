import { graphql } from 'gatsby';
import BasePage from './BasePage/BasePage';
import { isTestEnv } from '../services/testEnv';

class NotFoundPage extends BasePage {
  constructor(props) {
    super(props);

    // Here I'm using inline loader for webpack.
    // Since I don't have access to original webpack configuration,
    // it's the only way to use specific loader
    // @docs https://webpack.js.org/concepts/loaders/#inline
    //
    this.contentMd = isTestEnv
      ? null
      : require('raw-loader!./md/404.md').default;
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
