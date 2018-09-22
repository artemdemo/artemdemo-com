import React from 'react';

export const Link = props => (
    <div data-mock='Link'>
        {props.children}
    </div>
);

export const graphql = function(strings) {
    return strings.join(' ');
};