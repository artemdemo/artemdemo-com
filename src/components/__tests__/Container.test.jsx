import React from 'react';
import renderer from 'react-test-renderer';
import Container from '../Container';

describe('Container', () => {
    it('should render empty', () => {
        const tree = renderer.create(
            <Container />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with child', () => {
        const tree = renderer.create(
            <Container>
                <div>Some child</div>
            </Container>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});