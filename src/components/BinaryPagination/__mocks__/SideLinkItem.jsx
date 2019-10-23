import React from 'react';

export const SIDE_ITEM_DIRECTION = {
    'PREV': 'prev',
    'NEXT': 'next',
};

const SideLinkItem = props => (
    <div data-mock='SideLinkItem'>
        {JSON.stringify(props, null, 2)}
    </div>
);

export default SideLinkItem;