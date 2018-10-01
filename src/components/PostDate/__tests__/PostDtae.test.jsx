import React from 'react';
import renderer from 'react-test-renderer';
import PostDate from '../PostDate';

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