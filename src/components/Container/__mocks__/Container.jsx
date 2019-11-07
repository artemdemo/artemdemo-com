import React from 'react';
import _omit from 'lodash/omit'

const Container = props => (
    <div data-mock='Container'>
        {JSON.stringify(_omit(props, 'children'), null, 2)}
        {props.children}
    </div>
);

export default Container;