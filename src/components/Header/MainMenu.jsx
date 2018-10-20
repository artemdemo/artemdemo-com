import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { locationProp } from '../Layout/layoutProps';
import * as styles from '../../services/styles';

const MainMenuSty = styled.ul`
    ${styles.clearFix}
    ${styles.resetUl}
`;

const MainMenuItemSty = styled.li`
    float: left;
    padding: 0 10px;
    ${props => props.active && `
        border-bottom: 2px solid #96c9ff;
    `}
`;

const MainMenuLinkSty = styled(Link)`
    &:hover {
        text-decoration: none;
    }
`;

const MainMenu = (props) => {
    const { location } = props;
    return (
        <MainMenuSty>
            <MainMenuItemSty active={location.pathname === '/' || location.pathname.startsWith('/blog')}>
                <MainMenuLinkSty to='/'>
                    Blog
                </MainMenuLinkSty>
            </MainMenuItemSty>
            <MainMenuItemSty active={location.pathname.startsWith('/about')}>
                <MainMenuLinkSty to='/about'>
                    About
                </MainMenuLinkSty>
            </MainMenuItemSty>
            <MainMenuItemSty active={location.pathname.startsWith('/contact')}>
                <MainMenuLinkSty to='/contact'>
                    Contact me
                </MainMenuLinkSty>
            </MainMenuItemSty>
        </MainMenuSty>
    );
};

MainMenu.propTypes = {
    location: locationProp,
};

MainMenu.defaultProps = {
    location: {},
};

export default MainMenu;