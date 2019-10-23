import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

export const SIDE_ITEM_DIRECTION = {
    'PREV': 'prev',
    'NEXT': 'next',
};

const LinkText = styled.span`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const LinkArrow = styled.span`
    flex-grow: 1;
    :first-child {
        padding-right: 5px;
    }
    :last-child {
        padding-left: 5px;
    }
`;

const SideLinkItem = (props) => {
    const { direction, title, to } = props;
    const renderArrow = () => (
        <LinkArrow>
            {direction === SIDE_ITEM_DIRECTION.PREV ? '←' : '→'}
        </LinkArrow>
    );
    const renderTitle = () => (
        <LinkText>
            {title}
        </LinkText>
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
                        <React.Fragment>
                            {renderArrow()}
                            {renderTitle()}
                        </React.Fragment> :
                        <React.Fragment>
                            {renderTitle()}
                            {renderArrow()}
                        </React.Fragment>
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
