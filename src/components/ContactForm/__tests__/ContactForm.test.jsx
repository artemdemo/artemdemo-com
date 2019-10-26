import React from 'react';
import renderer from 'react-test-renderer';
import ContactForm from '../ContactForm';

jest.mock('../../Icon/Icon.jsx');

describe('ContactForm', () => {
    it('should render', () => {
        const tree = renderer.create(
            <ContactForm />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should set formLoaded to "true"', () => {
        const tree = renderer.create(
            <ContactForm />
        );

        tree.root.instance.iframeLoaded();

        expect(tree.toJSON()).toMatchSnapshot();
    });
});
