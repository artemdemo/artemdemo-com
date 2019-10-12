import React from 'react';
import renderer from 'react-test-renderer';
import Page404 from '../404';

jest.mock('../../components/Layout/Layout');
jest.mock('../../components/Container/Container');

describe('404', () => {
    it('should render', () => {
        const tree = renderer.create(
            <Page404 />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
