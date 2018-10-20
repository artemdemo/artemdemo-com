import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../index';

jest.mock('../PostsList/PostsList');

describe('Index', () => {
    it('should render', () => {
        const tree = renderer.create(
            <Index />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});