import React from 'react';
import renderer from 'react-test-renderer';
import Contact from '../contact';

jest.mock('../../components/Layout/Layout');
jest.mock('../../components/ContactForm/ContactForm');

describe('Contact', () => {
    it('should render', () => {
        const tree = renderer.create(
            <Contact
                data={{
                    site: {
                        siteMetadata: {
                            title: 'Some title',
                            description: 'Some description',
                        },
                    },
                }}
                location={{}}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});