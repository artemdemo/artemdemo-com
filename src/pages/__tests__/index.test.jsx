import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../index';

jest.mock('../../components/Container/Container');
jest.mock('../../components/Posts/Posts');
jest.mock('../../components/Pagination/Pagination');

describe('Index', () => {
    it('should render', () => {
        const tree = renderer.create(
            <Index
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