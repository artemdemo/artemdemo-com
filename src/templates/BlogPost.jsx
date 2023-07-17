import React from 'react';
import { graphql } from 'gatsby';
import _get from 'lodash/get';
import Layout from '../components/Layout/Layout';
import BinaryPagination from '../components/BinaryPagination/BinaryPagination';
import PostDate from '../components/PostDate/PostDate';
import PostTags from '../components/PostTags/PostTags';
import * as utils from '../services/utils';

import 'prismjs/themes/prism.css';

class BlogPost extends React.Component {
  renderPagination() {
    const { previous, next } = this.props.pageContext;

    const prevSlug = _get(previous, 'fields.slug', null);
    const nextSlug = _get(next, 'fields.slug', null);

    return (
      <BinaryPagination
        previous={{
          slug: prevSlug ? utils.prefixBlog(prevSlug) : null,
          title: _get(previous, 'frontmatter.title', null),
        }}
        next={{
          slug: nextSlug ? utils.prefixBlog(nextSlug) : null,
          title: _get(next, 'frontmatter.title', null),
        }}
      />
    );
  }

  render() {
    const siteTitle = _get(this.props, 'data.site.siteMetadata.title');
    const html = _get(this.props, 'data.markdownRemark.html', '');
    const date = _get(this.props, 'data.markdownRemark.frontmatter.date', '');
    const tags = _get(this.props, 'data.markdownRemark.frontmatter.tags', []);
    const title = _get(this.props, 'data.markdownRemark.frontmatter.title', '');
    const siteDescription = _get(this.props, 'data.markdownRemark.excerpt', '');

    return (
      <Layout
        title={siteTitle}
        fullTitle={`${title} | ${siteTitle}`}
        description={siteDescription}
        metaTitle={siteTitle}
        location={this.props.location}
      >
        <h1>{title}</h1>
        <PostDate>{date}</PostDate>
        <PostTags tags={tags} />

        <div dangerouslySetInnerHTML={{ __html: html }} />

        <hr />

        {this.renderPagination()}
      </Layout>
    );
  }
}

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`;
