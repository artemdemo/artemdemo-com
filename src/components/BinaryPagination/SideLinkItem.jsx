import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import './SideLinkItem.css';

export const SIDE_ITEM_DIRECTION = {
  'PREV': 'prev',
  'NEXT': 'next',
};

const SideLinkItem = (props) => {
  const {direction, title, to} = props;
  const renderArrow = () => (
    <span className='side-link-arrow'>
            {direction === SIDE_ITEM_DIRECTION.PREV ? '←' : '→'}
        </span>
  );
  const renderTitle = () => (
    <span className='side-link-text'>
      {title}
    </span>
  );
  return (
    <ul className='pagination binary-pagination'>
      <li className='page-item'>
        <Link
          className='page-link binary-pagination-link'
          to={to}
          rel={direction}
        >
          {
            direction === SIDE_ITEM_DIRECTION.PREV ?
              <>
                {renderArrow()}
                {renderTitle()}
              </> :
              <>
                {renderTitle()}
                {renderArrow()}
              </>
          }
        </Link>
      </li>
    </ul>
  );
};

SideLinkItem.propTypes = {
  direction: PropTypes.oneOf([
    SIDE_ITEM_DIRECTION.PREV,
    SIDE_ITEM_DIRECTION.NEXT,
  ]).isRequired,
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SideLinkItem;
