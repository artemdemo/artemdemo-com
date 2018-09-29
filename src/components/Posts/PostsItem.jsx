import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import _get from 'lodash/get';
import * as utils from '../../services/utils';

const PostsItem = (props) => {
    const { node } = props;
    if (!node) {
        return null;
    }
    const title = _get(node, 'frontmatter.title') || node.fields.slug;
    return (
        <div>
            <h2>
                <Link to={utils.prefixBlog(node.fields.slug)}>
                    {title}
                </Link>
            </h2>
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