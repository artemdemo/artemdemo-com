import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import Img from 'gatsby-image';
import './PostThumbnail.css';

export const PostThumbnail = ({ featuredImage }) => {
  const featuredImgFluid = _get(featuredImage, 'childImageSharp.fluid');
  if (featuredImgFluid) {
    return (
      <Img className='post-thumbnail' fluid={featuredImgFluid} />
    );
  }
  return null;
};

PostThumbnail.propTypes = {
  featuredImage: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({}),
    }),
  }),
};
