import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Container from '../Container/Container';
import Header from '../Header/Header';
import { locationProp } from './layoutProps';

class Layout extends React.Component {
    render() {
        const { title, description, location } = this.props;
        return (
            <Container>
                <Helmet
                    htmlAttributes={{lang: 'en'}}
                    meta={[{name: 'description', content: description}]}
                    title={title}
                />
                <Header location={location} />
                {this.props.children}
            </Container>
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
