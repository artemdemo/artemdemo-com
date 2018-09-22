import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';

import Bio from '../containers/Bio';
import Layout from '../components/Layout';

import 'prismjs/themes/prism.css';

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const siteTitle = get(this.props, 'data.site.siteMetadata.title');
        const siteDescription = post.excerpt;
        const {previous, next} = this.props.pageContext;

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
                <div dangerouslySetInnerHTML={{__html: post.html}}/>
                <hr
                    style={{
                        marginBottom: '10px',
                    }}
                />
                <Bio/>

                <ul
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        listStyle: 'none',
                        padding: 0,
                    }}
                >
                    <li>
                        {
                            previous &&
                            <Link to={previous.fields.slug} rel="prev">
                                ← {previous.frontmatter.title}
                            </Link>
                        }
                    </li>
                    <li>
                        {
                            next &&
                            <Link to={next.fields.slug} rel="next">
                                {next.frontmatter.title} →
                            </Link>
                        }
                    </li>
                </ul>
            </Layout>
        )
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
