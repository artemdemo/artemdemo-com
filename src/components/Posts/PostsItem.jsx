import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import _get from 'lodash/get';
import PostDate from '../PostDate/PostDate';
import * as utils from '../../services/utils';
import {renderMd} from '../../services/md';

// Yes, I know, not the best solution.
// The problem is that I need to use here custom service for markdown,
// because `gatsby-transformer-remark` will work only for posts, but _not_ for excerpts.
import './PostsItem.css';

class PostsItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      content: null,
    };
  }

  componentDidMount() {
    const excerpt = _get(this.props, 'node.excerpt');

    if (excerpt) {
      renderMd(excerpt)
        .then(content => this.setState({content}));
    }
  }

  render() {
    const {node} = this.props;
    if (!node) {
      return null;
    }
    const title = _get(node, 'frontmatter.title') || node.fields.slug;
    return (
      <div className='post-item'>
        <h2>
          <Link to={utils.prefixBlog(node.fields.slug)}>
            {title}
          </Link>
        </h2>
        <PostDate>
          {node.frontmatter.date}
        </PostDate>
        <p dangerouslySetInnerHTML={{__html: this.state.content}}/>
      </div>
    );
  }
}

PostsItem.propTypes = {
  node: PropTypes.shape({}),
};

PostsItem.defaultProps = {
  node: null,
};

export default PostsItem;
