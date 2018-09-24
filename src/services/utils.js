exports.POSTS_PER_PAGE = 2;

exports.prefixBlog = (slug) => {
    const suffix = slug.startsWith('/') ? slug.substr(1) : slug;
    return `/blog/${suffix}`;
};