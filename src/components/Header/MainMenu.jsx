import React from 'react';
import { Link } from 'gatsby';
import _get from 'lodash/get';
import classnames from 'classnames';
import { locationProp } from '../Layout/layoutProps';
import './MainMenu.css';

const MainMenu = (props) => {
  const pathname = _get(props, 'location.pathname', '');
  return (
    <div className="main-menu">
      <div
        className={classnames({
          'main-menu_item': true,
          'main-menu_item__active':
            pathname === '/' || pathname.startsWith('/blog'),
        })}
      >
        <Link className="main-menu_link" to="/">
          Blog
        </Link>
      </div>
      <div
        className={classnames({
          'main-menu_item': true,
          'main-menu_item__active': pathname.startsWith('/about'),
        })}
      >
        <Link className="main-menu_link" to="/about">
          About
        </Link>
      </div>
      <div
        className={classnames({
          'main-menu_item': true,
          'main-menu_item__active': pathname.startsWith('/contact'),
        })}
      >
        <Link className="main-menu_link" to="/contact">
          Contact me
        </Link>
      </div>
    </div>
  );
};

MainMenu.propTypes = {
  location: locationProp,
};

MainMenu.defaultProps = {
  location: {},
};

export default MainMenu;
