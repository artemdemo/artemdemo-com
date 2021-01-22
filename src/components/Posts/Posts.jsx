import React from 'react';
import PropTypes from 'prop-types';
import PostsItem from './PostsItem';

const Posts = (props) => {
  const {list} = props;

  return (
    <React.Fragment>
      {list.map((post) => {
        const {node} = post;
        return (
          <PostsItem
            node={node}
            key={node.fields.slug}
          />
        )
      })}
    </React.Fragment>
  );
};

Posts.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})),
};

Posts.defaultProps = {
  list: [],
};

export default Posts;
