import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Container from '../Container/Container';
import Header from '../Header/Header';
import { locationProp } from './layoutProps';
import pkg from '../../../package.json';

class Layout extends React.Component {
    render() {
        const { title, description, location } = this.props;
        return (
            <React.Fragment>
                <Helmet
                    htmlAttributes={{lang: 'en'}}
                    meta={[
                        {name: 'description', content: description},
                        {name: 'app-version', content: pkg.version},
                    ]}
                    title={title}
                />
                <Header location={location} />
                <Container>
                    {this.props.children}
                </Container>
            </React.Fragment>
        )
    }
}

Layout.propTypes = {
    location: locationProp,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    metaTitle: PropTypes.string.isRequired,
};

Layout.defaultProps = {
    location: {},
};

export default Layout
