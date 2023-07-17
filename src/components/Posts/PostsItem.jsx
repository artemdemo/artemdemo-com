import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import _get from 'lodash/get';
import classnames from 'classnames';
import PostDate from '../PostDate/PostDate';
import { PostThumbnail } from './PostThumbnail';
import * as utils from '../../services/utils';

// Yes, I know, not the best solution.
// The problem is that I need to use here custom service for markdown,
// because `gatsby-transformer-remark` will work only for posts, but _not_ for excerpts.
import './PostsItem.css';

const PostsItem = ({ node }) => {
  if (!node) {
    return null;
  }
  const title = _get(node, 'frontmatter.title') || node.fields.slug;
  const featuredImage = _get(node, 'frontmatter.featuredImage');
  return (
    <div className="post-item">
      <h2>
        <Link to={utils.prefixBlog(node.fields.slug)}>{title}</Link>
      </h2>
      <PostDate>{_get(node, 'frontmatter.date')}</PostDate>
      <div className="post-item-content">
        <div
          className={classnames({
            'post-item-content__thumbnail': featuredImage,
          })}
        >
          <PostThumbnail featuredImage={featuredImage} />
        </div>
        <div
          className={classnames({
            'post-item-content__excerpt': featuredImage,
          })}
        >
          {_get(node, 'excerpt')}
        </div>
      </div>
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
