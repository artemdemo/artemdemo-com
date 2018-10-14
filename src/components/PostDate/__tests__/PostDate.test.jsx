import React from 'react';
import renderer from 'react-test-renderer';
import PostDate from '../PostDate';

jest.mock('../../SecondaryText/SecondaryText');

describe('PostDate', () => {
    it('should render', () => {
        const tree = renderer.create(
            <PostDate>
                29 September, 2018
            </PostDate>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});