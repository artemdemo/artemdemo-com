import React from 'react';
import { Link } from 'gatsby';

const MainMenu = () => {
    return (
        <ul>
            <li>
                <Link
                    to='/about'
                >
                    About me
                </Link>
            </li>
            <li>
                <Link
                    to='/contact'
                >
                    Contact me
                </Link>
            </li>
        </ul>
    );
};

export default MainMenu;