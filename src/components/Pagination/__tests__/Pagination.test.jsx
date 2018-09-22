import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from '../Pagination';

jest.mock('gatsby');

describe('Pagination', () => {
    it('should render empty', () => {
        const tree = renderer.create(
            <Pagination />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with data', () => {
        const tree = renderer.create(
            <Pagination
                previous={{
                    slug: '/prev',
                    title: 'Prev title',
                }}
                next={{
                    slug: '/next',
                    title: 'Next title',
                }}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});