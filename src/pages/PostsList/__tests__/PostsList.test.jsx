import React from 'react';
import renderer from 'react-test-renderer';
import PostsList from '../PostsList';

jest.mock('../../../components/Layout/Layout');
jest.mock('../../../components/Posts/Posts');
jest.mock('../../../components/Pagination/Pagination');

describe('PostsList', () => {
    it('should render', () => {
        const tree = renderer.create(
            <PostsList
                data={{
                    site: {
                        siteMetadata: {
                            title: 'Some title',
                            description: 'Some description',
                        },
                    },
                    allMarkdownRemark: {
                        edges: [
                            {
                                frontmatter: {
                                    title: 'Some title',
                                    date: '10 May, 2018',
                                },
                                fields: {
                                    slug: '/first',
                                },
                                excerpt: 'Excerpt text',
                            }
                        ],
                    },
                }}
                location={{}}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});