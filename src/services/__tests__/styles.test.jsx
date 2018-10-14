import React from 'react';
import renderer from 'react-test-renderer';
import * as styles from '../styles';

describe('styles', () => {
    it('resetButton', () => {
        const tree = renderer.create(
            <div>
                {styles.resetButton}
            </div>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('resetUl', () => {
        const tree = renderer.create(
            <div>
                {styles.resetUl}
            </div>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('clearFix', () => {
        const tree = renderer.create(
            <div>
                {styles.clearFix}
            </div>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});