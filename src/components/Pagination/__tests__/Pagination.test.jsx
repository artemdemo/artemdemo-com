import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from '../Pagination';

jest.mock('../PaginationNumItem');

describe('Pagination', () => {
    it('default render (empty)', () => {
        const tree = renderer.create(
            <Pagination />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
