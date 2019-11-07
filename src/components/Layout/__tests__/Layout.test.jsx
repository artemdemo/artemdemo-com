import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '../Layout';

jest.mock('react-helmet');
jest.mock('../../../services/package');
jest.mock('../../Icon/Icon');
jest.mock('../../Header/Header');
jest.mock('../../Container/Container');

describe('Layout', () => {
    it('should render without children', () => {
        const tree = renderer.create(
            <Layout
                metaTitle='Meta title'
                title='Regular title'
                description='Site description'
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with children', () => {
        const tree = renderer.create(
            <Layout
                metaTitle='Meta title'
                title='Regular title'
                description='Site description'
            >
                <div>Some child</div>
            </Layout>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with fullTitle', () => {
        const tree = renderer.create(
            <Layout
                metaTitle='Meta title'
                title='Regular title'
                fullTitle='Full title'
                description='Site description'
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
