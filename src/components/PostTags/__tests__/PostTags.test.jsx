import React from 'react';
import renderer from 'react-test-renderer';
import PostTags from '../PostTags';

jest.mock('../../SecondaryText/SecondaryText');

describe('PostTags', () => {
    it('should render without tags', () => {
        const tree = renderer.create(
            <PostTags />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with tags', () => {
        const tree = renderer.create(
            <PostTags tags={['one', 'two']} />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});