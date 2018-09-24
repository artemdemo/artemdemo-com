import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

class BinaryPagination extends React.PureComponent {
    renderPrev() {
        const { previous } = this.props;
        if (previous && previous.slug != null) {
            const title = previous.title || previous.slug;
            return (
                <li>
                    <Link to={previous.slug} rel="prev">
                        ← {title}
                    </Link>
                </li>
            );
        }
        return null;
    }

    renderNext() {
        const { next } = this.props;
        if (next && next.slug != null) {
            const title = next.title || next.slug;
            return (
                <li>
                    <Link to={next.slug} rel="next">
                        {title} →
                    </Link>
                </li>
            );
        }
        return null;
    }

    render() {
        return (
            <ul
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    listStyle: 'none',
                    padding: 0,
                }}
            >
                {this.renderPrev()}
                {this.renderNext()}
            </ul>
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