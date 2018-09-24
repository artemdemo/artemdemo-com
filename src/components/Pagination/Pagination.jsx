import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'gatsby';
import * as utils from '../../services/utils';
import PaginationNumItem from './PaginationNumItem';

class Pagination extends React.PureComponent {
    renderPrev() {
        const { skip, totalPosts, limit } = this.props;
        if (totalPosts === 0) {
            return null;
        }
        const itemClass = classnames('page-item', {
            disabled: skip === 0
        });
        const prevPageNumber = Math.floor(skip / limit);
        const prevPath = prevPageNumber > 1 ? utils.prefixBlog(`/${prevPageNumber}`) : utils.prefixBlog();
        return (
            <li className={itemClass}>
                <Link
                    className='page-link'
                    to={prevPath}
                >
                    Previous
                </Link>
            </li>
        );
    }

    renderNext() {
        const { skip, totalPosts, limit } = this.props;
        if (totalPosts === 0) {
            return null;
        }
        const pagesAmount = Math.floor(totalPosts / limit);
        const nextPageNumber = Math.floor(skip / limit) + 2;
        const itemClass = classnames('page-item', {
            disabled: nextPageNumber > pagesAmount,
        });
        return (
            <li className={itemClass}>
                <Link
                    className='page-link'
                    to={utils.prefixBlog(`/${nextPageNumber}`)}
                >
                    Next
                </Link>
            </li>
        );
    }

    renderNumPages() {
        const { totalPosts, limit, skip } = this.props;
        if (totalPosts === 0) {
            return null;
        }
        const pagesAmount = Math.floor(totalPosts / limit);
        const currentNumber = Math.floor(skip / limit) + 1;
        const iterArr = Array.from(Array(pagesAmount));
        return (
            <React.Fragment>
                {iterArr.map((_, index) => (
                    <PaginationNumItem
                        pageNum={index + 1}
                        active={currentNumber === index + 1}
                        key={`pagination-item-${index}`}
                    />
                ))}
            </React.Fragment>
        );
    }

    render() {
        return (
            <ul className='pagination justify-content-center'>
                {this.renderPrev()}
                {this.renderNumPages()}
                {this.renderNext()}
            </ul>
        );
    }
}

Pagination.propTypes = {
    skip: PropTypes.number,
    limit: PropTypes.number,
    totalPosts: PropTypes.number,
};

Pagination.defaultProps = {
    skip: 0,
    limit: 0,
    totalPosts: 0,
};

export default Pagination;