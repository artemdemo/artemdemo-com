import React from 'react';

const Posts = props => (
    <div data-mock='Posts'>
        {JSON.stringify(props, null, 2)}
    </div>
);

export default Posts;