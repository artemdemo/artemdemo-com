import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'gatsby';
import * as utils from '../../services/utils';
import PaginationNumItem from './PaginationNumItem';

class Pagination extends React.PureComponent {
    prefixPath(path) {
        const { prefixer } = this.props;
        return prefixer ? prefixer(path) : path;
    }

    renderPrev() {
        const { skip, totalPosts, limit } = this.props;
        if (totalPosts === 0) {
            return null;
        }
        const itemClass = classnames('page-item', {
            disabled: skip === 0
        });
        const prevPageNumber = Math.floor(skip / limit);
        const prevPath = prevPageNumber > 1 ? this.prefixPath(`/${prevPageNumber}`) : this.prefixPath();
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
        const { skip, totalPosts, limit} = this.props;
        if (totalPosts === 0) {
            return null;
        }
        const pagesAmount = Math.ceil(totalPosts / limit);
        const nextPageNumber = Math.floor(skip / limit) + 2;
        const itemClass = classnames('page-item', {
            disabled: nextPageNumber > pagesAmount,
        });
        return (
            <li className={itemClass}>
                <Link
                    className='page-link'
                    to={this.prefixPath(`/${nextPageNumber}`)}
                >
                    Next
                </Link>
            </li>
        );
    }

    renderNumPages() {
        const { totalPosts, limit, skip, prefixer } = this.props;
        if (totalPosts === 0) {
            return null;
        }
        const pagesAmount = Math.ceil(totalPosts / limit);
        const currentNumber = Math.floor(skip / limit) + 1;
        const iterArr = Array.from(Array(pagesAmount));
        return (
            <React.Fragment>
                {iterArr.map((_, index) => (
                    <PaginationNumItem
                        pageNum={index + 1}
                        active={currentNumber === index + 1}
                        prefixer={prefixer}
                        key={`pagination-item-${index}`}
                    />
                ))}
            </React.Fragment>
        );
    }

    render() {
        const { totalPosts } = this.props;

        if (totalPosts <= utils.POSTS_PER_PAGE) {
            return null;
        }

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
    prefixer: PropTypes.func,
};

Pagination.defaultProps = {
    skip: 0,
    limit: 0,
    totalPosts: 0,
    prefixer: null,
};

export default Pagination;