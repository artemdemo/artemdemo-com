import React from 'react';
import renderer from 'react-test-renderer';
import PaginationNumItem from '../PaginationNumItem';

jest.mock('gatsby');

describe('PaginationNumItem', () => {
    it('should render with pageNum', () => {
        const tree = renderer.create(
            <PaginationNumItem
                pageNum={1}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with pageNum > 1', () => {
        const tree = renderer.create(
            <PaginationNumItem
                pageNum={2}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with pageNum > 1 and active', () => {
        const tree = renderer.create(
            <PaginationNumItem
                pageNum={2}
                active
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with prefix', () => {
        const tree = renderer.create(
            <PaginationNumItem
                pageNum={2}
                prefixer={path => `test-path${path}`}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});