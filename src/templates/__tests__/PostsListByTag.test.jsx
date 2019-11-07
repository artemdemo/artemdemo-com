import React from 'react';
import renderer from 'react-test-renderer';
import PostsListByTag from '../PostsListByTag';

jest.mock('../../components/Posts/Posts');
jest.mock('../../components/Pagination/Pagination');
jest.mock('../../components/Layout/Layout');
jest.mock('../../components/Container/Container');

describe('PostsListByTag', () => {
    it('default render',() => {
        const tree = renderer.create(
            <PostsListByTag />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with tagName',() => {
        const tree = renderer.create(
            <PostsListByTag
                pageContext={{
                    tagName: 'Tag name',
                }}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});