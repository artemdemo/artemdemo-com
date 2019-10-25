import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import _get from 'lodash/get';
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
    const pathname = _get(props, 'location.pathname', '');
    return (
        <MainMenuSty>
            <MainMenuItemSty active={pathname === '/' || pathname.startsWith('/blog')}>
                <MainMenuLinkSty to='/'>
                    Blog
                </MainMenuLinkSty>
            </MainMenuItemSty>
            <MainMenuItemSty active={pathname.startsWith('/about')}>
                <MainMenuLinkSty to='/about'>
                    About
                </MainMenuLinkSty>
            </MainMenuItemSty>
            <MainMenuItemSty active={pathname.startsWith('/contact')}>
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
