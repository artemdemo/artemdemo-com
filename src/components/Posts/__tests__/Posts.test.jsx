import React from 'react';
import renderer from 'react-test-renderer';
import Posts from '../Posts';

jest.mock('../PostsItem');

describe('Posts', () => {
    it('should render empty', () => {
        const tree = renderer.create(
            <Posts />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with posts', () => {
        const tree = renderer.create(
            <Posts
                list={[
                    {
                        node: {
                            fields: {slug: '/first'},
                        },
                    },
                    {
                        node: {
                            fields: {slug: '/second'},
                        },
                    }
                ]}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});