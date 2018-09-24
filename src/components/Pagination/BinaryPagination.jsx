import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const PaginationContainerSty = styled.div`
    &::after {
        content: '';
        display: table;
        clear: both;
    }
`;

const PaginationLeftSty = styled.div`
    float: left;
`;

const PaginationRightSty = styled.div`
    float: right;
`;

class BinaryPagination extends React.PureComponent {
    renderPrev() {
        const { previous } = this.props;
        if (previous && previous.slug != null) {
            const title = previous.title || previous.slug;
            return (
                <ul className="pagination">
                    <li className="page-item">
                        <Link
                            className="page-link"
                            to={previous.slug}
                            rel="prev"
                        >
                            ← {title}
                        </Link>
                    </li>
                </ul>
            );
        }
        return null;
    }

    renderNext() {
        const { next } = this.props;
        if (next && next.slug != null) {
            const title = next.title || next.slug;
            return (
                <ul className="pagination">
                    <li className="page-item">
                        <Link
                            className="page-link"
                            to={next.slug}
                            rel="next"
                        >
                            {title} →
                        </Link>
                    </li>
                </ul>
            );
        }
        return null;
    }

    render() {
        return (
            <PaginationContainerSty>
                <PaginationLeftSty>
                    {this.renderPrev()}
                </PaginationLeftSty>
                <PaginationRightSty>
                    {this.renderNext()}
                </PaginationRightSty>
            </PaginationContainerSty>
        );
    }
}

BinaryPagination.propTypes = {
    previous: PropTypes.shape({
        slug: PropTypes.string,
        title: PropTypes.string,
    }),
    next: PropTypes.shape({
        slug: PropTypes.string,
        title: PropTypes.string,
    }),
};

BinaryPagination.defaultProps = {
    previous: null,
    next: null,
};

export default BinaryPagination;