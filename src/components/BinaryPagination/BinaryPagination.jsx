import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SideLinkItem, { SIDE_ITEM_DIRECTION } from './SideLinkItem';

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

class BinaryPagination extends React.PureComponent {
    renderPrev() {
        const { previous } = this.props;
        if (previous && previous.slug != null) {
            const title = previous.title || previous.slug;
            return (
                <SideLinkItem
                    direction={SIDE_ITEM_DIRECTION.PREV}
                    to={previous.slug}
                    title={title}
                />
            );
        }
        return null;
    }

    renderNext() {
        const { next } = this.props;
        if (next && next.slug != null) {
            const title = next.title || next.slug;
            return (
                <SideLinkItem
                    direction={SIDE_ITEM_DIRECTION.NEXT}
                    to={next.slug}
                    title={title}
                />
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
