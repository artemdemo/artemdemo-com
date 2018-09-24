export const prefixBlog = (slug) => {
    const suffix = slug.startsWith('/') ? slug.substr(1) : slug;
    return `/blog/${suffix}`;
};