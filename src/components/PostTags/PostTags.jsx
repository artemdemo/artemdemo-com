import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import SecondaryText from '../SecondaryText/SecondaryText';
import { normalizeTag } from '../../services/utils';

const PostTagsItemSty = styled(Link)`
    display: inline-block;
    margin-right: 5px;
    
    &::after {
        content: ',';
    }
    &:last-of-type::after {
        content: '';
    }
`;

const PostTags = (props) => {
    const { tags } = props;
    if (!tags || tags.length === 0) {
        return null;
    }
    return (
        <SecondaryText>
            Tags:&nbsp;
            {tags.map(tag => (
                <PostTagsItemSty
                    to={`/tags/${normalizeTag(tag)}`}
                    key={`post-tags-${normalizeTag(tag)}`}
                >
                    {tag}
                </PostTagsItemSty>
            ))}
        </SecondaryText>
    );
};

PostTags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string),
};

PostTags.defaultProps = {
    tags: [],
};

export default PostTags;
