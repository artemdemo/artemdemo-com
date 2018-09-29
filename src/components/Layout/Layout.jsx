import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Container from '../Container/Container';

class Layout extends React.Component {
    renderHeader() {
        const { metaTitle } = this.props;

        return (
            <h1>{metaTitle}</h1>
        )
    }

    render() {
        const { title, description } = this.props;
        return (
            <Container>
                <Helmet
                    htmlAttributes={{lang: 'en'}}
                    meta={[{name: 'description', content: description}]}
                    title={title}
                />
                {this.renderHeader()}
                {this.props.children}
            </Container>
        )
    }
}

Layout.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    metaTitle: PropTypes.string.isRequired,
};

Layout.defaultProps = {
    location: {},
};

export default Layout
