import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { secondaryText } from '../../services/styles';
import { normalizeTag } from '../../services/utils';

const PostTagsSty = styled.div`
    ${secondaryText}
`;

const PostTagsItemSty = styled.div`
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
    if (tags.length === 0) {
        return null;
    }
    return (
        <PostTagsSty>
            Tags:&nbsp;
            {tags.map(tag => (
                <PostTagsItemSty
                    key={`post-tags-${normalizeTag(tag)}`}
                >
                    <Link to={`/tags/${normalizeTag(tag)}`}>
                        {tag}
                    </Link>
                </PostTagsItemSty>
            ))}
        </PostTagsSty>
    );
};

PostTags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string),
};

PostTags.defaultProps = {
    tags: [],
};

export default PostTags;