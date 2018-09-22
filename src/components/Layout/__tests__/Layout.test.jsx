import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '../Layout';

jest.mock('react-helmet');

describe('Layout', () => {
    it('should render empty', () => {
        const tree = renderer.create(
            <Layout
                metaTitle='Meta title'
                title='Regular title'
                description='Site description'
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with location', () => {
        const tree = renderer.create(
            <Layout
                metaTitle='Meta title'
                title='Regular title'
                description='Site description'
                location={{
                    pathname: '/'
                }}
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
});