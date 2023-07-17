import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import 'font-awesome/css/font-awesome.min.css';
import './Icon.css';

/**
 * Icon component
 * @param props
 * @link https://fontawesome.com/get-started
 */
class Icon extends React.PureComponent {
  renderIcon() {
    const { name, title, className } = this.props;

    const iconClass = classnames(
      'fa',
      {
        [`fa-${name}`]: true,
      },
      className,
    );

    return <span className={iconClass} title={title} />;
  }

  render() {
    const { name, inText } = this.props;

    if (name === '' || name == null) {
      throw new Error("Icon prop `name` couldn't be empty");
    }

    if (!inText) {
      return this.renderIcon();
    }

    return (
      <span
        className={classnames({
          'icon_in-text': inText,
        })}
      >
        {this.renderIcon()}
      </span>
    );
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  inText: PropTypes.bool,
};

Icon.defaultProps = {
  title: null,
  className: null,
  inText: false,
};

export default Icon;
