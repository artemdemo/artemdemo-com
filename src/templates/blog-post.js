import React from 'react';
import { graphql } from 'gatsby';
import _get from 'lodash/get';
import Bio from '../containers/Bio';
import Layout from '../components/Layout/Layout';
import Pagination from '../components/Pagination/Pagination';

import 'prismjs/themes/prism.css';

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const siteTitle = _get(this.props, 'data.site.siteMetadata.title');
        const siteDescription = post.excerpt;
        const { previous, next } = this.props.pageContext;

        return (
            <Layout
                title={`${post.frontmatter.title} | ${siteTitle}`}
                description={siteDescription}
                metaTitle={siteTitle}
                location={this.props.location}
            >
                <h1>{post.frontmatter.title}</h1>
                <p
                    style={{
                        display: 'block',
                        marginBottom: '10px',
                    }}
                >
                    {post.frontmatter.date}
                </p>

                <div
                    dangerouslySetInnerHTML={{__html: post.html}}
                />

                <hr />

                <Bio/>

                <Pagination
                    previous={{
                        slug: _get(previous, 'fields.slug', null),
                        title: _get(previous, 'frontmatter.title', null),
                    }}
                    next={{
                        slug: _get(next, 'fields.slug', null),
                        title: _get(next, 'frontmatter.title', null),
                    }}
                />
            </Layout>
        );
    }
}

export default BlogPostTemplate;

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
