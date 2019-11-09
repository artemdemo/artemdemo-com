import React from 'react';
import renderer from 'react-test-renderer';
import TagsList from '../TagsList';

jest.mock('gatsby');
jest.mock('../../components/Layout/Layout');

describe('TagsList', () => {
    it('should render empty', () => {
        const tree = renderer.create(
            <TagsList
                data={{}}
                pageContext={{}}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with data', () => {
        const tree = renderer.create(
            <TagsList
                data={{
                    site: {
                        siteMetadata: {
                            title: 'Test title',
                            description: 'Some description',
                        },
                    }
                }}
                pageContext={{
                    tagsMap: {
                        tag1: {
                            name: 'tag1',
                            amount: 10,
                        },
                        tag2: {
                            name: 'tag2',
                            amount: 10,
                        },
                    },
                }}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});