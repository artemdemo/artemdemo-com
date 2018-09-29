import React from 'react';
import { graphql } from 'gatsby';
import _get from 'lodash/get';
import Layout from '../components/Layout/Layout';
import BinaryPagination from '../components/Pagination/BinaryPagination';
import PostDate from '../components/PostDate/PostDate';
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
        const post = this.props.data.markdownRemark;
        const siteTitle = _get(this.props, 'data.site.siteMetadata.title');
        const siteDescription = post.excerpt;

        return (
            <Layout
                title={`${post.frontmatter.title} | ${siteTitle}`}
                description={siteDescription}
                metaTitle={siteTitle}
                location={this.props.location}
            >
                <h1>{post.frontmatter.title}</h1>
                <PostDate>
                    {post.frontmatter.date}
                </PostDate>

                <div
                    dangerouslySetInnerHTML={{__html: post.html}}
                />

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
      }
    }
  }
`;
