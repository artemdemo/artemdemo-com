import React from 'react';
import _get from 'lodash/get';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';

class TagsList extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    renderTags() {
        const tagsMap = _get(this.props, 'pageContext.tagsMap');
        console.log(tagsMap);
        return null;
    }

    render() {
        const siteTitle = _get(this.props, 'data.site.siteMetadata.title');
        const title = 'Tags List';

        return (
            <Layout
                title={`${title} | ${siteTitle}`}
                description={''}
                metaTitle={siteTitle}
                location={this.props.location}
            >
                <h1>{title}</h1>

                {this.renderTags()}
            </Layout>
        );
    }
}

export default TagsList;

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
