import React from 'react';
import _get from 'lodash/get';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout/Layout';

class TagsList extends React.PureComponent {
  renderTags() {
    const tagsMap = _get(this.props, 'pageContext.tagsMap', {});
    return Object.keys(tagsMap)
      .map((slug) => ({
        slug,
        name: tagsMap[slug].name,
        amount: tagsMap[slug].amount,
      }))
      .sort((tagA, tagB) => tagB.amount - tagA.amount)
      .map((tag) => (
        <Link
          className="tag-link"
          to={`/tags/${tag.slug}`}
          key={`tags-${tag.slug}`}
        >
          {tag.name}
          <sup> {tag.amount}</sup>
        </Link>
      ));
  }

  render() {
    const siteTitle = _get(this.props, 'data.site.siteMetadata.title');
    const siteDescription = _get(
      this.props,
      'data.site.siteMetadata.description',
    );
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
