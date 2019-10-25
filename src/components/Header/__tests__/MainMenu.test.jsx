import React from 'react';
import renderer from 'react-test-renderer';
import MainMenu from '../MainMenu';

describe('MainMenu', () => {
    it('should render without location', () => {
        const tree = renderer.create(
            <MainMenu />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with pathname = `/`', () => {
        const tree = renderer.create(
            <MainMenu
                location={{pathname: '/'}}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with pathname = `/blog`', () => {
        const tree = renderer.create(
            <MainMenu
                location={{pathname: '/blog'}}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with pathname = `/about`', () => {
        const tree = renderer.create(
            <MainMenu
                location={{pathname: '/about'}}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with pathname = `/contact`', () => {
        const tree = renderer.create(
            <MainMenu
                location={{pathname: '/contact'}}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
