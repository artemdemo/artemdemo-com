import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import MainMenu from './MainMenu';
import Container from '../Container/Container';
import { locationProp } from '../Layout/layoutProps';
import UpdateReadyInfo from '../UpdateReadyInfo/UpdateReadyInfo';
import * as styles from '../../services/styles';

const HeaderWrapper = styled.div`
    margin-bottom: 20px;
`;

const HeaderContainer = styled.div`
    padding: 15px 0;
    @media (max-width: 575.98px) {
        text-align: center;
    }
`;

const HeaderItem = styled.div`
    display: inline-block;
    vertical-align: middle;
    ${props => props.logo && `
        width: 50%;
        min-width: 280px;
        font-size: 1.5rem;
        font-weight: 300;
        @media (max-width: 575.98px) {
            width: auto;
            margin-bottom: 10px;
        }
    `}
    ${props => props.menu && `
        ${styles.clearFix}
        width: 50%;
        @media (max-width: 768px) {
            width: auto;
        }
    `}
`;

const HeaderItemMenu = styled.div`
    float: right;
`;

const HeaderSeparator = styled.div`
    border-bottom: 1px solid #dee2e6;
    max-width: 90%;
    margin: 0 auto;
`;

const HeaderLogoLink = styled(Link)`
    color: initial;
    &:hover {
        text-decoration: none;
    }
`;

const Header = (props) => {
    const { location, title } = props;
    return (
        <HeaderWrapper>
            <Container>
                <HeaderContainer>
                    <HeaderItem logo>
                        <HeaderLogoLink to='/'>
                            {title}
                        </HeaderLogoLink>
                    </HeaderItem>
                    <HeaderItem menu>
                        <HeaderItemMenu>
                            <MainMenu location={location} />
                        </HeaderItemMenu>
                    </HeaderItem>
                </HeaderContainer>
                <HeaderSeparator />
                <UpdateReadyInfo />
            </Container>
        </HeaderWrapper>
    );
};

Header.propTypes = {
    location: locationProp,
    title: PropTypes.string,
};

Header.defaultProps = {
    location: {},
    title: '',
};

export default Header;
