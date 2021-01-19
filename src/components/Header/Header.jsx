import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import MainMenu from './MainMenu';
import Container from '../Container/Container';
import {locationProp} from '../Layout/layoutProps';
import UpdateReadyInfo from '../UpdateReadyInfo/UpdateReadyInfo';
import './Header.css';

const Header = (props) => {
  const {location, title} = props;
  return (
    <div className='header-wrapper'>
      <Container>
        <div className='header-container'>
          <div className='header-item header-item__logo'>
            <Link className='header-logo-link' to='/'>
              {title}
            </Link>
          </div>
          <div className='header-item header-item__menu'>
            <div className='header-item-menu'>
              <MainMenu location={location}/>
            </div>
          </div>
        </div>
        <div className='header-separator' />
        <UpdateReadyInfo/>
      </Container>
    </div>
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
