import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import _get from 'lodash/get';
import styled from 'styled-components';
import * as utils from '../../services/utils';

const PostItemSty = styled.div`
    margin-bottom: 30px;
`;

const PostsItem = (props) => {
    const { node } = props;
    if (!node) {
        return null;
    }
    const title = _get(node, 'frontmatter.title') || node.fields.slug;
    return (
        <PostItemSty>
            <h2>
                <Link to={utils.prefixBlog(node.fields.slug)}>
                    {title}
                </Link>
            </h2>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{__html: node.excerpt}}/>
        </PostItemSty>
    );
};

PostsItem.propTypes = {
    node: PropTypes.shape({}),
};

PostsItem.defaultProps = {
    node: null,
};

export default PostsItem;