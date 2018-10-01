import React from 'react';
import renderer from 'react-test-renderer';
import About from '../about';

jest.mock('../../components/Layout/Layout');

describe('About', () => {
    it('should render', () => {
        const tree = renderer.create(
            <About
                data={{
                    site: {
                        siteMetadata: {
                            title: 'Some title',
                            description: 'Some description'
                        },
                    },
                }}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});