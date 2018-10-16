import React from 'react';
import { graphql } from 'gatsby';
import ContactForm from '../components/ContactForm/ContactForm';
import BasePage from './BasePage/BasePage';

class Contact extends BasePage {
    constructor(props) {
        super(props);

        // Here I'm using inline loader for webpack.
        // Since I don't have access to original webpack configuration,
        // it's the only way to use specific loader
        // @docs https://webpack.js.org/concepts/loaders/#inline
        //
        this.contentMd = require('raw-loader?modules!./md/contact.md');
    }

    renderAfterContent() {
        return (
            <ContactForm />
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
