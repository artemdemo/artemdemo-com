import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'gatsby';
import * as utils from '../../services/utils';

const PaginationNumItem = (props) => {
    const { pageNum, active } = props;
    const itemClass = classnames('page-item', {
        active
    });
    const path = pageNum > 1 ? utils.prefixBlog(`/${pageNum}`) : '/';

    return (
        <li className={itemClass}>
            <Link
                className='page-link'
                to={path}
            >
                {pageNum}
            </Link>
        </li>
    );
};

PaginationNumItem.propTypes = {
    pageNum: PropTypes.number.isRequired,
    active: PropTypes.bool,
};

PaginationNumItem.defaultProps = {
    active: false,
};

export default PaginationNumItem;