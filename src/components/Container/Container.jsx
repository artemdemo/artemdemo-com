import React from 'react';
import classnames from 'classnames';
import './Container.css';

const Container = ({ children, className }) => (
  <div className={classnames(className, 'container container__')}>
    {children}
  </div>
);

export default Container;
