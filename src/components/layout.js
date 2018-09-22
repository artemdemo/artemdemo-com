import React from 'react';
import { Link } from 'gatsby';
import Container from './Container';

class Template extends React.Component {
    renderHeader() {
        const { location } = this.props;
        const rootPath = `${__PATH_PREFIX__}/`;

        if (location.pathname === rootPath) {
            return (
                <h1>
                    <Link to={'/'}>
                        Gatsby Starter Blog
                    </Link>
                </h1>
            )
        }

        return (
            <h3>
                <Link to={'/'}>
                    Gatsby Starter Blog
                </Link>
            </h3>
        );
    }

    render() {
        return (
            <Container>
                {this.renderHeader()}
                {this.props.children}
            </Container>
        )
    }
}

export default Template
