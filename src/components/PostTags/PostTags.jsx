import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import SecondaryText from '../SecondaryText/SecondaryText';
import { normalizeTag } from '../../services/utils';
import './PostTags.css';

const PostTags = (props) => {
  const { tags } = props;
  if (!tags || tags.length === 0) {
    return null;
  }
  return (
    <SecondaryText>
      Tags:&nbsp;
      {tags.map((tag) => (
        <Link
          className="post-tags-item"
          to={`/tags/${normalizeTag(tag)}`}
          key={`post-tags-${normalizeTag(tag)}`}
        >
          {tag}
        </Link>
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
