import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SideLinkItem, { SIDE_ITEM_DIRECTION } from './SideLinkItem';
import './BinaryPagination.css';

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
      <div className="pagination-container">
        <div
          className={classnames({
            'pagination-item': true,
            'pagination-item_left': true,
          })}
        >
          {this.renderPrev()}
        </div>
        <div
          className={classnames({
            'pagination-item': true,
            'pagination-item_right': true,
          })}
        >
          {this.renderNext()}
        </div>
      </div>
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
