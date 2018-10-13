const _isString = require('lodash/isString');

exports.POSTS_PER_PAGE = 1;

const prefix = (prefix, slug) => {
    const suffix = _isString(slug) && slug.startsWith('/') ? slug.substr(1) : slug;
    if (suffix === '' || suffix == null) {
        return prefix
    }
    return `${prefix}/${suffix}`;
};

exports.prefixBlog = (slug) => {
    return prefix('/blog', slug);
};

exports.prefixTag = (tag, slug) => {
    return prefix(`/tags`, prefix(tag, slug));
};