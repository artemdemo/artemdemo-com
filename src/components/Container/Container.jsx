import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

const Container = ({ children, className }) => (
    <div className={classnames(className, 'container')}>
        {children}
    </div>
);

export default styled(Container)`
    max-width: 900px;
`;