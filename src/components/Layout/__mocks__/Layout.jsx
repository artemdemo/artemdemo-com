import React from 'react';

const Layout = props => (
    <div
        data-mock='Layout'
        data-title={props.title}
        data-metaTitle={props.metaTitle}
        data-description={props.description}
    >
        {props.children}
    </div>
);

export default Layout;