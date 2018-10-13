import React from 'react';
import { graphql } from 'gatsby';
import _get from 'lodash/get';
import Layout from '../components/Layout/Layout';
import ContactForm from '../components/ContactForm/ContactForm';

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
                <h1>Contact me</h1>
                <p>
                    Hi there!
                </p>
                <p>
                    If you want to drop me a line, you're more then welcome to do so.
                    As you can see, I'm using form instead of simple email address.
                    There is some reasons for that:
                </p>
                <ul>
                    <li>
                        I don't want get more spam that I'm already receiving.
                    </li>
                    <li>
                        By using dedicated form I will have reserved copy of the email,
                        in case I removed one from my inbox by accident.
                    </li>
                    <li>
                        And finally I think it's simply faster, to the user.
                        You don't need to click on email, wait until your client will open and
                        then do exactly what you can do on this very page :)
                    </li>
                </ul>
                <ContactForm />
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
