import React from 'react';
import { graphql } from 'gatsby';
import _get from 'lodash/get';
import Layout from '../components/Layout/Layout';

class Contact extends React.PureComponent {
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
                <h1>Contacts</h1>
                <p>
                    In order to contact me, please fill form below and I will get back to you.
                </p>
                <iframe
                    src='https://docs.google.com/forms/d/e/1FAIpQLSfbcq5MKljpEZg27bOOj5OqdBP4ARBdikUs4G2zuqIgBYE4KA/viewform?embedded=true'
                    width='640' height='822' frameBorder='0' marginHeight='0' marginWidth='0'>Loading...
                </iframe>
            </Layout>
        );
    }
}

export default Contact;

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
