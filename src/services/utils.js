const _isString = require('lodash/isString');

exports.POSTS_PER_PAGE = 1;

exports.prefixBlog = (slug) => {
    const prefix = '/blog';
    const suffix = _isString(slug) && slug.startsWith('/') ? slug.substr(1) : slug;
    if (suffix === '' || suffix == null) {
        return prefix
    }
    return `${prefix}/${suffix}`;
};