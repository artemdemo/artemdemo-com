import React from 'react'
import _get from 'lodash/get';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';

class About extends React.Component {
    render() {
        const siteTitle = _get(this.props, 'data.site.siteMetadata.title');
        const siteDescription = _get(this.props, 'data.site.siteMetadata.description');

        return (
            <Layout
                title={siteTitle}
                metaTitle={siteTitle}
                description={siteDescription}
                location={this.props.location}
            >
                Written by <strong>Artem Demo</strong> who lives and works in Tel Aviv building useful things.{' '}
                <a href="https://github.com/artemdemo">
                    You should follow him on Github
                </a>
            </Layout>
        )
    }
}

export default About;

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