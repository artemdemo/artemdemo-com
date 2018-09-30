import React from 'react'
import MainMenu from './MainMenu';
import { locationProp } from '../Layout/layoutProps';

const Header = (props) => {
    const { location } = props;
    return (
        <div>
            <div>
                Artem Demo, frontend dev.
            </div>
            <div>
                <MainMenu location={location} />
            </div>
        </div>
    );
};

Header.propTypes = {
    location: locationProp,
};

Header.defaultProps = {
    location: {},
};

export default Header;