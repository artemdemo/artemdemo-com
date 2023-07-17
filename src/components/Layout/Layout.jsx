import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Container from '../Container/Container';
import Header from '../Header/Header';
import { locationProp } from './layoutProps';
import pkg from '../../services/package';

class Layout extends React.Component {
  render() {
    const { title, description, location } = this.props;
    const fullTitle =
      this.props.fullTitle !== '' ? this.props.fullTitle : title;
    return (
      <React.Fragment>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[
            { name: 'description', content: description },
            { name: 'app-version', content: pkg.version },
          ]}
          title={fullTitle}
        />
        <Header title={title} location={location} />
        <Container>{this.props.children}</Container>
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  location: locationProp,
  // `title` will be used as site name on the left of the page (part of the page content)
  title: PropTypes.string.isRequired,
  // `fullTitle` will be used in the title of the page (in browser tab)
  // If fullTitle is not provided, then `title` will be used instead
  fullTitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  metaTitle: PropTypes.string.isRequired,
};

Layout.defaultProps = {
  location: {},
  fullTitle: '',
};

export default Layout;
