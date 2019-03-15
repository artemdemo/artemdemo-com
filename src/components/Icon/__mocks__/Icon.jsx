import React from 'react';

const Icon = props => (
    <div data-mock='Icon'>
        name: {props.name}
        title: {props.title}
        className: {props.className}
        inText: {props.inText ? 'true' : 'false'}
    </div>
);

export default Icon;
