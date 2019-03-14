import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import './BinaryPagination.css';

const PaginationContainerSty = styled.div`
    &::after {
        content: '';
        display: table;
        clear: both;
    }
    
    @media (max-width: 768px) {
        text-align: center;
    }
`;

const PaginationItemSty = styled.div`
    ${props => props.left && `
        float: left;    
    `}
    ${props => props.right && `
        float: right;
    `}
    @media (max-width: 768px) {
        float: initial;
        display: inline-block;
        width: 51%;
    }
`;

const LinkTextSty = styled.span`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const LinkArrowSty = styled.span`
    flex-grow: 1;
    :first-child {
        padding-right: 5px;
    }
    :last-child {
        padding-left: 5px;
    }
`;

class BinaryPagination extends React.PureComponent {
    renderPrev() {
        const { previous } = this.props;
        if (previous && previous.slug != null) {
            const title = previous.title || previous.slug;
            return (
                <ul className='pagination binary-pagination'>
                    <li className='page-item'>
                        <Link
                            className='page-link binary-pagination-link'
                            to={previous.slug}
                            rel='prev'
                        >
                            <LinkArrowSty>
                                ←
                            </LinkArrowSty>
                            <LinkTextSty>
                                {title}
                            </LinkTextSty>
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
                <ul className='pagination binary-pagination'>
                    <li className='page-item'>
                        <Link
                            className='page-link binary-pagination-link'
                            to={next.slug}
                            rel='next'
                        >
                            <LinkTextSty>
                                {title}
                            </LinkTextSty>
                            <LinkArrowSty>
                                →
                            </LinkArrowSty>
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
                <PaginationItemSty left>
                    {this.renderPrev()}
                </PaginationItemSty>
                <PaginationItemSty right>
                    {this.renderNext()}
                </PaginationItemSty>
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