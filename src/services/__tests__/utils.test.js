import * as utils from '../utils';

describe('utils', () => {
    it('prefixBlog', () => {
        expect(utils.prefixBlog('test')).toBe(`/blog/test`);
        expect(utils.prefixBlog('/second')).toBe(`/blog/second`);
    });
});