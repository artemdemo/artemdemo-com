import React from 'react';
import renderer from 'react-test-renderer';
import ContactForm from '../ContactForm';

describe('ContactForm', () => {
    it('should render', () => {
        const tree = renderer.create(
            <ContactForm />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});