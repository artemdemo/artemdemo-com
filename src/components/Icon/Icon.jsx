import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';

import 'font-awesome/css/font-awesome.min.css';

const SpanSty = styled.span`
    ${props => props.inText ? 'padding-right: 5px;' : ''}
`;

/**
 * Icon component
 * @param props
 * @link https://fontawesome.com/get-started
 */
class Icon extends React.PureComponent {
    renderIcon() {
        const { name, title } = this.props;

        const iconClass = classnames('fa', {
            [`fa-${name}`]: true,
        });

        return (
            <span
                className={iconClass}
                title={title}
            />
        );
    }

    render() {
        const { name, inText } = this.props;

        if (name === '' || name == null) {
            throw new Error('Icon prop `name` couldn\'t be empty');
        }

        if(!inText) {
            return this.renderIcon();
        }

        return (
            <SpanSty inText={inText}>
                {this.renderIcon()}
            </SpanSty>
        );
    }
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    inText: PropTypes.bool,
};

Icon.defaultProps = {
    title: null,
    inText: false,
};

export default Icon;