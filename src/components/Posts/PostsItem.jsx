import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import _get from 'lodash/get';

const PostsItem = (props) => {
    const { node } = props;
    if (!node) {
        return null;
    }
    const title = _get(node, 'frontmatter.title') || node.fields.slug;
    return (
        <div>
            <h3>
                <Link to={`/blog/${node.fields.slug}`}>
                    {title}
                </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{__html: node.excerpt}}/>
        </div>
    );
};

PostsItem.propTypes = {
    node: PropTypes.shape({}),
};

PostsItem.defaultProps = {
    node: null,
};

export default PostsItem;