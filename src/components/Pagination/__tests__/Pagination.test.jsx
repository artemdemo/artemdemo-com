import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from '../Pagination';

jest.mock('../PaginationNumItem');
jest.mock('../../../services/utils');

const utilsMock = require('../../../services/utils');

describe('Pagination', () => {
    beforeAll(() => {
        utilsMock.getPostsPerPageAmount.mockImplementation(() => 5);
    });

    it('default render (empty)', () => {
        const tree = renderer.create(
            <Pagination />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render 1 page out of 2', () => {
        const tree = renderer.create(
            <Pagination
                skip={0}
                limit={5}
                totalPosts={10}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render 2 page out of 2', () => {
        const tree = renderer.create(
            <Pagination
                skip={5}
                limit={5}
                totalPosts={10}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
