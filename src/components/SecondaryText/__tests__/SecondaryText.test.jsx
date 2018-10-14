import React from 'react';
import renderer from 'react-test-renderer';
import SecondaryText from '../SecondaryText';

describe('SecondaryText', () => {
    it('should render', () => {
        const tree = renderer.create(
            <SecondaryText>
                Some text
            </SecondaryText>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});