import * as utils from '../utils';

describe('utils', () => {
  it('prefixBlog', () => {
    const prefix = '/blog';
    expect(utils.prefixBlog('test')).toBe(`${prefix}/test`);
    expect(utils.prefixBlog('/second')).toBe(`${prefix}/second`);
    expect(utils.prefixBlog('/')).toBe(prefix);
    expect(utils.prefixBlog('')).toBe(prefix);
    expect(utils.prefixBlog()).toBe(prefix);
  });
});
