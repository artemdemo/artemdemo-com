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

const MainMenu = () => {
    return (
        <MainMenuSty>
            <MainMenuItemSty>
                <Link className='main-menu-link' to='/'>
                    Blog
                </Link>
            </MainMenuItemSty>
            <MainMenuItemSty active>
                <Link className='main-menu-link' to='/about'>
                    About
                </Link>
            </MainMenuItemSty>
            <MainMenuItemSty>
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