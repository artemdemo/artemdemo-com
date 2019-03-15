import React from 'react';
import _get from 'lodash/get';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';

const TagLinkSty = styled(Link)`
    display: inline-block;
    margin-right: 5px;
`;

class TagsList extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    renderTags() {
        const tagsMap = _get(this.props, 'pageContext.tagsMap');
        return Object.keys(tagsMap).map(normTag => (
            <TagLinkSty
                to={`/tags/${normTag}`}
                key={`tags-${normTag}`}
            >
                {tagsMap[normTag].name} ({tagsMap[normTag].amount})
            </TagLinkSty>
        ));
    }

    render() {
        const siteTitle = _get(this.props, 'data.site.siteMetadata.title');
        const siteDescription = _get(this.props, 'data.site.siteMetadata.description');
        const title = 'Tags List';

        return (
            <Layout
                title={`${title} | ${siteTitle}`}
                description={siteDescription}
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