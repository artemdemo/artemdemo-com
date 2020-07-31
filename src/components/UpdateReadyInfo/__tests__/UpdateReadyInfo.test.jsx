import React from 'react';
import renderer from 'react-test-renderer';
import UpdateReadyInfo from '../UpdateReadyInfo';

describe('UpdateReadyInfo', () => {
    it('should render default', () => {
        const tree = renderer.create(
            <UpdateReadyInfo />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render update is ready', () => {
        const tree = renderer.create(
            <UpdateReadyInfo />
        );

        tree.root.instance.setState({
            updateIsReady: true,
        });

        expect(tree.toJSON()).toMatchSnapshot();
    });
});
