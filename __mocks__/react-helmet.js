import React from 'react';

const Helmet = props => (
    <div data-mock='Helmet'>
        htmlAttributes: {JSON.stringify(props.htmlAttributes)}
        meta: {JSON.stringify(props.meta)}
        title: {props.title}
    </div>
);

export default Helmet;