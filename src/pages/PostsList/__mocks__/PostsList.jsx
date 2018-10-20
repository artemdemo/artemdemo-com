import React from 'react';

class PostsList extends React.PureComponent {
    render() {
        return (
            <div data-mock='PostsList'>
                {this.props.children}
            </div>
        );
    }
}

export default PostsList;