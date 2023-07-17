import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'gatsby';

class PaginationNumItem extends React.PureComponent {
  prefixPath(path) {
    const { prefixer } = this.props;
    return prefixer ? prefixer(path) : path;
  }

  render() {
    const { pageNum, active } = this.props;
    const itemClass = classnames('page-item', {
      active,
    });
    const path =
      pageNum > 1 ? this.prefixPath(`/${pageNum}`) : this.prefixPath();

    return (
      <li className={itemClass}>
        <Link className="page-link" to={path}>
          {pageNum}
        </Link>
      </li>
    );
  }
}

PaginationNumItem.propTypes = {
  pageNum: PropTypes.number.isRequired,
  active: PropTypes.bool,
  prefixer: PropTypes.func,
};

PaginationNumItem.defaultProps = {
  active: false,
  prefixer: null,
};

export default PaginationNumItem;
