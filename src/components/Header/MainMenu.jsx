import React from 'react';
import { Link } from 'gatsby';
import { locationProp } from '../Layout/layoutProps';

const MainMenu = () => {
    return (
        <ul>
            <li>
                <Link to='/'>
                    Blog
                </Link>
            </li>
            <li>
                <Link to='/about'>
                    About
                </Link>
            </li>
            <li>
                <Link to='/contact'>
                    Contact me
                </Link>
            </li>
        </ul>
    );
};

MainMenu.propTypes = {
    location: locationProp,
};

MainMenu.defaultProps = {
    location: {},
};

export default MainMenu;