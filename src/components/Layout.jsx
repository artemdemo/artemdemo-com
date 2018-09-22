import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Container from './Container';

class Layout extends React.Component {
    renderHeader() {
        const { location, metaTitle } = this.props;
        const rootPath = `${__PATH_PREFIX__}/`;

        if (location.pathname === rootPath) {
            return (
                <h1>{metaTitle}</h1>
            )
        }

        return (
            <h3>
                <Link to={'/'}>
                    {metaTitle}
                </Link>
            </h3>
        );
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
