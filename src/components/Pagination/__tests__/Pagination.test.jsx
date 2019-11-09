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

    it('should render 1 page out of 3', () => {
        const tree = renderer.create(
            <Pagination
                skip={0}
                limit={5}
                totalPosts={15}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render 3 page out of 3', () => {
        const tree = renderer.create(
            <Pagination
                skip={10}
                limit={5}
                totalPosts={15}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with prefix', () => {
        const tree = renderer.create(
            <Pagination
                skip={0}
                limit={5}
                totalPosts={10}
                prefixer={path => `test-path${path}`}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
