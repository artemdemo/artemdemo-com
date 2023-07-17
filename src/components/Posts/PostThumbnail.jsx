import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './PostThumbnail.css';

export const PostThumbnail = ({ featuredImage }) => {
  if (featuredImage) {
    return (
      <GatsbyImage
        className="post-thumbnail"
        image={getImage(featuredImage)}
        alt=""
      />
    );
  }
  return null;
};

PostThumbnail.propTypes = {
  featuredImage: PropTypes.shape({}),
};
