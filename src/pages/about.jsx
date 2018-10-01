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
                <p>
                    Hi guys,
                </p>
                <p>
                    My name is Artem and I'm Frontend developer.
                    I leave and work in Tel Aviv, while truing to build useful things.
                    I decided to start this blog for number of reasons:
                </p>
                <p>
                    First, I really believe in knowledge sharing.
                    This is what continue to improve the web industry and each developer can only benefit from that
                    (the one who shares and the one who can find useful information on the internet).
                </p>
                <p>
                    Second, is better understanding of concepts.
                    You truly start to understand something, only when you start to teach it.
                    I know, that for some it could look not intuitive, but it's true.
                    By explaining complicated concepts we start to understand them better by ourselves.
                </p>
                <p>
                    If you're interested in my open source projects, or code examples, you can checkout&nbsp;
                    <a href="https://github.com/artemdemo" target='_blank'>my github account</a>
                </p>
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