import React from 'react';
import _omit from 'lodash/omit';

export const Link = props => (
    <div data-mock='Link'>
        {JSON.stringify(_omit(props, 'children'), null, 2)}
        {props.children}
    </div>
);

export const graphql = function(strings) {
    return strings.join(' ');
};