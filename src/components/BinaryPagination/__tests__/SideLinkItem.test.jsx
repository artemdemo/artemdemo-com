import React from 'react';
import renderer from 'react-test-renderer';
import SideLinkItem, { SIDE_ITEM_DIRECTION } from '../SideLinkItem';

jest.mock('gatsby');

describe('SideLinkItem', () => {
    it('should render "next"', () => {
        const tree = renderer.create(
            <SideLinkItem
                direction={SIDE_ITEM_DIRECTION.NEXT}
                to='path/to/next'
                title='Next title'
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render "prev"', () => {
        const tree = renderer.create(
            <SideLinkItem
                direction={SIDE_ITEM_DIRECTION.PREV}
                to='path/to/prev'
                title='Prev title'
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
