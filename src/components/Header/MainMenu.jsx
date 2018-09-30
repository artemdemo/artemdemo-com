import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { locationProp } from '../Layout/layoutProps';
import * as styles from '../../services/styles';

import './MainMenu.css';

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

const MainMenu = (props) => {
    const { location } = props;
    return (
        <MainMenuSty>
            <MainMenuItemSty active={location.pathname === '/' || location.pathname.startsWith('/blog')}>
                <Link className='main-menu-link' to='/'>
                    Blog
                </Link>
            </MainMenuItemSty>
            <MainMenuItemSty active={location.pathname.startsWith('/about')}>
                <Link className='main-menu-link' to='/about'>
                    About
                </Link>
            </MainMenuItemSty>
            <MainMenuItemSty active={location.pathname.startsWith('/contact')}>
                <Link className='main-menu-link' to='/contact'>
                    Contact me
                </Link>
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