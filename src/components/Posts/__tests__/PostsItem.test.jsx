import React from 'react';
import renderer from 'react-test-renderer';
import PostsItem from '../PostsItem';

jest.mock('gatsby');
jest.mock('../../../services/md');
jest.mock('../../PostDate/PostDate');

describe('PostsItem', () => {
    it('should render empty', () => {
        const tree = renderer.create(
            <PostsItem />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with node', () => {
        const tree = renderer.create(
            <PostsItem
                node={{
                    frontmatter: {
                        title: 'Some title',
                        date: '10 May, 2018',
                    },
                    fields: {
                        slug: '/first',
                    },
                    excerpt: 'Excerpt text',
                }}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with slug when title not provided', () => {
        const tree = renderer.create(
            <PostsItem
                node={{
                    frontmatter: {
                        date: '10 May, 2018',
                    },
                    fields: {
                        slug: '/first',
                    },
                    excerpt: 'Excerpt text',
                }}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
