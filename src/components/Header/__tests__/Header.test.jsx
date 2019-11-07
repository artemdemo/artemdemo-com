import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';

jest.mock('../MainMenu');
jest.mock('../../Container/Container');

describe('Header', () => {
    it('should render empty', () => {
        const tree = renderer.create(
            <Header />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with title', () => {
        const tree = renderer.create(
            <Header
                title='Test title'
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
