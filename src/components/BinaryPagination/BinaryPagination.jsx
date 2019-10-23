import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import './BinaryPagination.css';

const PaginationContainer = styled.div`
    &::after {
        content: '';
        display: table;
        clear: both;
    }
    
    @media (max-width: 768px) {
        text-align: center;
    }
`;

const PaginationItem = styled.div`
    ${props => props.left && `
        float: left;    
    `};
    ${props => props.right && `
        float: right;
    `};
    @media (max-width: 768px) {
        float: initial;
        display: inline-block;
        width: 51%;
    }
`;

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
                            <LinkArrow>
                                ←
                            </LinkArrow>
                            <LinkText>
                                {title}
                            </LinkText>
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
                            <LinkText>
                                {title}
                            </LinkText>
                            <LinkArrow>
                                →
                            </LinkArrow>
                        </Link>
                    </li>
                </ul>
            );
        }
        return null;
    }

    render() {
        return (
            <PaginationContainer>
                <PaginationItem left>
                    {this.renderPrev()}
                </PaginationItem>
                <PaginationItem right>
                    {this.renderNext()}
                </PaginationItem>
            </PaginationContainer>
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
