import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import * as styles from '../../services/styles';

const TitleWrapperSty = styled.div`
    position: relative;
`;

const TitleIconSty = styled.button`
    ${styles.resetButton}

    position: absolute;
    font-size: 2rem;
    left: -2.5rem;
    transform: translate(0, 1rem);
    opacity: 0.3;
    
    &:hover {
        opacity: 1;
    }
`;

class Layout extends React.Component {
    headerClick = () => {
        console.warn('Return to main page is not implemented');
    };

    renderHeader() {
        const { metaTitle } = this.props;

        return (
            <TitleWrapperSty>
                <TitleIconSty onClick={this.headerClick}>
                    <Icon name='link' />
                </TitleIconSty>
                <p className='display-4'>{metaTitle}</p>
            </TitleWrapperSty>
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
