import React from 'react';
import { Link } from 'gatsby';
import Container from './Container';

class Template extends React.Component {
    render() {
        const { location, children } = this.props;
        const rootPath = `${__PATH_PREFIX__}/`;
        let header;

        if (location.pathname === rootPath) {
            header = (
                <h1
                    style={{
                        marginBottom: '10px',
                        marginTop: 0,
                    }}
                >
                    <Link
                        style={{
                            boxShadow: 'none',
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                        to={'/'}
                    >
                        Gatsby Starter Blog
                    </Link>
                </h1>
            )
        } else {
            header = (
                <h3
                    style={{
                        fontFamily: 'Montserrat, sans-serif',
                        marginTop: 0,
                    }}
                >
                    <Link
                        style={{
                            boxShadow: 'none',
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                        to={'/'}
                    >
                        Gatsby Starter Blog
                    </Link>
                </h3>
            )
        }
        return (
            <Container>
                {header}
                {children}
            </Container>
        )
    }
}

export default Template
