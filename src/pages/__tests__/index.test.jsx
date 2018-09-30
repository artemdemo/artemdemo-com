import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../index';

jest.mock('../../templates/PostsList');

describe('Index', () => {
    it('should render', () => {
        const tree = renderer.create(
            <Index />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});