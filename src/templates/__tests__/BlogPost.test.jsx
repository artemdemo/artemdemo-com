import React from 'react';
import renderer from 'react-test-renderer';
import BlogPost from '../BlogPost';

jest.mock('gatsby');
jest.mock('../../components/Layout/Layout');
jest.mock('../../components/BinaryPagination/BinaryPagination');
jest.mock('../../components/PostDate/PostDate');
jest.mock('../../components/PostTags/PostTags');

describe('BlogPost', () => {
    it('should render', () => {
        const tree = renderer.create(
            <BlogPost
                data={{
                    markdownRemark: {
                        frontmatter: {
                            title: 'FrontMatter title',
                            date: '23 May, 2018'
                        },
                        excerpt: 'Post excerpt',
                        html: 'HTML content',
                    },
                    site: {
                        siteMetadata: { title: 'Site title' },
                    },
                }}
                location={{}}
                pageContext={{
                    previous: {
                        fields: { slug: '/prev' },
                        frontmatter: { title: 'Prev title' },
                    },
                    next: {
                        fields: { slug: '/next' },
                        frontmatter: { title: 'Next title' },
                    },
                }}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});