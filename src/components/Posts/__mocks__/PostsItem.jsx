import React from 'react';

const PostsItem = props => (
    <div data-mock='PostsItem'>
        {JSON.stringify(props, null, 2)}
    </div>
);

export default PostsItem;